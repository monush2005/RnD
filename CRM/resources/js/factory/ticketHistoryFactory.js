crm.factory('ticketHistoryFactory',  function($rootScope,$http) {
var ticketHistory=function(a){
		console.log($rootScope.baseUrl);
		return $http({
            method: 'POST',
            url: $rootScope.baseUrl+"/ticketHistory",
            data:a,
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        });
	};
	
	
	return {
		ticketHistory:ticketHistory
	
		
		
	
		
	};
}
)