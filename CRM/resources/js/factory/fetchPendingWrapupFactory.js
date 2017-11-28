crm.factory('fetchPendingWrapupFactory',  function($rootScope,$http) {	
	var fetchPenWrapupReq=function(a){
		console.log($rootScope.baseUrl);
		return $http({
            method: 'POST',
            url: $rootScope.baseUrl+"/fetchPenWrapup",
            data:a,
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        });
	};
	return {
		fetchPenWrapupReq:fetchPenWrapupReq
	}
});