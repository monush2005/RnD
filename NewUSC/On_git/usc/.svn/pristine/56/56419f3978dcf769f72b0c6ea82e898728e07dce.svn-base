(function(app) {
    'use strict';
    app.directive('promiseHider', promiseHiderFn);
    promiseHiderFn.$inject = [];

    function promiseHiderFn() {
        return {
            restrict: 'A',
            scope: false,
            link: function(scope, elem, attr) {
                var unwatch = scope.$watch(attr.promiseHider, function(promise) {
                    elem[0].style.display = 'none';
                    if (promise) {
                        promise.then(() => {
                            elem[0].style.display = '';
                        })
                    }
                })

                scope.$on('$destroy', function() {
                    unwatch();
                })
            }
        }
    }
})(angular.module('selfcare'));
