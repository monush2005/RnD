(function(app) {
    'use strict';
    app.service('bannerService', bannerServiceFn);
    bannerServiceFn.$inject = ['httpService', '$timeout'];

    function bannerServiceFn(httpService, $timeout) {
        var bannerService = this;

        bannerService.getAllBanners = getAllBanners;
        bannerService.rejectBanner = rejectBanner;
        bannerService.swapPriorities = swapPriorities;
        bannerService.removeFromActive = removeFromActive;
        bannerService.addToActive = addToActive;
        bannerService.uploadBanners = uploadBanners;
        bannerService.getMyBanners = getMyBanners;
        bannerService.getAllLangBanners = getAllLangBanners;
        bannerService.deleteBanner = deleteBanner;
        bannerService.reRequestBanner = reRequestBanner;

        function deleteBanner(bannerId) {
            var payload = {
                bannerId: bannerId
            }

            return httpService.post('banner/delBanner', payload);
        }

        function uploadBanners(payload) {
            return httpService.postFile('banner/uploadBanner', payload);
        }

        function reRequestBanner(bannerId, comment) {
            var payload = {
                comments: comment,
                bannerId: bannerId
            }

            return httpService.post('banner/reactiveBanner', payload);
        }

        function getAllLangBanners(bannerId) {
            var payload = {
                bannerId: bannerId
            }

            return httpService.post('banner/allLangBanner', payload, {cache: true}).then((banners) => {
                banners = _.map(banners, (banner) => {
                    banner.bannerId = banner.hid;
                    banner.bannerURL = banner.domain + banner.imageUrl;
                    banner.lang = banner.lid;
                    return banner;
                })

                return banners;
            });
        }

        function getMyBanners(state) {
        	
            var payload = {
                state: state,
                source: 'app'
            }

            return httpService.post('banner/fetchMyBanner', payload).then((banners) => {
                var returnVal = {};
                banners = _.map(banners, (banner) => {
                    banner.bannerId = banner.hid;
                    banner.bannerURL = banner.domain + banner.imageUrl;
                    banner.priority = banner.horder;
                    return banner;
                })
                returnVal.active = _(banners).filter({ status: 'active' }).sortBy(banner => _.parseInt(banner.priority)).value();
                returnVal.inactive = _(banners).filter({ status: 'inactive' }).value();
                returnVal.rejected = _(banners).filter({ status: 'rejected' }).value();
                returnVal.requested = _(banners).filter({ status: 'requested' }).sortBy(banner => moment(banner.requestedDate).valueOf()).value();
                return returnVal;
            })
        }

        function getAllBanners(state) {
            var payload = {
                state: state,
                source: 'app'
            }

            return httpService.post('banner/fetchAllBanner', payload).then((banners) => {
                var returnVal = {};
                banners = _.map(banners, (banner) => {
                    banner.bannerId = banner.hid;
                    banner.bannerURL = banner.domain + banner.imageUrl;
                    banner.priority = banner.horder;
                    return banner;
                })
                returnVal.active = _(banners).filter({ status: 'active' }).sortBy(banner => _.parseInt(banner.priority)).value();
                returnVal.inactive = _(banners).filter({ status: 'inactive' }).value();
                returnVal.requested = _(banners).filter({ status: 'requested' }).sortBy(banner => moment(banner.requestedDate).valueOf()).value();
                return returnVal;
            })
        }

        function rejectBanner(bannerId, comment) {
            var payload = {
                bannerId: bannerId,
                comments: comment
            }

            return httpService.post('banner/rejectBanner', payload);
        }

        function swapPriorities(bannerId1, bannerId2) {
            var payload = {
                bannerId1,
                bannerId2
            }

            return httpService.post('banner/changePriority', payload);
        }

        function removeFromActive(bannerId) {
            var payload = {
                bannerId: bannerId,
                isActiveDeactive: false
            }

            return httpService.post('banner/onOffBanner', payload);
        }

        function addToActive(bannerId) {
            var payload = {
                bannerId: bannerId,
                isActiveDeactive: true,
            }

            return httpService.post('banner/onOffBanner', payload);
        }
    }
})(angular.module('selfcare'));