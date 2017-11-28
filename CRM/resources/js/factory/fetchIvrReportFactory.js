crm.factory('fetchIvrReportFactory',  function($rootScope,$http) {
	var fetchIvrReport=function(a){
			console.log($rootScope.baseUrl);
			return $http({
	            method: 'POST',
	            url: $rootScope.baseUrl+"/fetchIvrRpt",
	            data:a,
	            headers: {'Content-Type': 'application/json; charset=UTF-8'}
	        });
		};

			
		return {
			fetchIvrReport:fetchIvrReport,
		};
	}
	)