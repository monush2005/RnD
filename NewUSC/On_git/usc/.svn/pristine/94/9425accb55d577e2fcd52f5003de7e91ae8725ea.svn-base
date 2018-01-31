(function(app) {
    'use strict';
    app.directive('scrollHorizontal', scrollHorizontal);
    
    scrollHorizontal.$inject = ['$timeout'];

    var originalScrollPosition = {}

    function scrollHorizontal($timeout) {
        return {
            restrict: 'A',
            link: function(scope, elem, attr) {
                elem = elem[0];
                $timeout(function(){
                    elem.scrollLeft = originalScrollPosition[attr.scrollHorizontal] || 0;
                })
                
                elem.onmousewheel = function(event) {
                    if (elem.doScroll)
                        elem.doScroll(event.wheelDelta > 0 ? "left" : "right");
                    else if ((event.wheelDelta || event.detail) > 0)
                        elem.scrollLeft -= 50;
                    else
                        elem.scrollLeft += 50;

                    originalScrollPosition[attr.scrollHorizontal] = elem.scrollLeft
                    return false;
                }

                scope.$on('$destroy', function(){
                    delete elem.onmousewheel;
                })
            }
        }
    }
})(angular.module('selfcare'));
