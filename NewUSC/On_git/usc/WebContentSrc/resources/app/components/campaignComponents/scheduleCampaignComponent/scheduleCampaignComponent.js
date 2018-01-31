(function(app) {
    'use strict';
    app.component('scheduleCampaignComponent', {
        templateUrl: 'resources/app/components/campaignComponents/scheduleCampaignComponent/scheduleCampaignComponent.html',
        controller: scheduleCampaignComponentController,
        controllerAs: 'vm',
        bindings: {

        }
    })

    scheduleCampaignComponentController.$inject = ['$localStorage', 'campaignsService', 'customDialogService'];

    function scheduleCampaignComponentController($localStorage, campaignsService, customDialogService) {
        var vm = this;
        vm.loaders = {};

        vm.$onInit = function() {
            vm.campaignModel = {};
            vm.scheduleCampaign = scheduleCampaign;
        }

        vm.uiCanExit = function() {

        }

        function scheduleCampaign(campaignModel) {
            return campaignsService.scheduleCampaign(campaignModel);
        }
    }
})(angular.module('selfcare'));
