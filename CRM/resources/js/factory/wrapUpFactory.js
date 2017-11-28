
crm.factory('wrapUpFactory',  function($rootScope,$http) {
	var wrapUpReq=function(a){
			console.log($rootScope.baseUrl);
			return $http({
	            method: 'POST',
	            url: $rootScope.baseUrl+"/wrapUp",
	            data:a,
	            headers: {'Content-Type': 'application/json; charset=UTF-8'}
	        });
		};
		var fetchUserDtls=function(a){
			console.log($rootScope.baseUrl);
			return $http({
	            method: 'POST',
	            url: $rootScope.baseUrl+"/fetchUsrDtls",
	            data:a,
	            headers: {'Content-Type': 'application/json; charset=UTF-8'}
	        });
		};
		
		
		var fetchUsrDtlsReq1=function(a){
			console.log($rootScope.baseUrl);
			return $http({
	            method: 'POST',
	            url: $rootScope.baseUrl+"/fetchUsrInfo1",
	            data:a,
	            headers: {'Content-Type': 'application/json; charset=UTF-8'}
	        });
		};


		
		var fetchCallDtls=function(a){
			console.log($rootScope.baseUrl);
			return $http({
	            method: 'POST',
	            url: $rootScope.baseUrl+"/fetchCallDtl",
	            data:a,
	            headers: {'Content-Type': 'application/json; charset=UTF-8'}
	        });
		};
		var preWrapUpsReq=function(a){
			console.log($rootScope.baseUrl);
			return $http({
	            method: 'POST',
	            url: $rootScope.baseUrl+"/preChatWrapUps",
	            data:a,
	            headers: {'Content-Type': 'application/json; charset=UTF-8'}
	        });
		}; 	
		var holdReq=function(a){
			console.log($rootScope.baseUrl);
			return $http({
	            method: 'POST',
	            url: $rootScope.baseUrl+"/holdCall",
	            data:a,
	            headers: {'Content-Type': 'application/json; charset=UTF-8'}
	        });
		}; 
		var fetchHoldStatus=function(a){
			console.log($rootScope.baseUrl);
			return $http({
	            method: 'POST',
	            url: $rootScope.baseUrl+"/fetchHoldStatus",
	            data:a,
	            headers: {'Content-Type': 'application/json; charset=UTF-8'}
	        });
		};
		return {
			wrapUpReq:wrapUpReq,
			fetchUserDtls:fetchUserDtls,
			fetchUsrDtlsReq1:fetchUsrDtlsReq1,
			fetchCallDtls:fetchCallDtls,
			preWrapUpsReq:preWrapUpsReq,
			holdReq:holdReq,
			fetchHoldStatus:fetchHoldStatus
			};
	}
	)