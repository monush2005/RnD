(function(app) {
    'use strict';
    app.component('logoChangeComponent', {
        templateUrl: 'resources/app/components/appProfileComponent/logoChangeComponent/logoChangeComponent.html',
        controller: logoChangeComponentController,
        controllerAs: 'vm',
        bindings: {
            onSubmit: '&',
            app: '<'
        }
    })

    logoChangeComponentController.$inject = ['$localStorage', '$mdDialog', 'helperService'];

    function logoChangeComponentController($localStorage, $mdDialog, helperService) {
        var vm = this;
        vm.cancelAction = cancelAction;
        vm.submitAction = submitAction;
        vm.downloadLogo = downloadLogo;
        vm.validateImage = validateImage;

        vm.$onInit = function() {
            setFileRequriements();
        }

        function downloadLogo() {
            vm.downloadPromise = helperService.downloadFileFromURL(vm.app.image);
            vm.downloadPromise.then(() => {
                vm.showUploader = true;
            })
        }

        function submitAction() {
            vm.submitPromise = vm.onSubmit()(vm.logo).then(() => {
                $mdDialog.hide();
            })
        }

        function setFileRequriements() {
            vm.imageWidth = 180;
            vm.imageHeight = 180;
            vm.allowedFileExtns = ['png', 'jpg', 'jpeg'];
            vm.maxFileSize = 10;
        }

        function cancelAction() {
            $mdDialog.cancel();
        }

        function validateImage() {
            let isValidExtn = helperService.checkFileExtentions(vm.logo, vm.allowedFileExtns);
            vm.logoChangeForm.logo.$setValidity('notImage', isValidExtn);
            if (isValidExtn) {
                helperService.checkImageDimensionsAsync(vm.logo, vm.imageHeight, vm.imageWidth).then((isValid) => {
                    vm.logoChangeForm.logo.$setValidity('dimensions', isValid);
                })
                vm.logoChangeForm.logo.$setValidity('size', vm.logo.size <= (vm.maxFileSize * 1024));
            }
        }
    }
})(angular.module('selfcare'));