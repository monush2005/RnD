(function(app) {
    'use strict';
    app.component('quickDateRangeComponent', {
        templateUrl: 'resources/app/components/_commonComponents/quickDateRangeComponent/quickDateRangeComponent.html',
        controller: quickDateRangeComponentController,
        controllerAs: 'vm',
        bindings: {
            dateRange: '<',
            startDate: '<',
            endDate: '<',
            onRangeChange: '&',
            onCustom: '&'
        }
    })

    quickDateRangeComponentController.$inject = ['$mdMedia', 'ratingsService', 'commonDataService'];

    function quickDateRangeComponentController($mdMedia,ratingsService,commonDataService) {
        var vm = this;
        vm.commonData = {};
       
        vm.$mdMedia = $mdMedia;
       
        
        var initCalled = false;
        vm.dateRangeChange = dateRangeChange;
        vm.dMinus1 = moment().subtract(1, 'days').toDate();
        vm.dateRangeChange=dateRangeChange;
        vm.dateRanges = [ {
            rangeId: 'Yesterday',
            startDate: moment().subtract(1, 'days').toDate(),
            endDate: vm.dMinus1,
            rangeText: 'Yesterday'
        },{
            rangeId: 'week',
            startDate: moment().subtract(7, 'days').toDate(),
            endDate: vm.dMinus1,
            rangeText: 'Last 7 Days'
            
        }, {
            rangeId: 'month',
            startDate: moment().subtract(30, 'days').toDate(),
            endDate: vm.dMinus1,
            rangeText: 'Last 30 Days'
            
        },{
            rangeId: 'days',
            startDate: moment().subtract(90, 'days').toDate(),
            endDate: vm.dMinus1,
            rangeText: 'Last 90 Days',
            showOnMobile: true
        }/*, {
            rangeId: 'month',
            startDate: moment().subtract(6, 'month').toDate(),
            endDate: vm.dMinus1,
            rangeText: 'Last 6 Month'
        },*/];


        vm.$onInit = function () {
            initCalled = true;
            if(vm.startDate && vm.endDate)
                vm.$onChanges();
            	dateRangeChange();
        }

        vm.$onChanges = function(changes) {
            if(initCalled)
                vm.dateRange = 'custom';
            _.each(vm.dateRanges, (item) => {
                if (moment(vm.startDate).isSame(item.startDate, 'day') && moment(vm.endDate).isSame(item.endDate, 'day')) {
                    vm.dateRange = item.rangeId;
                    return false;
                }
            });
        }


        function dateRangeChange(drId) {
        	       if(drId == vm.dateRange)
                return;
            vm.dateRange = drId || vm.dateRange;
            let dr = _.find(vm.dateRanges, { rangeId: vm.dateRange });
            if(dr){
                vm.onRangeChange()(dr.startDate, dr.endDate);
            	//alert(dr.startDate);
            	vm.commonData.startDate = dr.startDate;
            	vm.commonData.endDate = dr.endDate;            	            
            	commonDataService.setSharedData(vm.commonData);            	
        }
            else {
                vm.onRangeChange()(vm.startDate, vm.endDate);
                commonData.startDate = vm.startDate;
                
               
            }
           
                      
        }
  
       
        
        
        
    }
})(angular.module('selfcare'));