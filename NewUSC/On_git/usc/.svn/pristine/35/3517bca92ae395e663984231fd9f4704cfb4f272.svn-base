(function(app) {
    'use strict';
    app.directive('imageFile', imageFileFn);
    imageFileFn.$inject = [];
    imageFileController.$inject = ['$http', '$scope'];

    function imageFileFn() {
        return {
            require: 'ngModel',
            templateUrl: 'resources/app/directives/imageFileDirective/imageFile.html',
            restrict: 'E',
            scope: {
                title: '@',
                src: '<?',
                onReady: '&?',
                noPreview: '<',
                align: '@'
            },
            link: imageFileLinkFn,
            controller: imageFileController,
            controllerAs: 'vm',
            bindToController: true
        }
    }

    function imageFileLinkFn(scope, elem, attr, ngModelCtrl) {
        scope.vm.ngModelCtrl = ngModelCtrl;
    }

    function imageFileController($http, $scope) {
        var vm = this;
        vm.id = $scope.$id;

        vm.imageSelectChange = function() {
            vm.ngModelCtrl.$setViewValue(vm.imageFile);
            if (vm.imageFile) {
                if (vm.imageFile.type.indexOf('image') > -1) {
                    vm.selectedFileDataURL = URL.createObjectURL(vm.imageFile);
                } else {}
            } else {
                vm.selectedFileDataURL = "";
            }
        }
        
        vm.removeFile = function() {
            vm.imageFile = "";
            vm.selectedFileDataURL = "";
            vm.ngModelCtrl.$setViewValue(vm.imageFile);
        }
    }
})(angular.module('selfcare'));
