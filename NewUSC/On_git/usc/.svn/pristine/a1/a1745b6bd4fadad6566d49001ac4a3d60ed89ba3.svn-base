(function(app) {
    'use strict';
    app.component('previewQuestionnaireComponent', {
        templateUrl: 'resources/app/components/questionnaireComponents/previewQuestionnaireComponent/previewQuestionnaireComponent.html',
        controller: previewQuestionnaireComponentController,
        controllerAs: 'vm',
        bindings: {
            readOnly: '<',
            masterJson: '<',
            responseJson: '<',
            user: '<'
        }
    });

    previewQuestionnaireComponentController.$inject = ['questionnaireService', '$mdDialog', 'customToastService', '$timeout', 'mwFormResponseUtils', 'helperService'];

    function previewQuestionnaireComponentController(questionnaireService, $mdDialog, customToastService, $timeout, mwFormResponseUtils, helperService) {
        var vm = this;
        vm.cancel = cancel;
        vm.exportQuestionnaire = exportQuestionnaire;

        vm.previewOptions = {
            autoStart: true
        };
        vm.saveResponse = saveResponse;

        vm.$onInit = function() {
            if (vm.masterJson) {
                vm.masterFormPromise = $timeout();
                vm.isForm = true;
            } else {
                getMasterForm();
            }
        };

        function getMasterForm() {
            vm.masterFormPromise = questionnaireService.getMasterQuestionnaire();

            vm.masterFormPromise.then((form) => {
                vm.masterJson = form;
                vm.responseJson = {};
                if (!_.isEqual(form, {}))
                    vm.isForm = true;
            });
        }

        function saveResponse() {
            return $timeout(() => {
                customToastService.freeText('This was a dummy save to emulate how user will see the form. No Form was submitted.');
            }, 500);
        }

        function exportQuestionnaire() {
            let exportedJson = mwFormResponseUtils.getResponseSheet(vm.masterJson, vm.responseJson, true);
            let doc = new jsPDF();
            let firstPage = true;
            let index = 0;
            doc.setFontType('bold');
            doc.text(63, 20, 'UMANG Onboarding Questionnare');
            doc.setFontSize(14);
            doc.setFontType('normal');
            doc.text(55, 30, `Submitted By: ${vm.user.organizationName} (${vm.user.userId})`);
            _.times(exportedJson[0].length, () => {
                let pageHeight = doc.internal.pageSize.height - 20;
                let y = ((index + 1) * 20) + (firstPage ? 30 : 0);
                if (y >= pageHeight) {
                    doc.addPage();
                    firstPage = false;
                    index = 0;
                    y = ((index + 1) * 20) + (firstPage ? 30 : 0);
                }

                doc.setFontType('bold');
                doc.text(20, y, exportedJson[0][index]);

                pageHeight = doc.internal.pageSize.height - 20;
                y = ((index + 1) * 20) + (firstPage ? 40 : 10);
                if (y >= pageHeight) {
                    doc.addPage();
                    firstPage = false;
                    index = 0;
                    y = ((index + 1) * 20) + (firstPage ? 40 : 10);
                }

                doc.setFontType('normal');
                doc.text(30, y, exportedJson[1][index]);
                index++;
            });

            helperService.downloadFile(doc.output(), 'questionnaireExport.pdf');
        }

        function cancel() {
            $mdDialog.cancel();
        }
    }
})(angular.module('selfcare'));