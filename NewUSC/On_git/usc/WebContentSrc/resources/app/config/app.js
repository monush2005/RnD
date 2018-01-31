(function() {
    'use strict';
    angular.module('selfcare', ['ui.router',
        'ngMaterial',
        'material.components.expansionPanels',
        'ngStorage',
        'ngProgress',
        'ngAnimate',
        'ngMask',
        'ngSanitize',
        'ngMessages',
        'duScroll',
        'mwFormBuilder',
        'mwFormViewer',
        'mwFormUtils',
        'monospaced.elastic',
        'pascalprecht.translate'
    ]);

    angular.element(document).ready(function() {
        angular.bootstrap(document, ['selfcare']);
    });
})();