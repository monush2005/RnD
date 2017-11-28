crm.factory('fetchChatReportFactory',  function($rootScope,$http) {
	var fetchChatReport=function(a){
			console.log($rootScope.baseUrl);
			return $http({
	            method: 'POST',
	            url: $rootScope.baseUrl+"/fetchChatRpt",
	            data:a,
	            headers: {'Content-Type': 'application/json; charset=UTF-8'}
	        });
		};

			
		return {
			fetchChatReport:fetchChatReport,
		};
	}
	)