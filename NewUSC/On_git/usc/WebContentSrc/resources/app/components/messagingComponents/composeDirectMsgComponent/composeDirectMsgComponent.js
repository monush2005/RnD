(function(app) {
    'use strict';
    app.component('composeDirectMsgComponent', {
        templateUrl: 'resources/app/components/messagingComponents/composeDirectMsgComponent/composeDirectMsgComponent.html',
        controller: composeDirectMsgComponentController,
        controllerAs: 'vm',
        bindings: {
        	subUsers: '<'
        }        
    })

    composeDirectMsgComponentController.$inject = ['$localStorage', '$mdDialog', 'messagingService'];

    function composeDirectMsgComponentController($localStorage, $mdDialog, messagingService) {
        var vm = this;
        vm.cancel = cancel;
		vm.send = send;

        vm.$onInit = function(){
            vm.message = $localStorage.userInfo.signature?('\n\n'+$localStorage.userInfo.signature):'';
        }

        function cancel() {
        	$mdDialog.cancel();
        }

        function send() {
            vm.sendPromise = messagingService.directMsgSend(vm.selectedUser.userId, vm.message).then(() => {
                $mdDialog.hide();
            })
        }
    }
})(angular.module('selfcare'));