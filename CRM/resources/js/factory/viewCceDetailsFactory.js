crm.factory('viewCceDetailsFactory',  function($rootScope,$http) {
	var agentDetails={};
var viewCceDetails=function(a){
		console.log($rootScope.baseUrl);
		return $http({
            method: 'POST',
            url: $rootScope.baseUrl+"/fetchCceidDetails",
            data:a,
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        });
	};
	var agentRating=function(a){
		console.log($rootScope.baseUrl);
		return $http({
            method: 'POST',
            url: $rootScope.baseUrl+"/agentRating",
            data:a,
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        });
	};
	var blockCce=function(a){
		console.log($rootScope.baseUrl);
		return $http({
            method: 'POST',
            url: $rootScope.baseUrl+"/blockAgent",
            data:a,
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        });
	};
	var deleteCce=function(a){
		console.log($rootScope.baseUrl);
		return $http({
            method: 'POST',
            url: $rootScope.baseUrl+"/deleteCce",
            data:a,
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        });
	};
	
	
	var fetchCcePerformance=function(a){
		console.log($rootScope.baseUrl);
		return $http({
            method: 'POST',
            url: $rootScope.baseUrl+"/fetchCcePerformance",
            data:a,
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        });	
	};
	
	
	var fetchEmailCcePerformance=function(a){
		console.log($rootScope.baseUrl);
		return $http({
            method: 'POST',
            url: $rootScope.baseUrl+"/fetchEmailCcePerformance",
            data:a,
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        });	
	};
	
	
	var fetchEmailReport=function(a){
		console.log($rootScope.baseUrl);
		return $http({
            method: 'POST',
            url: $rootScope.baseUrl+"/fetchEmailRpt",
            data:a,
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        });	
	};
	
	
	var fetchQueryRpt=function(a){
		console.log($rootScope.baseUrl);
		return $http({
            method: 'POST',
            url: $rootScope.baseUrl+"/fetchQueryRpt",
            data:a,
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        });	
	};
	
	var fetchAllRpt=function(a){
		console.log($rootScope.baseUrl);
		return $http({
            method: 'POST',
            url: $rootScope.baseUrl+"/fetchAllRpt",
            data:a,
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        });	
	};
	
	var ViewLiveAgentsReq=function(a){
		console.log($rootScope.baseUrl);
		return $http({
            method: 'POST',
            url: $rootScope.baseUrl+"/viewLiveAgents",
            data:a,
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        });	
	};
	
	
	var LiveAgentsReq=function(a){
		console.log($rootScope.baseUrl);
		return $http({
            method: 'POST',
            url: $rootScope.baseUrl+"/agtHistory",
            data:a,
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        });	
	};
	
	
	var setAgentDetails=function(obj){
		agentDetails=obj;
	}
	var getAgentDetails=function(){
		return agentDetails;
	}
	
	
	
	return {
		viewCceDetails:viewCceDetails,
		setAgentDetails:setAgentDetails,
		getAgentDetails:getAgentDetails,
		blockCce:blockCce,
		deleteCce:deleteCce,
		fetchCcePerformance:fetchCcePerformance,
		agentRating:agentRating,
		fetchEmailCcePerformance:fetchEmailCcePerformance,
		fetchEmailReport:fetchEmailReport,
		fetchQueryRpt:fetchQueryRpt,
		fetchAllRpt:fetchAllRpt,
		ViewLiveAgentsReq:ViewLiveAgentsReq,
		LiveAgentsReq:LiveAgentsReq
		};
})