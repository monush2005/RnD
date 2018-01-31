(function(app) {
    'use strict';
    app.component('analyticsTableComponent', {
        templateUrl: 'resources/app/components/analyticsComponents/analyticsTableComponent/analyticsTableComponent.html',
        controller: analyticsTableComponentController,
        controllerAs: 'vm',
        bindings: {
            table: '<',
            export: '<',
            exportName: '@'
        }
    })

    analyticsTableComponentController.$inject = ['helperService'];

    function analyticsTableComponentController(helperService) {
        var vm = this;
        vm.exportToCSV = exportToCSV;

        function exportToCSV() {
            let text = ''
            text+=vm.table.columns.join(',')
            text+='\n';
            _.each(vm.table.rows, (row) => {
                text+=row.join(',')
                text+='\n';
            });
            vm.exportName = vm.exportName || 'export';
            helperService.downloadFile(text, vm.exportName + '.csv');
        }
    }
})(angular.module('selfcare'));