crm.factory('fetchTerminalIdFactory',  function($rootScope,$http) {
var fetchTerminalId=function(a){
		console.log($rootScope.baseUrl);
		return $http({
            method: 'POST',
            url: $rootScope.baseUrl+"/fetchTerminalId",
            data:a,
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        });
	};

		
	return {
		fetchTerminalId:fetchTerminalId,
		
	
		
	};
}
)