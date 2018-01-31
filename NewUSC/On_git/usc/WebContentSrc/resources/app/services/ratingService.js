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
        ratingsService.getDeptFeedbacks = getDeptFeedbacks;
        ratingsService.getServiceFeedbacks = getServiceFeedbacks;

        function getAppFeedbacks(params) {
            var payload = {
                sdate: params.startDate.toString(),
                edate: params.endDate.toString(),
                os: (params.osAvgFeedback && params.osAvgFeedback.value) || '',
                lang: "en",
                page: params.page,
                size: params.size
            }
          
            return httpService.post("fetchAvgAppFeedbacks", payload).then((data) => {                                            
               return {
            	  
            	   avgRating: data.average,
                   totalUsers: data.totalUsers,
                   totalFeedbacks: data.totalFeedbacks,
                   ratingCounts: data.details[0],
               }
               
            });
       
        }
        
        
        function setSharedData(params) {
        	
            var payload = {
                startDate: params.startDate,
                endDate: params.endDate                
            }                                    
            data = payload;
            return data;
        }
        
        
        function getAllAppFeedbacks(params) {
            var payload = {
                sdate: params.sdate,
                edate: params.edate,
                rating: (params.filterBy && _.map(params.filterBy, 'value').join(','))|| 'all', 
                os: (params.os && params.os.value) || 'all',
                userLanguage: (params.langs && _.map(params.langs, 'id').join(',')) || 'all',
                page: params.page,
                pageSize: params.pageSize
            }

            
            return httpService.post("fetchAppFeedbacks", payload).then((data) => {                         
            	
            	return data;
            });
       
        }

        function getDeptFeedbacks(params,allDept) {
            var payload = {
                sdate: params.startDate,
                edate: params.endDate,            		
                rating: (params.filterBy && _.map(params.filterBy, 'value').join(','))|| 'all', 
                os: (params.os && params.os.value) || 'all',
                userLanguage: (params.langs && _.map(params.langs, 'id').join(',')) || 'all',
                departmentId: (params.apps && _.map(params.apps, 'appid').join(',')) || 'all',         
                page: params.page,
                pageSize: params.size
            }

            return httpService.post("fetchDeptFeedbacks", payload).then((data) => {                                            	
             	return data;
             });
        }
        
        function getServiceFeedbacks(params,allService) {
            var payload = {
            	sdate: params.startDate,
            	edate: params.endDate,
                rating: (params.filterBy && _.map(params.filterBy, 'value').join(','))|| 'all',
                os: (params.os && params.os.value) || 'all',
                userLanguage: (params.langs && _.map(params.langs, 'id').join(',')) || 'all',
             //   deptIds: _.map(params.apps, 'appid').join(','),
                serviceId: _.map(params.services, 'serviceid').join(',') || 'all',
                page: params.page,
                pageSize: params.size
            }

            return httpService.post("fetchServiceFeedbacks", payload).then((data) => {                                             	
             	return data;
             });
        }

        function getProfileInfo(profileId) {
            let payload = {
                mno: profileId,
                lang:'en'
            }

            return httpService.post("profileFetchInfo", payload).then((data) => {                                          
             	return data;
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