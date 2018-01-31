(function(app) {
    'use strict';
    app.component('attScreenComponent', {
        templateUrl: 'resources/app/components/attentionScreenComponents/attScreenComponent/attScreenComponent.html',
        controller: attScreenComponentController,
        controllerAs: 'vm',
        bindings: {
            screen: '<',
            active: '<',
            date: '<',
            onSchedule: '&'
        }
    })

    attScreenComponentController.$inject = ['$localStorage', 'attentionScreenService', 'customDialogService', 'customToastService'];

    function attScreenComponentController($localStorage, attentionScreenService, customDialogService, customToastService) {
        var vm = this;
        vm.deactivateScreen = deactivateScreen;
        vm.scheduleScreen = scheduleScreen;


        vm.$onInit = function() {

        }

        function deactivateScreen() {
            customDialogService.confirm('deactivate this screen for all dates').then(() => {
                vm.deactivatePromise = attentionScreenService.scheduleScreen(null, null, vm.screen.screenId).then(() => {
                    customToastService.freeText('Selected screen has been successfully deactivated.');
                    vm.onSchedule()();
                })
            });
        }

        function scheduleScreen() {
            customDialogService.showComponent({
                component: 'dateRangeSelectorComponent',
                bindings: {
                    startDate: moment().toDate(),
                    // endDate: moment().toDate(),
                    maxEndDate: moment().add(2, 'weeks').toDate(),
                    minStartDate:  moment().toDate()
                }
            }).then((dateRange) => {
                vm.schedulePromise = attentionScreenService.scheduleScreen(dateRange.startDate, dateRange.endDate, vm.screen.screenId)
                .then(() => {
                    customToastService.freeText('Selected screen has been successfully scheduled.');
                    vm.onSchedule()();
                }).catch((screen) => {

                })
            })
        }

    }
})(angular.module('selfcare'));