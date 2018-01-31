(function(app) {
    'use strict';
    app.component('roleChangedDialogComponent', {
        templateUrl: 'resources/app/components/_commonComponents/roleChangedDialogComponent/roleChangedDialogComponent.html',
        controller: roleChangedDialogController,
        controllerAs: 'vm',
        bindings: {
        	
        }        
    })

   roleChangedDialogController.$inject = ['$localStorage', '$mdDialog','$state'];

    function roleChangedDialogController($localStorage, $mdDialog, $state) {
        var vm = this;
              
        vm.viewRolesEdit = viewRolesEdit;

        vm.$onInit = function(){

        }

        function cancelAction () {
        	$mdDialog.cancel();
        }

        function viewRolesEdit(){
        	        	
        	$state.go('selfcare.roles.edit');
        	$mdDialog.hide();

        }
    }
})(angular.module('selfcare'));