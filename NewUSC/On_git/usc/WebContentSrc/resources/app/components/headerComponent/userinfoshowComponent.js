(function(app) {
    'use strict';
    app.component('userinfoshowComponent', {
        templateUrl: 'resources/app/components/headerComponent/userinfoshowComponent.html',
        controllerAs: 'vm',
        controller: userinfoshowComponentController
    })

    userinfoshowComponentController.$inject = ['loginService','ngProgressService', '$state', '$localStorage', '$mdSidenav', 'breadCrumbService']

    function userinfoshowComponentController(loginService, ngProgressService, $state, $localStorage, $mdSidenav, breadCrumbService) {
        var vm = this;
        vm.id;
        vm.status;
        vm.mno;
        vm.cdate;
        vm.signature;
        vm.statecentral;
        vm.name;
     vm.userInfo=$localStorage.userInfo;
       console.log("gdfnghkldgdgkdfhlkdfghldfk"+JSON.stringify(vm.userInfo));
        vm.id=vm.userInfo.userId;
        
        vm.status=vm.userInfo.status;
        vm.mno=vm.userInfo.mno;
        vm.emailId=vm.userInfo.emailId;
        vm.cdate=vm.userInfo.cdate;
        vm.signature=vm.userInfo.signature;
       vm.statecentral=$localStorage.stateCentral[0];
      if(vm.statecentral=="99"){
    	  vm.name="Central";
      }else{
    	  vm.name="State";
      }
       
        
    }

})(angular.module('selfcare'));
