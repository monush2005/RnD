crm.directive("mobileLengthDirective", function() {
	var MOBILE_NUMBER=new RegExp("^[^789]", "g");
	var MOBILE_NUMBER_REST=new RegExp("[^0-9]", "g");
	return {
	      require: 'ngModel',
	      link: function(scope, element, attrs, modelCtrl) {
	        var chars = function(inputValue) {
	          if (inputValue == undefined){
	        	  inputValue = '';
	          };
	          var capitalized = inputValue.replace(MOBILE_NUMBER, '');
	          var capitalizedNext = capitalized.replace(MOBILE_NUMBER_REST, '');
	          if (capitalizedNext !== inputValue) {
	            modelCtrl.$setViewValue(capitalizedNext);
	            modelCtrl.$render();
	          }
	          return capitalizedNext;
	        }
	        modelCtrl.$parsers.push(chars);
	        chars(scope[attrs.ngModel]); // Characterize initial value
	      }
	   }; 
});