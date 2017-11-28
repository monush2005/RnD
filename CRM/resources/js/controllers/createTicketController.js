	crm.controller('createTicketController',function($scope,$location,$http,$rootScope,loginFactory,picUploadFactory ,userDetailsFactory,createTicketFactory,fetchServicesFactory,$mdDialog,sendSmsFactory) {
		hideLoader();
		  if(localStorage.getItem("Cceid")==null || localStorage.getItem("Cceid")=="" || localStorage.getItem("Cceid")==undefined){
				$location.path("/");
	} 
		
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
		$scope.user={};
		
		$scope.deptFlag=false;
		$scope.disFlag=true;
		//$rootScope.categoryFlag=false;
		var fileName="";
		$scope.uploadFile = function(user){
			var file = $scope.myFile;
			console.log('file is ' );
			if($scope.myFile!=undefined){
			console.log($scope.myFile.name);
			fileName=$scope.myFile.name
			console.dir(file);
			var fd = new FormData();
			fd.append('file', file);
			picUploadFactory.uploadImages(fd).success(function(data){
				console.log("200");
				console.log(fileName);
				if(data.status=="success"){
					$scope.generateTicket(user);
			}
			}).error(function(error) {
				console.log("400");	
			});
			}
			else{
				$scope.generateTicket(user);	
			}
		};
		
		
		
			/*------------create ticket method starts-------------*/
			$scope.ticketID="";
		    $scope.GenerateTicketRequestPojo={};
		    $scope.GenerateTicketResponsePojo={};
		    $scope.generateTicket=function(user){
			$scope.GenerateTicketRequestPojo.lang="en";
			$scope.GenerateTicketRequestPojo.trkr="7979";
			$scope.GenerateTicketRequestPojo.cceid=localStorage.getItem("Cceid");
			console.log(user.mobNo);
			$scope.GenerateTicketRequestPojo.user_mno=user.mobNo;
			$scope.GenerateTicketRequestPojo.ufathers_name=user.fatherName;
			$scope.GenerateTicketRequestPojo.category=user.category;
			$scope.GenerateTicketRequestPojo.sub_category="";
			$scope.GenerateTicketRequestPojo.query=user.query;
			$scope.GenerateTicketRequestPojo.assign_cce="";
			$scope.GenerateTicketRequestPojo.attachment="";
			$scope.GenerateTicketRequestPojo.severity_level="";
			$scope.GenerateTicketRequestPojo.debug="";
			$scope.GenerateTicketRequestPojo.lmode=user.lmode;
			$scope.GenerateTicketRequestPojo.department=user.department;
			$scope.GenerateTicketRequestPojo.service=user.service;
			$scope.GenerateTicketRequestPojo.qtype=user.qtype;
		    createTicketFactory.generateTicket($scope.GenerateTicketRequestPojo).success(function(data){
				 $scope.GenerateTicketResponsePojo=data;
				console.log(data);
				if($scope.GenerateTicketResponsePojo.rs=="S")
					{
					$scope.ticketID=$scope.GenerateTicketResponsePojo.pd.ticketID;
					$scope.reset();
					$scope.sendSms();
					$scope.msg=$scope.GenerateTicketResponsePojo.rd+". Your ticket ID is "+$scope.ticketID+".";
					$scope.commomSuccessPopUp($scope.msg);
					
				    
					}
				else{
					$scope.commomErrorPopUp($scope.GenerateTicketResponsePojo.rd);
				}
				
			
			
			}).error(function(error){
				hideLoader();
				$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
			})
			}
		    
		    /*------------create ticket method ends-------------*/
		    
		    
		    
		    /*------------Action taken on user method starts-------------*/
			$scope.ActionTakenOnUserRequestPojo={}; 
			$scope.ActionTakenOnUserResponsePojo={};
			$scope.actionTakenOnUser=function(){
						$scope.ActionTakenOnUserRequestPojo.usermno=$scope.GenerateTicketRequestPojo.user_mno;
						$scope.ActionTakenOnUserRequestPojo.ticketid=$scope.ticketID;
						$scope.ActionTakenOnUserRequestPojo.cceid=loginFactory.getCceid();
						$scope.ActionTakenOnUserRequestPojo.status="block";
						showLoader();
					
						userDetailsFactory.actionTakenOnUser($scope.ActionTakenOnUserRequestPojo).success(function(data){
							 $scope.ActionTakenOnUserResponsePojo=data;
							 hideLoader();
							 if($scope.ActionTakenOnUserResponsePojo.rs=="S"){
								 $rootScope.commomSuccessPopUp($scope.ActionTakenOnUserResponsePojo.rd);
								}
							 else{
								 $rootScope.commomErrorPopUp($scope.ActionTakenOnUserResponsePojo.rd);
							}
							console.log(data);
						
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
									hideLoader();
									$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
						})
			}

			$scope.FetchSubCategoriesRequestPojo = {};
			$scope.fetchSubCategoriesResponsePojo = {};
			$scope.fetchSubCategories = function(x) {
				showLoader();
				if(x=="3"){
					$scope.user.department="";
					$scope.user.service="";
					$scope.disFlag=false;

				}
				else{
					$scope.disFlag=true;
				}
				$scope.FetchSubCategoriesRequestPojo.catid = x;
				$scope.FetchSubCategoriesRequestPojo.lang = "en";
				$scope.fetchSubCategoriesResponsePojo.trkr = "";
				createTicketFactory
						.fetchSubCategories(
								$scope.FetchSubCategoriesRequestPojo)
						.success(
								function(data) {
									hideLoader();
									$scope.fetchSubCategoriesResponsePojo = data;
									if ($scope.fetchSubCategoriesResponsePojo.pd.length > 0) {
										$scope.categoryFlag = true;
									}
									console
											.log($scope.fetchSubCategoriesResponsePojo);

								}).error(function(error) {
									hideLoader();
									$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
						})
			}
			
			
			
			/*------------Action taken on user method starts-------------*/
		    
			
			
			/*------------Send SMS method starts-------------*/
		    $scope.SendSmsRequestPojo={};
			$scope.sendSms=function(obj){
				$scope.SendSmsRequestPojo.lang="en";
				$scope.SendSmsRequestPojo.mno=$scope.GenerateTicketRequestPojo.user_mno;
				$scope.SendSmsRequestPojo.msg="Dear User, Your ticket has been logged successfully. Your ticket ID is "+$scope.ticketID;
				$scope.SendSmsRequestPojo.msgtype="PM";
				$scope.SendSmsRequestPojo.appname="umang";
				sendSmsFactory.sendSms($scope.SendSmsRequestPojo).success(function(data){
					 $scope.SendSmsResponsePojo=data;
				}).error(function(error){
					
				})
			}
			/*------------Send SMS method ends-------------*/
			
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
						if($scope.fetchServicesResponsePojo.pd.length>0){
							$scope.deptFlag=true;
							}
						hideLoader();
						
					}
					
				}).error(function(error){
					hideLoader();
					$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
					
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
	 	        $scope.createTicketForm.$setPristine();
	 	        $scope.createTicketForm.$setUntouched();
	 	        angular.element(document.getElementsByTagName('md-input-container')).removeClass('md-input-focused md-input-invalid');
	 	        angular.element(document.getElementsByTagName('md-input-container')).focus(false); 
	 	         };
	 	         
	 	       
					
	});