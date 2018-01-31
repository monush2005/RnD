(function(app) {
    'use strict';
    app.component('uploadAttScreenComponent', {
        templateUrl: 'resources/app/components/attentionScreenComponents/uploadAttScreenComponent/uploadAttScreenComponent.html',
        controller: uploadAttScreenComponentController,
        controllerAs: 'vm',
        bindings: {

        }        
    })

    uploadAttScreenComponentController.$inject = ['$localStorage', 'helperService', 'attentionScreenService', 'customToastService', '$state'];

    function uploadAttScreenComponentController($localStorage, helperService, attentionScreenService, customToastService, $state) {
        var vm = this;
        vm.validateImage = validateImage;
        vm.upload = upload;
        vm.urlPattern = envVars.urlPattern;
        vm.$onInit = function(){
            setFileRequriements();
            vm.allApps = _.map($localStorage.userApps);
        }

        function setFileRequriements() {
            vm.imageDimensions = {
                minHeight: 300,
                maxHeight: 400,
                minWidth: 900,
                maxWidth: 1200
            }
            vm.allowedFileExtns = ['png', 'jpg', 'jpeg'];
            vm.maxFileSize = 300;
        }

        function validateImage() {
            let isValidExtn = helperService.checkFileExtentions(vm.image, vm.allowedFileExtns);
            vm.uploadForm.image.$setValidity('notImage', isValidExtn);
            if (isValidExtn) {
                helperService.checkImageDimensionsRangeAsync(vm.image, vm.imageDimensions).then((isValid) => {
                    vm.uploadForm.image.$setValidity('dimensions', isValid);
                });
                vm.uploadForm.image.$setValidity('size', vm.image.size <= (vm.maxFileSize*1024));
            }
        }

        function upload() {
            var actionUrl = null;
            if (vm.actionType == 'service') {
                let redirectApp = $localStorage.userApps[vm.redirectApp.appid];
                actionUrl = redirectApp.umangUrl + `|${redirectApp.appname}|${redirectApp.appid}`;
            }

            var payload = {
                title: vm.title,
                description: vm.description,
                buttonText: vm.buttonText,
                actionType: (vm.actionType=='noAction')?'':vm.actionType,
                actionUrl: actionUrl || vm.redirectUrl,
                comment: vm.comment,
                image: vm.image
            }

            vm.uploadPromise = attentionScreenService.uploadAttScreen(payload).then((response) => {
                $state.reload();
                customToastService.freeText('Attention screen uploaded successfully!');
            })
        }

    }
})(angular.module('selfcare'));