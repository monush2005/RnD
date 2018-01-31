(function(app) {
    'use strict';
    app.service('dataProcessingService', dataProcessingServiceFn);
    dataProcessingServiceFn.$inject = ['highchartJSONService'];

    function dataProcessingServiceFn(highchartJSONService) {
        var dataProcessingService = this;

        dataProcessingService.getDatesArray = getDatesArray;
        dataProcessingService.processDeptPlatform = processDeptPlatform;
        dataProcessingService.processDeptResponseSlab = processDeptResponseSlab;
        dataProcessingService.processDeptServUsers = processDeptServUsers;
        dataProcessingService.processDeptServResponseTime = processDeptServResponseTime;
        dataProcessingService.processDeptServSuccessRate = processDeptServSuccessRate;
        dataProcessingService.processServUsers = processServUsers;
        dataProcessingService.processServSuccessRate = processServSuccessRate;
        dataProcessingService.processServResponseTime = processServResponseTime;
        dataProcessingService.processRatingSparkline = processRatingSparkline;
        dataProcessingService.processRatingLine = processRatingLine;
        dataProcessingService.processResponseTimeSparkLine = processResponseTimeSparkLine;
        dataProcessingService.processResponseTimeLine = processResponseTimeLine;
        dataProcessingService.processUsersSparkLine = processUsersSparkLine;
        dataProcessingService.processUsersLine = processUsersLine;
        dataProcessingService.processSuccessRateSparkLine = processSuccessRateSparkLine;
        dataProcessingService.processSuccessRateLine = processSuccessRateLine;


        function processDeptPlatform(data) {
            var data = _(data).map(function(item) {
                item.name = item.platform;
                item.y = parseInt(item.users)
                if (!item.name)
                    return;
                return item;
            }).value();
            data = _.compact(data);
            var params = {};
            params.chartName = 'Usage Distribution';
            params.subTitle = 'Platform-wise distribution of hits'
            params.metric = 'No. of Hits';
            params.data = data;
            return highchartJSONService.getPieChartJSON(params);
        }

        function processDeptResponseSlab(data) {
            var data = _(data).map(function(item) {
                item.name = item.slab + " ms";
                item.y = parseInt(item.users)
                return item;
            }).sortBy((item)=>{return parseInt(item.slab)}).value();
            _.remove(data, function(item) {
                return !item.users
            });
            var params = {};
            params.chartName = 'Average Response Time Slabs';
            params.subTitle = 'Slab-wise distribution of hits'
            params.metric = 'No. of Hits';
            params.data = data;
            return highchartJSONService.getPieChartJSON(params);
        }

        function processDeptServUsers(deptName, deptData, servicesData, startDate, endDate) {
            deptData = _.map(deptData, (item) => {
                item.serviceName = deptName;
                return item;
            });

            var groupedData = _(deptData)
                .concat(servicesData)
                .groupBy('serviceName')
                .value();

            var allDates = getDatesArray(startDate, endDate);

            var xData = _.map(allDates, (date) => {
                if (allDates.length > 365)
                    return moment(date).format('YYYY MMM DD');
                else
                    return moment(date).format('MMM DD');
            });


            var yData = _(groupedData)
                .map((value, key) => {
                    var data = _.insertMissing(allDates,
                        value, 'date', 'users');
                    return {
                        name: key,
                        data: _(data).map('users').map(_.parseInteger).value(),
                        tooltip: {
                            valueSuffix: ' Hits'
                        }
                    }
                })
                .value();

            var params = {};
            params.chartName = 'API Hits';
            params.subTitle = 'Dayw-ise API Hits received in the selected duration'
            params.xTitle = 'Timeline';
            params.xData = xData;
            params.yTitle = 'No. of Hits';
            params.yData = yData;
            return highchartJSONService.getLineChartJSON(params);

        }

        function processDeptServResponseTime(deptName, deptData, servicesData, startDate, endDate) {
            deptData = _.map(deptData, (item) => {
                item.serviceName = deptName;
                return item;
            });

            var groupedData = _(deptData)
                .concat(servicesData)
                .groupBy('serviceName')
                .value();

            var allDates = getDatesArray(startDate, endDate);

            var xData = _.map(allDates, (date) => {
                if (allDates.length > 365)
                    return moment(date).format('YYYY MMM DD');
                else
                    return moment(date).format('MMM DD');
            });

            var yData = _(groupedData)
                .map((value, key) => {
                    var data = _.insertMissing(allDates,
                        value, 'date', 'responseTime');
                    return {
                        name: key,
                        data: _(data).map('responseTime').map(_.parseFloatSafe).value(),
                        tooltip: {
                            valueSuffix: ' ms'
                        }
                    }
                })
                .value();

            var params = {};
            params.chartName = 'Average Response Time';
            params.subTitle = 'Day-wise comparsion of average time taken by APIs to repond'
            params.xTitle = 'Timeline';
            params.xData = xData;
            params.yTitle = 'Average Response Time (ms)';
            params.yData = yData;
            return highchartJSONService.getLineChartJSON(params);
        }

        function processDeptServSuccessRate(deptName, deptData, servicesData, startDate, endDate) {
            deptData = _.map(deptData, (item) => {
                item.serviceName = deptName;
                return item;
            });

            var groupedData = _(deptData)
                .concat(servicesData)
                .groupBy('serviceName')
                .value();

            var allDates = getDatesArray(startDate, endDate);

            var xData = _.map(allDates, (date) => {
                if (allDates.length > 365)
                    return moment(date).format('YYYY MMM DD');
                else
                    return moment(date).format('MMM DD');
            });


            var successData = _(groupedData).map((value, key) => {
                    var data = _.insertMissing(allDates,
                        _.filter(value, { status: 'Success' }), 'date', 'users');
                    return {
                        name: key + ' - Success',
                        data: _(data).map('users').map(_.parseInteger).value(),
                        tooltip: {
                            valueSuffix: ' Hits'
                        }
                    }
                })
                .value();


            var failureData = _(groupedData)
                .map((value, key) => {
                    var data = _.insertMissing(allDates,
                        _.filter(value, { status: 'Failure' }), 'date', 'users');
                    return {
                        name: key + ' - Failure',
                        data: _(data).map('users').map(_.parseInteger).value(),
                        tooltip: {
                            valueSuffix: ' Hits'
                        }
                    }
                })
                .value();

            var params = {};
            params.chartName = 'API Success-Failure Stats';
            params.subTitle = 'Day-wise comparsion of successful and failed API hits'
            params.xTitle = 'Timeline';
            params.xData = xData;
            params.yTitle = 'No. of Hits';
            params.yData = _.reduce(successData, (acc) => {
                acc.push(successData.shift());
                acc.push(failureData.shift());
                return acc;
            }, []);
            return highchartJSONService.getLineChartJSON(params);
        }

        function processServUsers(serviceName, servData, startDate, endDate) {
            var allDates = getDatesArray(startDate, endDate);

            var xData = _.map(allDates, (date) => {
                if (allDates.length > 365)
                    return moment(date).format('YYYY MMM DD');
                else
                    return moment(date).format('MMM DD');
            });

            servData = _.insertMissing(allDates, servData, 'date', 'users');
            var yData = {
                name: serviceName,
                data: _(servData).map('users').map(_.parseInteger).value(),
                tooltip: {
                    valueSuffix: ' Hits'
                }
            }

            var params = {};
            params.chartName = 'API Hits';
            params.subTitle = 'Day-wise API Hits received in the selected duration'
            params.xTitle = 'Timeline';
            params.xData = xData;
            params.yTitle = 'No. of Hits';
            params.yData = [yData];
            return highchartJSONService.getLineChartJSON(params);
        }

        function processServSuccessRate(serviceName, servData, startDate, endDate) {
            var allDates = getDatesArray(startDate, endDate);

            var xData = _.map(allDates, (date) => {
                if (allDates.length > 365)
                    return moment(date).format('YYYY MMM DD');
                else
                    return moment(date).format('MMM DD');
            });

            var servSuccessData = _.insertMissing(allDates, _.filter(servData, { status: 'Success' }), 'date', 'users');
            var successYData = {
                name: serviceName + ' - Success',
                data: _(servSuccessData).map('users').map(_.parseInteger).value(),
                tooltip: {
                    valueSuffix: ' Hits'
                }
            }

            var servFailureData = _.insertMissing(allDates, _.filter(servData, { status: 'Failure' }), 'date', 'users');
            var failureYData = {
                name: serviceName + ' - Failure',
                data: _(servFailureData).map('users').map(_.parseInteger).value(),
                tooltip: {
                    valueSuffix: ' Hits'
                }
            }

            var params = {};
            params.chartName = 'API Success-Failure Stats';
            params.subTitle = 'Day-wise comparsion of successful and failed API hits'
            params.xTitle = 'Timeline';
            params.xData = xData;
            params.yTitle = 'No. of hits';
            params.yData = [successYData, failureYData];
            return highchartJSONService.getLineChartJSON(params);
        }

        function processServResponseTime(serviceName, servData, startDate, endDate) {
            var allDates = getDatesArray(startDate, endDate);

            var xData = _.map(allDates, (date) => {
                if (allDates.length > 365)
                    return moment(date).format('YYYY MMM DD');
                else
                    return moment(date).format('MMM DD');
            });

            servData = _.insertMissing(allDates, servData, 'date', 'users');
            var yData = {
                name: serviceName,
                data: _(servData).map('responseTime').map(_.parseFloatSafe).value(),
                tooltip: {
                    valueSuffix: ' ms'
                }
            }

            var params = {};
            params.chartName = 'Average Response Time';
            params.subTitle = 'Day-wise comparsion of average time taken by APIs to repond'
            params.xTitle = 'Timeline';
            params.xData = xData;
            params.yTitle = 'Average Response Time (ms)';
            params.yData = [yData];
            return highchartJSONService.getLineChartJSON(params);
        }


        function processRatingSparkline(data, startDate, endDate) {
            var allDates = getDatesArray(startDate, endDate);
            data = _.insertMissing(allDates, data, 'date', ['users', 'average']);
            var params = {};
            params.yData = _(data).map('average').map(_.parseFloatSafe).value();
            return highchartJSONService.getSparklineJSON(params);
        }

        function processRatingLine(deptName, data, startDate, endDate) {
            var allDates = getDatesArray(startDate, endDate);
            var xData = _.map(allDates, (date) => {
                if (allDates.length > 365)
                    return moment(date).format('YYYY MMM DD');
                else
                    return moment(date).format('MMM DD');
            });
            data = _.map(data, (item) => {
                item.average = item.average || item.averageRating; //cursor name to be changed by madhur.
                return item;
            })
            data = _.insertMissing(allDates, data, 'date', ['users', 'average', 'rating1', 'rating2', 'rating3', 'rating4', 'rating5']);



            var ratingsData = {
                name: 'Average Rating',
                type: 'spline',
                data: _(data).map('average').map(_.parseFloatSafe).value(),
                tooltip: {
                    valueSuffix: ' Stars'
                }
            }

            var starwise = [];

            _.each(['rating1', 'rating2', 'rating3', 'rating4', 'rating5'], (rating) => {
                starwise.push({
                    name: (starwise.length + 1) + ' star',
                    data: _(data).map(rating).map(_.parseFloatSafe).value(),
                    tooltip: {
                        valueSuffix: ' Ratings till date'
                    },
                    yAxis: 1
                })
            })

            var params = {};
            params.chartName = 'Ratings';
            params.subTitle = 'Cumulative ratings submitted by users'
            params.xTitle = 'Timeline';
            params.xData = xData;
            params.yTitle = ' Average Rating';
            params.yTitleDual = ' No. of Ratings';
            params.yData = _.concat(starwise, [ratingsData]);
            var json = highchartJSONService.getColumnChartJSON(params);
            json.plotOptions = {
                column: {
                    stacking: 'normal'
                }
            }
            json.tooltip = {
                shared: true,
                formatter: function() {
                        var result = `${this.x}`;
                        result+= `<br/>Total:  <b>${this.points[0].total} Ratings till date</b>`
                        _.each(this.points, function(item) {
                            result += `<br/> ${item.series.name}: <b>${item.y}</b>`
                        });
                        
                        return result;
                    }
                    // pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
            }
            return json;
        }

        // function processRatingLine(deptName, data, startDate, endDate) {
        //     var allDates = getDatesArray(startDate, endDate);
        //     var xData = _.map(allDates, (date) => {
        //         if (allDates.length > 365)
        //             return moment(date).format('YYYY MMM DD');
        //         else
        //             return moment(date).format('MMM DD');
        //     });
        //     data = _.map(data, (item) => {
        //         item.average = item.average || item.averageRating;
        //         return item;
        //     })
        //     data = _.insertMissing(allDates, data, 'date', ['users', 'average', 'rating1', 'rating2', 'rating3', 'rating4', 'rating5']);

        //     var usersData = {
        //         name: 'Total Ratings',
        //         yAxis: 1,
        //         type: 'spline',
        //         data: _(data).map('users').map(_.parseFloatSafe).value(),
        //         tooltip: {
        //             valueSuffix: ' Ratings till date'
        //         }
        //     }

        //     var ratingsData = {
        //         name: 'Average Rating',
        //         type: 'column',
        //         data: _(data).map('average').map(_.parseFloatSafe).value(),
        //         tooltip: {
        //             valueSuffix: ' Stars'
        //         }
        //     }

        //     var starwise = []
        //     _.each(['rating1', 'rating2', 'rating3', 'rating4', 'rating5'], (rating) => {
        //         starwise.push({
        //             name: (starwise.length+1) + ' star',
        //             yAxis: 1,
        //             type: 'spline',
        //             data: _(data).map(rating).map(_.parseFloatSafe).value(),
        //             tooltip: {
        //                 valueSuffix: ' Ratings till date'
        //             },
        //             visible: false
        //         })
        //     })

        //     var params = {};
        //     params.chartName = 'Ratings';
        //     params.subTitle = 'Cumulative ratings submitted by users'
        //     params.xTitle = 'Timeline';
        //     params.xData = xData;
        //     params.yTitle = ' Average Rating';
        //     params.yTitleDual = ' No. of Ratings';
        //     params.yData = _.concat([ratingsData,usersData],starwise);
        //     return highchartJSONService.getLineChartJSON(params);
        // }

        function processResponseTimeSparkLine(data, startDate, endDate) {
            var allDates = getDatesArray(startDate, endDate);
            data = _.insertMissing(allDates, data, 'date', ['users', 'responseTime']);
            var params = {};
            params.yData = _(data).map('responseTime').map(_.parseFloatSafe).value();
            return highchartJSONService.getSparklineJSON(params);
        }

        function processResponseTimeLine(deptName, data, startDate, endDate) {
            var allDates = getDatesArray(startDate, endDate);
            var xData = _.map(allDates, (date) => {
                if (allDates.length > 365)
                    return moment(date).format('YYYY MMM DD');
                else
                    return moment(date).format('MMM DD');
            });
            data = _.insertMissing(allDates, data, 'date', ['users', 'responseTime']);

            var usersData = {
                name: 'No. of Hits',
                yAxis: 1,
                type: 'column',
                data: _(data).map('users').map(_.parseFloatSafe).value(),
                tooltip: {
                    valueSuffix: ' Hits'
                }
            }

            var rtData = {
                name: 'Average Response Time (ms)',
                type: 'spline',
                data: _(data).map('responseTime').map(_.parseFloatSafe).value(),
                tooltip: {
                    valueSuffix: ' ms'
                }
            }

            var params = {};
            params.chartName = 'Average API Response Time';
            params.subTitle = 'Day-wise Average API Response Time Against Number of API Hits'
            params.xTitle = 'Timeline';
            params.xData = xData;
            params.yTitle = 'Average Response Time (ms)';
            params.yTitleDual = 'No. of Hits';
            params.yData = [usersData, rtData];
            return highchartJSONService.getLineChartJSON(params);
        }

        function processSuccessRateSparkLine(data, startDate, endDate) {
            var allDates = getDatesArray(startDate, endDate);
            data = _.insertMissing(allDates, data, 'date', ['users', 'successPercentage']);
            var params = {};
            params.yData = _(data).map('successPercentage').map(_.parseFloatSafe).value();
            return highchartJSONService.getSparklineJSON(params);
        }

        function processSuccessRateLine(deptName, data, startDate, endDate) {
            var allDates = getDatesArray(startDate, endDate);
            var xData = _.map(allDates, (date) => {
                if (allDates.length > 365)
                    return moment(date).format('YYYY MMM DD');
                else
                    return moment(date).format('MMM DD');
            });
            data = _.insertMissing(allDates, data, 'date', ['users', 'successPercentage']);

            var usersData = {
                name: 'No. of Hits',
                yAxis: 1,
                type: 'column',
                data: _(data).map('users').map(_.parseFloatSafe).value(),
                tooltip: {
                    valueSuffix: ' Hits'
                }
            }

            var percentData = {
                name: 'Success Percentage',
                type: 'spline',
                data: _(data).map('successPercentage').map(_.parseFloatSafe).value(),
                tooltip: {
                    valueSuffix: '%'
                }
            }

            var params = {};
            params.chartName = 'Request Success Rate';
            params.subTitle = 'Day-wise API Success Percentage Against Number of API Hits'
            params.xTitle = 'Timeline';
            params.xData = xData;
            params.yTitle = 'Success Percentage';
            params.yTitleDual = 'No. of Hits';
            params.yData = [usersData, percentData];
            var json = highchartJSONService.getLineChartJSON(params);
            json.yAxis[0].max=100;
            return json;
        }


        function processUsersSparkLine(data, startDate, endDate) {
            var allDates = getDatesArray(startDate, endDate);
            data = _.insertMissing(allDates, data, 'date', ['users']);
            var params = {};
            params.yData = _(data).map('users').map(_.parseFloatSafe).value();
            return highchartJSONService.getSparklineJSON(params);
        }

        function processUsersLine(deptName, data, platformData, startDate, endDate) {
            var allDates = getDatesArray(startDate, endDate);
            var xData = _.map(allDates, (date) => {
                if (allDates.length > 365)
                    return moment(date).format('YYYY MMM DD');
                else
                    return moment(date).format('MMM DD');
            });

            data = _.map(data, (item) => {
                item.platform = 'All Platforms';
                return item;
            })

            platformData = _.groupBy(platformData, 'platform');
            platformData['All Platforms'] = data;

            var platformDataForJson = [];
            _.each(platformData, (value, key) => {
                value = _.insertMissing(allDates, value, 'date', ['users', 'platform']);
                platformDataForJson.push({
                    name: key,
                    type: 'spline',
                    data: _(value).map('users').map(_.parseFloatSafe).value(),
                    tooltip: {
                        valueSuffix: ' Hits'
                    }
                })
            })

            var params = {};
            params.chartName = 'API Hits';
            params.subTitle = 'Day-wise API hits with platform distribution'
            params.xTitle = 'Timeline';
            params.xData = xData;
            params.yTitle = 'API Hits';
            params.yData = platformDataForJson;
            return highchartJSONService.getLineChartJSON(params);
        }

        function getDatesArray(startDate, endDate) {
            startDate = moment(startDate);
            endDate = moment(endDate);
            var returnValue = [];
            while (startDate <= endDate) {
                returnValue.push(startDate.format('YYYY-MM-DD'));
                startDate = startDate.add(1, 'day');
            }
            return returnValue;
        }

    }
})(angular.module('selfcare'));
