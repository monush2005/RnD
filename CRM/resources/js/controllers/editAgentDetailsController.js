crm.controller('editAgentDetailsController',function($scope,$location,$http,$rootScope,viewCceDetailsFactory,crmFactory,loginFactory,$mdDialog,editAgentDetailsFactory,addAgentFactory) {
	hideLoader();
	 $scope.flag5=true;
	$rootScope.flagHideDrawer=true;
	if(localStorage.getItem("Cceid")==null || localStorage.getItem("Cceid")=="" || localStorage.getItem("Cceid")==undefined){
	$location.path("/");
	}
	
 	
	$rootScope.flexFlag = localStorage.getItem("flexFlag" );
	$rootScope.flagAdmin=localStorage.getItem("flagAdmin" );
	$rootScope.flagViewer=localStorage.getItem("flagViewer" );
		
	$rootScope.flagAgent=localStorage.getItem("flagAgent" );
	$rootScope.flagTL=localStorage.getItem("flagTL" );
	$rootScope.ctrlPanl=localStorage.getItem("ctrlPanl" );
	
	$rootScope.chatFlag=localStorage.getItem("chatFlag" );
	$rootScope.ivrFlag=localStorage.getItem("ivrFlag" );
	$rootScope.smsFlag=localStorage.getItem("smsFlag" );
	


			
	 $scope.languages=[];
	$scope.editAgentDetails={};

	$scope.agentDetails=function(){
		$scope.AgentDetails= viewCceDetailsFactory.getAgentDetails(); 
		console.log("======");
		 console.log( $scope.AgentDetails);
		 if($scope.AgentDetails.cceid==null || $scope.AgentDetails.cceid=="" || $scope.AgentDetails.cceid==undefined){
				$location.path("/viewAgents");
			}
		 console.log($scope.AgentDetails); 
		 $scope.editAgentDetails=$scope.AgentDetails;
		var langValues= $scope.AgentDetails.ccelang;
		var arr=langValues.split(",");
		$scope.editAgentDetails.ccelang=arr;
		if($scope.editAgentDetails.mode=="ivr"){
			$scope.ivrFlg=true;
		}
		var modeValues= $scope.AgentDetails.mode;
		var arr1=modeValues.split(",");
		$scope.editAgentDetails.ccemode=arr1;
	}
	
	
	$scope.agentDetails(); 
				
	$scope.agentTypes=[{"typeId":"agent","typeName":"Agent"},{"typeId":"teamlead","typeName":"TeamLead"},{"typeId":"viewer","typeName":"Viewer"}];
	$scope.viewRptArr=[{"viewrptId":"Y","viewrptValue":"Yes"},{"viewrptId":"N","viewrptValue":"No"}];	
	$scope.responsdArr=[{"responsdArrId":"Y","responsdArrValue":"Yes"},{"responsdArrId":"N","responsdArrValue":"No"}];
	$scope.agentStatusArr=[{"agentStatusId":"active","agentStatusValue":"Active"},{"agentStatusId":"block","agentStatusValue":"Block"}];
	$scope.languages=[{"id":"en","language":"English"},{"id":"hi","language":"Hindi"},{"id":"bn","language":"Bengali"},{"id":"gu","language":"Gujrati"},{"id":"ml","language":"Malaylam"},{"id":"mr","language":"Marathi"},{"id":"ta","language":"Tamil"},{"id":"te","language":"Telugu"},{"id":"or","language":"Oriya"},{"id":"ur","language":"Urdu"},{"id":"pa","language":"Punjabi"},{"id":"as","language":"Assamese"},{"id":"kn","language":"Kannada"}];		
	$scope.modes=[{"id":"ivr","mode":"IVR"},{"id":"sms","mode":"SMS"},{"id":"chat","mode":"Chat"},{"id":"email","mode":"Email"}];		
 
					$scope.editAddAgent=function(obj){
								$scope.editAgentDetails.cceid=obj.cceid;
								$scope.editAgentDetails.lang="en";
								$scope.editAgentDetails.mno=obj.mno;
								$scope.editAgentDetails.status=obj.status;
								$scope.editAgentDetails.type="agent";
								$scope.editAgentDetails.ccelang=obj.ccelang.join(",");;
								$scope.editAgentDetails.email=obj.email;
								$scope.editAgentDetails.mode=obj.mode;
								$scope.editAgentDetails.rrrespond=obj.rrespond;
								$scope.editAgentDetails.chat=obj.chat;
								$scope.editAgentDetails.query=obj.query;
								$scope.editAgentDetails.call=obj.call;
								$scope.editAgentDetails.qrmno=obj.qrmno;
								$scope.editAgentDetails.sme="others";
								$scope.editAgentDetails.viewrpt=obj.viewrpt;
								$scope.editAgentDetails.action="edit";
								$scope.editAgentDetails.terminalid=obj.terminalid;
								$scope.editAgentDetails.name=obj.name;
								//showLoader(); 
								console.log("-------edit agent details--------")
								console.log($scope.editAgentDetails);
								console.log("-------edit agent details--------")
								editAgentDetailsFactory.EditAgent($scope.editAgentDetails).success(function(data){
									 $scope.EditAgentDetailsResponsePojo=data;
									 hideLoader();
									 if($scope.EditAgentDetailsResponsePojo.rs=="S"){
								        	$scope.editAgentForm.$setPristine();
								 	           $scope.editAgentForm.$setUntouched();
								 	        angular.element(document.getElementsByTagName('cccelang')).removeClass('md-input-focused md-input-invalid');
								 	        angular.element(document.getElementsByTagName('cccelang')).focus(false); 
										 $rootScope.commomSuccessPopUp($scope.EditAgentDetailsResponsePojo.rd);
									}
									 else{
										 $rootScope.commomErrorPopUp($scope.EditAgentDetailsResponsePojo.rd);
									}
									console.log(data);
								
								}).error(function(error){
									hideLoader();
									$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");	
								})
							

				}
				
			    $scope.reset = function() { 
		        	$scope.editAgentDetails={};
		        	$scope.editAgentForm.$setPristine();
		 	           $scope.editAgentForm.$setUntouched();
		 	           angular.element(document.getElementsByTagName('md-input-container')).removeClass('md-input-focused md-input-invalid');
		 	           angular.element(document.getElementsByTagName('md-input-container')).focus(false); 
		 	         };
		 	         
		 			$scope.commomSuccessPopUp = function(obj) {
						$scope.successMsg = obj;
						$mdDialog.show({
							contentElement : '#commonSuccess',
							parent : angular.element(document.body),
							targetEvent : null,
							clickOutsideToClose : true
						});
					}
					$scope.commomErrorPopUp = function(obj1) {
						$scope.errorMsg = obj1;
						$mdDialog.show({
							contentElement : '#commonError',
							parent : angular.element(document.body),
							targetEvent : null,
							clickOutsideToClose : true
						});
					}
					$scope.cancel = function() {
						$mdDialog.cancel();
						
					}; 	         

})
				