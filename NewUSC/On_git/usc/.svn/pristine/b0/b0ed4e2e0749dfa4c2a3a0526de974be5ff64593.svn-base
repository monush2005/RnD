(function(app) {
    'use strict';
    app.component('queryViewComponent', {
        templateUrl: 'resources/app/components/userQueryComponent/queryViewComponent/queryViewComponent.html',
        controller: queryViewComponentController,
        controllerAs: 'vm',
        bindings: {
            queryData: '<'
        }
    })

    queryViewComponentController.$inject = ['$localStorage', '$mdDialog', 'userQueryService'];

    function queryViewComponentController($localStorage, $mdDialog, userQueryService) {
        var vm = this;
        vm.$mdDialog = $mdDialog;
        vm.saveQueryStatus = saveQueryStatus;

        vm.$onInit = function() {
            vm.statusOptions = userQueryService.getQueryStatuses();
            vm.selectedStatus = _.find(vm.statusOptions, { value: vm.queryData.status });

            if(!vm.selectedStatus)
                vm.selectedStatus = _.find(vm.statusOptions, { value: 'forward_to_department' });
        }

        function saveQueryStatus() {
            vm.saveQueryPromise = userQueryService.saveQueryStatus({
                ticketId: vm.queryData.ticket_id,
                status: vm.selectedStatus.value,
                remarks: vm.queryData.remarks,
                mno: vm.queryData.user_mno
            }).then(() => {
                $mdDialog.hide({
                    newRemark: vm.queryData.remarks,
                    newStatus: vm.selectedStatus.value
                });
            })
        }
    }
})(angular.module('selfcare'));
