(function(app) {
    'use strict';
    app.component('forgotPasswordComponent', {
        templateUrl: 'resources/app/components/loginComponent/forgotPasswordComponent/forgotPasswordComponent.html',
        controller: forgotPasswordComponentController,
        controllerAs: 'vm',
        bindings: {
            userId: '<'
        }
    })

    forgotPasswordComponentController.$inject = ['$localStorage', '$mdDialog', '$timeout', '$interval', '$state', 'customToastService', 'usersService'];

    function forgotPasswordComponentController($localStorage, $mdDialog, $timeout, $interval, $state, customToastService, usersService) {
        var vm = this;
        vm.cancel = cancel;
        vm.$onInit = $onInit;
        vm.$onDestroy = $onDestroy;
        vm.requestOTP = requestOTP;
        vm.changePassword = changePassword;

        function $onInit() {

        }

        function requestOTP() {
        	var type="";
            vm.otpPromise = usersService.emailOtpInitiate(vm.userId,type);

            vm.otpPromise.then(() => {
                customToastService.freeText(`OTP successfully sent to ${vm.userId}`);
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

        function changePassword() {
            vm.changePwdPromise = usersService.changePasswordByOTP({
                newPassword: vm.password,
                otp: vm.otp,
                userId: vm.userId
            })

            vm.changePwdPromise.then(() => {
                $mdDialog.hide(vm.userId);
                customToastService.freeText(`Password has been successfully changed! Please login with new password.`);
            }).catch((data) => {
                if (data.rc == 'SAO') {
                    vm.otp = '';
                    vm.password = '';
                    vm.confirmPassword = '';
                    vm.forgotPasswordForm.confirmPassword.$setUntouched();
                    vm.forgotPasswordForm.password.$setUntouched();
                    vm.forgotPasswordForm.otp.$setUntouched();
                    vm.canRequestOTP=true;
                    vm.otpPromise=null;
                }
            })
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