(function(app) {
    'use strict';
    app.service('reportingService', reportingServiceFn);
    reportingServiceFn.$inject = ['httpService', 'dataProcessingService', '$localStorage'];

    function reportingServiceFn(httpService, dpService, $localStorage) {
        var reportingService = this;

        reportingService.getAppReportCard = function(params) {
            var payload = {
                department: params.appid,
                toDate: moment(params.endDate).format('YYYY-MM-DD'),
                fromDate: moment(params.startDate).format('YYYY-MM-DD')
            }

            return httpService.post('app/getReportCardData', payload, {cache: true, nonBlocking: true}).then((response) => {
                var deptName = $localStorage.userApps[params.appid].appname;
                response.rating.sparkline = dpService.processRatingSparkline(response.rating.selfcareAvgList, payload.fromDate, payload.toDate);
                response.rating.line = dpService.processRatingLine(deptName, response.rating.selfcareAvgList, payload.fromDate, payload.toDate);
                response.responseTime.sparkline = dpService.processResponseTimeSparkLine(response.responseTime.selfcareResponseTimeList, payload.fromDate, payload.toDate);
                response.responseTime.line = dpService.processResponseTimeLine(deptName, response.responseTime.selfcareResponseTimeList, payload.fromDate, payload.toDate);
                response.users.sparkline = dpService.processUsersSparkLine(response.users.selfcareDateWiseUsersList, payload.fromDate, payload.toDate);
                response.users.line = dpService.processUsersLine(deptName, response.users.selfcareDateWiseUsersList, response.users.platformWiseUsersList, payload.fromDate, payload.toDate);
                //need to get the name of cursor changed by madhur
                _.each(response.averageSuccessPercenatge.selfcareStatusList, (item) => {
                    item.successPercentage = item.status || item.successPercentage;
                })
                response.averageSuccessPercenatge.sparkline = dpService.processSuccessRateSparkLine(response.averageSuccessPercenatge.selfcareStatusList, payload.fromDate, payload.toDate);
                response.averageSuccessPercenatge.line = dpService.processSuccessRateLine(deptName, response.averageSuccessPercenatge.selfcareStatusList, payload.fromDate, payload.toDate);
                return response;
            })
        }

        reportingService.getServiceReportCard = function(params) {
            var payload = {
                service: params.serviceid,
                toDate: moment(params.endDate).format('YYYY-MM-DD'),
                fromDate: moment(params.startDate).format('YYYY-MM-DD')
            }
            return httpService.post('service/getReportCardData', payload, {cache: true, nonBlocking: true}).then((response) => {
                var servName = $localStorage.userServices[params.serviceid].servicename;
                response.averageRating.sparkline = dpService.processRatingSparkline(response.averageRating.selfcareAverageRatingList, payload.fromDate, payload.toDate);
                response.averageRating.line = dpService.processRatingLine(servName, response.averageRating.selfcareAverageRatingList, payload.fromDate, payload.toDate);
                response.averageRating.avgRating = response.averageRating.averageRating;
                response.responseTime.sparkline = dpService.processResponseTimeSparkLine(response.responseTime.selfcareResponseTimeList, payload.fromDate, payload.toDate);
                response.responseTime.line = dpService.processResponseTimeLine(servName, response.responseTime.selfcareResponseTimeList, payload.fromDate, payload.toDate);
                response.users.sparkline = dpService.processUsersSparkLine(response.users.selfcareDateWiseUsersList, payload.fromDate, payload.toDate);
                response.users.line = dpService.processUsersLine(servName, response.users.selfcareDateWiseUsersList, response.users.platformWiseUsersList, payload.fromDate, payload.toDate);
                response.averageSuccessPercenatge.sparkline = dpService.processSuccessRateSparkLine(response.averageSuccessPercenatge.selfcareStatusList, payload.fromDate, payload.toDate);
                response.averageSuccessPercenatge.line = dpService.processSuccessRateLine(servName, response.averageSuccessPercenatge.selfcareStatusList, payload.fromDate, payload.toDate);
                return response;
            });
        }

        reportingService.getAppDashboardData = function(params) {
            var payload = {
                department: params.appid,
                toDate: moment(params.endDate).format('YYYY-MM-DD'),
                fromDate: moment(params.startDate).format('YYYY-MM-DD')
            }
            return httpService.post('app/getDashboardData', payload, {cache: true, nonBlocking: true}).then((response) => {
                var jsons = {};
                var deptName = $localStorage.userApps[params.appid].appname;
                jsons.platform = dpService.processDeptPlatform(response.selfcareDeptPlatformList);
                jsons.slab = dpService.processDeptResponseSlab(response.selfcareDeptSlabList);
                jsons.users = dpService.processDeptServUsers(deptName, response.selfcareDeptUsersList, response.selfcareDeptServiceUsersList, payload.fromDate, payload.toDate);
                jsons.successRate = dpService.processDeptServSuccessRate(deptName, response.selfcareDeptStatusList, response.selfcareDeptServiceStatusList, payload.fromDate, payload.toDate);
                jsons.rt = dpService.processDeptServResponseTime(deptName, response.selfcareDeptResponseTimeList, response.selfcareDeptServiceResponseTimeList, payload.fromDate, payload.toDate);
                return jsons;
            });
        }

        reportingService.getServiceDashboardData = function(params) {
            var payload = {
                service: params.serviceid,
                toDate: moment(params.endDate).format('YYYY-MM-DD'),
                fromDate: moment(params.startDate).format('YYYY-MM-DD')
            }
            return httpService.post('service/getDashboardData', payload, {cache: true, nonBlocking: true}).then((response) => {
                var jsons = {};
                var serviceName = $localStorage.userServices[params.serviceid].servicename;
                jsons.platform = dpService.processDeptPlatform(response.selfcareDeptServicePlatformList);
                jsons.slab = dpService.processDeptResponseSlab(response.selfcareDeptServiceSlabList);
                jsons.users = dpService.processServUsers(serviceName, response.selfcareDeptServiceUsersList, payload.fromDate, payload.toDate);
                jsons.successRate = dpService.processServSuccessRate(serviceName, response.selfcareDeptServiceStatusList, payload.fromDate, payload.toDate);
                jsons.rt = dpService.processServResponseTime(serviceName, response.selfcareDeptServiceResponseTimeList, payload.fromDate, payload.toDate);
                return jsons;
            })
        }
    }
})(angular.module('selfcare'));
