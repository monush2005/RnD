(function(app) {
    'use strict';
    app.directive('imageLoader', imageLoaderFn);
    imageLoaderFn.$inject = ['$compile'];

    function imageLoaderFn($compile) {
        return {
            restrict: 'A',
            scope: false,
            link: function(scope, elem, attr) {
                var paddingPercent = attr.imageLoader;

                let loader = $compile(`<div align="center" class="animated-background" style="padding-bottom: ${paddingPercent}%"></div>`)(scope);
                
                elem[0].style.display = 'none';            
                elem.after(loader);

                elem.on('load', () => {
                    elem[0].style.display = '';
                    loader.remove();
                });

                elem.on('error', () => {
                    loader.remove();
                    let errorMsg = $compile(`<div align="center" style="background: lightgrey; padding-top: calc(${paddingPercent/2}% - 9px); padding-bottom: calc(${paddingPercent/2}% - 9px)"><i style="transform: translate(-6px,3px);font-size: 18px;" class="material-icons">error</i>Could not load image!</div>`)(scope);
                    elem.after(errorMsg);
                });

                scope.$on('$destroy', function() {
                    elem.off('load');
                    elem.off('error');
                })
            }
        }
    }
})(angular.module('selfcare'));