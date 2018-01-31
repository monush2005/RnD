(function(app) {
    'use strict';
    app.component('reportingComponent', {
        templateUrl: 'resources/app/components/reportingComponent/reportingComponent.html',
        controller: reportingComponentController,
        controllerAs: 'vm',
        bindings: {
            appid: '<',
            serviceid: '<',
            startDate: '<',
            endDate: '<'
        }
    })

    reportingComponentController.$inject = ['reportingService', '$localStorage', 'ngProgressService', 'userQueryService', 'dateRangeSelectorService', '$scope', '$state'];

    function reportingComponentController(reportingService, $localStorage, ngProgressService, userQueryService, dateRangeSelectorService, $scope, $state) {
        var vm = this;
        vm.$onInit = $onInit;
        vm.$onChanges = $onChanges;
        vm.goToQueries = goToQueries;
        vm.setDateRange = setDateRange;

        function $onInit() {
            vm.dateSelectorInstance = dateRangeSelectorService.createInstance($scope, setDateRange);
            vm.dateRange = 'month';
        }

        function $onChanges(changes) {
            if (vm.serviceid) {
                vm.service = $localStorage.userServices[vm.serviceid];
                getServiceDashboardData();
                getServiceQueryCount();
            } else {
                vm.app = $localStorage.userApps[vm.appid];
                getAppDashboardData();
                getDeptQueryCount();
            }
        }

        function goToQueries(type) {
            if (vm.appid) {
                $state.go('selfcare.dashboard.app.queries', {
                    'appid': vm.appid,
                    'startDate': vm.startDate,
                    'endDate': vm.endDate,
                    'type': type
                })
            } else {
                $state.go('selfcare.dashboard.service.queries', {
                    'serviceid': vm.serviceid,
                    'startDate': vm.startDate,
                    'endDate': vm.endDate,
                    'type': type
                })
            }
        }

        function getAppDashboardData() {
            var params = {
                endDate: vm.endDate,
                startDate: vm.startDate,
                appid: vm.appid
            }
            vm.dashboardDataPromise = reportingService.getAppDashboardData(params).then((jsons) => {
                vm.platformJSON = jsons.platform;
                vm.responseSlabJSON = jsons.slab;
                vm.userDataJSON = jsons.users;
                vm.successRateJSON = jsons.successRate;
                vm.reponseTimeJSON = jsons.rt;
            })
        }

        function getServiceDashboardData() {
            var params = {
                endDate: vm.endDate,
                startDate: vm.startDate,
                serviceid: vm.serviceid
            }
            vm.dashboardDataPromise = reportingService.getServiceDashboardData(params).then((jsons) => {
                vm.platformJSON = jsons.platform;
                vm.responseSlabJSON = jsons.slab;
                vm.userDataJSON = jsons.users;
                vm.successRateJSON = jsons.successRate;
                vm.reponseTimeJSON = jsons.rt;
            })
        }

        function getDeptQueryCount() {
            var payload = {
                appid: vm.appid,
                startDate: vm.startDate,
                endDate: vm.endDate
            }
            userQueryService.getDeptQueryCount(payload).then((counts) => {
                vm.queryCounts = counts;
            })
        }

        function getServiceQueryCount() {
            var payload = {
                serviceid: vm.serviceid,
                startDate: vm.startDate,
                endDate: vm.endDate
            }
            userQueryService.getServiceQueryCount(payload).then((counts) => {
                vm.queryCounts = counts;
            })
        }

        function setDateRange(startDate, endDate) {
            vm.startDate = startDate;
            vm.endDate = endDate;
            vm.dateSelectorInstance.updateDates(startDate, endDate);
            vm.$onChanges();
        }
    }
})(angular.module('selfcare'));
