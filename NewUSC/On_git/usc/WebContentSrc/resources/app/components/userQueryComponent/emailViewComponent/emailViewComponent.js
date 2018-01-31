(function(app) {
    'use strict';
    app.component('emailViewComponent', {
        templateUrl: 'resources/app/components/userQueryComponent/emailViewComponent/emailViewComponent.html',
        controller: emailViewComponentController,
        controllerAs: 'vm',
        bindings: {
        emailData: '<'
        }
    })

    emailViewComponentController.$inject = ['$localStorage', '$mdDialog', 'userQueryService'];

    function emailViewComponentController($localStorage, $mdDialog, userQueryService) {
        var vm = this;
        vm.$mdDialog = $mdDialog;
        vm.saveQueryStatus = saveQueryStatus;

        vm.$onInit = function() {
            vm.statusOptions = userQueryService.getQueryStatuses();
            vm.selectedStatus = _.find(vm.statusOptions, { value: vm.emailData.status });

            if (!vm.selectedStatus)
                vm.selectedStatus = _.find(vm.statusOptions, { value: 'forward_to_department' });
        }

        function saveQueryStatus() {
            vm.saveQueryPromise = userQueryService.saveQueryStatus({
                ticketId: vm.emailData.ticket_id,
                status: vm.selectedStatus.value,
                remarks: vm.emailData.remarks,
                email: vm.emailData.efrom
            }).then(() => {
                $mdDialog.hide({
                    newRemark: vm.emailData.remarks,
                    newStatus: vm.selectedStatus.value
                });
            })
        }
    }
})(angular.module('selfcare'));
