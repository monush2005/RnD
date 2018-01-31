(function(app) {
    'use strict';
    app.component('profileDetailsComponent', {
        templateUrl: 'resources/app/components/profileDetailsComponent/profileDetailsComponent.html',
        controller: profileDetailsComponentController,
        controllerAs: 'vm',
        bindings: {

        }
    })

    profileDetailsComponentController.$inject = ['$localStorage', '$mdDialog', 'customDialogService', 'customToastService', 'usersService'];

    function profileDetailsComponentController($localStorage, $mdDialog, customDialogService, customToastService, usersService) {
        var vm = this;
        vm.editMobileNumber = editMobileNumber;
        vm.editSignature = editSignature;
        vm.changePassword = changePassword;

        vm.$onInit = function() {
            vm.mno = $localStorage.userInfo.mno;
            vm.userId = $localStorage.userInfo.userId;
            vm.signature = $localStorage.userInfo.signature;
            vm.userApps = _.map($localStorage.userApps);
            vm.isGuest = $localStorage.userRole.logicalName.toLowerCase() == 'guest';
        }

        function editMobileNumber() {
            customDialogService.showComponent({
                component: "mobEmailEditComponent",
                clickOutsideToClose: true,
                bindings: {}
            }).then(function(mobile) {
                $localStorage.userInfo.mno = mobile;
                vm.mno = mobile;
                customToastService.freeText("Mobile Number has been successfully updated.");
            });
        }

        function editSignature(signature) {
            customDialogService.showComponent({
                component: 'promptComponent',
                bindings: {
                    title: 'Signature',
                    ok: 'Save',
                    cancel: 'Cancel',
                    initialValue: vm.signature,
                    name: 'Signature',
                    dontSaveIfSame: true,
                    multiline: true,
                    maxLength: 100,
                    onSubmit: (newSignature) => {
                        return usersService.updateSign(newSignature);
                    }
                }
            }).then((newSignature) => {
                vm.signature = newSignature;
                $localStorage.userInfo.signature = newSignature;
                customToastService.freeText('Signature has been successfully updated.');
            });
        }

        function changePassword() {
            customDialogService.showComponent({
                component: "changePasswordComponent",
                clickOutsideToClose: true
            }).then(function(mobile) {
                customToastService.freeText("Password successfully changed.");
            });
        }
    }
})(angular.module('selfcare'));
