(function(app) {
    'use strict';
    app.service('gaHttpService', gaHttpServiceFn);
    gaHttpServiceFn.$inject = ['httpService', 'helperService', '$q', '$timeout', '$rootScope', 'loggerService', 'customToastService'];

    function gaHttpServiceFn(httpService, helperService, $q, $timeout, $rootScope, loggerService, customToastService) {
        var gaHttpService = this;
        var scope = 'https://www.googleapis.com/auth/analytics';
        gaHttpService.post = post;
        gaHttpService.loginGA = loginGA;
        gaHttpService.isLoggedIn = isLoggedIn;
        gaHttpService.clearCache = clearCache;
        gaHttpService.resetGoogleAnalytics = resetGoogleAnalytics;
        let isGALoaded = false;
        let isGALoggedIn = false;
        let GoogleAuthInstance = null;
        let cache = {};

        function loadGA(callback) {
            if (isGALoaded)
                return $q.resolve();
            else {
                return helperService.loadScript('https://apis.google.com/js/api.js').then(() => {
                    let def = $q.defer();
                    gapi.load('client:auth2', {
                        callback() {
                            let initPromise = gapi.client.init({
                                apiKey: envVars.ga.apiKey,
                                clientId: envVars.ga.clientId,
                                scope: scope
                            })
                            let isResolvedOrRejected = false;

                            $timeout(() => {
                                // goog.Thenable returned by gapi.client.init sometimes remains
                                // pending in shady network conditions. Checking after 3 seconds 
                                // if initPromise was resolved or rejected. If still pending, loadGA rejects.
                                isResolvedOrRejected ? '' : def.reject();
                            }, 3000);

                            initPromise.then(() => {
                                isResolvedOrRejected = true;
                                GoogleAuthInstance = gapi.auth2.getAuthInstance();
                                isGALoaded = true;
                                def.resolve();
                            }, () => {
                                isResolvedOrRejected = true;
                                def.reject();
                            });
                        },
                        onerror() {
                            def.reject();
                        }
                    });
                    return def.promise;
                });
            }
        }

        function loginGA() {
            return loadGA().then(() => {
                let def = $q.defer();
                GoogleAuthInstance.signIn().then(() => {
                    def.resolve();
                }, (errorObj) => {
                    let msg = '';
                    switch (errorObj.error) {
                        case 'popup_closed_by_user':
                            msg = 'Login Popup closed/blocked. Please try again.';
                            break;
                        case 'access_denied':
                            msg = 'Please Allow access to Google Analytics.';
                            break;
                        default:
                            msg = 'Something went wrong.';
                    }
                    def.reject(msg);
                });
                GoogleAuthInstance.isSignedIn.listen(function(isSignedIn) {
                    isGALoggedIn = isSignedIn;
                });
                return def.promise;
            });
        }

        function isLoggedIn() {
            return loadGA().then(() => {
                isGALoggedIn = GoogleAuthInstance.isSignedIn.get();
                return isGALoggedIn;
            })
        }

        function resetGoogleAnalytics() {
            isGALoaded = false;
            isGALoggedIn = false;
            GoogleAuthInstance && GoogleAuthInstance.signOut();
            GoogleAuthInstance && GoogleAuthInstance.isSignedIn.set(false);
            clearCache();
        }

        function post(request) {
            if (!isGALoggedIn) {
                return $q.reject('Google Analytics not logged in.');
            }

            loggerService.log({ gaRequest: request });

            let key = sha256(JSON.stringify(request));
            if (cache[key]) {
                loggerService.log({ gaResponseCached: cache[key] });
                return $q.resolve(_.cloneDeep(cache[key].result.reports));
            }

            var def = $q.defer();
            gapi.client.request({
                path: '/v4/reports:batchGet',
                root: 'https://analyticsreporting.googleapis.com/',
                method: 'POST',
                body: {
                    reportRequests: [request]
                }
            }).then((data) => {
                let key = sha256(JSON.stringify(request));
                cache[key] = _.cloneDeep(data);
                loggerService.log({ gaResponse: data });
                def.resolve(data.result.reports);
            }, (data) => {
                def.reject(data);

                if (data.result.error.code == -1)
                    customToastService.noConnection();

                if (data.status == 403) {
                    GoogleAuthInstance.disconnect();
                    resetGoogleAnalytics();
                    $rootScope.$emit('logoutGA');
                }
            });
            return def.promise;
        }

        function clearCache() {
            cache = {};
        }
    }
})(angular.module('selfcare'));