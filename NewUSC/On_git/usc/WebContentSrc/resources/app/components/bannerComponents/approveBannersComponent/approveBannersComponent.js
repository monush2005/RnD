(function(app) {
    'use strict';
    app.component('approveBannersComponent', {
        templateUrl: 'resources/app/components/bannerComponents/approveBannersComponent/approveBannersComponent.html',
        controller: approveBannersComponentController,
        controllerAs: 'vm',
        bindings: {

        }
    })

    approveBannersComponentController.$inject = ['$localStorage', 'bannerService', '$mdDialog', 'customDialogService', 'customToastService', 'commonDataService'];

    function approveBannersComponentController($localStorage, bannerService, $mdDialog, customDialogService, customToastService, commonDataService) {
        var vm = this;
        vm.rejectBanner = rejectBanner;
        vm.changePriority = changePriority;
        vm.viewUploaderComment = viewUploaderComment;
        vm.removeFromActive = removeFromActive;
        vm.viewDetails = viewDetails;
        vm.fetchStates = fetchStates;
        vm.addToActive = addToActive;
        vm.getAllBanners = getAllBanners;

        vm.$onInit = function() {
            vm.isSuperAdmin = $localStorage.userRole.logicalName.toLowerCase() == 'superadmin';
           
            vm.state = $localStorage.userInfo.statecentral;
            vm.stateRadio = 'central';
            if(vm.state.length>3 && vm.state.match(/99/g)){
            		vm.stateRadio='central'	
            			vm.state="99"
            				 getAllBanners();
            }
            else if(vm.state=="99"){
            		vm.stateRadio='central'
            			vm.state="99"
            				 getAllBanners();
            }else{
            	vm.stateRadio='central'
        			vm.state="99"
        				 getAllBanners();
            	
            }
            getAllBanners();
        }

        function getAllBanners() {
            if(!vm.state){
                vm.activeBanners = null;
                vm.inactiveBanners = null;
                vm.requestedBanners = null;
                return;
            }

            vm.getAllBannersPromise = bannerService.getAllBanners(vm.state);
            vm.getAllBannersPromise.then((banners) => {
                vm.activeBanners = banners.active;
                vm.inactiveBanners = banners.inactive;
                vm.requestedBanners = banners.requested;
            })
        }

        function fetchStates() {
            if (!vm.allStates)
                return commonDataService.fetchStates().then((states) => {
                    vm.allStates = states;
                })
        }

        function addToActive(banner) {
            banner.addingPromise = bannerService.addToActive(banner.bannerId).then(() => {
                _.pull(vm.inactiveBanners, banner); //adding pull for both inactive and requested
                _.pull(vm.requestedBanners, banner); //but it will work for only one of them, reused function
                vm.activeBanners.push(banner);
            })
        }

        function removeFromActive(banner) {
            banner.removePromise = bannerService.removeFromActive(banner.bannerId).then(() => {
                _.pull(vm.activeBanners, banner);
                vm.inactiveBanners.unshift(banner);
            })
        }

        function changePriority(index1, index2) {
            var bannerId1 = vm.activeBanners[index1].bannerId
            var bannerId2 = vm.activeBanners[index2].bannerId;

            var swappingPromise = bannerService.swapPriorities(bannerId1, bannerId2).then(() => {
                _.swap(vm.activeBanners, index1, index2);
            })

            if (index1 > index2)
                vm.activeBanners[index1].moveUpPromise = swappingPromise;
            else
                vm.activeBanners[index1].moveDownPromise = swappingPromise;

        }

        function viewUploaderComment(banner) {
            $mdDialog.show($mdDialog.alert()
                .title('Uploader\'s Comment')
                .textContent(banner.comments)
                .ok('Close')
            )
        }

        function rejectBanner(banner) {
            customDialogService.showComponent({
                component: 'promptComponent',
                bindings: {
                    title: 'Rejection Comment',
                    required: true,
                    name: 'Comment',
                    ok: 'Reject',
                    cancel: 'Cancel',
                    onSubmit: (comment) => {
                        var rejectPromise = bannerService.rejectBanner(banner.bannerId, comment);
                        rejectPromise.then(() => {
                            _.pull(vm.requestedBanners, banner);
                            customToastService.freeText('Banner has been rejected!');
                        })
                        return rejectPromise;
                    }
                }
            });
        }

         function viewDetails(banner) {
            banner.viewDetailsPromise = bannerService.getAllLangBanners(banner.bannerId)
            banner.viewDetailsPromise.then((banners) => {
                customDialogService.showComponent({
                    component: 'viewAllLangBannersComponent',
                    bindings: {
                        banners: banners
                    },
                    closeButton: true
                })
            })
        }
    }
})(angular.module('selfcare'));