(function(app) {
    'use strict';
    app.component('viewMyBannersComponent', {
        templateUrl: 'resources/app/components/bannerComponents/viewMyBannersComponent/viewMyBannersComponent.html',
        controller: viewMyBannersComponentController,
        controllerAs: 'vm',
        bindings: {

        }
    })

    viewMyBannersComponentController.$inject = ['$localStorage', 'bannerService', 'customDialogService', 'customToastService', '$mdDialog', 'commonDataService'];

    function viewMyBannersComponentController($localStorage, bannerService, customDialogService, customToastService, $mdDialog, commonDataService) {
        var vm = this;
        vm.viewDetails = viewDetails;
        vm.deleteBanner = deleteBanner;
        vm.reRequestBanner = reRequestBanner;
        vm.viewAdminCommnet = viewAdminCommnet;
        vm.fetchStates = fetchStates;
        vm.getMyBanners = getMyBanners;

        vm.$onInit = function() {
            vm.isSuperAdmin = $localStorage.userRole.logicalName.toLowerCase() == 'superadmin';
            vm.stateRadio = 'central';
           
            vm.state = $localStorage.userInfo.statecentral;
            if(vm.state.length>3 && vm.state.match(/99/g)){
            		vm.stateRadio='central'
            			vm.state="99";
            				getMyBanners();
            }
            else if(vm.state==99){
            	
            		vm.stateRadio='central'
            			vm.state="99";
            }
            if(vm.isSuperAdmin){
            	
            	getMyBanners();
            }
            
        }

        function fetchStates() {
            if (!vm.allStates)
                return commonDataService.fetchStates().then((states) => {
                    vm.allStates = states;
                })
        }

        function deleteBanner(bannerList, banner) {
            customDialogService.confirm('delete the selected banner').then(() => {
                banner.deletePromise = bannerService.deleteBanner(banner.bannerId);

                banner.deletePromise.then(() => {
                    _.pull(bannerList, banner);
                    customToastService.freeText('Banner has been successfully deleted.');
                })
            })
        }

        function reRequestBanner(banner) {
            customDialogService.showComponent({
                component: 'promptComponent',
                bindings: {
                    title: 'Re-request Comment',
                    name: 'Comment',
                    required: true,
                    ok: 'Re-request',
                    cancel: 'Cancel',
                    onSubmit: (comment) => {
                        var reRequestPromise = bannerService.reRequestBanner(banner.bannerId, comment);
                        reRequestPromise.then(() => {
                            _.pull(vm.inactiveBanners, banner);
                            vm.requestedBanners.unshift(banner);
                            customToastService.freeText('Banner has been successfully re-requested!');
                        })
                        return reRequestPromise;
                    }
                }
            });
        }

        function getMyBanners() {
            if(!vm.state){
                vm.activeBanners = null;
                vm.inactiveBanners = null;
                vm.requestedBanners = null;
                vm.rejectedBanners = null;
                return;
            }
           
            vm.getBannersPromise = bannerService.getMyBanners(vm.state).then((myBanners) => {
                vm.activeBanners = myBanners.active
                vm.inactiveBanners = myBanners.inactive
                vm.requestedBanners = myBanners.requested
                vm.rejectedBanners = myBanners.rejected
            });
        }

        function viewAdminCommnet(banner) {
            $mdDialog.show($mdDialog.alert()
                .title('Admin Comment')
                .textContent(banner.adminComments)
                .ok('Close')
            )
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