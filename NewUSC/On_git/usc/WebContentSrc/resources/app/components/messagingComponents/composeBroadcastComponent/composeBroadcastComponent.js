(function(app) {
    'use strict';
    app.component('composeBroadcastComponent', {
        templateUrl: 'resources/app/components/messagingComponents/composeBroadcastComponent/composeBroadcastComponent.html',
        controller: composeBroadcastComponentController,
        controllerAs: 'vm',
        bindings: {
        	subUsers: '<'
        }        
    })

    composeBroadcastComponentController.$inject = ['$localStorage', 'categoriesService', 'customToastService','messagingService', '$mdDialog'];

    function composeBroadcastComponentController($localStorage, categoriesService,customToastService, messagingService, $mdDialog) {
        var vm = this;
		vm.getCategories = getCategories;
		vm.cancel = cancel;
		vm.broadcast = broadcast;
		vm.$onInit = $onInit;

		function $onInit() {
        	vm.allApps = _($localStorage.userApps).map(_.trimAppDetails).value();
            vm.message = $localStorage.userInfo.signature?('\n\n'+$localStorage.userInfo.signature):'';
		}

        function getCategories() {
        	if(vm.allCategories)
        		return;
        	return categoriesService.fetchCategories().then((categories) => {
        		vm.allCategories = categories;
        	})
        }

        function cancel() {
        	$mdDialog.cancel();
        }

        function broadcast(){
        	vm.broadcastPromise = messagingService.broadcastMessage({
        		users: vm.selectedUsers,
        		categories: vm.selectedCategories,
        		apps: vm.selectedApps,
        		toSubusers: vm.toSubusers,
        		message: vm.message
        	}).then(() => {
        		$mdDialog.hide();
                customToastService.freeText('You message has been successfully sent.');
        	})
        }
    }
})(angular.module('selfcare'));