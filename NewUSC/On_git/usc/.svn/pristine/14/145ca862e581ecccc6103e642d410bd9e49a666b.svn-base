(function(app) {
    'use strict';
    app.component('analyticsDemogComponent', {
        templateUrl: 'resources/app/components/analyticsComponents/analyticsDemogComponent/analyticsDemogComponent.html',
        controller: analyticsDemogComponentController,
        controllerAs: 'vm',
        bindings: {
            startDate: '<',
            endDate: '<'
        }
    })

    analyticsDemogComponentController.$inject = ['$localStorage', 'analyticsUserService'];

    function analyticsDemogComponentController($localStorage, analyticsUserService) {
        var vm = this;
        vm.changeCriteria = changeCriteria;
        vm.onSeriesClick = onSeriesClick;
        vm.criterias = [{
            text: 'Gender',
            value: 'gender',
            icon: 'wc'
        }, {
            text: 'Age Bucket',
            value: 'age',
            icon: 'group'
        }, {
            text: 'Qualification',
            value: 'qual',
            icon: 'school'
        }, {
            text: 'Occupation',
            value: 'occup',
            icon: 'business_center'
        }, {
            text: 'Language',
            value: 'lang',
            icon: 'translate'
        }, {
            text: 'Location',
            value: 'location',
            icon: 'location_city'
        }];

        vm.$onChanges = function() {
            vm.selectedCriteria = vm.selectedCriteria || _.head(vm.criterias);
            getData();
        }

        function getData() {
            vm.sub = {};
            delete vm.getSubDataPromise;
            vm.getDataPromise = analyticsUserService.getCriteriaData({
                criteria: vm.selectedCriteria.value,
                startDate: vm.startDate,
                endDate: vm.endDate
            }).then((json) => {
                vm.json = json;
            })
        }

        function changeCriteria(criteria) {
            if (criteria.value == 'lang')
                vm.onSeriesClick = null;
            else
                vm.onSeriesClick = onSeriesClick;

            vm.selectedCriteria = criteria;
            getData();
        }

        function onSeriesClick(xValue) {
            vm.sub = {};
            angular.element(document.getElementById('analyticsComponent')).scrollTo(0, 200, 600);
            vm.getSubDataPromise = analyticsUserService.getSubCriteriaData({
                subCriteria: xValue,
                criteria: vm.selectedCriteria.value,
                startDate: vm.startDate,
                endDate: vm.endDate,
            }).then((jsons) => {
                vm.sub.ageJson = jsons.ageJson;
                vm.sub.genderJson = jsons.genderJson;
                vm.sub.qualJson = jsons.qualJson;
                vm.sub.occupJson = jsons.occupJson;
                vm.sub.districtJson = jsons.districtJson;
                angular.element(document.getElementById('analyticsComponent')).scrollTo(0, 500, 600);
            });
        }
    }
})(angular.module('selfcare'));