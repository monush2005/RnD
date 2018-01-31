(function(app) {
    'use strict';
    app.component('latLongComponent', {
        templateUrl: 'resources/app/components/appProfileComponent/latLongComponent/latLongComponent.html',
        controller: latLongComponentController,
        controllerAs: 'vm',
        bindings: {
            latInit: '<lat',
            longInit: '<long',
            onSubmit: '&'
        }
    })

    latLongComponentController.$inject = ['$localStorage', '$mdDialog'];

    function latLongComponentController($localStorage, $mdDialog) {
        var vm = this;
        vm.cancelAction = cancelAction;
        vm.submitAction = submitAction;

        vm.$onInit = function() {
        	vm.lat = vm.latInit;
        	vm.long = vm.longInit;
        }

        function submitAction() {
            vm.submitPromise = vm.onSubmit()(vm.lat, vm.long);
            vm.submitPromise.then(() => {
                $mdDialog.hide({lat: vm.lat, long: vm.long});
            })
        }

        function cancelAction() {
            $mdDialog.cancel();
        }
    }
})(angular.module('selfcare'));