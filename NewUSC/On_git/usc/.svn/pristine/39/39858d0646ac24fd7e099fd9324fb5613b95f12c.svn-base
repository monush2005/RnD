(function(app) {
    'use strict';
    app.component('analyticsfilterAppsComponent', {
        templateUrl: 'resources/app/components/analyticsComponents/analyticsfilterAppsComponent/analyticsfilterAppsComponent.html',
        controller: analyticsfilterAppsComponentController,
        controllerAs: 'vm',
        bindings: {
            filters: '<'
        }
    })

    analyticsfilterAppsComponentController.$inject = ['$localStorage', 'commonDataService', 'categoriesService', '$mdDialog'];

    function analyticsfilterAppsComponentController($localStorage, commonDataService, categoriesService, $mdDialog) {
        var vm = this;
        vm.fetchStates = fetchStates;
        vm.fetchCategories = fetchCategories;
        vm.submit = submit;

        vm.$onInit = function() {
            vm.filters = vm.filters || {
                master: {},
                selected: {
                    stateRadio: 'all',
                    state: 'all'
                }
            };
        }

        function fetchStates() {
            if (!vm.filters.master.allStates)
                return commonDataService.fetchStates().then((states) => {
                    vm.filters.master.allStates = states;
                })
        }

        function fetchCategories() {
            if (!vm.filters.master.allCategories)
                return categoriesService.fetchCategories().then((catgories) => {
                    vm.filters.master.allCategories = catgories;
                })
        }

        function submit() {
            let apps = _.map($localStorage.userApps, _.identity);
            let hasFilters = false;
            if (vm.filters.selected.state != 'all') {
                hasFilters = true;
                apps = _.filter(apps, (app) => {
                    return app.state == vm.filters.selected.state;
                })
            }
            if (vm.filters.selected.category) {
                hasFilters = true;
                apps = _.filter(apps, (app) => {
                    return _.exists(_.map(app.categories, 'categoryId'), vm.filters.selected.category);
                })
            }

            $mdDialog.hide({
                filters: vm.filters,
                apps: apps,
                hasFilters: hasFilters
            })
        }
    }
})(angular.module('selfcare'));