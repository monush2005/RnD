(function(app) {
    'use strict';
    app.directive('healthValue', healthValueFn);
    healthValueFn.$inject = [];

    function healthValueFn() {
        return {
            restrict: 'A',
            scope: false,
            link: link
        }
    }

    function link(scope, elem, attr) {
        elem.addClass('bg');

        scope.$watch(attr.healthValue, (newValue) => {
            var value = parseFloat(newValue);
            if (!value)
                return; //don't set any color if value is not defined or NaN.

            elem.removeClass('red orange green');

            if (attr.hasOwnProperty('percent')) {
                if (value >= 90)
                    elem.addClass('green');
                else if (value >= 80)
                    elem.addClass('orange');
                else
                    elem.addClass('red');
            } else if (attr.hasOwnProperty('rating')) {
                if (value >= 4)
                    elem.addClass('green');
                else if (value >= 3)
                    elem.addClass('orange');
                else
                    elem.addClass('red');
            } else if (attr.hasOwnProperty('responseTime')) {
                if (value >= 1500)
                    elem.addClass('red');
                else if (value >= 500)
                    elem.addClass('orange');
                else
                    elem.addClass('green');
            }
        })
    }
})(angular.module('selfcare'));
