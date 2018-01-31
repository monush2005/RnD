(function(app) {
    'use strict';
    app.component('createUserComponent', {
        templateUrl: 'resources/app/components/userComponents/createUserComponent/createUserComponent.html',
        controller: createUserComponentController,
        controllerAs: 'vm',
        bindings: {

        }
    })

    createUserComponentController.$inject = ['$mdSelect', '$localStorage', 'rolesRightsService', '$mdDialog', '$state', 'usersService', 'commonDataService'];

    function createUserComponentController($mdSelect, $localStorage, rolesRightsService, $mdDialog, $state, usersService, commonDataService) {
        var vm = this;
        vm.userData = {};
        vm.roles = [];
        vm.stateAdminDummyRole = {
            roleName: 'State Admin',
            roleId: '0'
        };
        vm.fetchedRolesOnce = false;
        vm.getRoles = getRoles;
        vm.createUser = createUser;
        vm.fetchStates = fetchStates;
        vm.filterAndLoadApps = filterAndLoadApps;
        vm.onAppDropdownOpen = onAppDropdownOpen;
         vm.sortright=sortright;
         var usertype;
        vm.$onInit = function() {
            vm.isSuperAdmin = $localStorage.userRole.logicalName.toLowerCase() == 'superadmin';
           
            
            console.log(JSON.stringify($localStorage.userInfo.statecentral));
            if($localStorage.userInfo.statecentral.length>3 && $localStorage.userInfo.statecentral.match(/99/g)){
            	vm.stateName="All"
            		vm.stateRadio='all'		
            }
            if (vm.isSuperAdmin) {
                vm.userData.state = '99';
            } else {
                vm.userData.state = $localStorage.userInfo.statecentral;
            }
             if(vm.isSuperAdmin)
            	 vm.stateRadio='all'
            		 
            vm.emailPattern = envVars.emailPattern;
            vm.mobilePattern = envVars.mobilePattern;
            filterAndLoadApps();
            fetchStates()
           
            
        }

        function filterAndLoadApps() {
        	usertype=vm.stateRadio;
            vm.userData.selectedApps = [];
            vm.allApps = _($localStorage.userApps).filter({ state: vm.userData.state }).map(_.trimAppDetails).value();
            if (vm.userData.state != '99' && vm.isSuperAdmin) {
                _.pull(vm.roles, vm.stateAdminDummyRole);
                vm.roles.push(vm.stateAdminDummyRole)
            } else {
                _.pull(vm.roles, vm.stateAdminDummyRole);
                if (vm.userData.role == vm.stateAdminDummyRole)
                    delete vm.userData.role;
            }
        }
        function sortright() { 
 	       if(!vm.sortType){
 	    	  vm.sortType="aToZ";
 	      
           // switch (vm.sortType) {
             //   case 'aToZ':
                	vm.roles = _(vm.roles).orderBy((role)=>_.toLower(role.roleName), ['asc']).value();
               //     break;
              
            }
 	       }
      
        function getRoles() {
            if (vm.fetchedRolesOnce)
                return; // to prevent fetching user roles every time dropdown is opened.

            return rolesRightsService.getMyRoles().then((roles) => {
            	
                vm.fetchedRolesOnce = true;
                if (roles.length) {
                    vm.roles = vm.roles.concat(roles);
                } else {
                    $mdSelect.hide();
                    var noRoleCreated = $mdDialog.confirm({
                        title: 'No Roles Available!',
                        textContent: 'You need to create a role first to create a user.',
                        ok: 'Go to Create Roles',
                        cancel: 'Close',
                        clickOutsideToClose: false
                    });

                    $mdDialog.show(noRoleCreated).then(() => {
                        $state.go('selfcare.roles.create');
                    })
                }
            }).then(() => {
            	sortright();
            })
            
        }

        function createUser() {
        	
        	
        	if(usertype=="all"){
        	vm.userData.state="32,23,4,29,3,9,5,13,30,18,10,20,8,33,34,28,25,21,22,2,24,16,7,11,1,12,31,37,27,19,36,14,35,15,26,99";
        	}else if(usertype=="state"){
        		vm.userData.state=vm.userData.state;
        	}else{
        		vm.userData.state="99";
        	}
              
              
            vm.createUserPromise = usersService.createUser(vm.userData).then(function(data) {
                var userCreated = $mdDialog.alert({
                    title: 'Successful!',
                    textContent: 'User has been created. Password for user has been sent to email and SMS.',
                    ok: 'OK',
                    clickOutsideToClose: true
                });

                $mdDialog.show(userCreated).then(() => {
                    $state.reload('selfcare.users');
                })
            });
        }

        function onAppDropdownOpen() {
        	
           /* if (!vm.userData.state){
                alert('Please select state first!');
            
            }*/
        	
            if(vm.userData.selectedApps.length<=0)
            	
            vm.allApps=_($localStorage.userApps).map(_.trimAppDetails).value();
        }

        function fetchStates() {
        	
            return commonDataService.fetchStates().then((states) => {
           
                states = _.intersectionWith(states, _.map($localStorage.userApps), (state, app) => {
                    return state.stateid == app.state;
                })
                vm.allStates = states;
            });
        }
    }
})(angular.module('selfcare'));