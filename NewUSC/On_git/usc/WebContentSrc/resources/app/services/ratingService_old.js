(function(app) {
    'use strict';
    app.service('ratingsService', ratingsServiceFn);
    ratingsServiceFn.$inject = ['httpService', '$q'];

    function ratingsServiceFn(httpService, $q) {
        var ratingsService = this;
        ratingsService.fetchAppRating = fetchAppRating;
        ratingsService.fetchServiceRating = fetchServiceRating;
        ratingsService.fetchAppComments = fetchAppComments;
        ratingsService.fetchServiceComments = fetchServiceComments;
        ratingsService.appServicesRating = appServicesRating;

        ratingsService.getAppFeedbacks = getAppFeedbacks;
        ratingsService.getAllAppFeedbacks = getAllAppFeedbacks;
        ratingsService.getProfileInfo = getProfileInfo;
        ratingsService.getDeptServFeedbacks = getDeptServFeedbacks;

        function getAppFeedbacks(params) {
            var payload = {
                startDate: params.startDate,
                endDate: params.endDate,
                ratings: _.map(params.filterBy, 'value').join(','),
                opSystems: _.map(params.os, 'value').join(','),
                langs: _.map(params.langs, 'id').join(','),
                page: params.page,
                size: params.size
            }

            return httpService.post("fetchAvgAppFeedbacks", payload).then((data) => {             
                console.log(JSON.stringify(data));               
               return {
            	  
            	   avgRating: data.details[0].average,
                   totalUsers: data.totalUsers,
                   totalFeedbacks: data.totalFeedbacks,
                   ratingCounts: data.details[0],
               }
               
            });
       
        }
        
        
        function getAllAppFeedbacks(params) {
            var payload = {
                startDate: params.startDate,
                endDate: params.endDate,
                ratings: _.map(params.filterBy, 'value').join(','),
                opSystems: _.map(params.os, 'value').join(','),
                langs: _.map(params.langs, 'id').join(','),
                page: params.page,
                size: params.size
            }

            
            return httpService.post("fetchAppFeedbacks", payload).then((data) => {             
               // console.log(JSON.stringify(data));   
            	
            	return data;
            });
       
        }

        function getDeptServFeedbacks(params) {
            var payload = {
                startDate: params.startDate,
                endDate: params.endDate,
                ratings: _.map(params.filterBy, 'value').join(','),
                opSystems: _.map(params.os, 'value').join(','),
                langs: _.map(params.langs, 'id').join(','),
                deptIds: _.map(params.apps, 'appid').join(','),
                serviceIds: _.map(params.services, 'serviceid').join(','),
                page: params.page,
                size: params.size
            }

            if (payload.deptIds || payload.serviceIds) {
                return httpService.postMock('deptfeedbacks.json', payload, {
                    nonBlocking: true
                });
            } else {
                return $q.resolve({});
            }
        }

        function getProfileInfo(profileId) {
            let payload = {
                profileId: profileId
            }

            return httpService.postMock('profileInfo.json', payload, {
                nonBlocking: true,
                cache: true
            }).then((response) => {
                return response;
            });
        }

        function fetchAppRating(appid) {
            var payload = {
                sourcetype: 'app',
                app: appid
            }
            return httpService.post("fetchRating", payload).then((ratings) => {
                return processRatings(ratings[0]);
            });
        }

        function fetchServiceRating(serviceid) {
            var payload = {
                sourcetype: 'service',
                app: serviceid
            }
            return httpService.post("fetchRating", payload).then((ratings) => {
                return processRatings(ratings[0]);
            });
        }

        function fetchAppComments(data) {
            var payload = {
                srId: data.appid,
                rating: data.rating,
                status: 'app',
                page: data.page,
                pageSize: data.size
            }
            return httpService.post("fetchRatingComments", payload);
        }

        function fetchServiceComments(data) {
            var payload = {
                srId: data.appid,
                rating: data.rating,
                status: 'service',
                page: data.page,
                pageSize: data.size
            }
            return httpService.post("fetchRatingComments", payload);
        }

        function appServicesRating(data) {
            return httpService.post("appServicesRating", data);
        }

        function processRatings(ratings) {
            var ratingCounts = [
                ratings.rating5,
                ratings.rating4,
                ratings.rating3,
                ratings.rating2,
                ratings.rating1,
            ]
            ratingCounts = _.map(ratingCounts, _.parseInteger);
            var sum = _.sum(ratingCounts);
            var res = {
                avg: ratings.avg,
                counts: _.map(ratingCounts, (count) => {
                    return {
                        value: count,
                        percent: (count * 100) / sum
                    }
                })
            }
            res.sumOfCounts = _.reduce(res.counts, (acc, item) => {
                acc += item.value;
                return acc;
            }, 0);
            return res;
        }
    }
})(angular.module('selfcare'));