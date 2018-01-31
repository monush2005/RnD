(function(app) {
    'use strict';
    app.component('viewAttScreensComponent', {
        templateUrl: 'resources/app/components/attentionScreenComponents/viewAttScreensComponent/viewAttScreensComponent.html',
        controller: viewAttScreensComponentController,
        controllerAs: 'vm',
        bindings: {

        }        
    })

    viewAttScreensComponentController.$inject = ['$localStorage', 'attentionScreenService'];

    function viewAttScreensComponentController($localStorage, attentionScreenService) {
        var vm = this;
        vm.fetchAllScreens = fetchAllScreens;
        vm.fetchActiveScreens = fetchActiveScreens;
        vm.changeDates = changeDates;

        vm.startDate = moment().startOf('day');
        vm.endDate = moment().startOf('day').add(2, 'days');
        vm.disablePrevious = true;

        vm.$onInit = function(){
        	fetchActiveScreens();
        }

        function fetchAllScreens(page, size) {
        	vm.fetchScreensPromise = attentionScreenService.fetchAllScreens(page, size);
        	return vm.fetchScreensPromise.then((response) => {
        		vm.screens = response.screens;
        		return response.count;
        	});
        }

        function fetchActiveScreens() {
            vm.fetchActivePromise = attentionScreenService.fetchActiveScreens(vm.startDate.toDate(), vm.endDate.toDate());
            return vm.fetchActivePromise.then((response) => {
                vm.activeScreens = response;
            });
        }

        function changeDates(isNext) {
            vm.disableButtons = true;
            if(isNext){
                vm.startDate.add(3, 'days');
                vm.endDate.add(3, 'days');
                fetchActiveScreens().then(() => {
                    vm.disablePrevious = false;
                }).catch(() => {
                    vm.startDate.subtract(3, 'days');
                    vm.endDate.subtract(3, 'days');
                }).finally(() => {delete vm.disableButtons;});
            } else {
                vm.startDate.subtract(3, 'days');
                vm.endDate.subtract(3, 'days');
                fetchActiveScreens().then(() => {
                    if(moment().startOf('day').isSame(vm.startDate))
                        vm.disablePrevious = true;
                }).catch(() => {
                    vm.startDate.add(3, 'days');
                    vm.endDate.add(3, 'days');
                }).finally(() => {delete vm.disableButtons;});
            }
        }
    }
})(angular.module('selfcare'));