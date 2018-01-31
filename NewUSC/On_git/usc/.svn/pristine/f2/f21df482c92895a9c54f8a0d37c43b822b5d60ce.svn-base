(function(app) {
    'use strict';
    app.directive('focusOnInit', focusOnInitFn);
    focusOnInitFn.$inject = [];
    function focusOnInitFn() {
        return {
            restrict: 'A',
            scope: false,
            link: function(scope, elem, attr) {
                elem.focus();
            }
        }
    }
})(angular.module('selfcare'));