(function(app) {
    'use strict';
    app.component('serviceProfileComponent', {
        templateUrl: 'resources/app/components/serviceProfileComponent/serviceProfileComponent.html',
        controller: serviceProfileComponentController,
        controllerAs: 'vm',
        bindings: {
            serviceid: '<'
        }
    })

    serviceProfileComponentController.$inject = ['$localStorage', 'appServiceProfileService', 'customDialogService'];

    function serviceProfileComponentController($localStorage, appServiceProfileService, customDialogService) {
        var vm = this;
        vm.requestChange = requestChange;

        vm.$onInit = function() {
            vm.service = $localStorage.userServices[vm.serviceid];
            vm.service.liveDate =vm.service.cdate;
            	//moment(vm.service.cdate).format('DD MMMM YYYY');
        }

        function requestChange(name, initValue, maxLength) {
            customDialogService.showComponent({
                component: 'requestComponent',
                clickOutsideToClose: false,
                bindings: {
                    name: name,
                    initValue: initValue,
                    maxLength: maxLength,
                    Subject: `Request for change of "${name}" for "${vm.service.servicename}" (Service Id: ${vm.serviceid})`,
                    onRequest: (data) => {
                        return appServiceProfileService.requestChange(data)
                    }
                }
            }).then(customDialogService.requestSuccessful);
        }
    }
})(angular.module('selfcare'));
