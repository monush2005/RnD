(function(app) {
    'use strict';
    app.component('uploadBannerComponent', {
        templateUrl: 'resources/app/components/bannerComponents/uploadBannerComponent/uploadBannerComponent.html',
        controller: uploadBannerComponentController,
        controllerAs: 'vm',
        bindings: {

        }
    });

    uploadBannerComponentController.$inject = ['$localStorage', 'commonDataService', 'bannerService', '$state', 'customToastService', 'helperService'];

    function uploadBannerComponentController($localStorage, commonDataService, bannerService, $state, customToastService, helperService) {
        var vm = this;
        vm.bannerLanguages = [];
        vm.attachAnotherBanner = attachAnotherBanner;
        vm.validateImage = validateImage;
        vm.uploadnRequest = uploadnRequest;
        vm.urlPattern = envVars.urlPattern;
        vm.fetchLanguages = fetchLanguages;
        vm.fetchStates = fetchStates;

        vm.allApps = _.map($localStorage.userApps, _.trimAppDetails);
        vm.actionType = 'noAction';

        vm.$onInit = function() {
            vm.isSuperAdmin = $localStorage.userRole.logicalName.toLowerCase() == 'superadmin';
            vm.stateRadio = 'central';
            vm.state = vm.isSuperAdmin ? '99' : $localStorage.userInfo.statecentral;
            vm.state = $localStorage.userInfo.statecentral;
            console.log(vm.state);
            if(vm.state.length>3 && vm.state.match(/99/g)){
            	console.log("if case");
            		vm.stateRadio='all'		
            }
            else if(vm.state=="99"){
            	console.log("else case");
            		vm.stateRadio='central'
            }
            fetchLanguages();
            setFileRequriements();
        };

        function fetchStates() {
            if (!vm.allStates)
                return commonDataService.fetchStates().then((states) => {
                    vm.allStates = states;
                })
        }

        function fetchLanguages() {
            commonDataService.fetchLanguages().then((langs) => {
                vm.allLanguages = _.sortBy(langs, (lang) => { return _.toLower(lang.language); });
                vm.selectedLanguage = _.find(vm.allLanguages, { id: 'en' });
                attachAnotherBanner();
            });
        }

        function attachAnotherBanner() {
            vm.bannerLanguages.push(vm.selectedLanguage);
            _.pull(vm.allLanguages, vm.selectedLanguage);
            vm.selectedLanguage = null;
        }

        function setFileRequriements() {
            vm.imageWidth = 1600;
            vm.imageHeight = 398;
            vm.allowedFileExtns = ['png', 'jpg', 'jpeg'];
            vm.maxFileSize = 300;
        }

        function validateImage(file, formObj) {
            let isValidExtn = helperService.checkFileExtentions(file, vm.allowedFileExtns);
            formObj.$setValidity('notImage', isValidExtn);
            if (isValidExtn) {
                helperService.checkImageDimensionsAsync(file, vm.imageHeight, vm.imageWidth).then((isValid) => {
                    formObj.$setValidity('dimensions', isValid);
                });
                formObj.$setValidity('size', file.size <= (vm.maxFileSize * 1024));
            }
        }

        function uploadnRequest() {
            var actionUrl = null;

            if (vm.actionType == 'service') {
                let redirectApp = $localStorage.userApps[vm.redirectApp.appid];
                actionUrl = redirectApp.umangUrl + `|${redirectApp.appname}|${redirectApp.appid}`;
            }

            vm.uploadPromise = commonDataService.fetchLanguages().then((langs) => {
                var payload = {
                    stateId: vm.state,
                    bannerName: vm.bannerName,
                    comment: vm.comment,
                    actionType: (vm.actionType == 'noAction') ? '' : vm.actionType,
                    actionUrl: actionUrl || vm.redirectUrl,
                    source: 'app',
                };

                var name = _.find(vm.bannerLanguages, { id: 'en' }).langBanner.name;

                _.each(langs, (lang) => {
                    var temp = _.find(vm.bannerLanguages, { id: lang.id }) || { langBanner: new File([], name) };
                    payload[lang.id] = temp.langBanner;
                });

                return bannerService.uploadBanners(payload);
            });

            vm.uploadPromise.then(() => {
                customToastService.freeText('Your banners have been successfully uploaded and requested.', 'View my banners').then((isClicked) => {
                    if (isClicked)
                        $state.go('selfcare.banners.view');
                });
                $state.reload('selfcare.banners.upload');
            });
        }
    }
})(angular.module('selfcare'));