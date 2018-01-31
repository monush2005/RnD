(function(app) {
    'use strict';
    app.component('ratingAndFeebacksComponent', {
        templateUrl: 'resources/app/components/ratingAndFeebacksComponent/ratingAndFeebacksComponent.html',
        controller: ratingAndFeebacksComponentController,
        controllerAs: 'vm',
        bindings: {

        }
    })

    ratingAndFeebacksComponentController.$inject = ['$localStorage', '$scope',  'dateRangeSelectorService'];

    function ratingAndFeebacksComponentController($localStorage, $scope, dateRangeSelectorService) {
        var vm = this;
        vm.setDateRange = setDateRange;
        vm.changeCriteria = changeCriteria;

        vm.criterias = [{
            text: 'Application',
            value: 'app',
            icon: 'smartphone',
            right: 'ratingsApp'
        }, {
            text: 'Department',
            value: 'dept',
            icon: 'apps', 
            right: 'ratingsDept'
        }];

        vm.$onInit = function() {
            vm.dateSelectorInstance = dateRangeSelectorService.createInstance($scope, setDateRange, true);
            vm.dateRange = 'week';

            if(_.existsBy($localStorage.userRights, 'ratingsApp', 'rightName')){
            	vm.selectedCriteria = _.head(vm.criterias);
            	
            	
            } else {
            	
            	vm.selectedCriteria = _.last(vm.criterias);
            	
            }
        }

        function setDateRange(startDate, endDate) {
        //	alert(startDate )
        //	alert(endDate)
        	
            vm.startDate = startDate;
            vm.endDate = endDate;
            vm.dateSelectorInstance.updateDates(startDate, endDate);
        }

        function changeCriteria(criteria) {
        	vm.selectedCriteria = criteria;
        }
    }
})(angular.module('selfcare'));