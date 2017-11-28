crm.controller('addAgentController',function($scope,$location,$http,$rootScope,loginFactory,crmFactory ,$mdDialog,addAgentFactory) {
	hideLoader();
	$rootScope.flagHideDrawer=true;

			$rootScope.flexFlag = localStorage.getItem("flexFlag");
			$rootScope.flagAdmin=localStorage.getItem("flagAdmin");
			$rootScope.flagViewer=localStorage.getItem("flagViewer");
			$rootScope.flagAgent=localStorage.getItem("flagAgent");
			$rootScope.flagTL=localStorage.getItem("flagTL");
			$rootScope.ctrlPanl=localStorage.getItem("ctrlPanl");
			
			$rootScope.chatFlag=localStorage.getItem("chatFlag");
			$rootScope.ivrFlag=localStorage.getItem("ivrFlag");
			$rootScope.smsFlag=localStorage.getItem("smsFlag");
			
	
	$scope.languages=[{"id":"en","language":"English"},{"id":"hi","language":"Hindi"},{"id":"bn","language":"Bengali"},{"id":"gu","language":"Gujrati"},{"id":"ml","language":"Malaylam"},{"id":"mr","language":"Marathi"},{"id":"ta","language":"Tamil"},{"id":"te","language":"Telugu"},{"id":"or","language":"Oriya"},{"id":"ur","language":"Urdu"},{"id":"pa","language":"Punjabi"},{"id":"as","language":"Assamese"},{"id":"kn","language":"Kannada"}];		
	$scope.modes=[{"id":"ivr","mode":"IVR"},{"id":"sms","mode":"SMS"},{"id":"chat","mode":"Chat"},{"id":"email","mode":"Email"},{"id":"query","mode":"Query"}];	
	$scope.addAgentDetails={};
	$scope.addAgentDetails.ccetype="agent";
	$scope.addAgentDetails.status="Active";
	$scope.addAgentDetails.viewreports="Y";
	$scope.addAgentDetails.respond="Y";
/*	$scope.addAgentDetails.chat="5";
	$scope.addAgentDetails.query="5";
	$scope.addAgentDetails.call="5";*/
	$scope.chtValue=false;
	$scope.callValue=false;
	$scope.queryValue=false;
     $scope.searchTerm;
  if(localStorage.getItem("Cceid")==null || localStorage.getItem("Cceid")=="" || localStorage.getItem("Cceid")==undefined){
			$location.path("/");
  }     
     			$scope.arr=[];
				$scope.AddAgentRequestPojo={};
				$scope.AddAgentResponsePojo={};

				
				$scope.addAgent=function(obj){
							if($scope.cht1==true){
								$scope.arr.push("Chat");
								console.log($scope.arr);
							}
							else if($scope.ivr1==true){
								$scope.arr.push("ivr");
								console.log($scope.arr);
							}
							else if($scope.sms1==true){
								$scope.arr.push("sms");
								//console.log($scope.arr);
								if($scope.query1==true)
									{
									$scope.arr.push("Query");
									if($scope.emai==true)
										{
										$scope.arr.push("Email");
										}
									}
							}
							else if($scope.query1==true){
								$scope.arr.push("Query");
								console.log($scope.arr);
								if($scope.emai==true)
								{
								$scope.arr.push("Email");
								if($scope.sms1==true)
									{
									$scope.arr.push("SMS");
									}
								}
							}
							else if($scope.emai==true){
								$scope.arr.push("Email");
								console.log($scope.arr);
								if($scope.query1==true)
								{
								$scope.arr.push("Query");
								if($scope.sms1==true)
									{
									$scope.arr.push("SMS");
									}
								}
							}
							else{
								console.log("empty");
							}
							var loginRes = localStorage.getItem('loginRes');
							loginRes = JSON.parse(loginRes);
							$scope.AddAgentRequestPojo.ccemode=$scope.arr.toString();
							$scope.AddAgentRequestPojo.empid=obj.empid;
							$scope.AddAgentRequestPojo.cceid="";
							$scope.AddAgentRequestPojo.name=obj.name;
							$scope.AddAgentRequestPojo.mno=obj.mno;
							$scope.AddAgentRequestPojo.uname=obj.uname;
/*							var Rn=randomString("4");
							$scope.AddAgentRequestPojo.pwd=SHA256(Rn);*/
							$scope.AddAgentRequestPojo.pwd="";
							$scope.AddAgentRequestPojo.status=obj.status;
							$scope.AddAgentRequestPojo.ccetype=obj.ccetype;
							$scope.AddAgentRequestPojo.ccelang=obj.ccelang.join(",");
							$scope.AddAgentRequestPojo.email=obj.email;
							$scope.AddAgentRequestPojo.respond=obj.respond;
							$scope.AddAgentRequestPojo.chat=obj.chat;
							$scope.AddAgentRequestPojo.query=obj.query;
							$scope.AddAgentRequestPojo.call=obj.call;
							$scope.AddAgentRequestPojo.qrmno=obj.qrmno;
							$scope.AddAgentRequestPojo.sme="others";
							$scope.AddAgentRequestPojo.viewreports=obj.viewreports;
							$scope.AddAgentRequestPojo.terminalid=obj.terminalid;
							$scope.AddAgentRequestPojo.lang="en";
							$scope.AddAgentRequestPojo.trkr="";
							$scope.AddAgentRequestPojo.action="ADD";
							$scope.AddAgentRequestPojo.teamleadcce=obj.teamleadcce;
							$scope.AddAgentRequestPojo.requestID=loginRes.pd.requestID;
							addAgentFactory.setAgentReqParams($scope.AddAgentRequestPojo);
							showLoader(); 
							addAgentFactory.addAgent($scope.AddAgentRequestPojo).success(function(data){
								window.scrollTo(0, 0);
								 $scope.AddAgentResponsePojo=data;
								 hideLoader();
								 $scope.arr=[];
								 if($scope.AddAgentResponsePojo.rs=="S"){

										 $scope.arr=[];
									$rootScope.sendEmail($scope.AddAgentRequestPojo,$scope.AddAgentResponsePojo.pd)
									 $scope.sendPswd($scope.AddAgentRequestPojo,$scope.AddAgentResponsePojo.pd.cceid,$scope.AddAgentResponsePojo.pd.pwd)
									 $rootScope.commomSuccessPopUp($scope.AddAgentResponsePojo.rd);
								 }
								 else{
									$rootScope.commomErrorPopUp($scope.AddAgentResponsePojo.rd);
								 }
								console.log(data);
							
							}).error(function(error){
								hideLoader();
								$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
							})
						
						console.log("==========");
					

				}
				
				
				
				var randomString = function(length) {
				    var text = "";
				    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
				    for(var i = 0; i < length; i++) {
				        text += possible.charAt(Math.floor(Math.random() * possible.length));
				    }
				    return text;
				}
				$scope.EmailRequetReqPojo={};
				$scope.EmailRequetResPojo={};
				$scope.EmailRequetReqPojo.body={};
				$scope.sendPswd=function(agentParams,agentID,pwd){
					var d = new Date();
					//$scope.EmailRequetReqPojo.to="guriya.kumari@bharatbpo.in";
					$scope.EmailRequetReqPojo.to = "Manpreet.kaur@spicedigital.in"
					$scope.EmailRequetReqPojo.cc="";
					$scope.EmailRequetReqPojo.bcc="";
					$scope.EmailRequetReqPojo.senderid="UMANG <donotreply@umang.gov.in>";
					$scope.EmailRequetReqPojo.subject="Testing";
					$scope.EmailRequetReqPojo.lang="en";
					$scope.EmailRequetReqPojo.tag="trans";
					$scope.EmailRequetReqPojo.vmtype="CRM";
					$scope.EmailRequetReqPojo.appname="CRM";
					$scope.EmailRequetReqPojo.vmname="crm.passwd.vm";
					$scope.EmailRequetReqPojo.trkr=d.getTime();
					$scope.EmailRequetReqPojo.body.uname=agentParams.uname;
					$scope.EmailRequetReqPojo.body.mno="";
					$scope.EmailRequetReqPojo.body.otp="";
					$scope.EmailRequetReqPojo.body.vldtime="";
					$scope.EmailRequetReqPojo.body.agentMno=agentParams.mno;
					$scope.EmailRequetReqPojo.body.agentName=agentParams.name;
					$scope.EmailRequetReqPojo.body.agentId=agentID;
					$scope.EmailRequetReqPojo.body.passwd=pwd;
					console.log("==========================");
					console.log($scope.EmailRequetReqPojo.body);
					showLoader();
					addAgentFactory.emailHandling($scope.EmailRequetReqPojo).success(function(data){
						hideLoader();
						 $scope.EmailRequetResPojo=data;
						 console.log("---------------");
						 console.log($scope.EmailRequetResPojo);
						 console.log("----------------------");
						if($scope.EmailRequetResPojo.rs=="SU"){
						}
						
					}).error(function(error){
						
					})
				}
				$scope.cht=function(){
					if($scope.cht1==true){
						$scope.chtValue=true;
						$scope.callValue=false;
						$scope.queryValue=false;
						$scope.ivr1=false;
						$scope.sms1=false;
						$scope.query1=false;	
						$scope.emai=false;
					}
					else{
						//$scope.callValue=true;
						//$scope.queryValue=true;
						$scope.chtValue=false;
						$scope.callValue=false;
						$scope.queryValue=false;
					}
				}
				$scope.ivr=function(){
					if($scope.ivr1==true){
						$scope.chtValue=false;
						$scope.callValue=true;
						$scope.queryValue=false;
						$scope.cht1=false;
						$scope.sms1=false;
						$scope.query1=false;	
						$scope.emai=false;
					}
					else{
						//$scope.chtValue=true;
						//$scope.queryValue=true;
						$scope.chtValue=false;
						$scope.callValue=false;
						$scope.queryValue=false;
					}				
				}
				$scope.sms=function(){
					if($scope.sms1==true){
						$scope.ivr1=false;
						$scope.cht1=false;
						$scope.chtValue=false;
						$scope.callValue=false;
						//$scope.queryValue=false;
					}
					else{
						//$scope.chtValue=true;
						//$scope.callValue=true;
						$scope.chtValue=false;
						$scope.callValue=false;
						$scope.queryValue=false;
					}
				}
				$scope.query=function(){
					if($scope.query1==true){
						$scope.chtValue=false;
						$scope.callValue=false;
						$scope.queryValue=true;
						$scope.ivr1=false;
						$scope.cht1=false;	
					}
					else{
						//$scope.chtValue=true;
						//$scope.callValue=true;
						$scope.chtValue=false;
						$scope.callValue=false;
						$scope.queryValue=false;
					}
				}
				$scope.emaill=function(){
					if($scope.emai==true){
						$scope.ivr1=false;
						$scope.cht1=false;	
						$scope.chtValue=false;
						$scope.callValue=false;
						//$scope.queryValue=false;
					}
					else{
						$scope.chtValue=false;
						$scope.callValue=false;
						$scope.queryValue=false;
					}
				}
				
				
				
				$scope.fetchListOfTLRequestPojo={};
			    $scope.fetchListOfTLResponsePojo={};
			    $scope.fetchTlsList=function(obj){
			    	    	$scope.fetchListOfTLRequestPojo.lang="en";
			    			$scope.fetchListOfTLRequestPojo.trkr="";
			    			addAgentFactory.fetchTlsList($scope.fetchListOfTLRequestPojo).success(function(data){
			    				$scope.fetchListOfTLResponsePojo=data;
			    				 console.log($scope.fetchListOfTLResponsePojo);
			    				if($scope.fetchListOfTLResponsePojo.rs="S"){
			    					//$scope.commomSuccessPopUp($scope.fetchListOfTLResponsePojo.rd);
			    					}
			    				else{
			    					//$scope.commomErrorPopUp($scope.fetchListOfTLResponsePojo.rd);
			    				}
			    				
			    			}).error(function(error){
			    				
			    			})
			     }		
				
			    $scope.fetchTlsList();
			    
			    
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
			    
			    
			    $scope.reset = function() { 
		        	$scope.addAgentDetails={};
		        	$scope.agentForm.$setPristine();
					$scope.ivr1=false;
					$scope.sms1=false;
					$scope.query1=false;	
					$scope.emai=false;
					$scope.cht1=false;
					$scope.chtValue=false;
					$scope.callValue=false;
					$scope.queryValue=false;
		 	           $scope.agentForm.$setUntouched();
		 	           angular.element(document.getElementsByTagName('md-input-container')).removeClass('md-input-focused md-input-invalid');
		 	           angular.element(document.getElementsByTagName('md-input-container')).focus(false); 
		 	         };

})
				