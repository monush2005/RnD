(function(app) {
    'use strict';
    app.component('viewOnboardingRequestComponent', {
        templateUrl: 'resources/app/components/manageRequestsComponent/viewOnboardingRequestComponent/viewOnboardingRequestComponent.html',
        controller: viewOnboardingRequestComponentController,
        controllerAs: 'vm',
        bindings: {
            request: '<',
            forDialog: '<',
            readOnly: '<'
        }
    })

    viewOnboardingRequestComponentController.$inject = ['$localStorage', 'onboardService', 'commonDataService', 'customToastService', '$mdDialog','$state','customDialogService','$location'];

    function viewOnboardingRequestComponentController($localStorage, onboardService, commonDataService, customToastService, $mdDialog ,$state,customDialogService,$location) {
        var vm = this;
        vm.cancel = cancel;
        vm.approve = approve;
        vm.reject = reject;
        vm.editUser=editUser;

        vm.$onInit = function() {
            if (vm.request.stateCentral != '99')
                getStateName();
        }

        function getStateName() {
            commonDataService.fetchStates().then((states) => {
            	
                vm.request.stateName = _.find(states, { stateid: vm.request.stateCentral }).statename;
            })
        }

        function cancel() {
            $mdDialog.cancel();
        }

        function approve() {
            vm.approvePromise = onboardService.approveRequest(vm.request.requestId, vm.request.comments).then(() => {
                customToastService.freeText('Request has been successfully approved!');
                $mdDialog.hide();
             
            })
           // $location.reload();
           
        }

        function reject() {
        	
        	  customDialogService.showComponent({
                  component: 'promptComponent',
                  bindings: {
                      title: 'Rejection Comment (Optional)',
                      ok: 'Reject',
                      cancel: 'Cancel',
                      initialValue: 'Rejected by NEGD',
                      onSubmit: (comment) => {
                    	 
                          return onboardService.rejectRequest(vm.request.requestId, comment).then(() => {
                              customToastService.freeText('Request has been successfully rejected!');
                              $mdDialog.hide();
                             
                          });
                       	
                      }
                      
                  }
        	  		
              });
        	
        	
         /*   vm.rejectPromise = onboardService.rejectRequest(vm.request.requestId, vm.request.comments).then(() => {
                customToastService.freeText('Request has been successfully rejected!');
                $mdDialog.hide();
            })*/
        }
        
        function editUser(){
           	$mdDialog.cancel();
           	$state.go('selfcare.users.edit');
           }


    }
})(angular.module('selfcare'));
