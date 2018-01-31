(function(app) {
    'use strict';
    app.component('analyticsDashboardComponent', {
        templateUrl: 'resources/app/components/analyticsComponents/analyticsDashboardComponent/analyticsDashboardComponent.html',
        controller: analyticsDashboardComponentController,
        controllerAs: 'vm',
        bindings: {
            startDate: '<',
            endDate: '<'
        }
    })

    analyticsDashboardComponentController.$inject = ['$localStorage', 'analyticsUserService'];

    function analyticsDashboardComponentController($localStorage, analyticsUserService) {
        var vm = this;
        vm.getGraphData = getGraphData;
        vm.statuses = [{
            value: 'Successful',
            display: 'Successful',
            state: `selfcare.analytics({currentComponent : 'temporal', status: 'successful'})`,
            tooltip: 'Count of users successfully registered on UMANG for the selected time period'
        }, {
            value: 'Blocked',
            display: 'Blocked',
            state: `selfcare.analytics({currentComponent : 'temporal', status: 'blocked'})`,
            tooltip: 'Count of users marked as "Blocked" in UMANG system for the selected time period'
        }, {
            value: 'Deleted',
            display: 'Deleted',
            state: `selfcare.analytics({currentComponent : 'temporal', status: 'deleted'})`,
            tooltip: 'Count of users marked as "Deleted" in UMANG system for the selected time period'
        }, {
            value: 'Pending',
            display: 'Pending',
            state: `selfcare.analytics({currentComponent : 'temporal', status: 'pending'})`,
            tooltip: 'Count of users marked as "Pending" in UMANG system for the selected time period'
        }];

        vm.regModes = [{
            value: 'Mobile',
            display: 'Mobile Registration',
            tooltip: 'Count of users who registered on UMANG using Mobile verificiation for the selected time period'
        },{
            value: 'Aadhaar',
            display: 'Aadhaar Registration',
            tooltip: 'Count of users who registered on UMANG using Aadhar verificiation for the selected time period'
        }]

        vm.regChannels = [{
            value: 'App',
            display: 'App Registration',
            tooltip: 'Count of users who registered on UMANG using UMANG Mobile app for the selected time period'
        },{
            value: 'Web',
            display: 'Web Registration',
            tooltip: 'Count of users who registered on UMANG using UMANG web for the selected time period'
        }]

        vm.$onChanges = function() {
            getGraphData();
        }

        function getGraphData() {
            vm.getDataPromise = analyticsUserService.getTemporalData({
                startDate: vm.startDate,
                endDate: vm.endDate
            }).then((jsons) => {
                vm.jsons = jsons.status;
                vm.regModesJson = jsons.regMode;
                vm.regChannelsJson = jsons.regChannels;
                vm.modeFlex = vm.regModesJson['Aadhaar']?'50':'100';
                vm.regAttemptsTotal = _(vm.jsons).map('totalUsers').sum();  
            })
        }
    }
})(angular.module('selfcare'));