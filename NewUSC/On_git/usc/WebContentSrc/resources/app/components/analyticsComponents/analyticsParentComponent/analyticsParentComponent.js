(function(app) {
    'use strict';
    app.component('analyticsParentComponent', {
        templateUrl: 'resources/app/components/analyticsComponents/analyticsParentComponent/analyticsParentComponent.html',
        controller: analyticsParentComponentController,
        controllerAs: 'vm',
        bindings: {
            startDate: '<',
            endDate: '<',
            currentComponent: '<',
            status: '<'
        }
    })

    analyticsParentComponentController.$inject = ['$localStorage', 'dateRangeSelectorService', '$scope', '$state', 'breadCrumbService'];

    function analyticsParentComponentController($localStorage, dateRangeSelectorService, $scope, $state, breadCrumbService) {
        var vm = this;
        vm.setDateRange = setDateRange;
        vm.changeComponent = changeComponent;

        vm.components = [{
            name: 'dashboard',
            display: 'Resigtration Summary',
            icon: 'assignment_turned_in'
        },{
            name: 'temporal',
            display: 'Temporal',
            icon: 'timeline'
        },{
            name: 'demographic',
            display: 'Demographic',
            icon: 'public'
        },{
            name: 'department',
            display: 'Department',
            icon: 'work'
        }, {
            name: 'gAnalytics',
            display: 'Google Analytics',
            icon: 'insert_chart'
        }]

        vm.$onInit = function() {
            vm.dateSelectorInstance = dateRangeSelectorService.createInstance($scope, setDateRange);
            if (!(vm.startDate && vm.endDate))
                vm.dateRange = 'month';
            if (!vm.currentComponent || !_.existsBy(vm.components, vm.currentComponent, 'name'))
                vm.currentComponent = 'dashboard';

            setSelectedIndex();
            updateCrumb();
        }


        vm.uiOnParamsChanged = function(newValues, $transition$) {
            vm.startDate = moment($transition$.params().startDate, 'DD-MM-YYYY').toDate();
            vm.endDate = moment($transition$.params().endDate, 'DD-MM-YYYY').toDate();
            vm.currentComponent = $transition$.params().currentComponent;
            vm.dateSelectorInstance.updateDates(vm.startDate, vm.endDate);
            setSelectedIndex();
            updateCrumb();
        }

        function setDateRange(startDate, endDate) {
            vm.startDate = startDate;
            vm.endDate = endDate;
            vm.dateSelectorInstance.updateDates(startDate, endDate);
            $state.go('.', {
                startDate: moment(vm.startDate).format('DD-MM-YYYY'),
                endDate: moment(vm.endDate).format('DD-MM-YYYY'),
                currentComponent: vm.currentComponent
            });
            updateCrumb();
        }

        function changeComponent(component) {
            vm.currentComponent = component;
            $state.go('.', {
                startDate: moment(vm.startDate).format('DD-MM-YYYY'),
                endDate: moment(vm.endDate).format('DD-MM-YYYY'),
                currentComponent: vm.currentComponent,
                status: ''
            });
        }

        function setSelectedIndex() {
            vm.selectedIndex =  _.findIndex(vm.components, {name: vm.currentComponent});
        }

        function updateCrumb() {
            breadCrumbService.pop();
            breadCrumbService.push({
                name: `Analytics (${moment(vm.startDate).format('MMM DD, YYYY')} to ${moment(vm.endDate).format('MMM DD, YYYY')})`
            })
        }
    }
})(angular.module('selfcare'));