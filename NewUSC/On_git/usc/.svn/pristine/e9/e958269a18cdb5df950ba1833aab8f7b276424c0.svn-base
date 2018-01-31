(function(app) {
    'use strict';
    app.component('ratingsComponent', {
        templateUrl: 'resources/app/components/ratingsComponent/ratingsComponent.html',
        controller: ratingsComponentController,
        controllerAs: 'vm',
        bindings: {
            appid: '<',
            serviceid: '<'
        }
    })

    ratingsComponentController.$inject = ['$localStorage', 'ratingsService'];

    function ratingsComponentController($localStorage, ratingsService) {
        var vm = this;
        vm.getAppFeedbacks = getAppFeedbacks;
        vm.getServiceFeedbacks = getServiceFeedbacks;
        vm.onTabChange = onTabChange;
        vm.currentRating = 5;
        vm.allRatings = [{
            rating: 5
        }, {
            rating: 4
        }, {
            rating: 3
        }, {
            rating: 2
        }, {
            rating: 1
        }]

        vm.$onInit = function() {
            if (vm.serviceid) {
                vm.service = $localStorage.userServices[vm.serviceid];
                getServiceRatings();
            } else {
                vm.app = $localStorage.userApps[vm.appid];
                getAppRatings();
            }
        }

        function getAppRatings() {
            vm.ratingPromise = ratingsService.fetchAppRating(vm.app.appid).then((ratings) => {
                vm.ratings = ratings;
            })
        }

        function getServiceRatings() {
            vm.ratingPromise = ratingsService.fetchServiceRating(vm.service.serviceid).then((ratings) => {
                vm.ratings = ratings;
            })
        }

        function onTabChange(ratingObj){
            vm.currentRating = ratingObj.rating;
            ratingObj.paginator && ratingObj.paginator.goToPage(1);
        }

        function getAppFeedbacks(page, size) {
            vm.feedbacks = null;
            vm.feedbackPromise =  ratingsService.fetchAppComments({
                appid: vm.appid,
                rating: vm.currentRating,
                page: page, 
                size: size
            })

            return vm.feedbackPromise.then((feedbacks) => {
                vm.feedbacks = feedbacks.comments;
                return feedbacks.total;
            })
        }

        function getServiceFeedbacks(page, size) {
            vm.feedbacks = null;
            vm.feedbackPromise =  ratingsService.fetchServiceComments({
                appid: vm.serviceid,
                rating: vm.currentRating,
                page: page,
                size: size
            }).then((feedbacks) => {
                vm.feedbacks = feedbacks.comments;
                return feedbacks.total;
            })
        }
    }
})(angular.module('selfcare'));
