crm.factory('userDetailsFactory',  function($rootScope,$http) {
var actionTakenOnUser=function(a){
		console.log($rootScope.baseUrl);
		return $http({
            method: 'POST',
            url: $rootScope.baseUrl+"/actionTaken",
            data:a,
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        });
	};

		
	return {
		actionTakenOnUser:actionTakenOnUser
		
	
		
	};
})