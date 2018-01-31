(function(app) {
    'use strict';
    app.directive('promiseLoader', promiseLoaderFn);
    promiseLoaderFn.$inject = ['$compile'];

    function promiseLoaderFn($compile) {
        return {
            restrict: 'A',
            scope: false,
            link: function(scope, elem, attr) {

                var unwatch = scope.$watch(attr.promiseLoader, (newPromise, oldPromise) => {
                    if (!newPromise && newPromise == oldPromise)
                        return;

                    if (newPromise) {
                    	var spinnerTemplate = `<div align="center"><br><br><md-progress-circular md-mode="indeterminate"></md-progress-circular><br><b>${attr.text||''}</b><br></div>`;
                        elem.html('');
                    	elem.append($compile(spinnerTemplate)(scope));
                        newPromise
                        .then(() => {
                        	elem.html('');
                        })
                        .catch(() => {
                        	elem.html(`<div align="center"><br><br><div class="md-title" style="font-size: 18px;"><i style="transform: translate(-6px,5px);font-size: 22px;" class="material-icons">error</i>${attr.errorText||'Some error occurred! Please try again.'}</div><br><br></div>`);
                        })
                        
                    }
                });

                scope.$on('$destroy', function() {
                    unwatch();
                })
            }
        }
    }
})(angular.module('selfcare'));
