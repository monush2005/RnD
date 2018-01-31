(function(app) {
    'use strict';
    app.component('viewQsnrSubmissionsComponent', {
        templateUrl: 'resources/app/components/questionnaireComponents/viewQsnrSubmissionsComponent/viewQsnrSubmissionsComponent.html',
        controller: viewQsnrSubmissionsComponentController,
        controllerAs: 'vm',
        bindings: {

        }
    })

    viewQsnrSubmissionsComponentController.$inject = ['usersService', 'questionnaireService', 'customDialogService'];

    function viewQsnrSubmissionsComponentController(usersService, questionnaireService, customDialogService) {
        var vm = this;

        vm.getUserQuesionnaire = getUserQuesionnaire;

        vm.$onInit = function() {
            getSubmittedUsers();
        }

        function getUserQuesionnaire(user) {
            user.getUserQuesionnairePromise = questionnaireService.getSubUserQuestionnaire(user.userId);
            user.getUserQuesionnairePromise.then((questionnaire) => {
            	customDialogService.showComponent({
            		component: 'previewQuestionnaireComponent',
            		bindings: {
            			readOnly: true,
						masterJson: questionnaire.masterJson,
						responseJson: questionnaire.responseJson,
                        user: user
            		},
                    clickOutsideToClose: true
            	})
            });
            return user.getUserQuesionnairePromise;
        }

        function getSubmittedUsers() {
            vm.getsubmittedUsersPromise = usersService.getSubmittedUsers().then((users) => {
                vm.submittedUsers = users;
            })
        }
    }
})(angular.module('selfcare'));