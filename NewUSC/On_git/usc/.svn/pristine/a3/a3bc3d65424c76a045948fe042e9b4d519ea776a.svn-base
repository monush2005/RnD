(function(app) {
    'use strict';
    app.component('umangFaqComponent', {
        templateUrl: 'resources/app/components/umangFaqComponent/umangFaqComponent.html',
        controller: umangFaqComponentController,
        controllerAs: 'vm',
        bindings: {

        }        
    })

    umangFaqComponentController.$inject = ['$localStorage'];

    function umangFaqComponentController($localStorage) {
        var vm = this;

        vm.$onInit = function(){
        	vm.mailTo = encodeURI(`mailto:${envVars.spiceMail}?Subject=Request for change in UMANG FAQ`);
        }
    }
})(angular.module('selfcare'));