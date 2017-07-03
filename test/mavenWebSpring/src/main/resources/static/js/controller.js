

var app = angular.module('LoginForm', []);
app.controller('Ctrl', function($scope, $filter) {
	$scope.clickfunction = function(){
		alert("--   "+$scope.vm.formData.email);
		var time = $filter('date')(new Date(),'yyyy-MM-dd HH:mm:ss Z');
		$scope.welcome = "Time = " + time;		
	}
});