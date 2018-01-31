(function(app) {
    'use strict';
    app.component('promptComponent', {
        templateUrl: 'resources/app/components/_commonComponents/promptComponent/promptComponent.html',
        controller: promptComponentController,
        controllerAs: 'vm',
        bindings: {
        	title: '<',
        	initialValue: '<',
        	cancel: '<',
        	ok: '<',
        	onSubmit: '&',
            pattern: '<',
            name: '<',
            type: '<',
            required: '<',
            dontSaveIfSame: '<',
            helpText: '<',
            multiline: '<',
            maxLength: '<'
        }        
    })

    promptComponentController.$inject = ['$localStorage', '$mdDialog','$state'];

    function promptComponentController($localStorage, $mdDialog, $state) {
        var vm = this;
        vm.cancelAction = cancelAction;
        vm.submitAction = submitAction;

        vm.$onInit = function(){
            vm.initialValue = vm.initialValue || '';
        	vm.text = vm.initialValue || '';
            vm.ok = vm.ok || 'Ok';
            vm.cancel = vm.cancel || 'Cancel';
            vm.pattern = vm.pattern || '';
            vm.type = vm.type || 'text';
        }

        function cancelAction () {
        	$mdDialog.cancel();
        }

        function submitAction() {
        	if(vm.onSubmit){
        		vm.submitPromise = vm.onSubmit()(vm.text);
        		vm.submitPromise.then(() => {
        			$mdDialog.hide(vm.text);
        		})
        	$state.reload();
        	} else {
        		$mdDialog.hide(vm.text);
        	}
        }
    }
})(angular.module('selfcare'));