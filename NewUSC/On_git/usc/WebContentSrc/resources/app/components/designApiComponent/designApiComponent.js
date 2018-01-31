(function(app) {
    'use strict';
    app.component('designApiComponent', {
        templateUrl: 'resources/app/components/designApiComponent/designApiComponent.html',
        controller: designApiComponentController,
        controllerAs: 'vm',
        bindings: {

        }        
    })

    designApiComponentController.$inject = ['$localStorage'];

    function designApiComponentController($localStorage) {
        var vm = this;

        vm.$onInit = function(){
        
        }
    }
})(angular.module('selfcare'));