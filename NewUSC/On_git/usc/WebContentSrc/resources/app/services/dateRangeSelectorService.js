(function(app) {
    'use strict';
    app.service('dateRangeSelectorService', dateRangeSelectorServiceFn);
    dateRangeSelectorServiceFn.$inject = ['$document', '$compile', 'customDialogService'];

    function dateRangeSelectorServiceFn($document, $compile, customDialogService) {
        var dateRangeSelectorService = this;
        dateRangeSelectorService.createInstance = createInstance;

        var _onChanges = null;
        var _startDate = null;
        var _endDate = null;

        function createInstance(scope, callback, noFAB) {
            var body = $document.find('body')[0];
            let fabHTML = `
                <md-button ng-click="openDateRange()" 
                                    class="md-fab calender-bg float"><md-tooltip md-direction="top" 
                md-visible="tooltipVisible">Change Date Range</md-tooltip>
                                <md-icon style="color:white">date_range</md-icon>
                                </md-button>`;
            if(noFAB)
                fabHTML = '<span></span>';                               
            var fab = $compile(fabHTML)(scope)[0];
            body.appendChild(fab);
            scope.openDateRange = openDateRangeSelector;
            _onChanges = callback;

            scope.$on('$destroy', () => {
                body.removeChild(fab);
            });
            
            return {
                openSelector : openDateRangeSelector,
                updateDates : updateDates
            }
        }

        function updateDates(startDate, endDate) {
            _startDate = startDate;
            _endDate = endDate;
        }

        function openDateRangeSelector() {
            customDialogService.showComponent({
                component: 'dateRangeSelectorComponent',
                bindings: {
                    startDate: _startDate,
                    endDate: _endDate,
                    maxEndDate: moment().toDate(),
                    minStartDate:  envVars.analyticsStartDate
                }
            }).then((dateRange) => {
                _startDate = dateRange.startDate;
                _endDate = dateRange.endDate;
                _onChanges(dateRange.startDate, dateRange.endDate);
            })
        }
        
    }
})(angular.module('selfcare'));
