(function(app) {
    'use strict';
    app.directive('clearOnDestroy', clearOnDestroyFn);
    clearOnDestroyFn.$inject = [];
    function clearOnDestroyFn() {
        return {
        	require: 'ngModel',
            restrict: 'A',
            scope: false,
            link: function(scope, elem, attr) {
                
                scope.$on('$destroy', function() {
                    _.set(scope, attr.ngModel, undefined);
                })
            }
        }
    }
})(angular.module('selfcare'));