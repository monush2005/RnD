(function(app) {
    'use strict';
    app.config(configFn);

    configFn.$inject = ['$httpProvider'];

    function configFn($httpProvider) {
        $httpProvider.interceptors.push(interceptor);
        $httpProvider.defaults.withCredentials = true;
    }

    interceptor.$inject = ['$q', '$localStorage', '$state', '$injector'];

    function interceptor($q, $localStorage, $state, $injector) {
        return {
            request: request,
            requestError: requestError,
            response: response,
            responseError: responseError
        };

        function request(request) {
            return request;
        }

        function requestError(requestError) {
            return requestError;
        }

        function response(response) {
            return response;
        }

        function responseError(response) {
            switch (response.status) {
                case -1:
                    if(response.config.method=='POST')
                        $injector.get('customToastService').noConnection();
                        break;
                case 403:
                    // not to show timeout message when user logs out even if session timed out.
                    if (response.config.url.indexOf('logout') < 0)
                        $injector.get('customToastService').sessionTimeout();
                    $localStorage.$reset();
                    $state.go('login');
                    break;
                default:
                    $injector.get('customToastService').freeText('Something went wrong!', undefined, true);
            }
            return $q.reject(null);
        }
    }
})(angular.module('selfcare'));
