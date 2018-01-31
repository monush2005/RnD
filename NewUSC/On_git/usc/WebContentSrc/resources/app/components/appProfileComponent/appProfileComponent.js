(function(app) {
    'use strict';
    app.component('appProfileComponent', {
        templateUrl: 'resources/app/components/appProfileComponent/appProfileComponent.html',
        controller: appProfileComponentController,
        controllerAs: 'vm',
        bindings: {
            appid: '<'
        }
    })

    appProfileComponentController.$inject = ['$localStorage', 'customDialogService', 'appServiceProfileService', 'customToastService'];

    function appProfileComponentController($localStorage, customDialogService, appServiceProfileService, customToastService) {
        var vm = this;
        vm.requestChange = requestChange;
        vm.editHelpline = editHelpline;
        vm.editEmail = editEmail;
        vm.editWorkingHours = editWorkingHours;
        vm.editWebsite = editWebsite;
        vm.editLatLong = editLatLong;
        vm.editLogo = editLogo;

        vm.$onInit = function() {
            vm.app = $localStorage.userApps[vm.appid];
            vm.app.liveDate =vm.app.creationdate; 
            	//moment(vm.app.creationdate).format('DD/MM/YYYY hh:mm');
        }

        function editLogo() {
            customDialogService.showComponent({
                component: 'logoChangeComponent',
                clickOutsideToClose: false,
                bindings: {
                    app: vm.app,
                    onSubmit: (newImageFile) => {
                        var promise = appServiceProfileService.saveAppLogo(vm.appid, newImageFile);
                        promise.then((res) => {
                            vm.app.image = res.logoUrl;
                            customToastService.freeText('Logo has been successfully updated.');
                        })
                        return promise;
                    }
                }
            })
        }

        function editWorkingHours() {
            customDialogService.showComponent({
                component: 'workingHoursComponent',
                clickOutsideToClose: false,
                bindings: {
                    onSubmit: (workingHoursObj) => {
                        let promise = appServiceProfileService.saveWorkingHours(vm.appid, workingHoursObj)
                        promise.then((enWH) => {
                            vm.app.workinghours = enWH;
                            customToastService.freeText('Working hours have been successfully updated.');
                        })
                        return promise;
                    }
                }
            });
        }

        function requestChange(name, initValue, maxLength) {
            customDialogService.showComponent({
                component: 'requestComponent',
                clickOutsideToClose: false,
                bindings: {
                    name: name,
                    initValue: initValue,
                    maxLength: maxLength,
                    Subject: `Request for change of "${name}" for "${vm.app.appname}" (App Id: ${vm.appid})`,
                    onRequest: (data) => {
                        return appServiceProfileService.requestChange(data);
                    }
                }
            }).then(customDialogService.requestSuccessful);
        }

        function editHelpline() {
            customDialogService.showComponent({
                component: 'promptComponent',
                clickOutsideToClose: false,
                bindings: {
                    title: vm.app.appname + ' Helpline',
                    ok: 'Save',
                    cancel: 'Cancel',
                    initialValue: vm.app.contact,
                    name: 'Helpline Number',
                    pattern: envVars.mutipleHelplinePattern,
                    helpText: 'You can enter comma separated numbers',
                    required: true,
                    dontSaveIfSame: true,
                    onSubmit: (newHelpline) => {
                        return appServiceProfileService.saveAppDetails(vm.appid, newHelpline, 'helpline');
                    }
                }
            }).then((newHelpline) => {
                vm.app.contact = newHelpline;
                customToastService.freeText('Helpline numbers have been successfully updated.');
            });
        }

        function editEmail() {
            customDialogService.showComponent({
                component: 'promptComponent',
                clickOutsideToClose: false,
                bindings: {
                    title: vm.app.appname + ' Email',
                    ok: 'Save',
                    cancel: 'Cancel',
                    initialValue: vm.app.email,
                    name: 'Email',
                    pattern: envVars.emailPattern,
                    required: true,
                    dontSaveIfSame: true,
                    onSubmit: (newEmail) => {
                        return appServiceProfileService.saveAppDetails(vm.appid, newEmail, 'email');
                    }
                }
            }).then((newEmail) => {
                vm.app.email = newEmail;
                customToastService.freeText('Email has been successfully updated.');
            });

        }

        function editWebsite() {
            customDialogService.showComponent({
                component: 'promptComponent',
                clickOutsideToClose: false,
                bindings: {
                    title: vm.app.appname + ' Website',
                    ok: 'Save',
                    cancel: 'Cancel',
                    initialValue: vm.app.url,
                    name: 'Website',
                    type: 'url',
                    required: true,
                    dontSaveIfSame: true,
                    onSubmit: (newUrl) => {
                        return appServiceProfileService.saveAppDetails(vm.appid, newUrl, 'website');
                    }
                }
            }).then((newUrl) => {
                vm.app.url = newUrl;
                customToastService.freeText('Website has been successfully updated.');
            });
        }

        function editLatLong() {
            customDialogService.showComponent({
                component: 'latLongComponent',
                clickOutsideToClose: false,
                bindings: {
                    lat: vm.app.lat,                  
                    long: vm.app.lon,
                    onSubmit: (lat, long) => {
                        return appServiceProfileService.saveAppDetails(vm.appid, {lat: lat, long: long}, 'latlong');
                    }
                }
            }).then((data) => {
                vm.app.lat = data.lat;
                vm.app.lon = data.long;
                vm.app.latlong = vm.app.lat+', '+vm.app.lon;
                customToastService.freeText('Co-ordinates have been successfully updated.');
            });
        }

    }
})(angular.module('selfcare'));
