crm.factory('createTicketFactory',  function($rootScope,$http) {	
	var generateTicket=function(a){
		console.log($rootScope.baseUrl);
		return $http({
            method: 'POST',
            url: $rootScope.baseUrl+"/generateTicket",
            data:a,
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        });
	};
	
	var fetchCategories=function(a){
		console.log($rootScope.baseUrl);
		return $http({
	        method: 'POST',
	        url: $rootScope.baseUrl+"/fetchCategoriess",
	        data:a,
	        headers: {'Content-Type': 'application/json; charset=UTF-8'}
	    });
	};
	var fetchDeptServices=function(a){
		console.log($rootScope.baseUrl);
		return $http({
	        method: 'POST',
	        url: $rootScope.baseUrl+"/fetchDeptService",
	        data:a,
	        headers: {'Content-Type': 'application/json; charset=UTF-8'}
	    });
	};
	var fetchSubCategories=function(a){
		console.log($rootScope.baseUrl);
		return $http({
	        method: 'POST',
	        url: $rootScope.baseUrl+"/fetchSubCategoriess",
	        data:a,
	        headers: {'Content-Type': 'application/json; charset=UTF-8'}
	    });
	};
	

	return{
		generateTicket:generateTicket,
		fetchCategories:fetchCategories,
		fetchDeptServices :fetchDeptServices,
		fetchSubCategories :fetchSubCategories 
	}
});

