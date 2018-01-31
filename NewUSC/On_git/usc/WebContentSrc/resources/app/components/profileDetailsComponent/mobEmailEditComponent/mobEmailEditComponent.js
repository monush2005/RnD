(function(app) {
    'use strict';
    app.component('mobEmailEditComponent', {
        templateUrl: 'resources/app/components/profileDetailsComponent/mobEmailEditComponent/mobEmailEditComponent.html',
        controller: mobEmailEditComponentController,
        controllerAs: 'vm',
        bindings: {

        }
    })
    mobEmailEditComponentController.$inject = ['$localStorage', 'usersService', '$mdDialog', '$timeout','$interval', 'customToastService'];

    function mobEmailEditComponentController($localStorage, usersService, $mdDialog, $timeout, $interval, customToastService) {
        var vm = this;
        vm.$onDestroy = $onDestroy;
        vm.cancel = cancel;
        vm.submit = submit;
        vm.requestOTP = requestOTP;

        vm.$onInit = function() {
            vm.mobilePattern = envVars.mobilePattern;
        }

        function requestOTP() {
        	var type="modify";
            vm.otpPromise = usersService.mobOtpInitiate(vm.mno,type);
            vm.otpPromise.then(() => {
                customToastService.freeText('OTP successfully sent to ' + vm.mno);
                vm.canRequestOTP = false;
                $timeout.cancel(vm.otpTimeout);
                vm.otpTimeout = $timeout(() => {
                    vm.canRequestOTP = true;
                }, 1000 * 60);

                vm.timeLeft = 60;

                $interval.cancel(vm.intervalTimer);
                vm.intervalTimer = $interval(() => {
                    vm.timeLeft--;
                }, 1000, 60)
            })
        }

        function submit() {
            vm.submitPromise = usersService.saveUserMobile(vm.mno, vm.otp);
            vm.submitPromise.then((response) => {
                $mdDialog.hide(vm.mno);
            });
        }

        function cancel() {
            $mdDialog.cancel();
        }

        function $onDestroy() {
            $interval.cancel(vm.intervalTimer);
            $timeout.cancel(vm.otpTimeout)
        }

    }
})(angular.module('selfcare'));
