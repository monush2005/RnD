crm.factory('forgotPasswordFactory',  function($rootScope,$http) {
	var un="";
	var userData="";
var sendUserName=function(a){
		console.log($rootScope.baseUrl);
		return $http({
            method: 'POST',
            url: $rootScope.baseUrl+"/sendUserName",
            data:a,
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        });
	};
	
	var forgotPswd=function(a){
		console.log($rootScope.baseUrl);
		return $http({
            method: 'POST',
            url: $rootScope.baseUrl+"/forgotPswd",
            data:a,
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        });
	};
	var setUserData=function(c){
		userData=c;
	}
	var getUserData=function(){
		return userData;
	}

	return {
		sendUserName:sendUserName,
		forgotPswd:forgotPswd,
		setUserData:setUserData,
		getUserData:getUserData
		};
})