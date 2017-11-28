crm.factory('ivrKpiRptFactory',  function($rootScope,$http) {
	var ivrKpiRpt=function(a){
			console.log($rootScope.baseUrl);
			return $http({
	            method: 'POST',
	            url: $rootScope.baseUrl+"/ivrKpiRpt",
	            data:a,
	            headers: {'Content-Type': 'application/json; charset=UTF-8'}
	        });
		};
		var chatKpiRpt=function(a){
			console.log($rootScope.baseUrl);
			return $http({
	            method: 'POST',
	            url: $rootScope.baseUrl+"/chatKpiRpt",
	            data:a,
	            headers: {'Content-Type': 'application/json; charset=UTF-8'}
	        });
		};
		var ivrDtlRpt=function(a){
			console.log($rootScope.baseUrl);
			return $http({
	            method: 'POST',
	            url: $rootScope.baseUrl+"/ivrDtlRpt",
	            data:a,
	            headers: {'Content-Type': 'application/json; charset=UTF-8'}
	        });
		};
		var chatDtlRpt=function(a){
			console.log($rootScope.baseUrl);
			return $http({
	            method: 'POST',
	            url: $rootScope.baseUrl+"/chatDtlsRpt",
	            data:a,
	            headers: {'Content-Type': 'application/json; charset=UTF-8'}
	        });
		};
		var slaRpt=function(a){
			console.log($rootScope.baseUrl);
			return $http({
	            method: 'POST',
	            url: $rootScope.baseUrl+"/slaRpt",
	            data:a,
	            headers: {'Content-Type': 'application/json; charset=UTF-8'}
	        });
		};
		var ivrhourWiseRpt=function(a){
			console.log($rootScope.baseUrl);
			return $http({
	            method: 'POST',
	            url: $rootScope.baseUrl+"/ivrHourWiseRpt",
	            data:a,
	            headers: {'Content-Type': 'application/json; charset=UTF-8'}
	        });
		};
		var emailDtlRpt=function(a){
			console.log($rootScope.baseUrl);
			return $http({
	            method: 'POST',
	            url: $rootScope.baseUrl+"/emailDtlReport",
	            data:a,
	            headers: {'Content-Type': 'application/json; charset=UTF-8'}
	        });
		};	
		return {
			ivrKpiRpt:ivrKpiRpt,
			chatKpiRpt:chatKpiRpt,
			ivrDtlRpt:ivrDtlRpt,
			chatDtlRpt:chatDtlRpt,
			slaRpt:slaRpt,
			ivrhourWiseRpt:ivrhourWiseRpt,
			emailDtlRpt :emailDtlRpt 
		};
	})