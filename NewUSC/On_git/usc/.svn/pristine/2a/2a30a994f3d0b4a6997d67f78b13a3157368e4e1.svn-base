(function(app) {
    'use strict';
    app.component('analyticsDeptsComponent', {
        templateUrl: 'resources/app/components/analyticsComponents/analyticsDeptsComponent/analyticsDeptsComponent.html',
        controller: analyticsDeptsComponentController,
        controllerAs: 'vm',
        bindings: {
            startDate: '<',
            endDate: '<'
        }
    })

    analyticsDeptsComponentController.$inject = ['$localStorage', '$mdMedia', '$mdDialog', 'analyticsUserService', 'customDialogService'];

    function analyticsDeptsComponentController($localStorage, $mdMedia, $mdDialog, analyticsUserService, customDialogService) {
        var vm = this;
        vm.selectApp = selectApp;
        vm.showFilterComp = showFilterComp;
        vm.clearFilters = clearFilters;
        vm.getData = getData;
        vm.changeCriteria = changeCriteria;

        vm.criterias = [{
            text: 'Temporal',
            value: 'temporal',
            icon: 'timeline'
        }, {
            text: 'Gender',
            value: 'gender',
            icon: 'wc'
        }, {
            text: 'Age Bucket',
            value: 'age',
            icon: 'group'
        }, {
            text: 'Qualification',
            value: 'qual',
            icon: 'school'
        }, {
            text: 'Occupation',
            value: 'occup',
            icon: 'business_center'
        }, {
            text: 'Language',
            value: 'lang',
            icon: 'translate'
        }, {
            text: 'Location',
            value: 'location',
            icon: 'location_city'
        }];

        vm.$onInit = function() {
            vm.allApps = _.map($localStorage.userApps, _.identity);
            vm.selectedCriteria = _.head(vm.criterias);
        }

        vm.$onChanges = function() {
            if (vm.selectedApp)
                getData();
        }

        function changeCriteria(criteria) {
            if (criteria.value == 'lang' || criteria.value == 'temporal')
                vm.onSeriesClick = null;
            else
                vm.onSeriesClick = onSeriesClick;

            vm.selectedCriteria = criteria;
            getData();
        }

        function selectApp(app) {
            vm.selectedCriteria = _.head(vm.criterias);
            vm.sub = {};
            vm.onSeriesClick = null;
            vm.selectedApp = app;
            vm.graphForItems = [];
            vm.graphForItems.push({
                name: vm.selectedApp.appname,
                type: 'app',
                obj: vm.selectedApp
            });
            vm.graphFor = _.head(vm.graphForItems);
            getData();
        }

        function getData() {
            if ($mdMedia('gt-sm'))
                angular.element(document.getElementById('analyticsComponent')).scrollTo(0, 0, 600);
            else
                angular.element(document.getElementById('analyticsComponent')).scrollTo(0, document.getElementById('analyticsComponent').scrollHeight, 600);

            if (vm.graphFor.type == 'app' && vm.selectedCriteria.value == 'temporal') {
                vm.getDataPromise = analyticsUserService.getDeptData(vm.graphFor.obj, vm.startDate, vm.endDate).then((response) => {
                    vm.json = response.json;
                    vm.graphForItems = [];
                    vm.graphForItems.push({
                        name: vm.selectedApp.appname,
                        type: 'app',
                        obj: vm.selectedApp
                    });
                    _.each(response.services, (service) => {
                        vm.graphForItems.push({
                            name: service.name,
                            type: 'service',
                            obj: service
                        })
                    })
                    vm.graphFor = _.head(vm.graphForItems);
                })
            } else if (vm.graphFor.type == 'service' && vm.selectedCriteria.value == 'temporal') {
                vm.getDataPromise = analyticsUserService.getServiceData(vm.graphFor.obj, vm.startDate, vm.endDate).then((json) => {
                    vm.json = json;
                })
            } else {
                getCriteriaData();
            }
        }

        function getCriteriaData() {
            vm.sub = {};
            delete vm.getSubDataPromise;
            vm.getDataPromise = analyticsUserService.getDeptCriteriaData({
                criteria: vm.selectedCriteria.value,
                startDate: vm.startDate,
                endDate: vm.endDate,
                id: vm.graphFor.type == 'service' ? vm.graphFor.obj.id : vm.graphFor.obj.appid
            }, vm.graphFor.type == 'service').then((json) => {
                vm.json = json;
            })
        }

        function onSeriesClick(xValue) {
            vm.sub = {};
            angular.element(document.getElementById('analyticsComponent')).scrollTo(0, 200, 600);
            vm.getSubDataPromise = analyticsUserService.getDeptSubCriteriaData({
                subCriteria: xValue,
                criteria: vm.selectedCriteria.value,
                startDate: vm.startDate,
                endDate: vm.endDate,
                id: vm.graphFor.type == 'service' ? vm.graphFor.obj.id : vm.graphFor.obj.appid
            },  vm.graphFor.type == 'service').then((jsons) => {
                vm.sub.ageJson = jsons.ageJson;
                vm.sub.genderJson = jsons.genderJson;
                vm.sub.qualJson = jsons.qualJson;
                vm.sub.occupJson = jsons.occupJson;
                vm.sub.districtJson = jsons.districtJson;
                angular.element(document.getElementById('analyticsComponent')).scrollTo(0, 500, 600);
            });
        }

        function showFilterComp() {
            customDialogService.showComponent({
                component: 'appsServicesFilterComponent',
                bindings: {
                    showMinistries: true,
                    filters: _.cloneDeep(vm.filters)
                },
                clickOutsideToClose: true
            }).then((obj) => {
                vm.filters = obj.filters;
                vm.allApps = obj.apps;
                vm.hasFilters = obj.hasFilters;
            })
        }

        function clearFilters() {
            vm.allApps = _.map($localStorage.userApps, _.identity);
            vm.hasFilters = false;
            delete vm.filters;
        }
    }
})(angular.module('selfcare'));