(function(app) {
    'use strict';
    app.component('buildQuestionnaireComponent', {
        templateUrl: 'resources/app/components/questionnaireComponents/buildQuestionnaireComponent/buildQuestionnaireComponent.html',
        controller: buildQuestionnaireComponentController,
        controllerAs: 'vm',
        bindings: {

        }
    })

    buildQuestionnaireComponentController.$inject = ['mwFormResponseUtils', 'questionnaireService', 'customToastService', '$mdDialog', '$timeout'];

    function buildQuestionnaireComponentController(mwFormResponseUtils, questionnaireService, customToastService, $mdDialog, $timeout) {
        var vm = this;
        vm.saveForm = saveForm;

        vm.builderOptions = {
            questionTypes: ['text', 'textarea', 'radio', 'checkbox', 'priority', 'division', 'number', 'date', 'time', 'email', 'range', 'url'],
            elementTypes: ['question', 'paragraph'],
        }

        vm.$onInit = function() {
            vm.masterFormPromise = questionnaireService.getMasterQuestionnaire();

            vm.masterFormPromise.then((form) => {
                vm.masterForm = form;
                $timeout(() => {
                    vm.masterFormBackup = _.cloneDeep(form);
                })
            })
        }

        vm.uiCanExit = function(transition) {
            if (!_.isEqual(vm.masterForm, vm.masterFormBackup)){
                return $mdDialog.show(
                    $mdDialog.confirm()
                    .title('Changes not saved!')
                    .textContent('Do you want to save changes to questionnaire?')
                    .ok('Yes')
                    .cancel('No')
                ).then(() => {
                    return saveForm();
                }).catch(() => {
                    return true;
                })
            }
        }

        function saveForm() {
            vm.saveFormPromise = questionnaireService.saveMasterQuestionnaire(vm.masterForm);

            vm.saveFormPromise.then(() => {
                customToastService.freeText('Master Questionnaire has been saved.');
                vm.masterFormBackup = _.cloneDeep(vm.masterForm);
            })
            return vm.saveFormPromise;
        }
    }
})(angular.module('selfcare'));