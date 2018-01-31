(function(app) {
    'use strict';
    app.component('serviceKeywordComponent', {
        templateUrl: 'resources/app/components/serviceKeywordComponent/serviceKeywordComponent.html',
        controller: serviceKeywordComponentController,
        controllerAs: 'vm',
        bindings: {
            serviceid : '<'
        }
    })

    serviceKeywordComponentController.$inject = ['$localStorage','commonDataService'];

    function serviceKeywordComponentController($localStorage, commonDataService) {
        var vm = this;

        vm.$onInit = function() {
            vm.service = $localStorage.userServices[vm.serviceid];
            getnSetLanguages();
        }

        function getnSetLanguages() {
            commonDataService.fetchLanguages().then((languages) => {
                vm.languages = languages;
                vm.selectedLanguage = vm.languages[0];
                vm.showAccordions = true;
            })
        }
    }
})(angular.module('selfcare'));
