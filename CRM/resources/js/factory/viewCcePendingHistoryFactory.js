crm.factory('viewCcePendingHistoryFactory',  function($rootScope,$http) {
	var viewPendingDetails=function(a){
			console.log($rootScope.baseUrl);
			return $http({
	            method: 'POST',
	            url: $rootScope.baseUrl+"/pendingHistory",
	            data:a,
	            headers: {'Content-Type': 'application/json; charset=UTF-8'}
	        });
		};

			
		return {
			viewPendingDetails:viewPendingDetails
			
		
			
		};
	})