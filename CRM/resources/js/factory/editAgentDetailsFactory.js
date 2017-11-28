crm.factory('editAgentDetailsFactory',  function($rootScope,$http) {
	var EditAgent=function(a){
			console.log($rootScope.baseUrl);
			return $http({
	            method: 'POST',
	            url: $rootScope.baseUrl+"/eddiAgentDetails",
	            data:a,
	            headers: {'Content-Type': 'application/json; charset=UTF-8'}
	        });
			console.log("**************"+url);
		};

			
		return {
			EditAgent:EditAgent
			
		
			
		};
	}
	)