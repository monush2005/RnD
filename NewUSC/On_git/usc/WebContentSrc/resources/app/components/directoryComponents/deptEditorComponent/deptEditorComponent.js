(function(app) {
    'use strict';
    app.component('deptEditorComponent', {
        templateUrl: 'resources/app/components/directoryComponents/deptEditorComponent/deptEditorComponent.html',
        controller: deptEditorComponentController,
        controllerAs: 'vm',
        bindings: {
            deptModel: '<',
            editMode: '<',
            afterSave: '&',
            onCancel: '&',
            api: '='
        }
    })

    deptEditorComponentController.$inject = ['$localStorage', 'directoryService', 'customDialogService', 'appServiceProfileService', '$mdDialog', '$state'];

    function deptEditorComponentController($localStorage, directoryService, customDialogService, appServiceProfileService, $mdDialog, $state) {
        var vm = this;
        vm.editWorkingHours = editWorkingHours;
        vm.saveDept = saveDept;
        vm.cancel = cancel;
        vm.uiCanExit = cancel;


        vm.$onInit = function() {
            vm.deptModel = vm.deptModel || {};
            vm.deptModelBackup = _.cloneDeep(vm.deptModel);
            vm.emailPattern = envVars.emailPattern;
            vm.urlPattern = envVars.urlPattern;
            vm.mutipleHelplinePattern = envVars.mutipleHelplinePattern;
            vm.title = vm.editMode ? 'Edit Department' : 'Create New Department';

            vm.api = {
                triggerCancel: cancel,
                isFormDirty: isFormDirty
            }
        }

        function cancel(transition) {
            let cancelAction = () => {
                if (vm.editMode) {
                    vm.onCancel()();
                    return true;
                } else {
                    if (transition)
                        return true;
                    else
                        $state.go('selfcare.directory.view');
                }
            }

            return isFormDirty() ? customDialogService.confirm('cancel editing').then(cancelAction) : cancelAction();
        }

        function isFormDirty() {
            return !_.isEqual(vm.deptModel, vm.deptModelBackup);
        }

        function saveDept() {
            if (vm.editMode) {
                vm.savePromise = directoryService.updateDept(vm.deptModel).then(() => {
                    vm.afterSave()(vm.deptModel);
                })
            } else {
                vm.savePromise = directoryService.addNewDept(vm.deptModel).then(() => {
                    var confirmDialog = $mdDialog.confirm()
                        .title('Department Created!')
                        .htmlContent(`<b>${vm.deptModel.deptName}</b> department has been created. What would you like to do next?`)
                        .ok('Add Another Department')
                        .cancel('View All Departments')

                    $mdDialog.show(confirmDialog)
                        .then(() => {
                            vm.deptModel = {};
                            $state.reload('selfcare.directory.createNew');
                        }).catch(() => {
                            vm.deptModel = {};
                            $state.go('selfcare.directory.view');
                        })
                })
            }
        }

        function editWorkingHours() {
            customDialogService.showComponent({
                component: 'workingHoursComponent',
                clickOutsideToClose: false,
                bindings: {
                    startDay: vm.startDay,
                    endDay: vm.endDay,
                    startTime: vm.startTime,
                    endTime: vm.endTime,
                    title: 'Working Hours',
                    ok: 'Ok',
                    onSubmit: (wh) => {
                        vm.startDay = wh.startDay;
                        vm.endDay = wh.endDay;
                        vm.startTime = wh.startTime;
                        vm.endTime = wh.endTime;
                        var promise = appServiceProfileService.convertWorkingHours(wh.startTime, wh.endTime, wh.startDay, wh.endDay);
                        return promise.then((wHrs) => {
                            let enWH = wHrs.en;
                            vm.deptModel.workingHours = enWH;
                            return enWH;
                        })
                    }
                }
            })
        }
    }
})(angular.module('selfcare'));