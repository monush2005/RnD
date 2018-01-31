(function(app) {
    'use strict';
    app.component('viewDirectoryComponent', {
        templateUrl: 'resources/app/components/directoryComponents/viewDirectoryComponent/viewDirectoryComponent.html',
        controller: viewDirectoryComponentController,
        controllerAs: 'vm',
        bindings: {

        }
    })

    viewDirectoryComponentController.$inject = ['$localStorage', 'directoryService', 'customDialogService', 'customToastService'];

    function viewDirectoryComponentController($localStorage, directoryService, customDialogService, customToastService) {
        var vm = this;
        vm.editDept = editDept;
        vm.deleteDept = deleteDept;
        vm.afterSaveDept = afterSaveDept;
        vm.onCancelEdit = onCancelEdit;
        

        vm.$onInit = function() {
            fetchAllDepts();
        }

        vm.uiCanExit = function() {
            if (vm.editing && vm.editor && vm.editor.isFormDirty && vm.editor.isFormDirty()) {
                return customDialogService.confirm('cancel editing');
            }
        }

        function fetchAllDepts() {
            vm.fetchDeptPromise = directoryService.fetchAllDept().then((depts) => {
                vm.depts = depts;
            })
        }

        function deleteDept(dept) {
            customDialogService.confirm(`permanently delete <b>${dept.deptName}</b>`, true).then(() => {
                dept.deletePromise = directoryService.deleteDept(dept.deptId).then(() => {
                    customToastService.freeText(`${dept.deptName} has been successfully deleted!`);
                    _.pull(vm.depts, dept);
                })
            })
        }

        function editDept(dept) {
        
            vm.editing = true;
            vm.currentlyEditing = _.cloneDeep(dept);
            angular.element(document.getElementById('directoryView')).scrollTo(0, 0, 600);
        }

        function onCancelEdit() {
            vm.editing = false;
            vm.currentlyEditing = null;
        }

        function afterSaveDept(dept) {
            vm.editing = false;
            _.pullAllBy(vm.depts, [dept], 'deptId');
            vm.currentlyEditing = null;
            _.insertSortedBy(vm.depts, dept, 'deptName');
            customToastService.freeText(`${dept.deptName} has been successfully updated!`);
        }
    }
})(angular.module('selfcare'));