(function(app) {
    'use strict';
    app.service('attentionScreenService', attentionScreenServiceFn);
    attentionScreenServiceFn.$inject = ['httpService', '$timeout', 'dataProcessingService'];

    function attentionScreenServiceFn(httpService, $timeout, dpService) {
        var attentionScreenService = this;
        attentionScreenService.fetchAllScreens = fetchAllScreens;
        attentionScreenService.fetchActiveScreens = fetchActiveScreens;
        attentionScreenService.scheduleScreen = scheduleScreen;
        attentionScreenService.uploadAttScreen = uploadAttScreen;

        function fetchAllScreens(page, size) {
            var payload = {
                page,
                size
            }

            return httpService.post('attScreen/fetch', payload).then((response) => {
                let screens = _.map(response.screen, (screen) => {
                    return {
                        screenId: screen.id,
                        imageUrl: screen.img,
                        title: screen.title,
                        description: screen.desc,
                        buttonText: screen.txt
                    }
                });

                return {
                    screens: screens,
                    count: response.total
                }
            })
        }

        function fetchActiveScreens(startDate, endDate) {
            var payload = {
                sdate: startDate,
                edate: endDate
            }

            return httpService.post('attScreen/fetchActive', payload).then((response) => {
                var allDates = dpService.getDatesArray(startDate, endDate);
                var screens = _.map(response, (screen) => {
                    return {
                        date: screen.ssdate,
                        screen: {
                            screenId: screen.id,
                            imageUrl: screen.img,
                            title: screen.title,
                            description: screen.desc,
                            buttonText: screen.txt
                        }
                    }
                })
                screens = _.insertMissing(allDates, screens, 'date', 'screen');
                return screens;
            })
        }

        function scheduleScreen(startDate, endDate, screenId) {
            var payload = {
                sdate: startDate,
                edate: endDate,
                id: screenId
            }
            return httpService.post('attScreen/schedule', payload);
        }

        function uploadAttScreen(payload) {
            return httpService.postFile('attScreen/upload', payload);
        }
    }
})(angular.module('selfcare'));