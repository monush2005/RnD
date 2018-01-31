(function(app) {
    'use strict';
    app.directive('prefix91', prefix91Fn);
    prefix91Fn.$inject = [];

    function prefix91Fn() {
        return {
            restrict: 'A',
            scope: false,
            link: function(scope, elem, attr) {

                let top = attr.prefix91 || 7;

                elem.on('focus', focusHandler);
                elem.on('blur', blurHandler);

                let html = angular.element(`<span style="color:grey;position:absolute; top:${top}px">+91</span>`)[0];

                function focusHandler() {
                    elem[0].style.paddingLeft = '30px';
                    elem.parent()[0].appendChild(html);
                }

                function blurHandler(argument) {
                    if (!elem.val())
                        elem.parent()[0].removeChild(html);
                }

                scope.$on('$destroy', () => {
                    elem.off('focus', focusHandler);
                    elem.off('blur', blurHandler);
                })
            }
        }
    }
})(angular.module('selfcare'));