crm.factory('emaiHisFactory',  function($rootScope,$http) {
	var emailHis=function(a){
			console.log($rootScope.baseUrl);
			return $http({
	            method: 'POST',
	            url: $rootScope.baseUrl+"/emailHis",
	            data:a,
	            headers: {'Content-Type': 'application/json; charset=UTF-8'}
	        });
		};

	var emailWrapUpReq=function(a){
		console.log($rootScope.baseUrl);
		return $http({
            method: 'POST',
            url: $rootScope.baseUrl+"/emailWrpUp",
            data:a,
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        });
	};		
		return {
			emailHis:emailHis,
			emailWrapUpReq:emailWrapUpReq
		};
	}
	)