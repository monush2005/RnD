(function(app) {
    'use strict';
    app.service('googleAnalyticsDataProcService', googleAnalyticsDataProcServiceFn);
    googleAnalyticsDataProcServiceFn.$inject = ['highchartJSONService'];

    function googleAnalyticsDataProcServiceFn(highchartJSONService) {
    	var googleAnalyticsDataProcService = this;
		googleAnalyticsDataProcService.processUsersData = processUsersData;
        googleAnalyticsDataProcService.processTableData = processTableData;


		function processUsersData(report, criteria, subCriteria) {
			let labels = getGraphLabels(criteria, subCriteria);

            let allSeries = _.map(report.columnHeader.metricHeader.metricHeaderEntries, 'name');
            let allXValues = _(report.data.rows).map(i => _.head(i.dimensions)).value();
            let json = {
                chartName: labels.chartName,
                xTitle: labels.xTitle,
                xData: allXValues,
                yTitle: labels.yTitle,
                yData: []
            };

             _.each(allSeries, (series, index) => {
                json.yData.push({
                    name: _.capitalize(series),
                    data: _(report.data.rows).map(i => _.head(i.metrics).values[index]).map(_.parseInteger).value()
                })
            });

            json = highchartJSONService.getColumnChartJSON(json);
            json.tooltip = {
                shared: true,
                formatter: function() {
                    var result = `${this.x}`;
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


        function processTableData(report, criteria) {
            let labels = getGraphLabels(criteria);
            labels.xTitle += ` (Top ${envVars.ga.maxResults})`;
            let table = {};
            table.columns = [labels.xTitle].concat(_.map(report.columnHeader.metricHeader.metricHeaderEntries, 'name'));
            table.rows = _(report.data.rows).map(item => {
                let subArray = [];
                subArray.push(_.head(item.dimensions));
                subArray = subArray.concat(_.head(item.metrics).values);
                return subArray;
            }).value();
            table.rowCount = report.data.rowCount;
            return table;
        }


		function getGraphLabels(criteria, subCriteria) {
            let labels = {};
            labels.yTitle = 'Users';
            let chartNameExtn = subCriteria ? ` - (${subCriteria})` : '';

            switch (criteria) {
                case 'state':
                    labels.xTitle = 'State';
                    labels.chartName = 'State Distribution';
                    break;
                case 'city':
                    labels.xTitle = 'City';
                    labels.chartName = 'City Distribution';
                    break;
                case 'device':
                    labels.xTitle = 'Device';
                    labels.chartName = 'Device Distribution';
                    break;
                case 'screen':
                    labels.xTitle = 'Screen';
                    labels.chartName = 'Screen Distribution';
                    break;
            }
            labels.chartName += chartNameExtn;
            return labels;
        }



    }
})(angular.module('selfcare'));
