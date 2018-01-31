(function(app) {
    'use strict';
    app.component('analyticsTemporalComponent', {
        templateUrl: 'resources/app/components/analyticsComponents/analyticsTemporalComponent/analyticsTemporalComponent.html',
        controller: analyticsTemporalComponentController,
        controllerAs: 'vm',
        bindings: {
            startDate: '<',
            endDate: '<',
            status: '<'
        }
    })

    analyticsTemporalComponentController.$inject = ['$localStorage', 'analyticsUserService'];

    function analyticsTemporalComponentController($localStorage, analyticsUserService) {
        var vm = this;

        vm.$onChanges = function() {
            getData();
        }

        function getData() {
            vm.getDataPromise = analyticsUserService.getTemporalData({
                startDate: vm.startDate,
                endDate: vm.endDate
            }).then((jsons) => {
                vm.jsons = jsons.status;

                if (vm.status) {
                    _.each(vm.jsons, (json) => {
                        _.each(json.series, (series) => {
                            if(series.name.toLowerCase() != vm.status)
                                series.visible = false;
                        })
                    })
                }
            })
        }
    }
})(angular.module('selfcare'));