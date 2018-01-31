(function(app) {
    'use strict';
    app.component('manageRequestsComponent', {
        templateUrl: 'resources/app/components/manageRequestsComponent/manageRequestsComponent.html',
        controller: manageRequestsComponentController,
        controllerAs: 'vm',
        bindings: {
            status: '<',
            sharedata: '&'
        }
    })

    manageRequestsComponentController.$inject = ['$scope','$localStorage', 'usersService', 'onboardService', 'customDialogService', 'customToastService', '$mdDialog', 'questionnaireService','$rootScope'];

    function manageRequestsComponentController($scope,$localStorage, usersService, onboardService, customDialogService, customToastService, $mdDialog, questionnaireService,$rootScope) {
        var vm = this;
        vm.viewDetails = viewDetails;
        vm.approveRequest = approveRequest;
        vm.rejectRequest = rejectRequest;
        vm.editUser = editUser;
        vm.viewQuestionnaire = viewQuestionnaire;
        vm.filterRequests = filterRequests;
        vm.sortApps=sortApps;
        vm.statuses = ['pending', 'approved', 'rejected'];
        var pending_count;
        vm.icons = {
            pending: 'access_time',
            approved: 'done_all',
            rejected: 'close'
        }

        vm.$onInit = function() {
            tabChanged();
            sortApps();
        }

        vm.uiOnParamsChanged = function(newValues, $transition$) {
            vm.status = newValues.status;
            tabChanged();
        }
        var requestLength;

        function editUser(request) {
            request.getUserPromise = usersService.getSubUserDetails(request.emailId).then((detailedUser) => {
            	
                customDialogService.showComponent({
                    component: 'viewAndEditUserComponent',
                    bindings: {
                        user: detailedUser,
                        forDialog: true
                    },
                    clickOutsideToClose: false
                }).then(() => {
                    customToastService.freeText('User Details have been successfully updated.');
                })
            })
        }

        function tabChanged() {
            delete vm.startDate;
            delete vm.endDate;
            delete vm.search;
            vm.hadResults = false;
            vm.selectedTabIndex = vm.statuses.indexOf(vm.status);
            vm.requests = null;
            vm.requestsBackup = null;
            vm.getRequestsPromise = onboardService.fetchOnboardingRequests(vm.status).then((requests) => {
            	
            	//console.log("..............requests.length........................"+requests.length);
            	$rootScope.tlen=(requests).length;
            	//alert($rootScope.tlen);
            	$scope.$emit('onboardCountUpdate', $rootScope.tlen)
            	vm.length=requests.length;
                vm.requestsBackup = _.cloneDeep(requests);
                vm.requests = requests;
                fetchQsSubmittedUsers();
            })
        }
        function sortApps() { 
        
        	if(!vm.sortType)
        		vm.sortType='latestFirst';
            switch (vm.sortType) {
            case 'latestFirst':
            	vm.requests = _(vm.requests).orderBy((request)=> moment(request.cdate,'DD/MM/YYYY hh:mm').valueOf(), ['desc']).value();
                break;
            case 'oldestFirst':
            	vm.requests = _(vm.requests).orderBy((request)=> moment(request.cdate,'DD/MM/YYYY hh:mm').valueOf(), ['asc']).value();
                break;
            }
        }

        function fetchQsSubmittedUsers() {
            if (vm.status == 'approved' && _.existsBy($localStorage.userRights, 'viewQuestionaire', 'rightName'))
                usersService.getSubmittedUsers().then((submittedUsers) => {
                    _.map(vm.requests, (request) => {
                        request.hasSubmitted = !!_.find(submittedUsers, { userId: request.userId });
                    })
                })
        }

        function viewQuestionnaire(request) {
            request.getUserQuesionnairePromise = questionnaireService.getSubUserQuestionnaire(request.userId);
            request.getUserQuesionnairePromise.then((questionnaire) => {
                customDialogService.showComponent({
                    component: 'previewQuestionnaireComponent',
                    bindings: {
                        readOnly: true,
                        masterJson: questionnaire.masterJson,
                        responseJson: questionnaire.responseJson,
                        user: request
                    },
                    clickOutsideToClose: true
                })
            });
        }

        function viewDetails(request) {
        	
            customDialogService.showComponent({
                component: 'viewOnboardingRequestComponent',
                bindings: {
                    request: request,
                    forDialog: true,
                    readOnly: vm.status != 'pending'
                }
            }).then(() => {
            	  _.pull(vm.requests, request);
                  $rootScope.tlen=(vm.requests).length;
                  $scope.$emit('onboardCountUpdate', $rootScope.tlen)
                  $location.reload();
                
            })
        }

        function approveRequest(request) {
            customDialogService.showComponent({
                component: 'promptComponent',
                bindings: {
                    title: 'Approval Comment (Optional)',
                    ok: 'Approve',
                    cancel: 'Cancel',
                    initialValue: 'Approved by NEGD',
                    onSubmit: (comment) => {
                        return onboardService.approveRequest(request.requestId, comment).then(() => {
                            customToastService.freeText('Request has been successfully approved!');
                            _.pull(vm.requests, request);
                            $rootScope.tlen=(vm.requests).length;
                            $scope.$emit('onboardCountUpdate', $rootScope.tlen)
                        });
                    }
                }
            });
        }

        function rejectRequest(request) {
        	
            customDialogService.showComponent({
                component: 'promptComponent',
                bindings: {
                    title: 'Rejection Comment',
                    ok: 'Reject',
                    cancel: 'Cancel',
                    initialValue: 'Rejected by NEGD',
                    onSubmit: (comment) => {
                    
                        return onboardService.rejectRequest(request.requestId, comment).then(() => {
                            customToastService.freeText('Request has been successfully rejected!');
                            _.pull(vm.requests, request);
                            $rootScope.tlen=(vm.requests).length;
                            $scope.$emit('onboardCountUpdate', $rootScope.tlen)
                        });
                    }
                }
            });
        }

        function filterRequests(request) {
        	
            let bool = true;

            if(vm.startDate)
                bool = bool && moment(request.cdate,'DD/MM/YYYY hh:mm').isSameOrAfter(vm.startDate, 'day');

            if(vm.endDate)
                bool = bool && moment(request.cdate,'DD/MM/YYYY hh:mm').isSameOrBefore(vm.endDate, 'day');

            if(vm.searchText)
                bool = bool && request.organizationName.toLowerCase().includes(vm.searchText.toLowerCase());

            return bool;
        }

    }
})(angular.module('selfcare'));