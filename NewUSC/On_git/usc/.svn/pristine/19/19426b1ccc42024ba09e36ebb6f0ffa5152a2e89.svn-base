(function(app) {
    'use strict';
    app.directive('highlightBind', highlightBindFn);
    highlightBindFn.$inject = ['$parse'];

    function highlightBindFn($parse) {
        return {
            restrict: 'A',
            scope: false,
            link: function(scope, elem, attr) {
                var textVar = attr.highlightBind.split('|')[0].trim();
                var queryVar = attr.highlightBind.split('|')[1].trim();

                var unwatch = scope.$watch(queryVar, handler);
                var unwatch1 = scope.$watch(textVar, ()=>{
                    handler($parse(queryVar)(scope));
                });

                function handler(newQuery) {
                    var textValue = $parse(textVar)(scope);
                    textValue = _.escape(textValue);
                    newQuery = _.escape(newQuery);
                    if (!newQuery) {
                        elem[0].innerHTML = textValue;
                        return;
                    }
                    var reg = new RegExp(newQuery, 'gi');
                    var result = textValue.replace(reg, function(str) {
                        return `<span class="highlighted">${str}</span>`
                    });
                    elem.html(result);
                }

                scope.$on('$destroy', function() {
                    unwatch();
                    unwatch1();
                })
            }
        }
    }
})(angular.module('selfcare'));
