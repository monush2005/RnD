(function(app) {
    'use strict';
    app.service('googleAnalyticsDataService', googleAnalyticsDataServiceFn);
    googleAnalyticsDataServiceFn.$inject = ['gaHttpService', 'googleAnalyticsDataProcService'];

    function googleAnalyticsDataServiceFn(gaHttpService, googleAnalyticsDataProcService) {
        var googleAnalyticsDataService = this;
        googleAnalyticsDataService.getStatesData = getStatesData;
        googleAnalyticsDataService.getCityData = getCityData;
        googleAnalyticsDataService.getDeviceData = getDeviceData;
        googleAnalyticsDataService.getScreenData = getScreenData;

        function getStatesData(params) {
            return gaHttpService.post({
                viewId: params.viewId,
                dateRanges: [{
                    endDate: moment(params.endDate).format('YYYY-MM-DD'),
                    startDate: moment(params.startDate).format('YYYY-MM-DD')
                }],
                metrics: [{
                        expression: "ga:users",
                        alias: "Users"
                    },
                    {
                        expression: "ga:newUsers",
                        alias: "New Users"
                    }
                ],
                dimensions: [{
                    name: "ga:region"
                }],
                filtersExpression: "ga:countryIsoCode==IN;ga:city!=(not set)"
            }).then((response) => {
                return googleAnalyticsDataProcService.processUsersData(_.head(response), 'state');
            })
        }

        function getCityData(params) {
            return gaHttpService.post({
                viewId: params.viewId,
                dateRanges: [{
                    endDate: moment(params.endDate).format('YYYY-MM-DD'),
                    startDate: moment(params.startDate).format('YYYY-MM-DD')
                }],
                metrics: [{
                        expression: "ga:users",
                        alias: "Users"
                    },
                    {
                        expression: "ga:newUsers",
                        alias: "New Users"
                    }
                ],
                dimensions: [{
                    name: "ga:city"
                }],
                filtersExpression: `ga:countryIsoCode==IN;ga:region==${params.state};ga:city!=(not set)`
            }).then((response) => {
                return googleAnalyticsDataProcService.processUsersData(_.head(response), 'city', params.state);
            })
        }

        function getDeviceData(params) {
            return gaHttpService.post({
                viewId: params.viewId,
                dateRanges: [{
                    endDate: moment(params.endDate).format('YYYY-MM-DD'),
                    startDate: moment(params.startDate).format('YYYY-MM-DD')
                }],
                metrics: [{
                    expression: "ga:users",
                    alias: "Users"
                }],
                dimensions: [{
                    name: "ga:mobileDeviceinfo"
                }],
                filtersExpression: `ga:mobileDeviceinfo!=(not set)`,
                orderBys: [{
                    fieldName: "ga:users",
                    sortOrder: "DESCENDING"
                }],
                pageToken: params.pageToken,
                pageSize: envVars.ga.maxResults
            }).then((response) => {
                return googleAnalyticsDataProcService.processTableData(_.head(response), 'device');
            })
        }

        function getScreenData(params) {
            return gaHttpService.post({
                viewId: params.viewId,
                dateRanges: [{
                    endDate: moment(params.endDate).format('YYYY-MM-DD'),
                    startDate: moment(params.startDate).format('YYYY-MM-DD')
                }],
                metrics: [{
                        expression: "ga:users",
                        alias: "Users"
                    },
                    {
                        expression: "ga:screenviews",
                        alias: "Screen Views"
                    }
                ],
                dimensions: [{
                    name: "ga:screenName"
                }],
                filtersExpression: `ga:screenName!=(not set)`,
                orderBys: [{
                    fieldName: "ga:screenviews",
                    sortOrder: "DESCENDING"
                }],
                pageToken: params.pageToken,
                pageSize: envVars.ga.maxResults
            }).then((response) => {
                return googleAnalyticsDataProcService.processTableData(_.head(response), 'screen');
            })
        }
    }
})(angular.module('selfcare'));