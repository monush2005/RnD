(function(app) {
    'use strict';
    app.component('campaignEditorComponent', {
        templateUrl: 'resources/app/components/campaignComponents/campaignEditorComponent/campaignEditorComponent.html',
        controller: campaignEditorComponentController,
        controllerAs: 'vm',
        bindings: {
            onSubmit: '&',
            campaignModel: '<?',
            readOnly: '<',
            onDownloadFile: '&'
        }
    })

    campaignEditorComponentController.$inject = ['$mdSelect', 'customToastService', 'campaignsService', 'commonDataService', '$localStorage', '$state', 'helperService'];

    function campaignEditorComponentController($mdSelect, customToastService, campaignsService, commonDataService, $localStorage, $state, helperService) {
        var vm = this;

        vm.$onInit = function() {
            vm.notificationTypes = campaignsService.createNotiFicationTypeData();
            vm.timePattern = envVars.timePattern;
            vm.downloadSample = downloadSample;


            if (vm.campaignModel) {
                vm.externalModel = true;
                vm.campaignModel.selectedNotificationType = _.find(vm.notificationTypes, { value: vm.campaignModel.notificationType });
                vm.campaignModel.campaignTime = moment(vm.campaignModel.campaignDate).format('HH:mm');
                vm.extractType = vm.campaignModel.extractType;
            } else {
                vm.campaignModel = {};
                vm.campaignModel.age = [];
                vm.campaignModel.campaignDate = moment().millisecond(0).second(0).add(15, 'minutes').toDate();
                vm.campaignModel.campaignTime = moment(vm.campaignModel.campaignDate).format('HH:mm');
                vm.campaignModel.oses = campaignsService.createOSData();
                vm.campaignModel.genders = campaignsService.createGenderData();
                vm.campaignModel.selectedNotificationType = _.first(vm.notificationTypes);
                vm.extractType = 'extract';
                vm.minCampaignDate = new Date();
                vm.maxCampaignDate = moment().add(3, 'months').toDate();
            }

            vm.resetForm = resetForm;
            vm.downloadFile = downloadFile;
            vm.submitForm = submitForm;
            vm.checkFutureDateTime = checkFutureDateTime;
            vm.validateOS = validateOS;
            vm.validateGender = validateGender;
            vm.selectedFileChange = selectedFileChange;

            getAllApps();
            getAllStates();
            getAllQualifications();
            getAllOccupations();
        }

        function getAllApps() {
            vm.allApps = _.map($localStorage.userApps, _.trimAppDetails);
            if (vm.externalModel) {
                vm.campaignModel.selectedApps = _.intersectionBy(vm.allApps, vm.campaignModel.favApps, 'appid');
            }
        }

        function getAllStates() {
            commonDataService.fetchStates().then(function(states) {
                vm.allStates = states;
                if (vm.externalModel) {
                    vm.campaignModel.selectedStates = _.intersectionBy(vm.allStates, vm.campaignModel.selectedStates, 'stateid');
                }
            })
        }

        function getAllQualifications() {
            commonDataService.fetchQualification().then(function(qualifications) {
                vm.allQualifications = qualifications;
                if (vm.externalModel) {
                    vm.campaignModel.selectedQualifications = _.intersectionBy(vm.allQualifications, vm.campaignModel.selectedQualifications, 'qualId');
                }
            })
        }

        function getAllOccupations() {
            commonDataService.fetchOccupationList().then(function(occupations) {
                vm.allOccupations = occupations;
                if (vm.externalModel) {
                    vm.campaignModel.selectedOccupations = _.intersectionBy(vm.allOccupations, vm.campaignModel.selectedOccupations, 'occuId');
                }
            })
        }

        function submitForm() {
            if (checkFutureDateTime()) {
                var tempCampaignModel = _.cloneDeep(vm.campaignModel);
                tempCampaignModel.oses = _.map(_.filter(tempCampaignModel.oses, 'selected'), 'value').join(',');
                tempCampaignModel.genders = _.map(_.filter(tempCampaignModel.genders, 'selected'), 'value').join(',');
                tempCampaignModel.selectedStates = _.map(tempCampaignModel.selectedStates, 'stateid').join(',');
                tempCampaignModel.favApps = _.map(tempCampaignModel.selectedApps, 'appid').join(',');
                tempCampaignModel.selectedQualifications = _.map(tempCampaignModel.selectedQualifications, 'qualId').join(',');
                tempCampaignModel.selectedOccupations = _.map(tempCampaignModel.selectedOccupations, 'occuId').join(',');
                tempCampaignModel.age = tempCampaignModel.age.join(',');
                tempCampaignModel.campaignDateServer = moment(tempCampaignModel.campaignDate).format('YYYY-MM-DD HH:mm:ss')
                tempCampaignModel.selectedNotificationType = vm.campaignModel.selectedNotificationType.value;
                tempCampaignModel.appIds = _.map($localStorage.userApps, 'appid').join('|');

                if(vm.campaignModel.selectedNotificationType.value=='service'){
                    let app = $localStorage.userApps[vm.campaignModel.redirectApp];
                    tempCampaignModel.icon = app.image;
                    tempCampaignModel.redirectserviceid = app.appid;
                    tempCampaignModel.redirectUrl = app.umangUrl;
                    tempCampaignModel.webViewTitle = app.appname;
                    tempCampaignModel.deptname = app.appname;
                    delete tempCampaignModel.redirectApp;
                }

                vm.submitPromise = vm.onSubmit()(tempCampaignModel).then(function() {
                    customToastService.freeText('Your Campaign has been successfully scheduled.', 'View Scheduled Campaigns').then((isClicked) => {
                        if (isClicked)
                            $state.go('selfcare.campaigns.view');
                    });
                    resetForm();
                })
            }
        }

        function checkFutureDateTime() {
            vm.campaignForm.campaignTime.$setTouched(true);
            let time = moment(vm.campaignModel.campaignTime, 'HH:mm');
            if(time.isValid()){
                vm.campaignModel.campaignDate.setHours(time.hour());
                vm.campaignModel.campaignDate.setMinutes(time.minute());
            }
            vm.campaignForm.campaignDate.$setValidity('futureDate', moment(vm.campaignModel.campaignDate).isSameOrAfter(new Date, 'date'));
            vm.campaignForm.campaignTime.$setValidity('futureTime', moment(vm.campaignModel.campaignDate).isSameOrAfter(moment().add(15, 'minutes')));
            return vm.campaignForm.campaignDate.$valid && vm.campaignForm.campaignTime.$valid;
        }

        function validateGender() {
            // vm.campaignForm.genders.$setValidity('atleastOne', _.filter(vm.campaignModel.genders, 'selected').length > 0);
        }

        function validateOS() {
            vm.campaignForm.oses.$setValidity('atleastOne', _.filter(vm.campaignModel.oses, 'selected').length > 0);
        }

        function selectedFileChange() {
            vm.campaignForm.extractFile.$setValidity('notCSV', vm.campaignModel.extractFile.name.split('.').pop() == 'csv');
        }

        function resetForm() {
            $state.reload('selfcare.campaigns.schedule');
        }

        function downloadSample() {
            let samplePath = window.location.origin+envVars.base+ '/resources/assets/static/sample.csv';
            helperService.downloadFileFromURL(samplePath);
        }

        function downloadFile(){
            vm.downloadFilePromise = vm.onDownloadFile()();
        }
    }
})(angular.module('selfcare'));
