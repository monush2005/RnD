(function(app) {
    'use strict';
    app.component('createRoleComponentSaveAs', {
        templateUrl: 'resources/app/components/roleComponents/createRoleComponentSaveAs.html',
        controller: editRoleComponentControllerSaveAs,
        controllerAs: 'vm',
        bindings: {
        	role: '<',
        }
    })

    editRoleComponentControllerSaveAs.$inject = ['$localStorage', 'rolesRightsService', 'customDialogService', 'customToastService','$mdDialog','$state'];

    function editRoleComponentControllerSaveAs($localStorage, rolesRightsService, customDialogService, customToastService ,$mdDialog,$state) {
        var vm = this;
       
        vm.saveAs=saveAs;        
        vm.$onInit = function() {
            vm.rolesPromise = rolesRightsService.getMyRoles().then((roles) => {
            	
                vm.allRoles = roles;
               
            })
           
        }

        
     function saveAs(){
       
        var rightVal=rolesRightsService.getIds();
        var roleVal=rolesRightsService.getroleids();
        var rrrrr=_.filter(rightVal, 'selected');
       // console.log("rrrrr==========="+rrrrr);
       //console.log("rightVal"+ _.filter(rightVal, 'selected')+"roleVal"+roleVal);
       
      /*   vm.createRolePromise = rolesRightsService.createRole({
             roleName: vm.roleName,
             rights:rightVal
           
         }).then((data) => {
             var confirmDialog = $mdDialog.confirm()
                 .title('Role Created')
                 .htmlContent(`<b>${vm.roleName}</b> role has been created. What would you like to do next?`)
                 .ok('Create New User')
                 .cancel('Create another Role')

             $mdDialog.show(confirmDialog)
                 .then(() => {
                     $state.go('selfcare.users.create');
                 }).catch(() => {
                     $state.reload('selfcare.roles.create');
                 })
         })*/
               vm.saveRolePromise = rolesRightsService.createRole({
                   roleId: roleVal,
                   roleName: vm.roleName,
                   rights: rightVal
               }).then((data) => {
                   var confirmDialog = $mdDialog.confirm()
                   .title('Role Created')
                   .htmlContent(`<b>${vm.roleName}</b> role has been created. What would you like to do next?`)
                   .ok('Create New User')
                   .cancel('Create another Role')

               $mdDialog.show(confirmDialog)
                   .then(() => {
                       $state.go('selfcare.users.create');
                   }).catch(() => {
                       $state.reload('selfcare.roles.edit');
                   })
           })
               
               
           }
    }
})(angular.module('selfcare'));
