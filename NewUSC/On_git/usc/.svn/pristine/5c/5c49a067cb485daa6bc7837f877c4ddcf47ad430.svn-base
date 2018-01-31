(function(app) {
    'use strict';
    app.directive('equals', equalsFn);
    equalsFn.$inject = ['$parse'];
    function equalsFn($parse) {
        return {
            require: 'ngModel',
            restrict: 'A',
            scope: false,
            link: function(scope, elem, attrs, ctrl) {
                var unwatch1 = scope.$watch(attrs.ngModel, function(newValue, oldValue, scope) {
                    var firstPassword = $parse(attrs.equals)(scope);
                    ctrl.$setValidity('equals', newValue == firstPassword);
                });
                var unwatch2 = scope.$watch(attrs.equals, function(newValue, oldValue, scope) {
                    var firstPassword = $parse(attrs.ngModel)(scope);
                    ctrl.$setValidity('equals', newValue == firstPassword);
                });

                scope.$on('$destroy', function() {
                    unwatch1();
                    unwatch2();
                })
            }
        }
    }
})(angular.module('selfcare'));