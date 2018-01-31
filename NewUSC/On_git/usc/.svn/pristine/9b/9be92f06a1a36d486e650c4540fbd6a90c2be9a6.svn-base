(function(app) {
    'use strict';
    app.component('dateRangeSelectorComponent', {
        templateUrl: 'resources/app/components/_commonComponents/dateRangeSelectorComponent/dateRangeSelectorComponent.html',
        controller: dateRangeSelectorComponentController,
        controllerAs: 'vm',
        bindings: {
            startDate: '<',
            endDate: '<',
            maxEndDate: '<',
            minStartDate: '<'
        }
    })

    dateRangeSelectorComponentController.$inject = ['$localStorage', '$mdDialog'];

    function dateRangeSelectorComponentController($localStorage, $mdDialog) {
        var vm = this;
        vm.submit = submit;

        function submit() {
        	$mdDialog.hide({
        		startDate: vm.startDate,
        		endDate: vm.endDate
        	});
        }
    }
})(angular.module('selfcare'));
