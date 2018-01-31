(function(app) {
    'use strict';
    app.component('dashboardAppsComponent', {
        templateUrl: 'resources/app/components/dashboardComponent/dashboardAppsComponent/dashboardAppsComponent.html',
        controller: dashboardAppsComponentController,
        controllerAs: 'vm',
        bindings: {

        }
    })

    dashboardAppsComponentController.$inject = ['$localStorage', 'customDialogService'];

    function dashboardAppsComponentController($localStorage, customDialogService) {
        var vm = this;
        vm.openFilterDialog = openFilterDialog;
        vm.sortApps = sortApps;
        vm.showApps = showApps;
        vm.clearFilters = clearFilters;

        vm.$onInit = function() {
            vm.sortType = 'latestFirst';
            vm.allAppsBackup = _.map($localStorage.userApps);
            sortApps();
        }

        function sortApps() {
            switch (vm.sortType) {
                case 'latestFirst':
                    vm.allApps = _(vm.allAppsBackup).orderBy((app)=> moment(app.creationdate,'DD/MM/YYYY hh:mm').valueOf(), ['desc']).value();
                    break;
                case 'oldestFirst':
                    vm.allApps = _(vm.allAppsBackup).orderBy((app)=> moment(app.creationdate,'DD/MM/YYYY hh:mm').valueOf(), ['asc']).value();
                    break;
                case 'aToZ':
                    vm.allApps = _(vm.allAppsBackup).orderBy((app)=>_.toLower(app.appname), ['asc']).value();
                    break;
                case 'zToA':
                    vm.allApps = _(vm.allAppsBackup).orderBy((app)=>_.toLower(app.appname), ['desc']).value();
                    break;
            }
        }

         function openFilterDialog(){
            customDialogService.showComponent({
                component: 'appsServicesFilterComponent',
                bindings:{
                    filters: _.cloneDeep(vm.filters)
                }
            }).then((obj) => {
                vm.allAppsBackup = obj.apps;
                vm.filters = obj.filters;
                vm.hasFilters = obj.hasFilters;
                sortApps();
            })
        }

        function clearFilters() {
            vm.allAppsBackup = _.map($localStorage.userApps);
            sortApps();
            delete vm.filters;
            delete vm.hasFilters;
        }

        function showApps() {
            vm.areAppsVisible=true;
            angular.element(document.getElementById('appsContent')).scrollTo(0, 0, 100);
        }
    }
})(angular.module('selfcare'));
