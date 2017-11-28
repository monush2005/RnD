crm.controller('ForgotPasswordController',function($scope,$location,crmFactory ,$http,$rootScope,$location,$mdDialog,forgotPasswordFactory,loginFactory,viewCceDetailsFactory) {
		angular.element(document).ready(function () { 
		console.log('page loading completed'); });
		$rootScope.flagHideDrawer=true;
		hideLoader();	
		  if(localStorage.getItem("Cceid")==null || localStorage.getItem("Cceid")=="" || localStorage.getItem("Cceid")==undefined){
				$location.path("/");
	  }
				$rootScope.flexFlag = localStorage.getItem("flexFlag");
				$rootScope.flagAdmin=localStorage.getItem("flagAdmin");
				$rootScope.flagViewer=localStorage.getItem("flagViewer");
				$rootScope.flagAgent=localStorage.getItem("flagAgent");
				$rootScope.flagTL=localStorage.getItem("flagTL");
				$rootScope.ctrlPanl=localStorage.getItem("ctrlPanl");
				
				$rootScope.chatFlag=localStorage.getItem("chatFlag");
				$rootScope.ivrFlag=localStorage.getItem("ivrFlag");
				$rootScope.smsFlag=localStorage.getItem("smsFlag");
		
		
		$scope.sendUserNameRequestPojo={};
		$scope.sendUserNameResponsePojo={};
		$scope.sendUserName=function(obj){}
		
		$scope.ForgotPswdRequestPojo={};
		$scope.ForgotPswdResponsePojo={};
		$scope.uname=viewCceDetailsFactory.getAgentDetails().uname;
		
		
		if($scope.uname==null || $scope.uname=="" || $scope.uname==undefined){
				$location.path("/viewAgents");
			}
			
		
		
		$scope.forgotPswd=function(obj,objj,obj1){
			var loginRes = localStorage.getItem('loginRes');
			loginRes = JSON.parse(loginRes);
			showLoader();
			$scope.ForgotPswdRequestPojo.uname=obj;
			$scope.ForgotPswdRequestPojo.newpwd=objj;
			$scope.ForgotPswdRequestPojo.type=viewCceDetailsFactory.getAgentDetails().mode;
			$scope.ForgotPswdRequestPojo.udf3="";
			$scope.ForgotPswdRequestPojo.udf4="";
			$scope.ForgotPswdRequestPojo.lang="en";
			$scope.ForgotPswdRequestPojo.trkr="";
			$scope.ForgotPswdRequestPojo.mno="";
			$scope.ForgotPswdRequestPojo.action="MODIFY";
			$scope.ForgotPswdRequestPojo.requestID=loginRes.pd.requestID;
			$scope.ForgotPswdRequestPojo.cceid=viewCceDetailsFactory.getAgentDetails().cceid;
		if($scope.ForgotPswdRequestPojo.newpwd==obj1){
			forgotPasswordFactory.forgotPswd($scope.ForgotPswdRequestPojo).success(function(data){
				hideLoader();
				 $scope.ForgotPswdResponsePojo=data;
				 if($scope.ForgotPswdResponsePojo.rs=="S"){
					 $scope.ForgotPswdResponse=$scope.ForgotPswdResponsePojo;
					 $rootScope.commomSuccessPopUp($scope.ForgotPswdResponsePojo.rd);
				 }
				 else
					 {
					 hideLoader();
					 $scope.commomErrorPopUp($scope.ForgotPswdResponsePojo.rd);
					}
				console.log(data);
			
			}).error(function(error){
				hideLoader();
				$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");	
			})
		}
		else{
			hideLoader();
			$scope.commomErrorPopUp("New password and confirm password is not same");	
		}
		}
		
		
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
});