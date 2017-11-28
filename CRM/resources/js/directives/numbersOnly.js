	crm.directive("numbersOnly", function() {
	return  {
        restrict: 'A',
        link: function (scope, elm, attrs, ctrl) {
            elm.on('keydown', function (event) {
                if ([9, 8, 13, 27, 37, 38, 39, 40, 46].indexOf(event.which) > -1) {
                    // Tab,backspace, enter, escape, arrows,delete
                    return true;
                } else if (event.which >= 48 && event.which <= 57) {
                    // numbers
                    return true;
                } else if (event.which >= 96 && event.which <= 105) {
                    // numpad number
                    return true;
                }
                
//                else if ([110, 190].indexOf(event.which) > -1) {
//                    // dot and numpad dot
//                    return true;
//                }
                
                else {
                    event.preventDefault();
                    return false;
                }
            });
        }
    }
});


