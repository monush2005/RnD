(function(app) {
    'use strict';
    app.directive('datePickerClear', datePickerClearFn);

    datePickerClearFn.$inject = ['$parse', '$compile'];

    function datePickerClearFn($parse, $compile) {
        return {
            require: 'mdDatepicker',
            restrict: 'A',
            scope: false,
            link: function(scope, elem, attr, mdDatepickerCtrl) {
                var isClearButton = false;
                mdDatepickerCtrl.$scope.uscClear = function() {
                    $parse(attr.ngModel).assign(scope, undefined);
                    $parse(attr.ngChange)(scope);
                    angular.element(elem[0].children[1]).children()[2].remove();
                    isClearButton = false;
                }

                scope.$watch(attr.ngModel, changeListener);

                function changeListener() {
                    if (mdDatepickerCtrl.ngModelCtrl.$modelValue) {
                        if (isClearButton)
                            return;
                        var content = $compile(`<md-icon class="date-picker-clear" ng-click="uscClear()">close<md-icon>`)(mdDatepickerCtrl.$scope);
                        elem[0].children[1].append(content[0]);
                        isClearButton = true;
                    } else {
                        if (isClearButton)
                            angular.element(elem[0].children[1]).children()[2].remove();
                        isClearButton = false;
                    }
                }
            }
        }
    }
})(angular.module('selfcare'));
