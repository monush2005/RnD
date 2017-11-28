crm.controller('agentChatHistoryController11',function($scope,$location,$http,$rootScope,crmFactory,sendSmsFactory,loginFactory,wrapUpFactory,fetchServicesFactory,createTicketFactory ,agentChatHistoryFactory,$mdDialog) {
	hideLoader();
	console.log("in wrap chat function");
	$scope.userDtlsRequestPojo={};
	
	$rootScope.flagHideDrawer=true;
	$rootScope.btnFlag=false;
	
			$rootScope.flexFlag = localStorage.getItem("flexFlag");
			$rootScope.flagAdmin=localStorage.getItem("flagAdmin");
			$rootScope.flagViewer=localStorage.getItem("flagViewer");
			$rootScope.flagAgent=localStorage.getItem("flagAgent");
			$rootScope.flagTL=localStorage.getItem("flagTL");
			$rootScope.ctrlPanl=localStorage.getItem("ctrlPanl");
			
			$rootScope.chatFlag=localStorage.getItem("chatFlag");
			$rootScope.ivrFlag=localStorage.getItem("ivrFlag");
			$rootScope.smsFlag=localStorage.getItem("smsFlag");
		
	
	$scope.userDtlsRequestPojo={};
    $scope.userDtlsResponsePojo={};
    $scope.user={};
	usrList=[];
	  if(localStorage.getItem("Cceid")==null || localStorage.getItem("Cceid")=="" || localStorage.getItem("Cceid")==undefined){
			$location.path("/");
} 
	$scope.LoginRequestPojo={};
	$scope.errorMsg="";
	$scope.login=function()
	{
if(localStorage.getItem("conid")!="" || localStorage.getItem("conid")!=undefined){
$scope.loginRequest=loginFactory.getLoginReq();
$scope.LoginRequestPojo.uname=localStorage.getItem("userid");
$scope.LoginRequestPojo.pwd=localStorage.getItem("pwd11");//SHA256(obj.pswd);
$scope.LoginRequestPojo.lang="en";
$scope.LoginRequestPojo.ip="";
$scope.LoginRequestPojo.connectionid=localStorage.getItem("userid")+"@itx1spip-momt1";
$scope.LoginRequestPojo.sessionid=localStorage.getItem("conid");
getConnect($scope.LoginRequestPojo.uname,$scope.LoginRequestPojo.pwd);
loginFactory.login1($scope.LoginRequestPojo).success(function(data){
	console.log(data);
	$scope.LoginResponsePojo=data;
	 if($scope.LoginResponsePojo.rs=="S"){
		 $scope.loginDetails=$scope.LoginResponsePojo;
		 $rootScope.btnFlag=true;
		// getConnect($scope.LoginRequestPojo.uname,$scope.LoginRequestPojo.pwd);
		 }
	 else
		 {
		 console.log("---------------------");
		 $scope.commomErrorPopUp($scope.LoginResponsePojo.rd);
		 $rootScope.btnFlag=false;
			
		}
}).error(function(error){
	
})
}
else{
	alert("Please wait till connection establish .");
}

}










/*$scope.agentChatHisRequestPojo={};
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
}*/

	
	$scope.FetchCategoriesRequestPojo = {};
	$scope.fetchCategoriesResponsePojo = {};
	$scope.fetchCategories = function() {
		$scope.FetchCategoriesRequestPojo.lang = "en";
		$scope.FetchCategoriesRequestPojo.trkr = "";
		createTicketFactory
				.fetchCategories($scope.FetchCategoriesRequestPojo)
				.success(
						function(data) {
							$scope.fetchCategoriesResponsePojo = data;
							console
									.log($scope.fetchCategoriesResponsePojo);
							if ($scope.fetchCategoriesResponsePojo.rs == 'S') {

							}

						}).error(function(error) {

				})
	}
	$scope.fetchCategories();
	
	

$scope.cancel=function(){
	$rootScope.close() ;
}





$scope.ticketCreatePopUp=function(){
	$mdDialog.show({
	      contentElement: '#createTicketPopUp',
	      parent: angular.element(document.body),
	      targetEvent: null,
	      clickOutsideToClose:false
	    });
   };
   
    $scope.fetchServicesRequestPojo={};
    $scope.fetchServicesResponsePojo={};
    $scope.fetchServices=function(){
    	$scope.fetchServicesRequestPojo.lang="en";
		$scope.fetchServicesRequestPojo.srid="";
		showLoader();
		fetchServicesFactory.fetchServices($scope.fetchServicesRequestPojo).success(function(data){
			hideLoader();
			 $scope.fetchServicesResponsePojo=data;
			 console.log($scope.fetchServicesResponsePojo);
			if($scope.fetchServicesResponsePojo.rs=="SU"){
				hideLoader();
			}
			
		}).error(function(error){
			
		})
	 }
    
   $scope.fetchServices();
   
   
    $scope.fetchDeptServicesRequestPojo={};
    $scope.fetchDeptServicesResponsePojo={};
    $scope.selectDeptService=function(obj){
    	$scope.fetchDeptServicesRequestPojo.lang="en";
		$scope.fetchDeptServicesRequestPojo.srid=obj;
		showLoader();
		createTicketFactory.fetchDeptServices($scope.fetchDeptServicesRequestPojo).success(function(data){
			hideLoader();
			 $scope.fetchDeptServicesResponsePojo=data;
			 console.log($scope.fetchDeptServicesResponsePojo);
			if($scope.fetchServicesResponsePojo.rs=="SU"){
				hideLoader();
			}
			
		}).error(function(error){
			hideLoader();
		});
	 };
	 $scope.preWrapUpsRequestPojo={};
	 $scope.preWrapUpsResponsePojo={};
	 $scope.fetchchatDtls=function(obj2){
		 	$scope.preWrapUpsRequestPojo.lang="en";
		 	$scope.preWrapUpsRequestPojo.requestid=obj2;
		 	//console.log($scope.preWrapUpsRequestPojo);
		 	showLoader();
		 	wrapUpFactory.preWrapUpsReq($scope.preWrapUpsRequestPojo).success(function(data){
		 		hideLoader();
		 		 $scope.preWrapUpsResponsePojo=data;
		 		 console.log($scope.preWrapUpsResponsePojo);
		 		if($scope.preWrapUpsResponsePojo.rs=="S"){
		 	    	console.log("=====================");
		 			console.log(data);
		 			console.log("=====================");
		 			if($scope.preWrapUpsResponsePojo.pd.calls.length>0)
		 				{
		 			 $mdDialog.show({
		 				contentElement : '#wrapups',
		 				parent : angular.element(document.body),
		 				targetEvent : null,
		 				clickOutsideToClose : true
		 			}); 
		 				}
		 			else{
		 				$scope.commomErrorPopUp("No previous wraps found")
		 			}
		 		}
		 		else{
		 			$scope.commomErrorPopUp($scope.preWrapUpsResponsePojo.rd);
		 		}
		 		
		 	}).error(function(error){
		 		
		 	})

	 }
	 
	 
	 

	 
	    $scope.SendSmsRequestPojo={};
		$scope.sendSms=function(user_mobno,ticktId){
			$scope.SendSmsRequestPojo.lang="en";
			$scope.SendSmsRequestPojo.mno=user_mobno;
			$scope.SendSmsRequestPojo.msg="Dear User, Your ticket has been logged successfully. Your ticket ID is "+ticktId;
			$scope.SendSmsRequestPojo.msgtype="PM";
			$scope.SendSmsRequestPojo.appname="umang";
			sendSmsFactory.sendSms($scope.SendSmsRequestPojo).success(function(data){
				 $scope.SendSmsResponsePojo=data;
				 console.log($scope.SendSmsResponsePojo)
			}).error(function(error){
				
			})
		}
	    
	    $scope.reset = function() { 
        	$scope.user.mobNo='';
 	        $scope.user.fatherName='';
 	        $scope.user.category='';
 	        $scope.user.subCategory='';
 	        $scope.user.severity_level='';
 	        $scope.user.query='';
 	        $scope.user.department='';
 	        $scope.user.service='';
 	        $scope.user.lmode='';
 	        $scope.user.status='';
 	        $scope.createTicketForm.$setPristine();
 	        $scope.createTicketForm.$setUntouched();
 	        angular.element(document.getElementsByTagName('md-input-container')).removeClass('md-input-focused md-input-invalid');
 	        angular.element(document.getElementsByTagName('md-input-container')).focus(false); 
 	         };
 	         
 	        
 	         
 	        $scope.fetchCallRequestPojo={};
 	       $scope.fetchCallResponsePojo={};
 	       $scope.fetchCallDtls=function(){
 	       			$scope.fetchCallRequestPojo.trkr="7898";
 	       			$scope.fetchCallRequestPojo.lang="en";
 	       	    	$scope.fetchCallRequestPojo.cceid=localStorage.getItem("Cceid")
 	       	    	showLoader();
 	       			wrapUpFactory.fetchCallDtls($scope.fetchCallRequestPojo).success(function(data){
 	       				hideLoader();
 	       				if($scope.fetchCallResponsePojo.rs="S"){
 	       					$scope.wrapUpflag=true;
 	       					$scope.fetchCallResponsePojo=data;
 	       	/*				$scope.callDtls=$scope.fetchCallResponsePojo.pd.calls;
 	       					mobNumber = $scope.usrDtls.mno;
 	       					var encodeMno=mobNumber.substring(1, mobNumber.length-2);
 	       					var a=mobNumber.replace(encodeMno,"XXXXXXX");
 	       					$scope.usrDtls.mno=a;
 	       					console.log($scope.fetchCallResponsePojo);
 	       					console.log("=====================");
 	       					console.log(data);
 	       					console.log("=====================");
 	       					$scope.user.mobNo=$scope.usrDtls.mno;
 	       					$scope.user.fatherName=$scope.usrDtls.name;
 	       					$scope.referenceId=$scope.usrDtls.referenceId;*/
 	       				}
 	       				else{
 	       					$scope.commomErrorPopUp($scope.fetchUserDtlsResponsePojo.rd);
 	       				}
 	       				
 	       			}).error(function(error){
 	       				
 	       			})

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