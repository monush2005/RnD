crm.factory('crmFactory',  function($rootScope,$http) {
	var viewTicketData={};
	var userDetails={};
	var ticketStatus={};
	var viewtickets=function(a){
		console.log($rootScope.baseUrl);
		return $http({
            method: 'POST',
            url: $rootScope.baseUrl+"/viewtickets",
            data:a,
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        });
	};
	
	var allocateAgent=function(a){
		console.log($rootScope.baseUrl);
		return $http({
            method: 'POST',
            url: $rootScope.baseUrl+"/allocateAgent",
            data:a,
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        });
	};
	
	var ticketHistory=function(a){
		console.log($rootScope.baseUrl);
		return $http({
            method: 'POST',
            url: $rootScope.baseUrl+"/ticketHistory",
            data:a,
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        });
	};
	
	var updateTicket=function(a){
		console.log($rootScope.baseUrl);
		return $http({
            method: 'POST',
            url: $rootScope.baseUrl+"/updateTicket",
            data:a,
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        });
	};
	
	var fetchServices=function(a){
		console.log($rootScope.baseUrl);
		return $http({
            method: 'POST',
            url: $rootScope.baseUrl+"/fetchServicess",
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
	var fetchCceidDetails=function(a){
		console.log($rootScope.baseUrl);
		return $http({
            method: 'POST',
            url: $rootScope.baseUrl+"/fetchCceidDetails",
            data:a,
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        });
	};
	var forwardToAgent=function(a){
		console.log($rootScope.baseUrl);
		return $http({
            method: 'POST',
            url: $rootScope.baseUrl+"/forwardToAgent",
            data:a,
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        });
	};
	
	var getAgentId=function(){
		console.log($rootScope.baseUrl);
		return $http({
            method: 'POST',
            url: $rootScope.baseUrl+"/getAgentId",
            data:"",
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        });
	};
	
	var setViewTicketData=function(data)
	{
	viewTicketData=data;	
	}
		
	var getViewTicketData=function()
	{
	return viewTicketData;	
	}
	var setUserDetails=function(data){
	userDetails=data;	
	}
	var getUserDetails=function(data){
	return userDetails;	
	}
	var setTicketStatus=function(a){
		ticketStatus=a;
	}
	var getTicketStatus=function(){
		return ticketStatus;
	}
	return {
		viewtickets:viewtickets,
		allocateAgent:allocateAgent,
		fetchServices:fetchServices,
		setViewTicketData:setViewTicketData,
		getViewTicketData:getViewTicketData,
		fetchSubCategories:fetchSubCategories,
		ticketHistory:ticketHistory,
		updateTicket :updateTicket,
		fetchCceidDetails:fetchCceidDetails,
		forwardToAgent:forwardToAgent,
		setUserDetails:setUserDetails,
		getUserDetails:getUserDetails,
		setTicketStatus:setTicketStatus,
		getTicketStatus:getTicketStatus,
		getAgentId:getAgentId
		
		
	
		
	};
}
)