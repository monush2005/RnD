crm.factory('loginFactory',  function($rootScope,$http) {
	var cceid="";
	var userType="";
	var setUname="";
	var logReq="";
	var agentResParams={};
	var login=function(a)
	{
		console.log($rootScope.baseUrl);
		return $http({
            method: 'POST',
            url: $rootScope.baseUrl+"/login",
            data:a,
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        });
	};
	var data1=function(a){
		console.log($rootScope.baseUrl);
		return $http({
            method: 'GET',
            url: $rootScope.baseUrl+"/getData",
            data:a,
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        });
	};
	var login1=function(a){
		console.log($rootScope.baseUrl);
		return $http({
            method: 'POST',
            url: $rootScope.baseUrl+"/login1",
            data:a,
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        });
	};
	
/*	var loginStatusReq=function(a){
		console.log($rootScope.baseUrl);
		return $http({
            method: 'POST',
            url: $rootScope.baseUrl+"/checkAgentStatus",
            data:a,
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        });
	};*/
	var setLoginReq=function(logRequest){
		logReq=logRequest;
	}
	var getLoginReq=function(){
		return logReq;
	}
	


		var setCceid=function(obj){
			cceid=obj;
		}
		var getCceid=function(){
			return cceid;
		}
		
		var setUserType=function(a){
			userType=a;
		}
		var getUserType=function(){
			return userType;
		}
		var setUname=function(b){
			uname=b;
		}
		var getUname=function(){
			return uname;
		}
		var setLoginDtls=function(logRes){
			agentResParams=logRes;
		}
		var getLoginDtls=function(){
			return agentResParams;
		}
	return {
		login:login,
		setCceid:setCceid,
		getCceid:getCceid,
		setUserType:setUserType,
		getUserType:getUserType,
		setUname:setUname,
		getUname:getUname,
		setLoginReq:setLoginReq,
		getLoginReq:getLoginReq,
		login1:login1,
		setLoginDtls:setLoginDtls,
		getLoginDtls:getLoginDtls,
		data1:data1
		
	};
}
)