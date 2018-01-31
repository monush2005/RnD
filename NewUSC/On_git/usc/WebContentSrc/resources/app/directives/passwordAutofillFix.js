(function(app) {
    'use strict';
    app.directive('passwordAutofillFix', passwordAutofillFixFn);
    passwordAutofillFixFn.$inject = ['$interval'];

    function passwordAutofillFixFn($interval) {
        return {
            require: 'mdInputContainer',
            restrict: 'A',
            scope: false,
            link: function(scope, elem, attr, ctrl) {

                let interval;
                let count = 0;

                if (ctrl.input[0].type === 'password') {
                    interval = $interval(() => {
                        if (count > 12)
                            $interval.cancel(interval);

                        try {
                            if (ctrl.input.parent()[0].querySelector('input:-webkit-autofill')) {
                                ctrl.element.addClass('md-input-has-value');
                                $interval.cancel(interval);
                            }
                        } catch (e) {}

                        count++;
                    }, 25);
                }

                scope.$on('$destroy', function() {
                    $interval.cancel(interval);
                })
            }
        }
    }
})(angular.module('selfcare'));