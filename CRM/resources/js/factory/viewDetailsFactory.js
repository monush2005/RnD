crm.factory('viewDetailsFactory',  function($rootScope,$http) {
	var ticketDetails={};
var fetchTerminalId=function(a){
		console.log($rootScope.baseUrl);
		return $http({
            method: 'POST',
            url: $rootScope.baseUrl+"/viewDetails",
            data:a,
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        });
	};
	var viewAllTickets=function(a){
		console.log($rootScope.baseUrl);
		return $http({
            method: 'POST',
            url: $rootScope.baseUrl+"/viewDetails",
            data:a,
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        });
	};
	var setTicketdtls=function(obj){
		ticketDetails=obj;
	}
	var getTicketdtls=function(){
		return ticketDetails;
	}
		
	return {
		fetchTerminalId:fetchTerminalId,
		setTicketdtls:setTicketdtls,
		getTicketdtls:getTicketdtls,
		viewAllTickets:viewAllTickets
		
	
		
	};
}
)