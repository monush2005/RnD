	crm.controller('agentChatHistoryController',function($scope,$location,$http,$location,crmFactory,$rootScope,loginFactory,agentChatHistoryFactory,$mdDialog) {
		hideLoader();
		$rootScope.flagHideDrawer=true;
		usrList=[];
		
		$scope.getAgentId=function(){
			//showLoader();
			crmFactory.getAgentId().success(function(data){
				$scope.cceidVal=data;
				if($scope.cceidVal!=null){
				$rootScope.flexFlag = localStorage.getItem("flexFlag"+$scope.cceidVal);
				$rootScope.flagAdmin=localStorage.getItem("flagAdmin"+$scope.cceidVal);
				$rootScope.flagViewer=localStorage.getItem("flagViewer"+$scope.cceidVal);
				$rootScope.flagAgent=localStorage.getItem("flagAgent"+$scope.cceidVal);
				$rootScope.flagTL=localStorage.getItem("flagTL"+$scope.cceidVal);
				$rootScope.ctrlPanl=localStorage.getItem("ctrlPanl"+$scope.cceidVal);
				
				$rootScope.chatFlag=localStorage.getItem("chatFlag"+$scope.cceidVal);
				$rootScope.ivrFlag=localStorage.getItem("ivrFlag"+$scope.cceidVal);
				$rootScope.smsFlag=localStorage.getItem("smsFlag"+$scope.cceidVal);
				}
				else{
					
				}
				console.log("==========");
			}).error(function(error){
				
			})
		}
		$scope.getAgentId();
/*		if(loginFactory.getCceid()==null || loginFactory.getCceid()=="" || loginFactory.getCceid()==undefined){
			$location.path("/");
		}*/
		$scope.LoginRequestPojo={};
		$scope.errorMsg="";
		$scope.login=function()
		{
	if(localStorage.getItem("conid")!="" || localStorage.getItem("conid")!=undefined){
	$scope.loginRequest=loginFactory.getLoginReq();
	$scope.LoginRequestPojo.uname=$scope.loginRequest.uname;
	$scope.LoginRequestPojo.pwd=$scope.loginRequest.pwd;//SHA256(obj.pswd);
	$scope.LoginRequestPojo.lang="en";
	$scope.LoginRequestPojo.ip="";
	$scope.LoginRequestPojo.connectionid=localStorage.getItem("conid");
	loginFactory.login($scope.LoginRequestPojo).success(function(data){
		console.log(data);
		$scope.LoginResponsePojo=data;
		 if($scope.LoginResponsePojo.rs=="S"){
			 $scope.loginDetails=$scope.LoginResponsePojo;
			 }
		 else
			 {
			 console.log("---------------------");
			 $rootScope.commomErrorPopUp($scope.LoginResponsePojo.rd);
				
			}
	}).error(function(error){
		
	})
	}
	else{
		alert("Please wait till connection establish .");
	}
	

	
	}










	$scope.agentChatHisRequestPojo={};
	$scope.agentChatHisReponsePojo={};
	$scope.abc=function(){
	var d = new Date();
	$scope.agentChatHisRequestPojo.requestId=d.getTime();
	$scope.agentChatHisRequestPojo.msisdn= "10708d0f-cac2-456d-b1be-95ae5abb8981";
	console.log("$scope.agentChatHisRequestPojo.msisdn"+$scope.agentChatHisRequestPojo.msisdn);debugger;
	agentChatHistoryFactory.agentChatHis($scope.agentChatHisRequestPojo).success(function(data){
		$scope.agentChatHisReponsePojo=data;
		 console.log($scope.agentChatHisReponsePojo);
	}).error(function(error){
		
	})
	
	
	
}


	
	});