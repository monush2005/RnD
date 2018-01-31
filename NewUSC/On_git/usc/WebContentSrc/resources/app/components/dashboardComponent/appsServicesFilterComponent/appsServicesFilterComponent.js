(function(app) {
    'use strict';
    app.component('appsServicesFilterComponent', {
        templateUrl: 'resources/app/components/dashboardComponent/appsServicesFilterComponent/appsServicesFilterComponent.html',
        controller: appsServicesFilterComponentController,
        controllerAs: 'vm',
        bindings: {
            showMinistries: '<',
            forService: '<',
            filters: '<'
        }
    })

    appsServicesFilterComponentController.$inject = ['$localStorage', '$mdDialog', 'commonDataService', 'categoriesService', 'analyticsUserService'];

    function appsServicesFilterComponentController($localStorage, $mdDialog, commonDataService, categoriesService, analyticsUserService) {
        var vm = this;
        vm.fetchStates = fetchStates;
        vm.fetchCategories = fetchCategories;
        vm.stateCentralChange = stateCentralChange;
        vm.stateChange = stateChange;
        vm.fetchMinistries = fetchMinistries;
        vm.submit = submit;
        vm.reset = reset;
        vm.cancel = cancel;

        vm.$onInit = function() {
            if (!vm.filters) {
                reset();
            }
            vm.dropDownFlex = vm.showMinistries ? '30' : '45';
            vm.dateToday = new Date();
            vm.filters = vm.filters || {};
            fetchStates();
        }

        function fetchCategories() {
            return categoriesService.fetchCategories().then((cats) => {
                vm.filters.allCategories = _.sortBy(cats, cat => _.toLower(cat.categoryName));
            })
        }

        function fetchStates() {
            return commonDataService.fetchStates().then((states) => {
                vm.allStates = states;
            });
        }

        function fetchMinistries() {
            if(!vm.showMinistries)
                return;

            delete vm.filters.selectedMinistry;
            vm.filters.allMinistries = [];

            return analyticsUserService.getMinistries().then((ministries) => {
                if (vm.filters.state) {
                    vm.filters.allMinistries = _.filter(ministries, (ministry) => {
                        return ministry.stateId == vm.filters.state.stateid
                    })
                } else {
                    vm.filters.allMinistries = ministries;
                }
            })
        }

        function reset() {
            vm.filters = {
                state: null
            };
            vm.filters.stateRadio = 'all';
            vm.filters.status = 'all';
        }

        function stateCentralChange() {
            if (vm.filters.stateRadio == 'central')
                vm.filters.state = {
                    stateid: '99'
                }

            if (vm.filters.stateRadio == 'all')
                vm.filters.state = null;

            fetchMinistries();
        }

        function stateChange() {
            fetchMinistries();            
        }

        function cancel() {
            $mdDialog.cancel();
        }

        function submit() {
            if (vm.forService) {
                let hasFilters = false;
                var services = _($localStorage.userServices)
                    .map()
                    .filter((service) => {
                        var bool = true;

                        if (vm.filters.selectedCategory) {
                            hasFilters = true;
                            bool = bool && _.exists(_.map(service.app.categories, 'categoryId'), vm.filters.selectedCategory.categoryId)
                        }

                        if (vm.filters.state) {
                            hasFilters = true;
                            bool = bool && service.app.state == vm.filters.state.stateid
                        }

                        if (vm.filters.startDate) {
                            hasFilters = true;
                            bool = bool && moment(service.cdate).isSameOrAfter(vm.filters.startDate, 'day')
                        }

                        if (vm.filters.endDate) {
                            hasFilters = true;
                            bool = bool && moment(service.cdate).isSameOrBefore(vm.filters.endDate, 'day')
                        }

                        if (vm.filters.startRating) {
                            hasFilters = true;
                            bool = bool && parseFloat(service.rating) >= vm.filters.startRating
                        }

                        if (vm.filters.endRating) {
                            hasFilters = true;
                            bool = bool && parseFloat(service.rating) <= vm.filters.endRating
                        }

                        if (vm.filters.status != 'all') {
                            hasFilters = true;
                            bool = bool && service.status == vm.filters.status;
                        }

                        return bool;
                    })
                    .value();

                $mdDialog.hide({
                    filters: vm.filters,
                    services: services,
                    hasFilters: hasFilters
                })
            } else {
                let hasFilters = false;
                var apps = _($localStorage.userApps)
                    .map()
                    .filter((app) => {
                        var bool = true;

                        if (vm.filters.selectedCategory) {
                            hasFilters = true;
                            bool = bool && _.exists(_.map(app.categories, 'categoryId'), vm.filters.selectedCategory.categoryId)
                        }

                        if (vm.filters.state) {
                            hasFilters = true;
                            bool = bool && app.state == vm.filters.state.stateid
                        }

                        if (vm.filters.startDate) {
                            hasFilters = true;
                            bool = bool && moment(app.creationdate).isSameOrAfter(vm.filters.startDate, 'day')
                        }

                        if (vm.filters.endDate) {
                            hasFilters = true;
                            bool = bool && moment(app.creationdate).isSameOrBefore(vm.filters.endDate, 'day')
                        }

                        if (vm.filters.startRating) {
                            hasFilters = true;
                            bool = bool && parseFloat(app.rating) >= vm.filters.startRating
                        }

                        if (vm.filters.endRating) {
                            hasFilters = true;
                            bool = bool && parseFloat(app.rating) <= vm.filters.endRating
                        }

                        if (vm.filters.status != 'all') {
                            hasFilters = true;
                            bool = bool && app.status == vm.filters.status;
                        }

                        if(vm.showMinistries && vm.filters.selectedMinistry){
                            hasFilters = true;
                            bool = bool && _.exists(vm.filters.selectedMinistry.appIds, app.appid);
                        }

                        return bool;
                    })
                    .value();

                $mdDialog.hide({
                    filters: vm.filters,
                    apps: apps,
                    hasFilters: hasFilters
                })
            }
        }
    }
})(angular.module('selfcare'));