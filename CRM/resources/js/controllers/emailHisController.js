	crm.controller('emailHisController',function($scope,$location,$http,$rootScope,$timeout, userDetailsFactory,$mdSidenav,$log,$mdDialog,fetchServicesFactory,createTicketFactory,crmFactory,$location,loginFactory,sendSmsFactory,fetchEmailsFactory,emaiHisFactory) {
		hideLoader();
	     if(loginFactory.getCceid()==null || loginFactory.getCceid()=="" || loginFactory.getCceid()==undefined){
				$location.path("/");
	     }

});	