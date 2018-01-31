(function(app) {
    'use strict';
    app.component('reportCardComponent', {
        templateUrl: 'resources/app/components/reportCardComponent/reportCardComponent.html',
        controller: reportCardComponentController,
        controllerAs: 'vm',
        bindings: {
            serviceid: '<',
            appid: '<',
            startDate: '<',
            endDate: '<',
            forDashboard: '<',
            selectedCard: '@',
            dateRange: '@'
        }
    })

    reportCardComponentController.$inject = ['$localStorage', 'reportingService', 'dateRangeSelectorService', '$scope', '$state'];

    function reportCardComponentController($localStorage, reportingService, dateRangeSelectorService, $scope, $state) {
        var vm = this;
        vm.$onChanges = $onChanges;
        vm.$onInit = $onInit;
        vm.changeGraph = changeGraph;
        vm.setDateRange = setDateRange;


        function $onInit() {
            if (!vm.forDashboard) {
                vm.dateSelectorInstance = dateRangeSelectorService.createInstance($scope, setDateRange);
            }
            vm.dateRange = vm.dateRange || 'month';
        }

        function $onChanges(changes) {
            if (vm.appid) {
                let params = {
                    endDate: vm.endDate,
                    startDate: vm.startDate,
                    appid: vm.appid
                }

                vm.reportCardPromise = reportingService.getAppReportCard(params).then((data) => {
                    vm.rating = data.rating;
                    vm.responseTime = data.responseTime;
                    vm.users = data.users;
                    vm.averageSuccessPercenatge = data.averageSuccessPercenatge;
                    if (!vm.forDashboard)
                        changeGraph(vm.selectedCard || 'rating');
                    return data;
                });
            } else {
                let params = {
                    endDate: vm.endDate,
                    startDate: vm.startDate,
                    serviceid: vm.serviceid
                }

                vm.reportCardPromise = reportingService.getServiceReportCard(params).then((data) => {
                    vm.rating = data.averageRating;
                    vm.responseTime = data.responseTime;
                    vm.users = data.users;
                    vm.averageSuccessPercenatge = data.averageSuccessPercenatge;
                    if (!vm.forDashboard)
                        changeGraph(vm.selectedCard || 'art');
                    return data;
                });
            }
        }

        function setDateRange(startDate, endDate) {
            vm.startDate = startDate;
            vm.endDate = endDate;
            $onChanges();
            vm.dateSelectorInstance && vm.dateSelectorInstance.updateDates(startDate, endDate);
        }

        function changeGraph(graph) {
            if (vm.forDashboard) {
                if (vm.appid)
                    $state.go('selfcare.dashboard.app.reportCard', {
                        appid: vm.appid,
                        startDate: vm.startDate,
                        endDate: vm.endDate,
                        selectedCard: graph,
                        dateRange: vm.dateRange
                    })
                else
                    $state.go('selfcare.dashboard.service.reportCard', {
                        serviceid: vm.serviceid,
                        startDate: vm.startDate,
                        endDate: vm.endDate,
                        selectedCard: graph,
                        dateRange: vm.dateRange
                    })
                return;
            }

            vm.shadow = {};
            switch (graph) {
                case 'rating':
                    vm.currentGraphJSON = vm.rating.line;
                    vm.shadow.rating = 8;
                    break;
                case 'art':
                    vm.currentGraphJSON = vm.responseTime.line;
                    vm.shadow.art = 8;
                    break;
                case 'asp':
                    vm.currentGraphJSON = vm.averageSuccessPercenatge.line;
                    vm.shadow.asp = 8;
                    break;
                case 'tuv':
                    vm.currentGraphJSON = vm.users.line;
                    vm.shadow.tuv = 8;
                    break;
            }
        }

    }
})(angular.module('selfcare'));