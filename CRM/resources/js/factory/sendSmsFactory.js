crm.factory('sendSmsFactory',  function($rootScope,$http) {
var sendSms=function(a){
		console.log($rootScope.baseUrl);
		return $http({
            method: 'POST',
            url: $rootScope.baseUrl+"/sendSms",
            data:a,
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        });
	};

		
	return {
		sendSms:sendSms,
		
	
		
	};
}
)