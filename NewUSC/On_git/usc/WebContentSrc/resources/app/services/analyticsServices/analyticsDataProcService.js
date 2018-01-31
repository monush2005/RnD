(function(app) {
    'use strict';
    app.service('analyticsDataProcService', analyticsDataProcServiceFn);
    analyticsDataProcServiceFn.$inject = ['httpService', 'highchartJSONService'];

    function analyticsDataProcServiceFn(httpService, highchartJSONService) {
        var analyticsDataProcService = this;
        analyticsDataProcService.processStatusData = processStatusData;
        analyticsDataProcService.processRegData = processRegData;
        analyticsDataProcService.processCriteriaData = processCriteriaData;
        analyticsDataProcService.processSFData = processSFData;

        function processStatusData(data, startDate, endDate) {
            var jsons = {};
            var allDates = getDatesArray(startDate, endDate);
            let statuses = _(data).map('status').uniq().sort().value();

            _.each(statuses, (status) => {
                let temp = _.filter(data, (item) => {
                    return item.status == status;
                });
                temp = _.insertMissing(allDates, temp, 'date', ['users', 'status']);
                jsons[status] = {};
                jsons.daily = jsons.daily || [];
                jsons.weekly = jsons.weekly || [];
                jsons.monthly = jsons.monthly || [];
                jsons.daily.push(getDailySeries(temp, status));
                jsons.weekly.push(getWeeklySeries(temp, status));
                jsons.monthly.push(getMonthlySeries(temp, status));
                jsons[status].sparkline = proccessDailySparkline(temp);
                jsons[status].totalUsers = _(temp).map('users').map(_.parseInteger).sum();
            });

            jsons.daily = getGroupChartJson('Daily', 'Dates', jsons.daily);
            jsons.daily.tooltip = {
                shared: true,
                formatter: function() {
                    var result = `${this.x} (${moment(this.x, 'DD MMM YY').format('dddd')})`;
                    _.each(this.points, (item) => {
                        result += `<br/> <span style="color:${item.point.color}">\u25CF</span> ${item.series.name}: <b>${item.y}</b>`
                    })
                    return result;
                }
            };
            jsons.weekly = getGroupChartJson('Weekly', 'Week', jsons.weekly);
            jsons.monthly = getGroupChartJson('Monthly', 'Month', jsons.monthly);

            return jsons;
        }

        function proccessDailySparkline(data) {
            var params = {};
            params.yData = _(data).map('users').map(_.parseFloatSafe).value();
            return highchartJSONService.getSparklineJSON(params);
        }

        function getDailySeries(data, status) {
            let temp = {}
            temp.xData = _(data).map('date').map(date => {
                return data.length > 365 ? moment(date).format('DD MMM YY') : moment(date).format('DD MMM');
            }).value();
            temp.series = { name: _.capitalize(status), data: _(data).map('users').map(_.parseInteger).value() };
            return temp;
        }

        function getWeeklySeries(data, status) {
            let temp = {};
            temp.xData = _(data)
                .chunkReverse(7)
                .map((datesArray) => {
                    let dateFormat = (data.length > 365) ? 'DD MMM YY' : 'DD MMM';
                    return moment(_.head(datesArray).date).format(dateFormat) + ' - ' + moment(_.last(datesArray).date).format(dateFormat);
                }).value();

            let yData = _(data)
                .chunkReverse(7)
                .map((datesArray) => {
                    return _(datesArray).map('users').map(_.parseInteger).sum();
                }).value();
            temp.series = { name: _.capitalize(status), data: yData };
            return temp;
        }

        function getMonthlySeries(data, status) {
            let xData = _(data)
                .groupBy((item) => moment(item.date).format("MM YYYY"))
                .map((datesArray, index, array) => {
                    datesArray = _.map(datesArray, 'date');
                    let isStartOfMonth = moment(_.head(datesArray)).isSame(moment(_.head(datesArray)).startOf('month'), 'day');
                    let isEndOfMonth = moment(_.last(datesArray)).isSame(moment(_.head(datesArray)).endOf('month'), 'day');
                    if (isStartOfMonth && isEndOfMonth) {
                        let dateFormat = (data.length > 365) ? 'MMMM YY' : 'MMMM';
                        return moment(_.head(datesArray)).format(dateFormat);
                    } else {
                        let dateFormat = (data.length > 365) ? 'DD MMM YY' : 'DD MMM';
                        return moment(_.head(datesArray)).format(dateFormat) + ' - ' + moment(_.last(datesArray)).format(dateFormat);
                    }
                }).value();

            let yData = _(data)
                .groupBy((item) => moment(item.date).format("MM YYYY"))
                .map((datesArray) => {
                    return _(datesArray).map('users').map(_.parseInteger).sum();
                }).value();

            return {
                xData: xData,
                series: { name: _.capitalize(status), data: yData }
            }
        }

        function getGroupChartJson(title, xTitle, data) {
            let json = highchartJSONService.getLineChartJSON({
                chartName: title,
                xTitle: xTitle,
                xData: _.head(data).xData,
                yTitle: 'Users',
                yData: _.map(data, 'series')
            });
            json.chart.type = 'line';
            return json;
        }

        function processRegData(data, startDate, endDate, key) {
            let modes = _(data).map(key).uniq().value();
            var jsons = {};
            var allDates = getDatesArray(startDate, endDate);
            _.each(modes, (mode) => {
                let singleModeData = _.filter(data, (item) => {
                    return item[key] == mode;
                });
                singleModeData = _.insertMissing(allDates, singleModeData, 'date', ['users', key]);
                jsons[mode] = {};
                jsons[mode].sparkline = proccessDailySparkline(singleModeData);
                jsons[mode].totalUsers = _(singleModeData).map('users').map(_.parseInteger).sum();
            });
            return jsons;
        }

        function processCriteriaData(data, criteria, subCriteria) {
            if (!data || _.isEqual(data, []))
                return undefined;

            let statuses = _(data).map('status').uniq().sort().value();
            let labels = getGraphLabels(criteria, subCriteria);
            let allXValues = _(data).map('x').uniq().sort().value();
            let json = {
                chartName: labels.chartName,
                xTitle: labels.xTitle,
                xData: allXValues,
                yTitle: labels.yTitle,
                yData: []
            };

            _.each(statuses, (status) => {
                let temp = _.filter(data, (item) => {
                    return item.status == status;
                });
                temp = _.insertMissing(allXValues, temp, 'x', 'y');
                json.yData.push({
                    name: _.capitalize(status),
                    data: _(temp).map('y').map(_.parseInteger).value()
                })
            });
            json = highchartJSONService.getColumnChartJSON(json);
            json.tooltip = {
                shared: true,
                formatter: function() {
                    let total = _(this.points).map('y').sum();
                    var result = `${this.x} (Total: ${total})`;
                    _.each(this.points, (item) => {
                        result += `<br/> <span style="color:${item.point.color}">\u25CF</span> ${item.series.name}: <b>${item.y}</b>`
                    })
                    if(json.xAxis.clickOnCrosshair)
                        result += '<br/><br/> <span style="font-size:12px; color:grey;">  (Click to see more details)</span>'
                    return result;
                }
            }
            return json;
        }

        function getGraphLabels(criteria, subCriteria) {
            let labels = {};
            let chartNameExtn = subCriteria ? ` - (${subCriteria})` : '';
            labels.yTitle = 'Users';

            switch (criteria) {
                case 'gender':
                    labels.xTitle = 'Gender';
                    labels.chartName = 'Gender Distribution';
                    break;
                case 'age':
                    labels.xTitle = 'Age Bucket';
                    labels.chartName = 'Age Distribution';
                    break;
                case 'qual':
                    labels.xTitle = 'Qualification';
                    labels.chartName = 'Qualification Distribution';
                    break;
                case 'occup':
                    labels.xTitle = 'Occupation';
                    labels.chartName = 'Occupation Distribution';
                    break;
                case 'location':
                    labels.xTitle = 'State';
                    labels.chartName = 'State Distribution';
                    break;
                case 'district':
                    labels.xTitle = 'District';
                    labels.chartName = 'District Distribution';
                    break;
                case 'lang':
                    labels.xTitle = 'Language';
                    labels.chartName = 'Language Distribution';
                    break;
            }
            labels.chartName += chartNameExtn;
            return labels;
        }

        function processSFData(data, startDate, endDate) {
            let allDates = getDatesArray(startDate, endDate);
            let df = allDates.length > 365 ? 'YYYY MMM DD' : 'MMM DD';

            let xData = _.map(allDates, (date) => {
                return moment(date).format(df);
            });

            let sData = _.insertMissing(allDates, _.filter(data, { status: 'S' }), 'x', 'y');
            let successYData = {
                name: `Success (${_(sData).map('y').map(_.parseInteger).sum()})`,
                data: _(sData).map('y').map(_.parseInteger).value(),
                tooltip: {
                    valueSuffix: ' Hits'
                }
            }

            let fData = _.insertMissing(allDates, _.filter(data, { status: 'F' }), 'x', 'y');
            let failureYData = {
                name: `Failure (${_(fData).map('y').map(_.parseInteger).sum()})`,
                data: _(fData).map('y').map(_.parseInteger).value(),
                tooltip: {
                    valueSuffix: ' Hits'
                }
            }

            let params = {};
            params.chartName = 'Success-Failure Stats';
            params.subTitle = 'Daywise comparsion of successful and failed API hits'
            params.xTitle = 'Dates';
            params.xData = xData;
            params.yTitle = 'No. of hits';
            params.yData = [successYData, failureYData];
            let json = highchartJSONService.getLineChartJSON(params);
            json.tooltip = {
                shared: true,
                formatter: function() {
                    var result = '';
                    _.each(this.points, (item) => {
                        result += `<br/> <span style="color:${item.point.color}">\u25CF</span> ${item.series.name.split(' ')[0]}: <b>${item.y}</b>`
                    })
                    return result;
                }
            }

            return json;
        }

        function getDatesArray(startDate, endDate) {
            startDate = moment(startDate);
            endDate = moment(endDate);
            let returnValue = [];
            while (startDate <= endDate) {
                returnValue.push(startDate.format('YYYY-MM-DD'));
                startDate = startDate.add(1, 'day');
            }
            return returnValue;
        }

    }
})(angular.module('selfcare'));