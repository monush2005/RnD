	crm.controller('wrapUpController',function($scope,$location,$http,$rootScope,crmFactory,sendSmsFactory,$mdDialog,wrapUpFactory,loginFactory,sendSmsFactory ,createTicketFactory,fetchServicesFactory) {
	if(localStorage.getItem("Cceid")==null || localStorage.getItem("Cceid")=="" || localStorage.getItem("Cceid")==undefined){
		$location.path("/");
	}
	hideLoader();
	$rootScope.flagHideDrawer=true;
	if(localStorage.getItem("holdStatus")=="unhold"){
		$("#holdBtn").css("background","green");
		$scope.HoldValue="Hold";
	}
	else if(localStorage.getItem("holdStatus")=="hold"){
		$("#holdBtn").css("background","red");
		$scope.HoldValue="Unhold";
	}
	else{
	//$('#holdBtn').attr('style', 'display: inline !important;');

	$("#holdBtn").css('background-color','green');
	$scope.HoldValue="Hold";
	}
	$scope.languages=[{"id":"en","language":"English"},{"id":"hi","language":"Hindi"},{"id":"bn","language":"Bengali"},{"id":"gu","language":"Gujrati"},{"id":"ml","language":"Malaylam"},{"id":"mr","language":"Marathi"},{"id":"ta","language":"Tamil"},{"id":"te","language":"Telugu"},{"id":"or","language":"Oriya"},{"id":"ur","language":"Urdu"},{"id":"pa","language":"Punjabi"},{"id":"as","language":"Assamese"},{"id":"kn","language":"Kannada"}];		

			$rootScope.flexFlag = localStorage.getItem("flexFlag");
			$rootScope.flagAdmin=localStorage.getItem("flagAdmin");
			$rootScope.flagViewer=localStorage.getItem("flagViewer");
			$rootScope.flagAgent=localStorage.getItem("flagAgent");
			$rootScope.flagTL=localStorage.getItem("flagTL");
			$rootScope.ctrlPanl=localStorage.getItem("ctrlPanl");
			
			$rootScope.chatFlag=localStorage.getItem("chatFlag");
			$rootScope.ivrFlag=localStorage.getItem("ivrFlag");
			$rootScope.smsFlag=localStorage.getItem("smsFlag");

	$scope.Paging={};
	$scope.referenceId="";
	
	var mobNumber="";
	var mobNumber1="";
	var mobNumber2="";
	var encodeMno="";
	var encodeMno2="";
	$scope.usrDtls={};
	$scope.fetchUserDtlsRequestPojo={};
    $scope.fetchUserDtlsResponsePojo={};
    $rootScope.userinfo={};
    $scope.user={};
    $scope.usrDtls={};
    $scope.fetchUsrDtls=function(){
        	$scope.fetchUserDtlsRequestPojo.trkr="7898";
    		$scope.fetchUserDtlsRequestPojo.lang="en";
        	$scope.fetchUserDtlsRequestPojo.cceid=localStorage.getItem("Cceid")
        	showLoader();
    		wrapUpFactory.fetchUserDtls($scope.fetchUserDtlsRequestPojo).success(function(data){
    			hideLoader();
    			 $scope.fetchUserDtlsResponsePojo=data;
    			 console.log($scope.fetchUserDtlsResponsePojo);
    			 if($scope.fetchUserDtlsResponsePojo.rs=="S"){
    				 $scope.usrDtls=$scope.fetchUserDtlsResponsePojo.pd.userinfo[0];
						$rootScope.userinfo.adhaarStatus =$scope.usrDtls.adhaarStatus;
						$rootScope.userinfo.state = $scope.usrDtls.state;
						$rootScope.userinfo.emailAuth = $scope.usrDtls.emailAuth;
    					mobNumber = $scope.usrDtls.mno;
    					mobNumber1=$scope.usrDtls.mno;
    					var encodeMno=mobNumber.substring(1, mobNumber.length-2);
    					var a=mobNumber.replace(encodeMno,"XXXXXXX");
    					$scope.usrDtls.mno=a;
    					console.log($scope.fetchUserDtlsResponsePojo);
    					if($scope.usrDtls.lang=="en")
    						{
    						$scope.usrDtls.lang="English";
    						}
    					else if($scope.usrDtls.lang=="bn")
						{
						$scope.usrDtls.lang="Bengali";
						}
    					else if($scope.usrDtls.lang=="gj")
    					{
    						$scope.usrDtls.lang="Gujrati";
    					}
    					else if($scope.usrDtls.lang=="hi")
    					{
    					$scope.usrDtls.lang="Hindi";
    					}
    					else if($scope.usrDtls.lang=="ml")
						{
						$scope.usrDtls.lang="Malaylam";
						}
    					else if($scope.usrDtls.lang=="mr")
						{
						$scope.usrDtls.lang="Marathi";
						}
    					else if($scope.usrDtls.lang=="ta")
						{
						$scope.usrDtls.lang="Tamil";
						}
    					else if($scope.usrDtls.lang=="te")
						{
						$scope.usrDtls.lang="Telugu";
						}
    					else if($scope.usrDtls.lang=="or")
						{
						$scope.usrDtls.lang="Oriya";
						}
    					else if($scope.usrDtls.lang=="ur")
						{
						$scope.usrDtls.lang="Urdu";
						}
    					else if($scope.usrDtls.lang=="pa")
						{
						$scope.usrDtls.lang="Punjabi";
						}
    					else if($scope.usrDtls.lang=="as")
						{
						$scope.usrDtls.lang="Assamese";
						}
    					else if($scope.usrDtls.lang=="kn")
						{
						$scope.usrDtls.lang="Kannada";
						}
    				console.log("=====================");
    				console.log(data);
    				console.log("=====================");
    				$scope.user.mobNo=$scope.usrDtls.mno;
    				$scope.user.fatherName=$scope.usrDtls.name;
    				$scope.referenceId=$scope.usrDtls.referenceId;
    			}

    			else{
    				$rootScope.commomErrorPopUp($scope.fetchUserDtlsResponsePojo.rd);
    			}
    			
    		}).error(function(error){
				hideLoader();
				$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
    		})
    	

	 }
	
    $scope.fetchCallRequestPojo={};
    $scope.fetchCallResponsePojo={};
    $scope.fetchCallDtls=function(){
    			$scope.fetchCallRequestPojo.trkr="7898";
    			$scope.fetchCallRequestPojo.lang="en";
    	    	$scope.fetchCallRequestPojo.cceid=localStorage.getItem("Cceid")
    	    	showLoader();
    			wrapUpFactory.fetchCallDtls($scope.fetchCallRequestPojo).success(function(data){
    				hideLoader();
    				$scope.fetchCallResponsePojo=data;
    				if($scope.fetchCallResponsePojo.rs=="S"){
    					$scope.wrapUpflag=true;
    					
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
    					
						 if($scope.fetchCallResponsePojo.pd.calls.length<1){
							 $scope.commomErrorPopUp("No previous wrapups found");
							 }
					}
    				else{
    					$scope.commomErrorPopUp($scope.fetchCallResponsePojo.rd);
    				}
    				
    			}).error(function(error){
					hideLoader();
					$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
    			})

	 }
    
	
	$scope.wrapUpRequestPojo={};
    $scope.wrapUpResponsePojo={};
    $scope.wrapUpReq=function(obj){
    	    	$scope.wrapUpRequestPojo.lang="en";
    			$scope.wrapUpRequestPojo.trkr="832382";
    	    	$scope.wrapUpRequestPojo.user_mno=mobNumber1;
    	    	$scope.wrapUpRequestPojo.cceid=localStorage.getItem("Cceid")
    			$scope.wrapUpRequestPojo.ufathers_name=$scope.usrDtls.name;
    	    	$scope.wrapUpRequestPojo.category=obj.category;
    			$scope.wrapUpRequestPojo.sub_category=obj.subCategory;
    			$scope.wrapUpRequestPojo.query=obj.query;
    			$scope.wrapUpRequestPojo.assign_cce="";
    			$scope.wrapUpRequestPojo.severity_level="";
    			$scope.wrapUpRequestPojo.attachment="";
    			$scope.wrapUpRequestPojo.lmode="ivr";
    			$scope.wrapUpRequestPojo.department=obj.department;
    			$scope.wrapUpRequestPojo.service=obj.service;
    			$scope.wrapUpRequestPojo.status=obj.status;
    			$scope.wrapUpRequestPojo.referenceId=$scope.referenceId;
    			$scope.wrapUpRequestPojo.qtype=obj.qtype;
				if (obj.rmks != undefined && obj.rmks != "" && obj.rmks != null) {
					$rootScope.wrapUpRequestPojo.remarks = obj.rmks;
				} else {
					$rootScope.wrapUpRequestPojo.remarks = "";
				}
    			$scope.wrapUpRequestPojo.language=obj.language1;
    			$scope.wrapUpRequestPojo.astatus = $rootScope.userinfo.adhaarStatus;
    			$scope.wrapUpRequestPojo.email = $rootScope.userinfo.emailAuth;
    			$scope.wrapUpRequestPojo.state = $rootScope.userinfo.state;
    			showLoader();
    			wrapUpFactory.wrapUpReq($scope.wrapUpRequestPojo).success(function(data){
    				hideLoader();
    				$scope.reset();
    				 $scope.wrapUpResponsePojo=data;
    				 console.log($scope.wrapUpResponsePojo);
    				if($scope.wrapUpResponsePojo.rs=="S"){
    					$scope.usrDtls.name="";
    					$scope.usrDtls.lang="";
    						if($scope.wrapUpRequestPojo.status=="assign"){
    							$scope.sendSms($scope.wrapUpRequestPojo.user_mno,$scope.wrapUpResponsePojo.pd.ticketID);
    	    					$scope.commomSuccessPopUp($scope.wrapUpResponsePojo.rd +" .The generated ticket ID is "+$scope.wrapUpResponsePojo.pd.ticketID);

    						}
    						else{
    							$scope.commomSuccessPopUp($scope.wrapUpResponsePojo.rd);
    						}
    						
    					console.log("=====================");
    					console.log(data);
    					console.log("=====================");
    					
    				}
    				else{
    					$scope.commomErrorPopUp($scope.wrapUpResponsePojo.rd);
    				}
    				
    			}).error(function(error){
					hideLoader();
					$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
    			})
     }
    
    
    
    
    
    $scope.holdRequestPojo={};
    $scope.holdResponsePojo={};
    $scope.fetchHoldStatusRequestPojo={};
    $scope.fetchHoldStatusResponsePojo={};
    $scope.holdReq=function(obj){
    	$scope.fetchHoldStatusRequestPojo.cceid=localStorage.getItem("Cceid")
		$scope.fetchHoldStatusRequestPojo.referenceId=$scope.referenceId;
		$scope.fetchHoldStatusRequestPojo.lang="en";
			wrapUpFactory.fetchHoldStatus($scope.fetchHoldStatusRequestPojo).success(function(data){
				showLoader();
				 $scope.fetchHoldStatusResponsePojo=data;
				 console.log($scope.fetchHoldStatusResponsePojo);
				if($scope.fetchHoldStatusResponsePojo.rs=="S"){
					if($scope.fetchHoldStatusResponsePojo.pd=="0"){
						$scope.holdRequestPojo.cceid=localStorage.getItem("Cceid")
		    			$scope.holdRequestPojo.referenceId=$scope.referenceId;
		    			$scope.holdRequestPojo.type="hold";
		    			$scope.holdRequestPojo.status="hold";
		    			
		    			console.log($scope.holdRequestPojo);
		   			wrapUpFactory.holdReq($scope.holdRequestPojo).success(function(data){
		    				hideLoader();
		    				 $scope.holdResponsePojo=data;
		    				 console.log($scope.holdResponsePojo);
		    				if($scope.holdResponsePojo.rs=="S"){
		    	    			localStorage.setItem("holdStatus","hold");
		    					$("#holdBtn").css("background","red");
		    					$scope.HoldValue="Unhold";
		    				}
		    				else{
		    					$("#holdBtn").css("background","green");
		    					$scope.commomErrorPopUp($scope.holdResponsePojo.rd);
		    				}
		    				
		    			}).error(function(error){
							hideLoader();
							$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");	
		    			})
					}
					else{
						$scope.holdRequestPojo.cceid=localStorage.getItem("Cceid")
		    			$scope.holdRequestPojo.referenceId=$scope.referenceId;
		    			$scope.holdRequestPojo.type="unhold";
		    			$scope.holdRequestPojo.status="unhold";
		    			console.log($scope.holdRequestPojo);
		   			wrapUpFactory.holdReq($scope.holdRequestPojo).success(function(data){
		    				hideLoader();
		    				 $scope.holdResponsePojo=data;
		    				 console.log($scope.holdResponsePojo);
		    				if($scope.holdResponsePojo.rs=="S"){
		    	    			localStorage.setItem("holdStatus","unhold");
		    					$("#holdBtn").css("background","green");
		    					$scope.HoldValue="Hold";
		    				}
		    				else{
		    					$("#holdBtn").css("background","red");
		    					$scope.commomErrorPopUp($scope.holdResponsePojo.rd);
		    				}
		    				
		    			}).error(function(error){
							hideLoader();
							$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
		    			})
					}
				}
				else{
					hideLoader();
					$scope.commomErrorPopUp($scope.fetchHoldStatusResponsePojo.rd);
				}
				
			}).error(function(error){
				
			})

     }
    
    $scope.wrapUpReqPopUp=function(){
		$scope.user.mobNo=$scope.usrDtls.mno;
		mobNumber2 = $scope.usrDtls.mno;
		var encodeMno2=mobNumber2.substring(1, mobNumber2.length-2);
		var a2=mobNumber2.replace(encodeMno2,"XXXXXXX");
		$scope.usrDtls.mno=a2;
		$scope.user.fatherName=$scope.usrDtls.name;
		$scope.referenceId=$scope.usrDtls.referenceId;
		console.log("changes need to be done "+$scope.referenceId);
		$mdDialog.show({
		      contentElement: '#createTicketPopUp',
		      parent: angular.element(document.body),
		      targetEvent: null,
		      clickOutsideToClose:false
		    });
    }
    
    $scope.cancel=function(){
    	$rootScope.close() ;
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
			hideLoader();
			$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
		})
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
				hideLoader();
				$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
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
				$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
			})
		 }
	    
	    
		$scope.FetchCategoriesRequestPojo = {};
		$scope.fetchCategoriesResponsePojo = {};
		$scope.fetchCategories = function() {
			$scope.FetchCategoriesRequestPojo.lang = "en";
			$scope.FetchCategoriesRequestPojo.trkr = "";
			createTicketFactory.fetchCategories($scope.FetchCategoriesRequestPojo).success(
							function(data) {
								$scope.fetchCategoriesResponsePojo = data;
								console.log($scope.fetchCategoriesResponsePojo);
								if ($scope.fetchCategoriesResponsePojo.rs == 'S') {

								}

							}).error(function(error) {
								hideLoader();
								$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
					})
		}
		
		$scope.fetchCategories();
       

	    
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
	
