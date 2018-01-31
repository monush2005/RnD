(function(app) {
    'use strict';
    app.component('dashboardServicesComponent', {
        templateUrl: 'resources/app/components/dashboardComponent/dashboardServicesComponent/dashboardServicesComponent.html',
        controller: dashboardServicesComponentController,
        controllerAs: 'vm',
        bindings: {
            allServices: '<'
        }
    })

    dashboardServicesComponentController.$inject = ['$localStorage', 'customDialogService'];

    function dashboardServicesComponentController($localStorage, customDialogService) {
        var vm = this;
        vm.sortServices = sortServices;
        vm.openFilterDialog = openFilterDialog;
        vm.showServices = showServices;
        vm.clearFilters = clearFilters;

        vm.$onInit = function() {
            vm.sortType = 'latestFirst';
            vm.allServicesBackup = _.map($localStorage.userServices);
            sortServices();
        }

        function sortServices() {
            switch (vm.sortType) {
                case 'latestFirst':
                    vm.allServices = _(vm.allServicesBackup).orderBy((service) => moment(service.cdate).valueOf(), ['desc']).value();
                    break;
                case 'oldestFirst':
                    vm.allServices = _(vm.allServicesBackup).orderBy((service) => moment(service.cdate).valueOf(), ['asc']).value();
                    break;
                case 'aToZ':
                    vm.allServices = _(vm.allServicesBackup).orderBy((service) => _.toLower(service.servicename), ['asc']).value();
                    break;
                case 'zToA':
                    vm.allServices = _(vm.allServicesBackup).orderBy((service) => _.toLower(service.servicename), ['desc']).value();
                    break;
                case 'appLatestFirst':
                    vm.allServices = _(vm.allServicesBackup).orderBy([(service) => moment(service.app.creationdate).valueOf(), (service) => _.toLower(service.servicename)], ['desc']).value();
                    break;
                case 'appOldestFirst':
                    vm.allServices = _(vm.allServicesBackup).orderBy([(service) => moment(service.app.creationdate).valueOf(), (service) => _.toLower(service.servicename)], ['asc']).value();
                    break;
                case 'appAToZ':
                    vm.allServices = _(vm.allServicesBackup).orderBy([(service) => _.toLower(service.app.appname), (service) => _.toLower(service.servicename)], ['asc']).value();
                    break;
                case 'appZToA':
                    vm.allServices = _(vm.allServicesBackup).orderBy([(service) => _.toLower(service.app.appname), (service) => _.toLower(service.servicename)], ['desc']).value();
                    break;
            }
        }

        function openFilterDialog(){
            customDialogService.showComponent({
                component: 'appsServicesFilterComponent',
                bindings:{
                    forService: true,
                    filters: _.cloneDeep(vm.filters)
                }
            }).then((obj) => {
                vm.allServicesBackup = obj.services;
                vm.filters = obj.filters;
                vm.hasFilters = obj.hasFilters;
                sortServices();
            })
        }

        function clearFilters() {
            vm.allServicesBackup =  _.map($localStorage.userServices);
            sortServices();
            delete vm.filters;
            delete vm.hasFilters;
        }

        function showServices() {
            vm.areServicesVisible = true;
            angular.element(document.getElementById('servicesContent')).scrollTo(0, 0, 600);
        }
    }
})(angular.module('selfcare'));