(function(app) {
    'use strict';
    app.config(configFn);

    configFn.$inject = ['$mdThemingProvider', '$mdAriaProvider', '$mdProgressCircularProvider', '$locationProvider', '$urlMatcherFactoryProvider', '$urlServiceProvider', '$compileProvider', '$mdDateLocaleProvider', '$translateProvider'];

    function configFn($mdThemingProvider, $mdAriaProvider, $mdProgressCircularProvider, $locationProvider, $urlMatcherFactoryProvider, $urlServiceProvider, $compileProvider, $mdDateLocaleProvider, $translateProvider) {
        $compileProvider.debugInfoEnabled(envVars.debugInfo);
        $mdAriaProvider.disableWarnings();
        $urlMatcherFactoryProvider.caseInsensitive(true);
        $locationProvider.html5Mode(true);
        $urlServiceProvider.rules.otherwise("/dashboard/apps");

        $mdDateLocaleProvider.formatDate = function(date) {
            if (!angular.isUndefined(date)) {
                return moment(date).format('DD MMMM YYYY');
            }
            return null;
        };

        $mdDateLocaleProvider.parseDate = function(dateString) {
            var m = moment(dateString, 'D MMMM YYYY', true);
            if(!m.isValid())
                m = moment(dateString, 'D-M-YYYY', true);
            if(!m.isValid())
                m = moment(dateString, 'D MMM YYYY', true);
            return m.isValid() ? m.toDate() : new Date(NaN);
        };

        $mdThemingProvider.theme('selfcare')
            .primaryPalette('green')

        $mdProgressCircularProvider.configure({
            durationIndeterminate: 1000,
            strokeWidth: 6,
        });

        $translateProvider.useStaticFilesLoader({
            prefix: 'resources/assets/static/',
            suffix: '/angular-surveys.json'
        });
        $translateProvider.preferredLanguage('en');
        $translateProvider.useSanitizeValueStrategy('sanitize');

    }

    Highcharts.setOptions({
        colors: ['#40f0f0', '#3F51B5','#89F14D', '#9C27B0', '#E91E63','#FFDD28', '#CDDC39', '#FB8C00', '#26A69A', '#00599D'],
        lang: {
            thousandsSep: ','
        }
    });

})(angular.module('selfcare'));