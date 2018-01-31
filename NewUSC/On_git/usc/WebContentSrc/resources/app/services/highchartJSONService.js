(function(app) {
    'use strict';
    app.service('highchartJSONService', highchartJSONServiceFn);
    highchartJSONServiceFn.$inject = ['httpService'];

    function highchartJSONServiceFn(httpService) {
        var highchartJSONService = this;
        highchartJSONService.getLineChartJSON = function(params) {
            // params.chartName
            // params.xTitle
            // params.xData
            // params.yTitle
            // params.yUnit
            // params.yData
            var json = {
                chart: {
                    type: 'areaspline'
                },
                title: {
                    text: params.chartName
                },
                subtitle: {
                    text: params.subTitle
                },
                xAxis: {
                    crosshair: true,
                    title: {
                        text: params.xTitle
                    },
                    categories: params.xData
                },
                yAxis: [{
                    title: {
                        text: params.yTitle
                    },
                    min: 0
                }],
                tooltip: {
                    shared: true
                },
                plotOptions: {
                    areaspline: {
                        fillOpacity: 0.4
                    },
                     series: {
                        marker: {
                            radius: 3
                        }
                    }
                },
                series: params.yData
            }
            if (params.yTitleDual) {
                var yDual = {
                    title: {
                        text: params.yTitleDual
                    },
                    opposite: true,
                    min: 0
                }
                json.yAxis.push(yDual)
            }
            return json;
        }

        highchartJSONService.getPieChartJSON = function(params) {
            // params.chartName
            // params.metric
            // params.data
            return {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
                title: {
                    text: params.chartName
                },
                subtitle: {
                    text: params.subTitle
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.2f}% ({point.y} Hits)</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.percentage:.2f} %',
                            style: {
                                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                            }
                        },
                        showInLegend: true
                    }
                },
                series: [{
                    name: params.metric,
                    colorByPoint: true,
                    data: params.data
                }]
            }
        }


        highchartJSONService.getColumnChartJSON = function(params) {
            // params.chartName
            // params.xTitle
            // params.xData
            // ?params.xFormatter
            // params.yTitle
            // params.yData
            var json = {
                chart: {
                    type: 'column'
                },
                title: {
                    text: params.chartName
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    },
                    series: {
                        marker: {
                            radius: 3
                        }
                    }
                },
                xAxis: {
                    title: {
                        text: params.xTitle
                    },
                    crosshair: true,
                    categories: params.xData,
                    labels: {
                        formatter: params.xFormatter || function () {
                            return this.value;
                        }
                    }
                },
                yAxis: [{
                    title: {
                        text: params.yTitle
                    },
                    min: 0
                }],
                tooltip: {
                    shared: true
                },
                series: params.yData
            }

            if (params.yTitleDual) {
                var yDual = {
                    title: {
                        text: params.yTitleDual
                    },
                    opposite: true,
                    min: 0
                }
                json.yAxis.push(yDual)
            }
            return json;
        }

        highchartJSONService.getSparklineJSON = function(params) {
            //params.series
            var series = [{
                type: 'line',
                data: _.map(params.yData, (value) => {
                    return {
                        y: parseFloat(value)
                    }
                })
            }]

            return {
                chart: {
                    margin: [30, 0, 0, 0],
                    // style: {
                    //     overflow: 'visible'
                    // },
                    // type:'areaspline'
                },
                title: {
                    text: null
                },
                legend: {
                    enabled: false
                },
                xAxis: {
                    labels: {
                        enabled: false
                    },
                    tickLength: 0
                },
                yAxis: {
                    title: {
                        text: null
                    },
                    maxPadding: 0,
                    minPadding: 0,
                    gridLineWidth: 0,
                    ticks: false,
                    endOnTick: false,
                    labels: {
                        enabled: false
                    },
                    min: 0
                },
                plotOptions: {
                    series: {
                        enableMouseTracking: false,
                        lineWidth: 3,
                        shadow: false,
                        states: {
                            hover: {
                                lineWidth: 2
                            }
                        },
                        marker: {
                            radius: 0
                        }
                    }
                },
                series: series
            }
        }
    }
})(angular.module('selfcare'));