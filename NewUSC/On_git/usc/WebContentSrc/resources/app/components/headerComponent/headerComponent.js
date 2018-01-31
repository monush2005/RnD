(function(app) {
    'use strict';
    app.component('headerComponent', {
        templateUrl: 'resources/app/components/headerComponent/headerComponent.html',
        controllerAs: 'vm',
        controller: headerComponentController
    })

    headerComponentController.$inject = ['loginService','ngProgressService', '$state', '$localStorage', '$mdSidenav', 'breadCrumbService','customDialogService']

    function headerComponentController(loginService, ngProgressService, $state, $localStorage, $mdSidenav, breadCrumbService,customDialogService) {
        var vm = this;
         
        vm.logout = logout;
        vm.$mdSidenav = $mdSidenav;
        vm.breadCrumbService = breadCrumbService;
       

        function logout() {
            vm.logoutPromise = loginService.logout()
                .finally((response) => {
                    $localStorage.$reset();
                    $state.go('login');
                });
        }
     vm.userinfo=$localStorage.userInfo;
     vm.status=vm.userinfo.status;
     vm.mno=vm.userinfo.mno;
     vm.emailId=vm.userinfo.emailId;
     vm.cdate=vm.userinfo.cdate;
     vm.signature=vm.userinfo.signature;
    vm.statecentral=$localStorage.stateCentral[0];
    
    if(vm.statecentral.length>3 && vm.statecentral.match(/99/g)){
 	   vm.name="All"		
    }else if(vm.statecentral=="99"){
 	  vm.name="Central";
   }else{
 	  vm.name="State";
   }
    vm.isSuperAdmin = $localStorage.userRole.logicalName.toLowerCase() == 'superadmin';  
    if(vm.isSuperAdmin)
    	vm.name="All";
   
    }

})(angular.module('selfcare'));
