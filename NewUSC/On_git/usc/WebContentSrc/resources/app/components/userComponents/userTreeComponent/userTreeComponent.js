(function(app) {
    'use strict';
    app.component('userTreeComponent', {
        templateUrl: 'resources/app/components/userComponents/userTreeComponent/userTreeComponent.html',
        controller: userTreeComponentController,
        controllerAs: 'vm',
        bindings: {
        	tree: '<'
        }        
    })

    userTreeComponentController.$inject = ['$localStorage'];

    function userTreeComponentController($localStorage) {
        var vm = this;

        vm.$onInit = function(){
        
        }
    }
})(angular.module('selfcare'));