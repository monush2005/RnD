(function(app) {
    'use strict';
    app.service('analyticsUserService', analyticsUserServiceFn);
    analyticsUserServiceFn.$inject = ['httpService', 'analyticsDataProcService', 'dataProcessingService', '$q'];

    function analyticsUserServiceFn(httpService, analyticsDataProcService, dataProcessingService, $q) {
        var analyticsUserService = this;
        analyticsUserService.getTemporalData = getTemporalData;
        analyticsUserService.getDeptData = getDeptData;
        analyticsUserService.getServiceData = getServiceData;
        analyticsUserService.getCriteriaData = getCriteriaData;
        analyticsUserService.getSubCriteriaData = getSubCriteriaData;
        analyticsUserService.getDeptCriteriaData = getDeptCriteriaData;
        analyticsUserService.getDeptSubCriteriaData = getDeptSubCriteriaData;
        analyticsUserService.getMinistries = getMinistries;

        function getTemporalData(params) {
            var payload = {
                toDate: moment(params.endDate).format('YYYY-MM-DD'),
                fromDate: moment(params.startDate).format('YYYY-MM-DD'),
                url: 'biUserStatus'
            }

            return httpService.post('/umangAnalytics', payload, { cache: true, nonBlocking: true }).then((response) => {
                return {
                    status: analyticsDataProcService.processStatusData(response.userStatusList, params.startDate, params.endDate),
                    regMode: analyticsDataProcService.processRegData(response.registrationList, params.startDate, params.endDate, 'reg'),
                    regChannels: analyticsDataProcService.processRegData(response.useModeList, params.startDate, params.endDate, 'useMode')
                };
            })
        }

        function getCriteriaData(params) {
            let payload = {
                criteria: params.criteria,
                toDate: moment(params.endDate).format('YYYY-MM-DD'),
                fromDate: moment(params.startDate).format('YYYY-MM-DD')
            }

            return httpService.post('analyticsDemo', payload, { cache: true, nonBlocking: true }).then((response) => {
                let data = _.find(response, 'length');
                if (!data)
                    return $q.reject('Data Not Found');
                return analyticsDataProcService.processCriteriaData(data, params.criteria);
            })
        }

        function getSubCriteriaData(params) {
            let payload = {
                subCriteria: params.subCriteria,
                criteria: params.criteria,
                toDate: moment(params.endDate).format('YYYY-MM-DD'),
                fromDate: moment(params.startDate).format('YYYY-MM-DD')
            }

            return httpService.post('analyticsDemoSub', payload, { cache: true, nonBlocking: true }).then((response) => {
                let jsons = {};
                jsons.ageJson = analyticsDataProcService.processCriteriaData(response.ageList, 'age', params.subCriteria);
                jsons.genderJson = analyticsDataProcService.processCriteriaData(response.genderList, 'gender', params.subCriteria);
                jsons.qualJson = analyticsDataProcService.processCriteriaData(response.qualificationList, 'qual', params.subCriteria);
                jsons.occupJson = analyticsDataProcService.processCriteriaData(response.occupationList, 'occup', params.subCriteria);
                jsons.districtJson = analyticsDataProcService.processCriteriaData(response.locationList, 'district', params.subCriteria);
                return jsons;
            })
        }


        function getDeptCriteriaData(params, forService) {
            let payload = {
                criteria: params.criteria,
                toDate: moment(params.endDate).format('YYYY-MM-DD'),
                fromDate: moment(params.startDate).format('YYYY-MM-DD'),
                type: forService?'service':'dept',
                id: params.id
            }

            return httpService.post('analyticsDeptDemo', payload, { cache: true, nonBlocking: true }).then((response) => {
                let data = _.find(response, 'length');
                if (!data)
                    return $q.reject('Data Not Found');
                return analyticsDataProcService.processCriteriaData(data, params.criteria);
            })
        }

        function getDeptSubCriteriaData(params, forService) {
            let payload = {
                subCriteria: params.subCriteria,
                criteria: params.criteria,
                toDate: moment(params.endDate).format('YYYY-MM-DD'),
                fromDate: moment(params.startDate).format('YYYY-MM-DD'),
                type: forService?'service':'dept',
                id: params.id
            }

            return httpService.post('analyticsDeptDemoSub', payload, { cache: true, nonBlocking: true }).then((response) => {
                let jsons = {};
                jsons.ageJson = analyticsDataProcService.processCriteriaData(response.ageList, 'age', params.subCriteria);
                jsons.genderJson = analyticsDataProcService.processCriteriaData(response.genderList, 'gender', params.subCriteria);
                jsons.qualJson = analyticsDataProcService.processCriteriaData(response.qualificationList, 'qual', params.subCriteria);
                jsons.occupJson = analyticsDataProcService.processCriteriaData(response.occupationList, 'occup', params.subCriteria);
                jsons.districtJson = analyticsDataProcService.processCriteriaData(response.locationList, 'district', params.subCriteria);
                return jsons;
            })
        }

        function getDeptData(dept, startDate, endDate) {
            let payload = {
                toDate: moment(endDate).format('YYYY-MM-DD'),
                fromDate: moment(startDate).format('YYYY-MM-DD'),
                id: dept.appid,
                type: 'dept'
            }

            return httpService.post('analyticsSFData', payload, { cache: true, nonBlocking: true }).then((response) => {
                return {
                    json: analyticsDataProcService.processSFData(response.sfList, startDate,  endDate),
                    services: response.serviceList
                }
            });
        }

        function getServiceData(serv, startDate, endDate) {
            let payload = {
                toDate: moment(endDate).format('YYYY-MM-DD'),
                fromDate: moment(startDate).format('YYYY-MM-DD'),
                id: serv.id,
                type: 'service'
            }

            return httpService.post('analyticsSFData', payload, { cache: true, nonBlocking: true }).then((response) => {
                return analyticsDataProcService.processSFData(response.sfList, startDate,  endDate);
            });
        }
        
        function getMinistries() {
             return httpService.post('ministries', {}, { cache: true, nonBlocking: true }).then((response) => {
                return _(response.ministryList).groupBy('ministry').map((item) => {
                    return {
                        ministryName: _.head(item).ministry,
                        stateId: _.head(item).stateCode,
                        appIds: _.map(item, 'departmentId')
                    }
                }).value();
            });
        }
    }
})(angular.module('selfcare'));