(function(app) {
    'use strict';
    app.component('fillQuestionnaireComponent', {
        templateUrl: 'resources/app/components/questionnaireComponents/fillQuestionnaireComponent/fillQuestionnaireComponent.html',
        controller: questionnaireComponentController,
        controllerAs: 'vm',
        bindings: {

        }
    })

    questionnaireComponentController.$inject = ['questionnaireService', '$mdDialog', '$state'];

    function questionnaireComponentController(questionnaireService, $mdDialog, $state) {
        var vm = this;

        vm.previewOptions = {
            autoStart: true
        }
        vm.saveDraft = saveDraft;

        vm.$onInit = function() {
            vm.masterFormPromise = questionnaireService.getMyQuestionnaire();

            vm.masterFormPromise.then((data) => {
                vm.masterForm = data.masterJson;
                vm.responseData = data.responseJson;
                vm.isSubmitted = data.isSubmitted;

                if (!_.isEqual(vm.masterForm, {}))
                    vm.isForm = true;
            })
        }

        function saveDraft(isSubmit) {
            vm.saveDraftPromise = questionnaireService.saveMyQuestionnaire(vm.masterForm, vm.responseData, isSubmit);

            let message = 'You draft has been successfully saved!';
            if (isSubmit)
                message = 'You Questionnaire has been successfully submitted!';

            vm.saveDraftPromise.then(() => {
                $mdDialog.show(
                    $mdDialog.alert()
                    .title('Saved Successfully!')
                    .textContent(message)
                    .ok('Ok')
                ).then(() => {
                    vm.isSubmitted = isSubmit;
                    if(isSubmit)
                        $state.reload('selfcare.questionnaire.fill');
                })
            })
            return vm.saveDraftPromise;
        }
    }
})(angular.module('selfcare'));