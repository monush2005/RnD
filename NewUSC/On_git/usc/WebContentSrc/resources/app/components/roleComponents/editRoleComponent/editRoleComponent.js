(function(app) {
    'use strict';
    app.component('editRoleComponent', {
        templateUrl: 'resources/app/components/roleComponents/editRoleComponent/editRoleComponent.html',
        controller: editRoleComponentController,
        controllerAs: 'vm',
        bindings: {

        }
    })

    editRoleComponentController.$inject = ['$localStorage', 'rolesRightsService', 'customDialogService', 'customToastService'];

    function editRoleComponentController($localStorage, rolesRightsService, customDialogService, customToastService) {
        var vm = this;
        vm.getAndEditRole = getAndEditRole;
         vm.sortApps=sortApps;
        vm.$onInit = function() {
        	
            vm.rolesPromise = rolesRightsService.getMyRoles().then((roles) => {
            	
                vm.allRoles = roles;
               
              if(vm.allRoles.length<=0)
            	    $("#roletable2").hide();
                  
              
            }).then(() => {
            	sortApps();    
            })
            
            
        }
        function sortApps() { 
        	
        	if(!vm.sortType)
        		vm.sortType='latestFirst';
            switch (vm.sortType) {
          
            case 'latestFirst':
            	vm.allRoles = _(vm.allRoles).orderBy((role)=> moment(role.creationDate ,'DD/MM/YYYY hh:mm').valueOf(), ['desc']).value();
                break;
            case 'oldestFirst':
            	vm.allRoles = _(vm.allRoles).orderBy((role)=> moment(role.creationDate,'DD/MM/YYYY hh:mm').valueOf(), ['asc']).value();
                break;
               
            }
        }
      

        function getAndEditRole(role) {
            role.getRolePromise = rolesRightsService.getRoleDetails(role.roleId).then((rightsForRole) => {
            	
                customDialogService.showComponent({
                    component: 'createRoleComponent',
                    clickOutsideToClose: false,
                    bindings: {
                        role: {roleName: role.roleName, roleId: role.roleId, rights: rightsForRole},
                        dialogMode: true
                    }
                }).then((newRoleName) => {
                    role.roleName = newRoleName;
                    customToastService.freeText('Changes to role have been successfully made!')
                })
            })
        }
    }
})(angular.module('selfcare'));
