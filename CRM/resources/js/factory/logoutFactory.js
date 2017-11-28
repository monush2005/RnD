
crm.factory('logoutFactory',  function($rootScope,$http) {
	var logout=function(a){
			console.log($rootScope.baseUrl);
			return $http({
	            method: 'POST',
	            url: $rootScope.baseUrl+"/logout",
	            data:a,
	            headers: {'Content-Type': 'application/json; charset=UTF-8'}
	        });
		};
		var newLogout=function()
		{
			
			console.log($rootScope.baseUrl);
			return $http({
	            method: 'GET',
	            url: $rootScope.baseUrl+"/newLogout",
	            headers: {'Content-Type': 'application/json; charset=UTF-8'}
	        });
		};	
			
		return {
			logout:logout,
			newLogout:newLogout
		
			
		};
	}
	)