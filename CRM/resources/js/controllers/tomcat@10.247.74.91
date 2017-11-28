	crm.controller('fetchPendingWrapupController',function($scope,$location,$mdDialog,$http,$rootScope,wrapUpFactory ,createTicketFactory,fetchServicesFactory ,fetchPendingWrapupFactory) {
		$rootScope.flagHideDrawer=true;	
		hideLoader();
		
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

				$scope.fetchPendingWrapupReqPojo={};
				$scope.fetchPendingWrapupResPojo={};
				$scope.fetchPendingWrapupReq=function(date){
					  var d = new Date(date);
			        	var date1=d.getDate()
			        	
			        	var month=d.getMonth()+1;
			        	if(month<=9){
			        		month=0+''+month;
			        	}
			        	if(date1<=9){
			        		date1=0+''+date1;
			        	}
			          	var year=d.getFullYear();
			          	$scope.finalStrt=year+'-'+month+'-'+date1;
					$scope.fetchPendingWrapupReqPojo.date=$scope.finalStrt;
					fetchPendingWrapupFactory.fetchPenWrapupReq($scope.fetchPendingWrapupReqPojo).success(function(data){
						hideLoader();
						console.log(data);
						$scope.fetchPendingWrapupResPojo=data;
						$scope.listOfFetchPenWrapups=$scope.fetchPendingWrapupResPojo.pd;
					}).error(function(error){
						hideLoader();
						$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
					})
				}
				
				var mobNumber;
			    $scope.wrapUpReqPopUp=function(x){
					mobNumber = x.msisdn;
					var encodeMno=mobNumber.substring(1, mobNumber.length-2);
					var a2=mobNumber.replace(encodeMno,"XXXXXXX");
					$scope.msisdn=a2;
					$scope.user.user_mno=$scope.msisdn;
					$scope.aadhaarStatus=x.adhaarStatus;
					$scope.state=x.state;
					$scope.emailAuth=x.emailStatus;
					$scope.referenceId=x.requestId;
					$scope.mode=x.channel;
					$mdDialog.show({
					      contentElement: '#createTicketPopUp',
					      parent: angular.element(document.body),
					      targetEvent: null,
					      clickOutsideToClose:false
					    });
			    }
				
				$scope.wrapUpRequestPojo={};
			    $scope.wrapUpResponsePojo={};
			    $scope.wrapUpReq=function(obj){
			    	    	$scope.wrapUpRequestPojo.lang="en";
			    			$scope.wrapUpRequestPojo.trkr="832382";
			    	    	$scope.wrapUpRequestPojo.user_mno=mobNumber;
			    	    	$scope.wrapUpRequestPojo.cceid=localStorage.getItem("Cceid")
			    			$scope.wrapUpRequestPojo.ufathers_name=obj.ufathers_name;
			    	    	$scope.wrapUpRequestPojo.category=obj.category;
			    			$scope.wrapUpRequestPojo.sub_category=obj.subCategory;
			    			$scope.wrapUpRequestPojo.query=obj.query;
			    			$scope.wrapUpRequestPojo.assign_cce="";
			    			$scope.wrapUpRequestPojo.severity_level="";
			    			$scope.wrapUpRequestPojo.attachment="";
			    			$scope.wrapUpRequestPojo.lmode=$scope.mode;
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
			    			$scope.wrapUpRequestPojo.astatus = $scope.aadhaarStatus;
			    			$scope.wrapUpRequestPojo.email = $scope.emailAuth;
			    			$scope.wrapUpRequestPojo.state = $scope.state;
			    			showLoader();
			    			wrapUpFactory.wrapUpReq($scope.wrapUpRequestPojo).success(function(data){
			    				hideLoader();
			    				$scope.reset();
			    				 $scope.wrapUpResponsePojo=data;
			    				 console.log($scope.wrapUpResponsePojo);
			    				if($scope.wrapUpResponsePojo.rs=="S"){
			    		        	$scope.user.user_mno='';
			    		 	        $scope.user.fatherName='';
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
		        	$scope.user.user_mno='';
		 	        $scope.user.fatherName='';
		 	        $scope.user.category='';
		 	        $scope.user.subCategory='';
		 	        $scope.user.severity_level='';
		 	        $scope.user.query='';
		 	        $scope.user.department='';
		 	        $scope.user.service='';
		 	        $scope.user.lmode='';
		 	        $scope.user.status='';
		 	        $scope.user.rmks='';
		 	        $scope.user.qtype='';
		 	        $scope.createTicketForm1.$setPristine();
		 	        $scope.createTicketForm1.$setUntouched();
		 	        angular.element(document.getElementsByTagName('md-input-container')).removeClass('md-input-focused md-input-invalid');
		 	        angular.element(document.getElementsByTagName('md-input-container')).focus(false); 
		 	         };
		 	         
		 	         
		 	         
			    
					$scope.cancel = function() {
						$mdDialog.cancel();
					};
	});	

