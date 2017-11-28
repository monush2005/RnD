	crm.controller('userDetailsController',function($scope,$location,$http,$rootScope,$timeout, userDetailsFactory,$mdSidenav, $log,$mdDialog,fetchServicesFactory,createTicketFactory,crmFactory,$location,loginFactory,sendSmsFactory) {
		hideLoader();
		$scope.ViewTicketRequestPojo={}; 
		$scope.viewTicketResponsePojo={};
		$scope.showUserDetails=function(obj){
					$scope.ViewTicketRequestPojo.lang="en";
					$scope.ViewTicketRequestPojo.trkr="";
					$scope.ViewTicketRequestPojo.msisdn=obj;
					$scope.ViewTicketRequestPojo.cceid=loginFactory.getCceid();
					$scope.ViewTicketRequestPojo.debug="";
					showLoader();
					crmFactory.viewtickets($scope.ViewTicketRequestPojo).success(function(data){
						 $scope.viewTicketResponsePojo=data;
						 hideLoader();
						 if($scope.viewTicketResponsePojo.rs=="S"){
							 $mdDialog.show({
							      contentElement: '#myDialog3',
							      parent: angular.element(document.body),
							      targetEvent: null,
							      clickOutsideToClose:true
							    });
							}
						 else{
							$mdDialog.show({
							      contentElement: '#myDialog3',
							      parent: angular.element(document.body),
							      targetEvent: null,
							      clickOutsideToClose:true
							    });
							 $scope.viewTicketResponsePojo= crmFactory.getViewTicketData();
							 
						 }
						console.log(data);
					
					}).error(function(error){
						
					})   
	 	       }	
		
		
		$scope.ActionTakenOnUserRequestPojo={}; 
		$scope.ActionTakenOnUserResponsePojo={};
		$scope.actionTakenOnUser=function(obj){
					$scope.ActionTakenOnUserRequestPojo.usermno="7867676767";
					$scope.ActionTakenOnUserRequestPojo.ticketid="";
					$scope.ActionTakenOnUserRequestPojo.cceid=loginFactory.getCceid();
					if(document.getElementById("blockId").value=="block"){
					$scope.ActionTakenOnUserRequestPojo.status="block";
					}
					if(document.getElementById("suspendId").value=="suspend"){
						$scope.ActionTakenOnUserRequestPojo.status="suspend";
						}
					if(document.getElementById("deleteId").value=="delete"){
						$scope.ActionTakenOnUserRequestPojo.status="delete";
						}
					showLoader();
				
					userDetailsFactory.actionTakenOnUser($scope.ActionTakenOnUserRequestPojo).success(function(data){
						 $scope.ActionTakenOnUserResponsePojo=data;
						 hideLoader();
						 if($scope.ActionTakenOnUserResponsePojo.rs=="S"){
							 $mdDialog.show({
							      contentElement: '#myDialog3',
							      parent: angular.element(document.body),
							      targetEvent: null,
							      clickOutsideToClose:true
							    });
							}
						 else{
							$mdDialog.show({
							      contentElement: '#myDialog3',
							      parent: angular.element(document.body),
							      targetEvent: null,
							      clickOutsideToClose:true
							    });
						}
						console.log(data);
					
					}).error(function(error){
						hideLoader();
						$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");	
					})   
	 	       }
	       
	});	