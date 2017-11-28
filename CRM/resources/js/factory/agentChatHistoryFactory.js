crm.factory('agentChatHistoryFactory',  function($rootScope,$http) {
	var agentChatHis=function(a){debugger;
			console.log($rootScope.baseUrl);
			return $http({
	            method: 'POST',
	            url: $rootScope.baseUrl+"/agentChatHis",
	            data:a,
	            headers: {'Content-Type': 'application/json; charset=UTF-8'}
	        });
		};

			
		return {
			agentChatHis:agentChatHis
			
		
			
		};
	})