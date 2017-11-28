crm.controller('resetPasswordController',function($scope,$location,$http,$rootScope,loginFactory,crmFactory,viewCceDetailsFactory,resetPasswordFactory,forgotPasswordFactory,$mdDialog) {
	hideLoader();
	$rootScope.flagHideDrawer=false;
	$scope.hidePasswordFlag=false;
	$scope.hideButtonFlag=true;
	
	
	$rootScope.flexFlag = localStorage.getItem("flexFlag");
	$rootScope.flagAdmin=localStorage.getItem("flagAdmin");
	$rootScope.flagViewer=localStorage.getItem("flagViewer");
	$rootScope.flagAgent=localStorage.getItem("flagAgent");
	$rootScope.flagTL=localStorage.getItem("flagTL");
	$rootScope.ctrlPanl=localStorage.getItem("ctrlPanl");
	
	$rootScope.chatFlag=localStorage.getItem("chatFlag");
	$rootScope.ivrFlag=localStorage.getItem("ivrFlag");
	$rootScope.smsFlag=localStorage.getItem("smsFlag");
	
	
	$scope.resendPasswordRequestPojo={};
	$scope.resendPasswordResponsePojo={};
	$scope.sendUserNameRequestPojo={};
	$scope.sendUserNameResponsePojo={};
	$scope.AgentDetails={};
	$scope.fetchUserName=function(){
			$scope.AgentDetails= viewCceDetailsFactory.getAgentDetails(); 
		  console.log($scope.AgentDetails);
		  $scope.uname=$scope.AgentDetails.uname;
		  if($scope.AgentDetails.uname!=null || $scope.AgentDetails.uname!=undefined || $scope.AgentDetails.uname!=""){
			  $scope.uname=$scope.uname;
		  }
		  else{
			  $scope.uname=loginFactory.getUname(); 
		  }
	}
	$scope.fetchUserName();
	$scope.sendUserName=function(){
		showLoader();
		$scope.sendUserNameRequestPojo.uname=viewCceDetailsFactory.getAgentDetails().uname;
		$scope.sendUserNameRequestPojo.lang="en";
		$scope.sendUserNameRequestPojo.trkr="";
		forgotPasswordFactory.sendUserName($scope.sendUserNameRequestPojo).success(function(data){
			 $scope.sendUserNameResponsePojo=data;
			 if($scope.sendUserNameResponsePojo.rs=="S"){
				 $scope.Msg=$scope.sendUserNameResponsePojo.rd;
				 hideLoader();
				 $scope.sendUserNameResponse=$scope.sendUserNameResponsePojo;
				 $scope.hidePasswordFlag=true;
				 $scope.hideButtonFlag=false;
				 $rootScope.commomSuccessPopUp($scope.sendUserNameResponsePojo.rd);
			 }
			 else
				 {
				 hideLoader();
					$rootScope.commomErrorPopUp($scope.sendUserNameResponsePojo.rd);
				}
			console.log(data);
		}).error(function(error){
			hideLoader();
			$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
		})
	}
	

		$scope.resendPassword=function(user){
			$scope.resendPasswordRequestPojo.trkr="";
			$scope.resendPasswordRequestPojo.lang="en";
			$scope.resendPasswordRequestPojo.type="crm";
			$scope.resendPasswordRequestPojo.udf3="";
			$scope.resendPasswordRequestPojo.udf4="";
			$scope.resendPasswordRequestPojo.uname=$scope.uname;
			$scope.resendPasswordRequestPojo.newpwd=user.newPswd;
			$scope.resendPasswordRequestPojo.otp=user.otp;
			$scope.resendPasswordRequestPojo.ort="Crmemailf";
			forgotPasswordFactory.forgotPswd($scope.resendPasswordRequestPojo).success(function(data){
				 $scope.resendPasswordResponsePojo=data;
				 console.log($scope.resendPasswordResponsePojo);
				 if($scope.resendPasswordResponsePojo.rs=="S"){
					 $rootScope.commomSuccessPopUp($scope.resendPasswordResponsePojo.rd);
				 }
				 else{
						$rootScope.commomErrorPopUp($scope.resendPasswordResponsePojo.rd);
					 
				 	}
			
			}).error(function(error){
				hideLoader();
				$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
			})
		}
	
		$scope.cancel13 = function() {
	           $mdDialog.cancel();
	           $loaction.path("/resetPswd");
		};
			
});