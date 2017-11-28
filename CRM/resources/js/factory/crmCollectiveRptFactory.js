
crm.factory('crmCollectiveRptFactory',  function($rootScope,$http) {
	var crmColRpt=function(a){
			console.log($rootScope.baseUrl);
			return $http({
	            method: 'POST',
	            url: $rootScope.baseUrl+"/colRpt",
	            data:a,
	            headers: {'Content-Type': 'application/json; charset=UTF-8'}
	        });
		};
		var agentPerformanceRpt=function(a){
			console.log($rootScope.baseUrl);
			return $http({
	            method: 'POST',
	            url: $rootScope.baseUrl+"/agentPerformanceRpt",
	            data:a,
	            headers: {'Content-Type': 'application/json; charset=UTF-8'}
	        });
		};
		
			
		return {
			crmColRpt:crmColRpt,
			agentPerformanceRpt:agentPerformanceRpt 
		};
	}
	)