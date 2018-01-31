(function(app) {
    'use strict';
    app.component('filterUsersComponent', {
        templateUrl: 'resources/app/components/userComponents/filterUsersComponent/filterUsersComponent.html',
        controller: filterUsersComponentController,
        controllerAs: 'vm',
        bindings: {
            filters: '<'
        }
    })

    filterUsersComponentController.$inject = ['$localStorage', '$mdDialog', 'usersService', 'rolesRightsService', 'categoriesService', 'commonDataService'];

    function filterUsersComponentController($localStorage, $mdDialog, usersService, rolesRightsService, categoriesService, commonDataService) {
        var vm = this;
        vm.cancel = cancel;
        vm.reset = reset;
        vm.submit = submit;
        vm.getRoles = getRoles;
        vm.getCategories = getCategories;
        vm.isFormFilled = isFormFilled;
        vm.stateCentralChange = stateCentralChange;
        vm.fetchStates = fetchStates;


        vm.$onInit = function() {
            vm.filters = vm.filters || { master: {}, selected: {} };
            vm.isSuperAdmin = $localStorage.userRole.logicalName.toLowerCase() == 'superadmin';
            vm.filters.selected.stateRadio = vm.filters.selected.stateRadio || 'all';
            stateCentralChange();
            getApps();
            fetchStates();
        }

        function getRoles() {
            if (!vm.filters.master.allRoles)
                return rolesRightsService.getMyRoles().then((roles) => {
                    vm.filters.master.allRoles = roles;
                })
        }

         function fetchStates() {
            return commonDataService.fetchStates().then((states) => {
                vm.allStates = states;
            });
        }

        function getCategories() {
            if (!vm.filters.master.allCategories)
                return categoriesService.fetchCategories().then((categories) => {
                    vm.filters.master.allCategories = categories;
                })
        }

        function getApps() {
            if (!vm.filters.master.allApps)
                vm.filters.master.allApps = _.map($localStorage.userApps);
        }

        function stateCentralChange() {
            if (vm.filters.selected.stateRadio == 'central')
                vm.filters.selected.state = {
                    stateid: '99'
                }

            if(vm.filters.selected.stateRadio == 'all')
                vm.filters.selected.state = null;
        }

        function cancel() {
            $mdDialog.cancel();
        }

        function isFormFilled() {
            return !_.isEqual(vm.filters.selected, {});
        }

        function reset() {
            vm.filters.selected = {};
            vm.filters.selected.stateRadio = 'all';
            stateCentralChange();
        }

        function submit() {
            vm.filters.payload = {};
            _.attempt(() => vm.filters.payload.appIds = _(vm.filters.selected.apps).map('appid').join(','));
            _.attempt(() => vm.filters.payload.roleIds = _(vm.filters.selected.roles).map('roleId').join(','));
            _.attempt(() => vm.filters.payload.categoryIds = _(vm.filters.selected.categories).map('categoryId').join(','));
            _.attempt(() => vm.filters.payload.state = vm.filters.selected.state.stateid);
            _.attempt(() => vm.filters.payload.status = vm.filters.selected.status);
            _.attempt(() => vm.filters.payload.startDate = vm.filters.selected.startDate);
            _.attempt(() => vm.filters.payload.endDate = vm.filters.selected.endDate);
            _.each(vm.filters.payload, (item, key) => {
                if (!item)
                    delete vm.filters.payload[key];
            })
            vm.filters.payload = isFormFilled()?vm.filters.payload:undefined;
            $mdDialog.hide(vm.filters);
        }
    }
})(angular.module('selfcare'));