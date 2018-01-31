(function(app) {
    'use strict';
    app.component('loginComponent', {
        templateUrl: 'resources/app/components/loginComponent/loginComponent.html',
        controller: loginComponentController,
        controllerAs: 'vm'
    })

    loginComponentController.$inject = ['loginService', '$localStorage', 'ngProgressService', '$state', '$timeout', '$interval', 'commonDataService', 'customToastService', 'usersService', 'onboardService', 'customDialogService', '$scope', '$mdDialog', 'gaHttpService'];

    function loginComponentController(loginService, $localStorage, ngProgressService, $state, $timeout, $interval, commonDataService, customToastService, usersService, onboardService, customDialogService, $scope, $mdDialog, gaHttpService) {
        var vm = this;
        vm.user = {};
        vm.onboard = {};

        vm.login = login;
        vm.fetchStates = fetchStates;
        vm.fetchStates1 = fetchStates1;
        vm.requestEmailOTP = requestEmailOTP;
        vm.requestMobOTP = requestMobOTP;
        vm.forgotPassword = forgotPassword;
        vm.submitOnboardForm = submitOnboardForm;
        vm.validateGovtEmail = validateGovtEmail;
        vm.showAllowedDomains = showAllowedDomains;

        vm.$onInit = function() {
            vm.emailPattern = envVars.emailPattern;
            vm.mobilePattern = envVars.mobilePattern;
            vm.namePattern = envVars.namePattern;
            $mdDialog.cancel();
            gaHttpService.resetGoogleAnalytics();
        }

        function login() {
        	
            if(vm.loginForm.$invalid){
                vm.loginForm.$setSubmitted();
                return;
            }
            
            vm.loginPromise = loginService.loginUser(vm.user).then(function(response) {
                if (response.pwdExpiry == "true" || response.firstLogin == "true") {
                    customDialogService.showComponent({
                        component: 'changePasswordComponent',
                        clickOutsideToClose: false,
                        bindings: {
                            oldPassword: vm.user.password,
                            forFirsTime: response.firstLogin == "true",
                            forExpired: response.pwdExpiry == "true"
                        }
                    }).then((newPassword) => {
                        vm.user.password = newPassword;
                        customToastService.freeText('Password successfully changed. Logging you in..');
                        login();
                    })
                } else {
                	var stateCentral = _.map(response.info,'statecentral');               	                
                	
                	var appids = _.map(response.apps,'appid');
                	
                	var cats = _.map(response.apps, 'cgname')
                	
                	            	
                	var uniqueCategory = _.without(_.uniq(cats),null);;
                	console.log("map record :"+JSON.stringify(uniqueCategory));
                    $localStorage.isLoggedIn = Date.now() + envVars.serverTimeout;
                    $localStorage.userRights = response.rights;
                    $localStorage.userApps = response.apps;
                    $localStorage.appCategory = uniqueCategory;
                    $localStorage.stateCentral = stateCentral;
                    $localStorage.userServices = response.services;
                    $localStorage.userRole = response.roles[0];
                    $localStorage.userInfo = response.info[0];
                    $localStorage.roleFlag = response.roleFlag;
                    $localStorage.userInfo.signature = $localStorage.userInfo.signature || '';
                    
                    if(response.roleFlag == "true" ){
                    	
                     /*customToastService.freeText('Dear User, your role has been changed. Please visit the Manage Role section and modify/edit the role of your .', 'view').then((isClicked) => {
                            if (isClicked)
                                $state.go('selfcare.roles.edit');
                        });*/
                    	customDialogService.showComponent({
                            component: 'roleChangedDialogComponent',
                            bindings: {                                 
                                forDialog: true
                            },
                            clickOutsideToClose: false
                        })
                     
                     
                    }
                    
                  	
                     $state.go('selfcare.dashboard.apps');
                }
            })
        }

        function fetchStates() {
        	
            return commonDataService.fetchStates().then((states) => {
            	console.log(JSON.stringify(states));
            	//var newstate=states.push({"stateId":"4","statename":"center"});
            	//alert("states"+JSON.stringify(newstate));
                vm.allStates = states;
            });
        }
        function fetchStates1() {
        	
            return commonDataService.fetchStates().then((states) => {
            	var newstate=states.push({"stateid":"99","statename":"Center"});
            	
                vm.allStates = states;
            });
        }

        function requestEmailOTP() {
        	var type="onboard";
            vm.emailOTPPromise = usersService.emailOtpInitiate(vm.onboard.email,type);
            vm.emailOTPPromise.then(() => {
                customToastService.freeText(`OTP successfully sent to ${vm.onboard.email}`);
                vm.canRequestEmailOTP = false;
                $timeout.cancel(vm.emailTimeout);
                vm.emailTimeout = $timeout(() => {
                    vm.canRequestEmailOTP = true;
                }, 1000 * 60);

                vm.emailRemainingSec = 60;

                $interval.cancel(vm.emailInterval);
                vm.emailInterval = $interval(() => {
                    vm.emailRemainingSec--;
                }, 1000, 60)
            })
        }

        function requestMobOTP() {
        	var type="onboard";
            vm.mnoOTPPromise = usersService.mobOtpInitiate(vm.onboard.mno,type);
            vm.mnoOTPPromise.then(() => {
                customToastService.freeText(`OTP successfully sent to ${vm.onboard.mno}`);
                vm.canRequestMobOTP = false;
                $timeout.cancel(vm.mobTimeout);
                vm.mobTimeout = $timeout(() => {
                    vm.canRequestMobOTP = true;
                }, 1000 * 60);

                vm.mnoRemainingSec = 60;

                $interval.cancel(vm.mnoInterval);
                vm.mnoInterval = $interval(() => {
                    vm.mnoRemainingSec--;
                }, 1000, 60)
            })
        }

        function submitOnboardForm() {
        	
            vm.submitPromise = onboardService.submitOnboardForm(vm.onboard)
                .then((data) => {
                	console.log("submitOnboardForm================//"+data);
                    customToastService.hideToasts();
                    $mdDialog.show($mdDialog.alert()
                        .title('Onboarding request submitted!')
                        .textContent('We have received your onboarding request. Once approved, you will receive login credentials.')
                        .ok('Okay')
                    ).then(() => {
                        $state.reload();
                    })
                })
                .catch((data) => {
                    if (data.rc == "OTP0031" || data.rc == "SLF0071") {
                        var msg = 'One or both of the OTPs were Invalid. New OTPs will now be requested. Please fill and Submit.'
                        if (!vm.onboard.mno)
                            msg = 'Email OTP was Invalid. Please fill correct OTP and submit.'

                        $mdDialog.show($mdDialog.alert()
                            .title('Unsuccessful!')
                            .textContent(msg)
                            .ok('Okay')
                        ).then(() => {
                            if (vm.onboard.mno) {
                                requestEmailOTP();
                                requestMobOTP();
                            }
                        })
                    } else {
                        customToastService.freeText(data.rd, undefined, true);
                    }

                    vm.onboard.mno && vm.onboardForm.mnoOTP.$setUntouched();
                    vm.onboardForm.emailOTP.$setUntouched();
                    vm.onboard.mnoOTP = '';
                    vm.onboard.emailOTP = '';
                })
        }

        function forgotPassword() {
            customDialogService.showComponent({
                component: 'forgotPasswordComponent',
                bindings: {
                    userId: vm.user.userid,
                },
                clickOutsideToClose: false
            }).then((userId) => {
                vm.user.userid = userId;
            })
        }

        function validateGovtEmail() {
            vm.onboardForm.email.$setTouched();
            vm.onboardForm.email.$setValidity('validatingDomain', false);

            if(vm.fetchingDomains)
                return
            else
                vm.fetchingDomains = true;

            commonDataService.fetchGovtDomains().then((domains) => {
                let inputDomain = vm.onboard.email && vm.onboard.email.split('@').pop().toLowerCase();
                vm.onboardForm.email.$setValidity('invalidDomain', _.exists(domains, inputDomain));
                vm.onboardForm.email.$setValidity('validatingDomain', true);

                vm.fetchingDomains = false;
            })
        }

        function showAllowedDomains() {
            commonDataService.fetchGovtDomains().then((domains) => {
                $mdDialog.show({
                    templateUrl: 'resources/app/components/loginComponent/allowedDomainsDialog.html',
                    controllerAs: 'vm',
                    clickOutsideToClose: true,
                    controller: ['$mdDialog', function($mdDialog) {
                        this.allowedDomains = domains;
                        this.$mdDialog = $mdDialog;
                    }]
                })
            })
        }

        $scope.$on('destroy', () => {
            $interval.cancel(vm.mnoInterval);
            $interval.cancel(vm.emailInterval);
            $timeout.cancel(vm.mobTimeout);
            $timeout.cancel(vm.emailTimeout);
        })

    }
})(angular.module('selfcare'));