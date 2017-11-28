crm.factory('resetPasswordFactory',  function($rootScope,$http) {
	var resendPswd=function(a){
			console.log($rootScope.baseUrl);
			return $http({
	            method: 'POST',
	            url: $rootScope.baseUrl+"/resetPswd",
	            data:a,
	            headers: {'Content-Type': 'application/json; charset=UTF-8'}
	        });
		};

			
		return {
			resendPswd:resendPswd
		};
	})