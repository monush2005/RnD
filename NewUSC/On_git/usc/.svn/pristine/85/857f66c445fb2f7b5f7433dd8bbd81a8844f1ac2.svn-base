(function(app) {
    'use strict';
    app.component('gAnalyticsComponent', {
        templateUrl: 'resources/app/components/analyticsComponents/gAnalyticsComponent/gAnalyticsComponent.html',
        controller: gAnalyticsComponentController,
        controllerAs: 'vm',
        bindings: {
            startDate: '<',
            endDate: '<'
        }
    })

    gAnalyticsComponentController.$inject = ['$rootScope', '$localStorage', 'gaHttpService', 'googleAnalyticsDataService', 'customToastService'];

    function gAnalyticsComponentController($rootScope, $localStorage, gaHttpService, googleAnalyticsDataService, customToastService) {
        var vm = this;
        vm.loginGoogle = loginGoogle;
        vm.changeView = changeView;
        vm.changeCriteria = changeCriteria;
        vm.$onChanges = $onChanges;
        vm.getCityData = getCityData;

        vm.criterias = [{
            text: 'Location',
            value: 'state',
            icon: 'location_city'
        }, {
            text: 'Device',
            value: 'device',
            icon: 'devices_other'
        }, {
            text: 'Screen',
            value: 'screen',
            icon: 'insert_drive_file'
        }];

        vm.views = [{
            text: 'Android Analytics',
            value: envVars.ga.androidViewId,
            icon: 'fa-android'
        }, {
            text: 'iOS Analytics',
            value: envVars.ga.iOSViewId,
            icon: 'fa-apple'
        }, {
            text: 'Windows Phone Analytics',
            value: envVars.ga.wpViewId,
            icon: 'fa-windows'
        }]

        vm.$onInit = function() {
            vm.selectedCriteria = _.head(vm.criterias);
            vm.selectedView = _.head(vm.views);
            $rootScope.$on('logoutGA', () => {
                vm.isLoggedInGoogle = false;
                customToastService.freeText('Your account is not authorized. Please login with a valid Google account.', undefined, true);
            })
            vm.checkingGAStatusPromise = gaHttpService.isLoggedIn().then((isLoggedIn) => {
                vm.isLoggedInGoogle = isLoggedIn;
                isLoggedIn && getData();
            })
        }

        function loginGoogle() {
            vm.loginToGooglePromise = gaHttpService.loginGA().then(() => {
                vm.isLoggedInGoogle = true;
                getData();
            }).catch((error) => {
                customToastService.freeText(error, undefined, true);
            })
        }

        function $onChanges() {
            vm.isLoggedInGoogle && getData();
        }

        function changeView(view) {
            vm.selectedView = view;
            getData();
        }

        function changeCriteria(criteria) {
            vm.selectedCriteria = criteria;
            getData();
        }

        function getData() {
            delete vm.subJson;
            let params = {
                startDate: vm.startDate,
                endDate: vm.endDate,
                viewId: vm.selectedView.value
            }
            switch (vm.selectedCriteria.value) {
                case 'device':
                    vm.getDataPromise = googleAnalyticsDataService.getDeviceData(params)
                        .then((table) => {
                            vm.deviceTable = table;
                        })
                    break;
                case 'screen':
                    vm.getDataPromise = googleAnalyticsDataService.getScreenData(params)
                        .then((table) => {
                            vm.screenTable = table;
                        })
                    break;
                case 'state':
                    vm.getDataPromise = googleAnalyticsDataService.getStatesData(params)
                        .then((json) => {
                            vm.json = json;
                        })
                    break;
            }
        }

        function getCityData(state) {
            delete vm.subJson;
            let params = {
                startDate: vm.startDate,
                endDate: vm.endDate,
                viewId: vm.selectedView.value,
                state: state
            }
            angular.element(document.getElementById('analyticsComponent')).scrollTo(0, 200, 600);

            vm.getSubDataPromise = googleAnalyticsDataService.getCityData(params)
                .then((json) => {
                    vm.subJson = json;
                    angular.element(document.getElementById('analyticsComponent')).scrollTo(0, 500, 600);
                })
        }
    }
})(angular.module('selfcare'));