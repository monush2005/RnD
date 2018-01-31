(function(app) {
    'use strict';
    app.component('highchartComponent', {
        templateUrl: 'resources/app/components/_commonComponents/highchartComponent/highchartComponent.html',
        controller: highchartComponentController,
        controllerAs: 'vm',
        bindings: {
            json: '<',
            noExport: '<',
            height: '<?',
            forAnalytics: '<',
            onSeriesClick: '&',
            fullscreenButton: '<',
            sortable: '<'
        }
    })

    highchartComponentController.$inject = ['$element', '$timeout', '$scope', '$document', '$mdCompiler', '$rootScope', '$mdMedia', 'helperService'];

    function highchartComponentController($element, $timeout, $scope, $document, $mdCompiler, $rootScope, $mdMedia, helperService) {
        var vm = this;

        vm.oldChartType = null;
        vm.selectAll = selectAll;
        vm.unselectAll = unselectAll;
        vm.$onChanges = $onChanges;

        function $onChanges(changesObj) {
            if (vm.json) {

                if (vm.oldChartType) {
                    vm.json.chart.type = vm.oldChartType;
                } else {
                    vm.oldChartType = vm.json.chart.type;
                }

                vm.json.credits = {
                    enabled: false
                }

                vm.json.lang = {
                    selectAll: 'Select all series',
                    unselectAll: 'Unselect all series',
                    fullscreen: 'View In fullscreen',
                }

                vm.json.exporting = {
                    buttons: {
                        selectAllButton: {
                            text: $mdMedia('gt-sm') ? 'Select All' : '',
                            symbol: 'url(resources/assets/images/selectall.png)',
                            symbolX: 22,
                            symbolY: 20,
                            _titleKey: 'selectAll',
                            onclick: selectAll
                        },
                        unselectAllButton: {
                            text: $mdMedia('gt-sm') ? 'Unselect All' : '',
                            symbol: 'url(resources/assets/images/unselectall.png)',
                            symbolX: 22,
                            symbolY: 20,
                            _titleKey: 'unselectAll',
                            onclick: unselectAll
                        },
                        contextButton: {
                            menuItems: [{
                                text: 'Export to PNG',
                                onclick: function() {
                                    this
                                        .exportChart({
                                            filename: vm.json.title.text
                                        });
                                }
                            }, {
                                text: 'Export to PDF',
                                onclick: function() {
                                    this
                                        .exportChart({
                                            type: 'application/pdf',
                                            filename: vm.json.title.text
                                        });
                                }
                            }, {
                                text: 'Export to CSV',
                                onclick: function() {
                                    helperService.downloadFile(vm.chart.getCSV(), vm.json.title.text + '.csv');
                                }
                            }]
                        }
                    }
                }


                var graphTypeConverters = [];
                var convertToLine = {
                    text: 'Convert to Line',
                    graphType: 'line',
                    onclick: function() {
                        vm.json.chart.type = 'line';
                        vm.oldChartType = vm.json.chart.type;
                        $onChanges();
                    }
                }

                var convertToColumn = {
                    text: 'Convert to Bar',
                    graphType: 'column',
                    onclick: function() {
                        vm.json.chart.type = 'column';
                        vm.oldChartType = vm.json.chart.type;
                        $onChanges();
                    }
                }

                var convertToArea = {
                    text: 'Convert to Area',
                    graphType: 'areaspline',
                    onclick: function() {
                        vm.json.chart.type = 'areaspline';
                        vm.oldChartType = vm.json.chart.type;
                        $onChanges();
                    }
                }

                var convertToArea = {
                    text: 'Convert to Area',
                    graphType: 'areaspline',
                    onclick: function() {
                        vm.json.chart.type = 'areaspline';
                        vm.oldChartType = vm.json.chart.type;
                        $onChanges();
                    }
                }

                graphTypeConverters.push(convertToLine);
                graphTypeConverters.push(convertToColumn);
                graphTypeConverters.push(convertToArea);


                if (vm.fullscreenButton) {
                    vm.json.exporting.buttons.fullScreenButton = {
                        text: '',
                        symbol: 'url(resources/assets/images/fullscreen.png)',
                        symbolX: 20,
                        symbolY: 18,
                        _titleKey: 'fullscreen',
                        onclick: showFullscreen
                    }
                }

                if (vm.forAnalytics) {
                    _.each(graphTypeConverters, (item) => {
                        if (item.graphType != vm.json.chart.type)
                            vm.json.exporting.buttons.contextButton.menuItems.push(item);
                    })
                }

                if(vm.sortable)
                    createSortButtons();

                if (vm.onSeriesClick()) {
                    vm.json.xAxis.clickOnCrosshair = (event, point) => {
                        $scope.$apply(vm.onSeriesClick()(point.category));
                        vm.closeFullscreen && vm.closeFullscreen();
                    }

                    vm.json.plotOptions.series = {
                        cursor: 'pointer',
                        events: {
                            click: (event) => {
                                $scope.$apply(vm.onSeriesClick()(event.point.category));
                                vm.closeFullscreen && vm.closeFullscreen();
                            }
                        }
                    }
                }

                if (vm.noExport)
                    vm.json.exporting = { enabled: false };

                if (vm.json.series.length < 3 && vm.json.exporting.buttons) {
                    delete vm.json.exporting.buttons.selectAllButton;
                    delete vm.json.exporting.buttons.unselectAllButton;
                }

                $timeout(() => {
                    vm.chart = Highcharts.chart($element.children()[0], vm.json);
                    vm.chart.reflow();
                })
            } else {
                vm.chart && vm.chart.destroy();
            }
        }

        function unselectAll() {
            _.each(vm.json.series, (series) => {
                series.visible = false;
            })
            $onChanges();
        }

        function selectAll() {
            _.each(vm.json.series, (series) => {
                series.visible = true;
            })
            $onChanges();
        }

        function createSortButtons() {
            if (vm.json.exporting && vm.json.exporting.buttons && vm.json.exporting.buttons.contextButton) {
                vm.json.exporting.buttons.contextButton.menuItems.push({
                    text: `Sort By ${vm.json.xAxis.title.text}`,
                    onclick: () => sortGraph(vm.json.xAxis.title.text, 'asc')
                })

                _.each(vm.json.series, (series) => {
                    vm.json.exporting.buttons.contextButton.menuItems.push({
                        text: `Sort By ${series.name}`,
                        onclick: () => sortGraph(series.name, 'desc')
                    })
                })
            }

            function sortGraph(keyToSort, order) {
                let arrays = {};
                arrays[vm.json.xAxis.title.text] = vm.json.xAxis.categories;
                _.each(vm.json.series, (series)=>{
                    arrays[series.name] = series.data;
                });
                arrays = _.sortMutipleArrays(arrays, keyToSort, order);

                vm.json.xAxis.categories = arrays[vm.json.xAxis.title.text];
                _.each(vm.json.series, (series)=>{
                    series.data = arrays[series.name];
                });
                $onChanges();
            }
        }

        function showFullscreen() {
            let parentVm = vm;
            let body = $document.find('body')[0];
            let elem = null;
            $mdCompiler.compile({
                templateUrl: 'resources/app/components/_commonComponents/highchartComponent/highchartComponentFullScreen.html',
                controller: ['$scope', function($scope) {
                    let vm = this;
                    vm.close = function() {
                        body.removeChild(elem);
                        $scope.$destroy();
                        delete parentVm.closeFullscreen;
                        window.removeEventListener('keydown', escapeHandler, true);
                    }

                    parentVm.closeFullscreen = vm.close;

                    window.addEventListener('keydown', escapeHandler, true);

                    function escapeHandler(e) {
                        if ((e.key == 'Escape' || e.key == 'Esc' || e.keyCode == 27) && (e.target.nodeName == 'BODY')) {
                            e.preventDefault();
                            vm.close();
                            return false;
                        }
                    }
                }],
                controllerAs: 'vm',
                bindToController: true,
                locals: {
                    json: _.cloneDeep(vm.json),
                    forAnalytics: vm.forAnalytics,
                    sortable: vm.sortable
                }
            }).then((compileData) => {
                elem = compileData.element[0];
                body.appendChild(elem);
                compileData.link($rootScope.$new(true));
            });
        }
    }
})(angular.module('selfcare'));