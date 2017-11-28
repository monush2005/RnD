crm.directive("noSpecialDirective", function() {
	return {
	      require: 'ngModel',
	      restrict: 'A',
	      link: function(scope, element, attrs, modelCtrl) {
	        modelCtrl.$parsers.push(function(inputValue) {
	          if (inputValue == undefined)
	            return ''
	          var cleanInputValue = inputValue.replace(/[^\w\s]/gi, '');
	          if (cleanInputValue != inputValue) {
	            modelCtrl.$setViewValue(cleanInputValue);
	            modelCtrl.$render();
	          }
	          return cleanInputValue;
	        });
	      }
	    }
});