crm.factory('addAgentFactory',  function($rootScope,$http) {
	var agentReqParams={};
	var agentResParams={};
	var addAgent=function(a){
			console.log($rootScope.baseUrl);
			return $http({
	            method: 'POST',
	            url: $rootScope.baseUrl+"/addAgent",
	            data:a,
	            headers: {'Content-Type': 'application/json; charset=UTF-8'}
	        });
		};
		var addAgent1=function(a){
			console.log($rootScope.baseUrl);
			return $http({
	            method: 'POST',
	            url: $rootScope.baseUrl+"/eddiAgentDetails",
	            data:a,
	            headers: {'Content-Type': 'application/json; charset=UTF-8'}
	        });
		};
		var emailHandling=function(a){
			console.log($rootScope.baseUrl);
			return $http({
	            method: 'POST',
	            url: $rootScope.baseUrl+"/emailHandling",
	            data:a,
	            headers: {'Content-Type': 'application/json; charset=UTF-8'}
	        });
		};
		var fetchTlsList=function(a){
			console.log($rootScope.baseUrl);
			return $http({
	            method: 'POST',
	            url: $rootScope.baseUrl+"/fetchTlList",
	            data:a,
	            headers: {'Content-Type': 'application/json; charset=UTF-8'}
	        });
		};
		var setAgentReqParams=function(obj){
			agentReqParams=obj;
		}
		var getAgentReqParams=function(){
			return agentReqParams;
		}

			
		return {
			addAgent:addAgent,
			addAgent1:addAgent1,
			emailHandling:emailHandling,
			setAgentReqParams:setAgentReqParams,
			getAgentReqParams:getAgentReqParams,
			fetchTlsList:fetchTlsList

		};
	}
	)