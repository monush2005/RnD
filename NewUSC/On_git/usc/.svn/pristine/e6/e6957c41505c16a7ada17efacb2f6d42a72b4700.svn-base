(function(app) {
    'use strict';
    app.directive('uscRight', uscRightFn);
    uscRightFn.$inject = ['$localStorage'];

    function uscRightFn($localStorage) {
        return {
            restrict: 'A',
            scope: false,
            link: function(scope, elem, attr) {
                if (!attr.uscRight) //returning if uscRight attr is null or empty.
                    return;

                //attribute can be given comma separated multiple rights.
                //if any of the rights is available to user, the element will 
                //not be removed.
                var rights = attr.uscRight.split(',');
                var hasRight = false;
                _.each(rights, (right) => {
                    if(!hasRight)
                        hasRight = _.existsBy($localStorage.userRights, right, 'rightName');
                })

                //if any of the right was in userRights, the variable must be true by now.
                //removing element if hasRight is still false, i.e none of the rights
                //were available to the user.
                if (!hasRight)
                    elem.remove();
            }
        }
    }
})(angular.module('selfcare'));
