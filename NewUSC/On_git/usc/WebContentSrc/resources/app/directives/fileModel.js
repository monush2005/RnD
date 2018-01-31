(function(app) {
    'use strict';
    app.directive('fileModel', fileModelFn);
    fileModelFn.$inject = [];

    function fileModelFn() {
        return {
            require: 'ngModel',
            restrict: 'A',
            scope: false,
            link: function(scope, element, attrs, ngModelCtrl) {

                var unwatch = scope.$watch(attrs.ngModel, function(newValue) {
                    if (!newValue)
                        element.val('');
                });

                element.on('change', handler);

                scope.$on('$destroy', function() {
                    element.off('change', handler);
                    unwatch();
                })

                function handler() {
                    scope.$apply(function() {
                        if (attrs.multiple) {
                            ngModelCtrl.$setViewValue(element[0].files);
                        } else {
                            ngModelCtrl.$setViewValue(element[0].files[0]);
                        }
                    });
                }
            }
        }
    }
})(angular.module('selfcare'));
