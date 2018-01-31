(function(app) {
    'use strict';
    app.component('appKeywordComponent', {
        templateUrl: 'resources/app/components/appKeywordComponent/appKeywordComponent.html',
        controller: appKeywordComponentController,
        controllerAs: 'vm',
        bindings: {
            appid: '<'
        }        
    })

    appKeywordComponentController.$inject = ['$localStorage', 'commonDataService'];

    function appKeywordComponentController($localStorage, commonDataService) {
        var vm = this;
        vm.getDetailedService = getDetailedService;

        vm.$onInit = function(){
            vm.app = $localStorage.userApps[vm.appid];
            getnSetLanguages();
        }

        function getnSetLanguages(){
            commonDataService.fetchLanguages().then((languages)=>{
                vm.languages = languages;
                vm.selectedLanguage = vm.languages[0]; 
                vm.showAccordions = true;
            })
        }

        function getDetailedService(service){
            return $localStorage.userServices[service.serviceid];
        }
    }
})(angular.module('selfcare'));