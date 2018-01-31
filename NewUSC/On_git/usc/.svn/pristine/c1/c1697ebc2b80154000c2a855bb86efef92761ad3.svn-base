(function(app) {
    'use strict';
    app.service('httpService', httpServiceFn);

    httpServiceFn.$inject = ['$q', '$http', '$state', 'customToastService', 'ngProgressService', '$localStorage', '$timeout', 'loggerService'];

    function httpServiceFn($q, $http, $state, customToastService, ngProgressService, $localStorage, $timeout, loggerService) {
        var httpService = this;
        var cache = {};
        //exposed functions
        httpService.post = post;
        httpService.postMock = postMock;
        httpService.postFile = postFile;
        httpService.clearCache = clearCache;

        //options for methods
        //set options.noToast true if toast is not to be shown in case of "F"
        //set options.cache true to cache data
        //set options.nonBlocking true to prevent blocking of UI.
        
        var apiBaseUrl = window.envVars.apiServer + '/usc/api/';

        function post(url, data = {}, options = {}) {
            data = normalizeDates(data);

            loggerService.log({url: apiBaseUrl + url, requestData: data});

            if (options.cache) {
                let key = sha256(url + JSON.stringify(data));
                if (cache[key]) {
                    loggerService.log({url: url, responseDataCached: cache[key]});
                    return $q.resolve(_.cloneDeep(cache[key]));
                }
            }

            var returnPromise = $http({
                    method: 'POST',
                    url: apiBaseUrl + url,
                    data: data,
                    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
                    timeout: window.envVars.xhrTimeout,
                })
                .then(res => thenHandler(res, options, url, data))
                .catch(catchHandler)

            if (options.nonBlocking)
                return returnPromise;

            ngProgressService.startAuto(returnPromise);
            ngProgressService.blockView(returnPromise);
            return returnPromise;
        }

        function postFile(url, data = {}, options = {}) {
            data = normalizeDates(data);
            loggerService.log({url: apiBaseUrl + url, requestData: data});
            var returnPromise = $http({
                    method: 'POST',
                    url: apiBaseUrl + url,
                    data: data,
                    headers: { 'Content-Type': undefined },
                    timeout: window.envVars.xhrTimeout,
                    transformRequest: function(data) {
                        var formData = new FormData();
                        angular.forEach(data, function(value, key) {
                            formData.append(key, value);
                        });
                        return formData;
                    }
                })
                .then(res => thenHandler(res, options, url, data))
                .catch(catchHandler)

            if (options.nonBlocking)
                return returnPromise;

            ngProgressService.startAuto(returnPromise);
            ngProgressService.blockView(returnPromise);
            return returnPromise;
        }

        function postMock(url, data = {}, options = {}) {
            url = 'resources/mockData/' + url;
            data = normalizeDates(data);

            loggerService.log({url: url, requestData: data});

            if (options.cache) {
                let key = sha256(url + JSON.stringify(data));
                if (cache[key]) {
                    loggerService.log({url: url, responseDataCached: cache[key]});
                    return $q.resolve(_.cloneDeep(cache[key]));
                }
            }

            var returnPromise = $http({
                    method: 'GET',
                    url: url,
                    data: data,
                    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
                    timeout: window.envVars.xhrTimeout,
                })
                .then(response => $timeout(() => response, 500))
                .then(res => thenHandler(res, options, url, data))
                .catch(catchHandler)

            if (options.nonBlocking)
                return returnPromise;
            
            ngProgressService.startAuto(returnPromise);
            ngProgressService.blockView(returnPromise);
            return returnPromise;
        }

        function thenHandler(response, options, url, data) {
            loggerService.log({url: response.config.url, responseData: response.data});

            if (response.data.rs == 'F') {
                if (_.includes(response.data.rd && response.data.rd.toLowerCase(), "authentication failed")) {
                    $localStorage.$reset();
                    customToastService.freeText('You logged in somewhere else or your rights have been updated by admin. Please login again.', undefined, true);
                    $state.go('login');
                } else {
                    let errorMsg = response.data.rd || 'Something went wrong.';
                    if (window.envVars.debugInfo)
                        errorMsg += ' - ' + response.data.rc;

                    if (!options.noToast)
                        customToastService.freeText(errorMsg, undefined, true);
                }
                return $q.reject(response.data);
            } else {
                if (options.cache) {
                    let key = sha256(url + JSON.stringify(data));
                    cache[key] = _.cloneDeep(response.data.pd);
                }
                return response.data.pd;
            }
        }

        function catchHandler(responseError) {
            return $q.reject(responseError);
        }

        function clearCache() {
            cache = {};
        }

        function normalizeDates(data) {
            var data = _.cloneDeep(data);
            _.forEach(data, function(value, key) {
                if (_.isDate(value))
                    data[key] = moment(value).add(5, 'hours').add(30, 'minutes').toDate();
            });
            return data;
        }
    }

})(angular.module('selfcare'));