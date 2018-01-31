(function(app) {
    'use strict';
    app.component('viewCampaignsComponent', {
        templateUrl: 'resources/app/components/campaignComponents/viewCampaignsComponent/viewCampaignsComponent.html',
        controller: viewCampaignsComponentController,
        controllerAs: 'vm',
        bindings: {
            status: '<'
        }
    })

    viewCampaignsComponentController.$inject = ['$localStorage', 'campaignsService', 'customDialogService', 'helperService', 'customToastService'];

    function viewCampaignsComponentController($localStorage, campaignsService, customDialogService, helperService, customToastService) {
        var vm = this;
        vm.loaders = {};
        vm.stopOrCancel = stopOrCancel;
        vm.viewCampaignDetails = viewCampaignDetails;

        vm.statuses = ['scheduled', 'running', 'stopped', 'cancelled', 'completed', 'suspended'];
        vm.statusDesc = {
            scheduled: 'Notifications that have been scheduled to run in future.',
            running: 'Notifications that are currently running.',
            stopped: 'Notifications that have been intentionaly stopped.',
            cancelled: 'Notifications that have been cancelled before scheduled time.',
            completed: 'Notifications that have been successfully completed.',
            suspended: 'Notifications that have been suspended due to system issue.'
        }

        vm.statusIcons = {
            scheduled: 'timer',
            running: 'timelapse',
            stopped: 'stop',
            cancelled: 'cancel',
            completed: 'done_all',
            suspended: 'report'
        }


        vm.$onInit = function() {
            tabChanged();
        }

        vm.uiOnParamsChanged = function(newValues, $transition$) {
            vm.status = newValues.status;
            tabChanged();
        }

        function tabChanged() {
            vm.selectedTabIndex = vm.statuses.indexOf(vm.status);
            setButtonName();
            vm.campaigns = null;
            vm.fetchingPromise = campaignsService.fetchCampaign({
                "status": vm.status.toUpperCase()
            }).then(function(data) {
                vm.campaigns = _.sortBy(data, 'scheduletime');
            });
        }

        function stopOrCancel(campaign) {
            var payload = {
                campaignid: campaign.campaignid
            }

            customDialogService.confirm('cancel this campaign').then(() => {
                campaign.cancelPromise = campaignsService.stopCampaign(payload).then(function(data) {
                    _.pull(vm.campaigns, campaign);
                    customToastService.freeText('Campaign has been cancelled');
                })
            });
        }

        function viewCampaignDetails(campaign) {
            customDialogService.showComponent({
                component: 'campaignEditorComponent',
                bindings: {
                    campaignModel: campaignsService.mapCampaignToModel(campaign),
                    readOnly: true,
                    onDownloadFile: () => {
                        return campaignsService.downloadFile(campaign.campaignid).then((fileContent) => {
                            helperService.downloadFile(fileContent, campaign.campaignid + ".csv");
                        });
                    }
                },
                closeButton: true
            })
        }

        function setButtonName() {
            switch (vm.status) {
                case 'scheduled':
                    vm.buttonName = 'Cancel';
                    break;
                case 'running':
                    vm.buttonName = 'Stop';
                    break;
                default:
                    delete vm.buttonName;
            }
        }
    }
})(angular.module('selfcare'));