crm.directive("charactersOnlyDirective", function() {
    		return  {
		        restrict: 'A',
		        link: function (scope, elm, attrs, ctrl) {
		            elm.on('keydown', function (event) {
		                if ([9,8, 13, 27, 37, 38, 39, 40, 32 , 46].indexOf(event.which) > -1) {
		                    return true;
		                } else if ((event.shiftkey)&&(event.which >= 49 && event.which <= 57)) {
		                	event.preventDefault();
		                    return false;
		                 } else if (event.which >= 49 && event.which <= 57) {
		                	 event.preventDefault();
		                    return false;
		                 } else if (event.keyCode >= 65 && event.keyCode <= 90) {
		                    return true;
		                }else {
		                    event.preventDefault();
		                    return false;
		                }
		            });
		        }
		    }
    	});