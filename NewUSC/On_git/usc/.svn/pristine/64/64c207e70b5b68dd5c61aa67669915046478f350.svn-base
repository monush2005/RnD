(function(app) {
    'use strict';
    app.component('appServiceOnOffComponent', {
        templateUrl: 'resources/app/components/appServiceOnOffComponent/appServiceOnOffComponent.html',
        controller: appServiceOnOffComponentController,
        controllerAs: 'vm',
        bindings: {
            appid: '<',
            serviceid: '<'
        }
    })

    appServiceOnOffComponentController.$inject = ['$localStorage', 'appServiceProfileService', 'customToastService'];

    function appServiceOnOffComponentController($localStorage, appServiceProfileService, customToastService) {
        var vm = this;
        vm.activeDeactivate = activeDeactivate;

        vm.$onInit = function() {
            if (vm.serviceid) {
                vm.service = $localStorage.userServices[vm.serviceid];
            } else {
                vm.app = $localStorage.userApps[vm.appid];
            }
        }

        function activeDeactivate() {
            if (vm.app) {
                vm.promise = appServiceProfileService.onOffApp({
                    status: vm.app.status,
                    appId: vm.app.appid
                }).then((newStatus) => {
                    if (newStatus == 'active')
                        customToastService.freeText(`Application (${vm.app.appname}) has been successfully activated`);
                    else
                        customToastService.freeText(`Application (${vm.app.appname}) has been successfully deactivated`);
                })
            } else {
                vm.promise = appServiceProfileService.onOffService({
                    status: vm.service.status,
                    serviceId: vm.service.serviceid
                }).then((newStatus) => {
                	 if (newStatus == 'active')
                        customToastService.freeText(`Service (${vm.service.servicename}) has been successfully activated`);
                    else
                        customToastService.freeText(`Service (${vm.service.servicename}) has been successfully deactivated`);
                })
            }
        }
    }
})(angular.module('selfcare'));