(function(app) {
    'use strict';
    app.directive('isBusy', isBusyFn);
    isBusyFn.$inject=[]
    function isBusyFn() {
        return {
            restrict: 'A',
            scope: false,
            link: function(scope, elem, attr) {
                var unwatch = scope.$watch(attr.isBusy, (newPromise, oldPromise, scope) => {
                    var element = elem[0];

                    if (newPromise == oldPromise)
                        return;

                    if (newPromise) {
                        _.each(element.children, (item)=> {
                            item.style.display = 'none'
                        })
                        elem.append('<span class="tiny-spinner right"></span>')
                        element.disabled = true;

                        newPromise.finally(() => {
                            _.each(element.children, (item)=> {
                                item.style.display = 'initial'
                            })
                            element.removeChild(element.children[element.children.length - 1]);
                            element.disabled = false;
                        })
                    }
                });

                scope.$on('$destroy', () => {
                    unwatch();
                })
            }
        }
    }
})(angular.module('selfcare'));
