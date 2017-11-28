crm.factory('breakFactory',  function($rootScope,$http) {
	var breakReq=function(a){
			console.log($rootScope.baseUrl);
			return $http({
	            method: 'POST',
	            url: $rootScope.baseUrl+"/breakReq",
	            data:a,
	            headers: {'Content-Type': 'application/json; charset=UTF-8'}
	        });
		};

			

	
	var fetchBreaks=function(a){
		console.log($rootScope.baseUrl);
		return $http({
            method: 'POST',
            url: $rootScope.baseUrl+"/fetchBrks",
            data:a,
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        });
	};

		
	return {
		fetchBreaks:fetchBreaks,
		breakReq:breakReq
	};
})