(function(app) {
    'use strict';
    app.component('changePasswordComponent', {
        templateUrl: 'resources/app/components/_commonComponents/changePasswordComponent/changePasswordComponent.html',
        controller: changePasswordComponentController,
        controllerAs: 'vm',
        bindings: {
            oldPassword: '<',
            forFirsTime: '<',
            forExpired: '<'
        }
    })

    changePasswordComponentController.$inject = ['$localStorage', 'usersService', '$mdDialog', '$interval', '$state', 'customToastService'];

    function changePasswordComponentController($localStorage, usersService, $mdDialog, $interval, $state, customToastService) {
        var vm = this;
        vm.cancel = cancel;
        vm.changePassword = changePassword;
        vm.$onInit = $onInit;
        vm.$onDestroy = $onDestroy;

        function $onInit() {
            if (vm.forFirsTime || vm.forExpired) {
                vm.timeLeft = 120;
                vm.intervalTimer = $interval(() => {
                    vm.timeLeft--;
                    if (vm.timeLeft == 0) {
                        $mdDialog.cancel();
                        $state.reload();
                    }
                }, 1000, 120)
            }
        }

        function changePassword() {
            vm.changePwdPromise = usersService.changePassword(vm.oldPassword, vm.password);
            vm.changePwdPromise.then(() => {
                $mdDialog.hide(vm.password);
            })
        }

        function cancel() {
            $mdDialog.cancel();
        }

        function $onDestroy(){
            $interval.cancel(vm.intervalTimer);
        }
    }
})(angular.module('selfcare'));
