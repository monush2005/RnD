(function(app) {
    'use strict';
    app.service('loggerService', loggerServiceFn);
    loggerServiceFn.$inject = [];

    function loggerServiceFn() {
        var loggerService = this;
        window.selfcare_logs = [];
        let logs = window.selfcare_logs;

        loggerService.log = log;

        function log(message) {
            if (logs.length >= 50)
                logs.shift();

            logs.push(message);

            window.envVars.debugInfo && console.log(message);
        }
    }
})(angular.module('selfcare'));