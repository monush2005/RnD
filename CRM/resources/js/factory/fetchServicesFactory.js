crm.factory('fetchServicesFactory',  function($rootScope,$http) {	
	var fetchServices=function(a){
		console.log($rootScope.baseUrl);
		return $http({
            method: 'POST',
            url: $rootScope.baseUrl+"/fetchServicess",
            data:a,
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        });
	};
	return {
		fetchServices:fetchServices
	}
});