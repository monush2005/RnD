crm.factory('fetchEmailsFactory',  function($rootScope,$http) {	
	var fetchEmails=function(a){
		console.log($rootScope.baseUrl);
		return $http({
            method: 'POST',
            url: $rootScope.baseUrl+"/fetchMails",
            data:a,
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        });
	};respondEmail
	var respondEmail=function(a){
		console.log($rootScope.baseUrl);
		return $http({
            method: 'POST',
            url: $rootScope.baseUrl+"/respondEmail",
            data:a,
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        });
	};
	return {
		fetchEmails:fetchEmails,
		respondEmail:respondEmail
	}
});