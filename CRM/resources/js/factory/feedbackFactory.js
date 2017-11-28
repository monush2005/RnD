crm.factory('feedbackFactory',  function($rootScope,$http) {
	var feedbackReq=function(a){
			console.log($rootScope.baseUrl);
			return $http({
	            method: 'POST',
	            url: $rootScope.baseUrl+"/viewFeedbacks",
	            data:a,
	            headers: {'Content-Type': 'application/json; charset=UTF-8'}
	        });
		};

			
		return {
			feedbackReq:feedbackReq,
		};
	}
	)