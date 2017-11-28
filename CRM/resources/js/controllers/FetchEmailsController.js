	crm.controller('FetchEmailsController',function($scope,$location,$http,$rootScope,viewCceDetailsFactory,$timeout,crmFactory, userDetailsFactory,$mdSidenav, $log,$mdDialog,fetchServicesFactory,createTicketFactory,crmFactory,$location,loginFactory,emaiHisFactory ,sendSmsFactory,fetchEmailsFactory) {
		angular.element(document).ready(function() {
			
			console.log('page loading completed');
		});
		$scope.isStatus=false;
		$rootScope.flagHideDrawer=true;	
		if(localStorage.getItem("flagTL")=="true" || localStorage.getItem("flagAdmin")=="true"){
			$scope.showAssignBtn=true;
		}
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
				
			  	$scope.toggleLeft = buildDelayedToggler('left');
			    $scope.toggleRight = buildToggler('right');
			    $scope.isOpenRight = function(){
			      return $mdSidenav('right').isOpen();
			    };

			  
			    function debounce(func, wait, context) {
			      var timer;

			      return function debounced() {
			        var context = $scope,
			            args = Array.prototype.slice.call(arguments);
			        $timeout.cancel(timer);
			        timer = $timeout(function() {
			          timer = undefined;
			          func.apply(context, args);
			        }, wait || 10);
			      };
			    }

			    
			    function buildDelayedToggler(navID) {
			      return debounce(function() {
			        // Component lookup should always be available since we are not using `ng-if`
			        $mdSidenav(navID)
			          .toggle()
			          .then(function () {
			            $log.debug("toggle " + navID + " is done");
			          });
			      }, 200);
			    }

			    function buildToggler(navID) {
			      return function() {
			        // Component lookup should always be available since we are not using `ng-if`
			        $mdSidenav(navID)
			          .toggle()
			          .then(function () {
			            $log.debug("toggle " + navID + " is done");
			          });
			      }
			    }
			    
			    
			    $scope.close1 = function () {
			        // Component lookup should always be available since we are not using `ng-if`
			        $mdSidenav('left').close()
			          .then(function () {
			            $log.debug("close LEFT is done");
			          });

			      };
			    
			    $scope.close2 = function () {
			        // Component lookup should always be available since we are not using `ng-if`
			        $mdSidenav('right').close()
			          .then(function () {
			            $log.debug("close RIGHT is done");
			          });
			      };
			      
		$scope.frwdToAgent1=function(ticketDtls){
					document.getElementById("frwdToAgenTId").value="forward";
					$scope.ticketDetails1=ticketDtls;
					$scope.toggleRight();
		}
		
	
		$scope.FetchEmailRequestPojo={}; 
		$scope.FetchEmailResponsePojo={};
		$scope.fetchEmails=function(obj){
			showLoader()
					$scope.FetchEmailRequestPojo.trkr="";
					$scope.FetchEmailRequestPojo.lang="";
					$scope.FetchEmailRequestPojo.cceid=localStorage.getItem("Cceid")
					$scope.FetchEmailRequestPojo.efrom="";
					$scope.FetchEmailRequestPojo.page="";
					$scope.FetchEmailRequestPojo.referenceId="";
					$scope.FetchEmailRequestPojo.subject="";
					$scope.FetchEmailRequestPojo.body="";
					fetchEmailsFactory.fetchEmails($scope.FetchEmailRequestPojo).success(function(data){
						 $scope.FetchEmailResponsePojo=data;
						 hideLoader();
						 $scope.viewCceDetails();
						 console.log("=====================")
						 console.log($scope.FetchEmailResponsePojo);
						 console.log("=====================")
					}).error(function(error){
						
					})
				
   
	 	}
		
		$scope.viewEmailRequestPojo={}; 
		$scope.viewEmail=function(obj1){
			console.log(obj1);
		
			$scope.viewEmailRequestPojo=obj1;	
			   if($scope.viewEmailRequestPojo.subject==null||typeof $scope.viewEmailRequestPojo.subject=="undefined"||$scope.viewEmailRequestPojo.subject.trim()==""){
                                                         $scope.viewEmailRequestPojo.subject="Customer Support";
                                                 }
		
		}
		
		$scope.viewEmail1=function(objj){
			console.log("===========");
			console.log(objj);
			console.log("===========");
			$scope.viewEmailHisRequestPojo=objj;	
		}
		
		$scope.viewEmail2=function(objjj){
			console.log("===========");
			console.log(objjj);
			console.log("===========");
			$scope.viewEmailHisSpamRequestPojo=objjj;	
		}
		
		//$scope.viewEmail();
		$scope.fetchEmails();
		$scope.viewEmailRequestPojo={};
		$scope.EmailResRequestPojo={}; 
		$scope.EmailResResponsePojo={};
		$scope.respondEmail=function(objj,wrVal,action){
			$scope.EmailResRequestPojo.trkr="";
					$scope.EmailResRequestPojo.lang="";
					$scope.EmailResRequestPojo.body=wrVal.response;
					$scope.EmailResRequestPojo.cceid=localStorage.getItem("Cceid")
					$scope.EmailResRequestPojo.referenceId=objj.referenceId;
					$scope.EmailResRequestPojo.subject=wrVal.subject;
					$scope.EmailResRequestPojo.type="";
					if(action=="forward"){
						$scope.EmailResRequestPojo.response="forward";
					}
					else{
						$scope.EmailResRequestPojo.response="spam";
					}
					console.log("=======================");
					console.log($scope.EmailResRequestPojo);
					showLoader();
					fetchEmailsFactory.respondEmail($scope.EmailResRequestPojo).success(function(data){
						 $scope.EmailResResponsePojo=data;
						 hideLoader();
						 if($scope.EmailResResponsePojo.rs=="S"){
							 $scope.fetchEmails();
						 $rootScope.commomSuccessPopUp($scope.EmailResResponsePojo.rd);
						 $scope.viewEmailRequestPojo.efrom=""; 
						 $scope.viewEmailRequestPojo.subject=""; 
						 $scope.viewEmailRequestPojo.body=""; 
						 $scope.viewEmailRequestPojo.referenceId=""; 
						 $scope.viewEmailRequestPojo.response="";
			 	           $scope.rplyForm.$setUntouched();
			 	           angular.element(document.getElementsByTagName('md-input-container')).removeClass('md-input-focused md-input-invalid');
			 	           angular.element(document.getElementsByTagName('md-input-container')).focus(false); 
					 }
					 else{
						$scope.commomErrorPopUp($scope.EmailResResponsePojo.rd);
					  }
                                           if($scope.viewEmailRequestPojo.subject==null){
							 $scope.viewEmailRequestPojo.subject="RE:";
						 }
					}).error(function(error){
						hideLoader();
						$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");	
					})
				
   
	 	}
		
		
		$scope.anseredMails=function(){
		$scope.viewEmailHisSpamRequestPojo={};
		$scope.FetchEmailHisRequestPojo={}; 
		$scope.FetchEmailHisResponsePojo={};
		$scope.fetchEmailHis=function(obj){
					$scope.FetchEmailHisRequestPojo.trkr="";
					$scope.FetchEmailHisRequestPojo.lang="";
					$scope.FetchEmailHisRequestPojo.cceid=localStorage.getItem("Cceid")
					$scope.FetchEmailHisRequestPojo.page="";
					$scope.FetchEmailHisRequestPojo.type="";
					showLoader();
					emaiHisFactory.emailHis($scope.FetchEmailHisRequestPojo).success(function(data){
						 $scope.FetchEmailHisResponsePojo=data;
						 console.log( $scope.FetchEmailHisResponsePojo);
						 hideLoader();
						 if($scope.FetchEmailHisResponsePojo.rs=="S"){
							 if($scope.FetchEmailHisResponsePojo.pd.emails.length<1){
							 $scope.commomErrorPopUp("No data found");
							 }
						 }
						 else{
							 $scope.commomErrorPopUp($scope.FetchEmailHisResponsePojo.rd);
						 }
					}).error(function(error){
						hideLoader();
						$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
					})  
				
 
	 	}
	 	$scope.fetchEmailHis();
		}
		
		$scope.spamMails=function(){
			$scope.viewEmailHisSpamRequestPojo={};
			$scope.FetchEmailHisRequestPojo={}; 
			$scope.FetchEmailHisSpamResponsePojo={};
			$scope.fetchEmailHis=function(obj){
						$scope.viewEmailHisSpamRequestPojo.trkr="";
						$scope.viewEmailHisSpamRequestPojo.lang="";
						$scope.viewEmailHisSpamRequestPojo.cceid=localStorage.getItem("Cceid");
						$scope.viewEmailHisSpamRequestPojo.page="";
						$scope.viewEmailHisSpamRequestPojo.type="spam";
						showLoader();
						emaiHisFactory.emailHis($scope.viewEmailHisSpamRequestPojo).success(function(data){
							 $scope.FetchEmailHisSpamResponsePojo=data;
							 console.log( $scope.FetchEmailHisSpamResponsePojo);
							 hideLoader();
							 if($scope.FetchEmailHisSpamResponsePojo.rs=="S"){
								 if($scope.FetchEmailHisSpamResponsePojo.pd.emails.length<1){
								 $scope.commomErrorPopUp("No data found");
								 }
							 }
							 else{
								 $scope.commomErrorPopUp($scope.FetchEmailHisSpamResponsePojo.rd);
							 }
						}).error(function(error){
							hideLoader();
							$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
						})
					
   
		 	}
		 	$scope.fetchEmailHis();
			}
		
		
		
		$scope.updateTicketRequestPojo={};
		$scope.updateTicketResponsePojo={};
		$scope.updateTicketBigArr=[];
		$scope.updateTicketToForward=function(allocateAgnt){
			var agentDtls = allocateAgnt.split(",");
			$scope.updateTicketRequestPojo.lang="en";
					$scope.updateTicketRequestPojo.trkr="";
					$scope.updateTicketRequestPojo.ticketId=$scope.ticketDetails1.referenceId;
					$scope.updateTicketRequestPojo.remarks="";
					$scope.updateTicketRequestPojo.cceid=agentDtls[0].trim();
					$scope.updateTicketRequestPojo.departmentid="";
					$scope.updateTicketRequestPojo.serviceid="";
					$scope.updateTicketRequestPojo.status="forward";
					
					try{
						$scope.updateTicketRequestPojo.user_mno="";
						$scope.updateTicketRequestPojo.ufathers_name="";
						$scope.updateTicketRequestPojo.category="";
						$scope.updateTicketRequestPojo.sub_category="";
						$scope.updateTicketRequestPojo.query="";
						$scope.updateTicketRequestPojo.assign_cce="";
						$scope.updateTicketRequestPojo.severity_level="";
						$scope.updateTicketRequestPojo.debug="";
						$scope.updateTicketRequestPojo.attachment="";
						$scope.updateTicketRequestPojo.lmode="";
						$scope.updateTicketRequestPojo.department="";
						$scope.updateTicketRequestPojo.service="";
					}
					catch(error)
					{
						console.log(error);
						console.log(error.lineNumber);
					}
					$scope.updateTicketBigArr.push(angular.copy($scope.updateTicketRequestPojo));
					
					$scope.updateTicktStatus=[];
					console.log("---------------------updateTicketBigArr------------------------------------");
					console.log($scope.updateTicketBigArr);
					console.log("---------------------updateTicketBigArr------------------------------------");
					$scope.arr=[];
					crmFactory.updateTicket($scope.updateTicketBigArr).success(function(data){
						$scope.updateTicketBigArr=[];
						 $scope.updateTicketResponsePojo=data;
						 console.log($scope.updateTicketResponsePojo);
						 $mdDialog.cancel();
						if($scope.updateTicketResponsePojo.pd[0].rs=="S")
							{
							$scope.commomSuccessPopUp($scope.updateTicketResponsePojo.pd[0].rd);
							}
						else
							{
							$scope.commomErrorPopUp($scope.updateTicketResponsePojo.pd[0].rd);
							}
					}).error(function(error){
						hideLoader();
						$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");	
					})
				
			
		}
		
		
		$scope.FetchCceDetailsRequestPojo={};	
		$scope.FetchCceDetailsResponsePojo={};	
		   $scope.viewCceDetails=function(){
		    	$scope.FetchCceDetailsRequestPojo.lang="en";
				$scope.FetchCceDetailsRequestPojo.cceid="";
				showLoader();
				viewCceDetailsFactory.viewCceDetails($scope.FetchCceDetailsRequestPojo).success(function(data){
					hideLoader();
					 $scope.FetchCceDetailsResponsePojo=data;
					 console.log($scope.FetchCceDetailsResponsePojo);
					if($scope.FetchCceDetailsResponsePojo.rs=="S"){
						$scope.fetchCceDetails=$scope.FetchCceDetailsResponsePojo.pd.cceDetails;
						console.log("---------fetch cce details---------");
						console.log($scope.fetchCceDetails);
						console.log("---------fetch cce details---------");
						 $scope.Paging=$scope.fetchCceDetails;
					}
					else{
						$scope.commomErrorPopUp($scope.FetchCceDetailsResponsePojo.rd);
					}
					
				}).error(function(error){
					hideLoader();
					$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
				})
			 }
		   
/*		    $scope.wrapUpReqPopUp=function(){
				$scope.user.mobNo=$scope.usrDtls.mno;
				$scope.user.fatherName=$scope.usrDtls.name;
				$scope.referenceId=$scope.usrDtls.referenceId;
				$mdDialog.show({
				      contentElement: '#createTicketPopUp',
				      parent: angular.element(document.body),
				      targetEvent: null,
				      clickOutsideToClose:false
				    });
		    }*/
		   $scope.WrapVals={};
		   $scope.emailWrapUpPopUp=function(wrpVals,act){
			   $scope.WrapVals=wrpVals;
			   $mdDialog.show({
				      contentElement: '#createTicketPopUp',
				      parent: angular.element(document.body),
				      targetEvent: null,
				      clickOutsideToClose:true
				    });
		   }
		   $scope.emailWrapUpRequest={};  
		   $scope.emailWrapUpResponse={};
		   $scope.emailWrapUpRequest1=function(obj2){
			$scope.emailWrapUpRequest.lang="en";
			$scope.emailWrapUpRequest.trkr="";
			$scope.emailWrapUpRequest.cceid=localStorage.getItem("Cceid");
			$scope.emailWrapUpRequest.email=$scope.WrapVals.efrom;
			$scope.emailWrapUpRequest.category=obj2.category;
			$scope.emailWrapUpRequest.sub_category="";
			$scope.emailWrapUpRequest.query=obj2.query;
			$scope.emailWrapUpRequest.assign_cce="";
			$scope.emailWrapUpRequest.severity_level="";
			$scope.emailWrapUpRequest.attachment="";
			$scope.emailWrapUpRequest.lmode="email";
			if (obj2.rmks != undefined && obj2.rmks != "" && obj2.rmks != null) {
				$scope.emailWrapUpRequest.remarks = obj2.rmks;
			} else {
				$scope.emailWrapUpRequest.remarks = "";
			}
			$scope.emailWrapUpRequest.department=obj2.department;
			$scope.emailWrapUpRequest.service=obj2.service;
			if($scope.emailWrapUpRequest.department!=null  && $scope.emailWrapUpRequest.department!="" && $scope.emailWrapUpRequest.department!= undefined){
				$scope.emailWrapUpRequest.status="forward_to_department";
			}
			else{
			$scope.emailWrapUpRequest.status=obj2.status;
			}
			$scope.emailWrapUpRequest.referenceId=$scope.WrapVals.referenceId;
			$scope.emailWrapUpRequest.qtype=obj2.qtype;
			$scope.emailWrapUpRequest.astatus = "";
			$scope.emailWrapUpRequest.email ="";
			$scope.emailWrapUpRequest.state = "";
			console.log("=====");
			console.log($scope.emailWrapUpRequest);
			console.log("=====");
			showLoader();
			emaiHisFactory.emailWrapUpReq($scope.emailWrapUpRequest).success(function(data){
				hideLoader();
				 $scope.emailWrapUpResponse=data;
				 $scope.respondEmail($scope.emailWrapUpRequest,$scope.WrapVals,"forward");
				 console.log($scope.emailWrapUpResponse);
				if($scope.emailWrapUpResponse.rs=="S"){
					$scope.reset();
					$scope.fetchCceDetails=$scope.emailWrapUpResponse.pd.cceDetails;
					console.log("---------fetch cce details---------");
					console.log($scope.fetchCceDetails);
					console.log("---------fetch cce details---------");
					 $scope.Paging=$scope.fetchCceDetails;
				}
				else{
					$scope.commomErrorPopUp($scope.emailWrapUpResponse.rd);
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
		    	$scope.isStatus=true;
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
			    	$scope.isStatus=false;
		 	        $scope.user.category='';
		 	        $scope.user.query='';
		 	        $scope.user.department='';
		 	        $scope.user.service='';
		 	        $scope.user.lmode='';
		 	        $scope.user.qtype='';
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
