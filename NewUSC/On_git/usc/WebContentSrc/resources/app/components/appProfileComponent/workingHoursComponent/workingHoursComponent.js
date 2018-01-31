(function(app) {
    'use strict';
    app.component('workingHoursComponent', {
        templateUrl: 'resources/app/components/appProfileComponent/workingHoursComponent/workingHoursComponent.html',
        controller: workingHoursComponentController,
        controllerAs: 'vm',
        bindings: {
            startDay: '<',
            endDay: '<',
            startTime: '<',
            endTime: '<',
            title: '<',
            ok: '<',
            onSubmit: '&'
        }
    })

    workingHoursComponentController.$inject = ['$localStorage', '$mdDialog'];

    function workingHoursComponentController($localStorage, $mdDialog) {
        var vm = this;
        vm.wh = {};
        vm.cancelAction = cancelAction;
        vm.submitAction = submitAction;
        vm.validateEndDay = validateEndDay;
        vm.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


        vm.$onInit = function() {
            vm.wh.startDay = vm.startDay;
            vm.wh.endDay = vm.endDay;
            vm.wh.startTime = vm.startTime && moment(vm.startTime).format('HH:mm');
            vm.wh.endTime = vm.endTime && moment(vm.endTime).format('HH:mm')

            vm.timePattern = envVars.timePattern;

            vm.ok = vm.ok || 'Save';
            vm.title = vm.title || 'Edit Working Hours';
        }

        function submitAction() {
            let wh = _.cloneDeep(vm.wh);
            wh.startTime = moment(wh.startTime, 'HH:mm');
            wh.endTime = moment(wh.endTime, 'HH:mm');
            vm.submitPromise = vm.onSubmit()(wh).then(() => {
                $mdDialog.hide();
            })
        }

        function cancelAction() {
            $mdDialog.cancel();
        }

        function validateEndDay() {
            vm.whForm.endDay.$setValidity('sameDay', vm.wh.startDay != vm.wh.endDay)
        }
    }
})(angular.module('selfcare'));