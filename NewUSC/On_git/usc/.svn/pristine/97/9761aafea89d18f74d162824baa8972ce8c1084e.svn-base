(function(app) {
    'use strict';
    app.component('requestComponent', {
        templateUrl: 'resources/app/components/_commonComponents/requestComponent/requestComponent.html',
        controller: requestComponentController,
        controllerAs: 'vm',
        bindings: {
            name: '<',
            subject: '<',
            onRequest: '&',
            initValue: '<',
            maxLength: '<'
        }
    })

    requestComponentController.$inject = ['$localStorage', '$mdDialog'];

    function requestComponentController($localStorage, $mdDialog) {
        var vm = this;
        vm.cancel = cancel;
        vm.submit = submit;

        vm.$onInit = function() {
            vm.newValue = vm.initValue;
            vm.maxLength = vm.maxLength || 1000;
        }

        function cancel() {
            $mdDialog.cancel();
        }

        function submit() {
            vm.requestPromise = vm.onRequest()({
                subject: vm.subject,
                newValue: vm.newValue,
                comment: vm.comment,
                name: vm.name
            })
            vm.requestPromise.then(() => {
                $mdDialog.hide(vm.name);
            })
        }
    }
})(angular.module('selfcare'));
