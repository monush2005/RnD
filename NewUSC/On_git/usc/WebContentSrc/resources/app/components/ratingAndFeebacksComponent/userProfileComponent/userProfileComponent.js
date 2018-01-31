(function(app) {
    'use strict';
    app.component('userProfileComponent', {
        templateUrl: 'resources/app/components/ratingAndFeebacksComponent/userProfileComponent/userProfileComponent.html',
        controller: userProfileComponentController,
        controllerAs: 'vm',
        bindings: {
        	profile: '<'
        }        
    })

    userProfileComponentController.$inject = ['$localStorage'];

    function userProfileComponentController($localStorage) {
        var vm = this;

        vm.$onInit = function(){
        console.log(JSON.stringify(vm.profile.userinfo[0].name));

        if(vm.profile.userinfo[0].name == "Not Registered")
            vm.profile.userinfo[0].name= "NA"
        if(vm.profile.userinfo[0].email == "Not Registered")
            vm.profile.userinfo[0].email= "NA"
        if(vm.profile.userinfo[0].addr == "Not Registered")
            vm.profile.userinfo[0].addr= "NA"
        if(vm.profile.userinfo[0].state == "Not Registered")
            vm.profile.userinfo[0].state= "NA"        
        }
    }
})(angular.module('selfcare'));