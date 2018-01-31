(function(app) {
    'use strict';
    app.service('questionnaireService', questionnaireServiceFn);
    questionnaireServiceFn.$inject = ['httpService', '$timeout', '$localStorage'];

    function questionnaireServiceFn(httpService, $timeout, $localStorage) {
        var questionnaireService = this;
        questionnaireService.saveMasterQuestionnaire = saveMasterQuestionnaire;
        questionnaireService.getMasterQuestionnaire = getMasterQuestionnaire;
        questionnaireService.getSubUserQuestionnaire = getSubUserQuestionnaire;
        questionnaireService.getMyQuestionnaire = getMyQuestionnaire;
        questionnaireService.saveMyQuestionnaire = saveMyQuestionnaire;

        function saveMasterQuestionnaire(masterJson) {
            var payload = {
                json: JSON.stringify(masterJson)
            };
            return httpService.post('ques/saveMasterQues', payload);
        }

        function getMasterQuestionnaire() {
            return httpService.post('ques/getMasterQues', {}).then((response) => {
                return JSON.parse(response[0].json);
            });
        }

        function getSubUserQuestionnaire(userId) {
            var payload = {
                userId
            }
            return httpService.post('ques/getSubUserQues', payload).then((response) => {
                response = response[0];
                return {
                    masterJson: JSON.parse(response.masterJson),
                    responseJson: JSON.parse(response.responseJson)
                }
            });
        }

        function getMyQuestionnaire() {
            return httpService.post('ques/getParQues', {}).then((response) => {
                response = response[0];
                return {
                    masterJson: JSON.parse(response.masterJson) || {},
                    responseJson: JSON.parse(response.responseJson) || {},
                    isSubmitted: response.isSubmitted
                }
            });
        }

        function saveMyQuestionnaire(masterJson, responseJson, isSubmitted) {
            var payload = {
                masterJson: JSON.stringify(masterJson),
                responseJson: JSON.stringify(responseJson),
                isSubmitted: isSubmitted
            }
            return httpService.post('ques/saveDraftQues', payload);
        }
    }
})(angular.module('selfcare'));