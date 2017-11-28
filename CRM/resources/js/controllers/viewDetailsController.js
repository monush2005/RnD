 	crm.controller('viewDetailsController',function($scope,$location,$http,crmFactory,$rootScope,$timeout, $mdSidenav, $window,$log,$mdDialog,fetchServicesFactory,viewDetailsFactory,viewCceDetailsFactory,createTicketFactory,crmFactory,ticketHistoryFactory,$location,logoutFactory,loginFactory,sendSmsFactory,addAgentFactory) {
		angular.element(document).ready(function () { 
		console.log('page loading completed'); });
		$rootScope.flagHideDrawer=true;
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
				
		
		
		$scope.Paging={};

		hideLoader();
		
	
		$scope.ticketParams={};
		$scope.arr=[];
		$scope.user={};
		$scope.updateTicketResponseList=[];
		$scope.updateTicktStatus=[];
		$scope.updateTicketBigArr=[];
		 
		$scope.ticketHistoryRequestPojo={};
		$scope.ticketHistoryResponsePojo={};
		$scope.ticketHistory=function(obj){
			showLoader();
					$scope.ticketHistoryRequestPojo.ticketId="";
					$scope.ticketHistoryRequestPojo.cceid="";
					$scope.ticketHistoryRequestPojo.lang="en";
					$scope.ticketHistoryRequestPojo.mno=obj.msisdn;
					ticketHistoryFactory.ticketHistory($scope.ticketHistoryRequestPojo).success(function(data){
						hideLoader();
						 $scope.ticketHistoryResponsePojo=data;
						 console.log($scope.ticketHistoryResponsePojo);
						 if($scope.ticketHistoryResponsePojo.rs=="S"){
							 $window.scrollTo(0, 0);
							  
							 if($scope.ticketHistoryResponsePojo.pd.length>0){
								 $mdDialog.show({
								      contentElement: '#ticketHisPopUp',
								      parent: angular.element(document.body),
								      targetEvent: null,
								      clickOutsideToClose:true
								    });
							
								 }
							 else{
								 $rootScope.commomErrorPopUp("No History found");
							 }
						}
						 else{
							 $rootScope.commomErrorPopUp($scope.ticketHistoryResponsePojo.rd);
							 
						 }
					
					}).error(function(error){
						hideLoader();
						$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
					})
				
		}
		if($scope.arr.length=="0"){
			$scope.flag10=true;
		}
		
		
		
		$scope.userType=localStorage.getItem("userType");
		$scope.agentDetails=[{"id":"2","name":"mark"},{"id":"3","name":"mathew"},{"id":"4","name":"tom"},{"id":"5","name":"michael"}];		
		$scope.ticketStatus1=[{"id":"close","status":"Close"}];		

		
		        
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
			 

		    $scope.ViewTicketRequestPojo={};
			    $scope.viewTicketResponsePojo={};
			    $scope.ticketDetails={};
			    $scope.viewTicket=function(){
					    	$scope.ViewTicketRequestPojo.lang="en";
							$scope.ViewTicketRequestPojo.trkr="";
							$scope.ViewTicketRequestPojo.msisdn="";
							$scope.ViewTicketRequestPojo.cceid=localStorage.getItem("Cceid");
							$scope.ViewTicketRequestPojo.debug="";
							showLoader();
							console.log("------view tickets------");
							console.log($scope.ViewTicketRequestPojo);
							console.log("------view tickets------");
							crmFactory.viewtickets($scope.ViewTicketRequestPojo).success(function(data){
								window.scrollTo(0, 0);
								 $scope.viewTicketResponsePojo=data;
								 crmFactory.setViewTicketData($scope.viewTicketResponsePojo);
								if($scope.viewTicketResponsePojo.rs=="S"){
									
									 $scope.ticketDetails=$scope.viewTicketResponsePojo.pd;
								
									 $scope.Paging=$scope.ticketDetails;
									 $rootScope.fetchCategories();
									 hideLoader();
									}
								 else{
									 if($scope.ticketDetails.length>0){
										 $rootScope.commomErrorPopUp($scope.viewTicketResponsePojo.rd);
										 }
										 else{
											$scope.emptyMsg="No Data Found";
										 }
								 }
								 hideLoader();
								console.log(data);
							
							}).error(function(error){
								hideLoader();
								$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
							})
			    		

				}
			    $scope.viewTicket(); 
			    var agentDtls =[];
			    $scope.AllocateAgentRequestPojo={};
			    $scope.AllocateAgentResponsePojo={};
			    $scope.bigArr=[];
			    $scope.allocateAgentResponse=[];
			    $scope.allocateAgent1=function(agentId){
			    	var agentDtls = agentId.split(",");
			    	$scope.RequestDetails=$scope.ticketParams;
			    	console.log("*************");
			    	console.log($scope.arr.length);
			    	console.log("**************");
			    	console.log("-----------------updateTicketToSpam--------------------");
					console.log($scope.arr);
					console.log("-----------------updateTicketToSpam--------------------");
					for(var i=0;i<$scope.arr.length;i++){
					$scope.updateTicketRequestPojo.lang="en";
					$scope.updateTicketRequestPojo.trkr="";
					$scope.updateTicketRequestPojo.cceid=agentDtls[0].trim();
					$scope.updateTicketRequestPojo.ticketId=$scope.updateTicktStatus[i].ticketID;
					if($scope.updateTicktStatus[i].remarks!=undefined || $scope.updateTicktStatus[i].remarks!=null || $scope.updateTicktStatus[i].remarks!=""){
					$scope.updateTicketRequestPojo.remarks=$scope.updateTicktStatus[i].remarks;
					}
					else
						{
						$scope.updateTicketRequestPojo.remarks="";
						}
					$scope.updateTicketRequestPojo.status="assign";
					$scope.updateTicketBigArr.push(angular.copy($scope.updateTicketRequestPojo));
					}
					$scope.updateTicktStatus=[];
					console.log("---------------------updateTicketBigArr------------------------------------");
					console.log($scope.updateTicketBigArr);
					console.log("---------------------updateTicketBigArr------------------------------------");
					$scope.arr=[];
					crmFactory.updateTicket($scope.updateTicketBigArr).success(function(data){
						$scope.viewTicket();
						hideLoader();
						if($scope.arr.length=="0"){
							$scope.flag10=true;
						}
						$scope.updateTicketBigArr=[];
						 $scope.updateTicketResponsePojo=data;
						 console.log($scope.updateTicketResponsePojo);
						}).error(function(error){
						console.log("---in error function---");
					})
				
			    
			    }
			  
			    
	
			$scope.addRemarksPopUp=function(obj){
					crmFactory.setTicketStatus(obj);
					$mdDialog.show({
					      contentElement: '#addRmks',
					      parent: angular.element(document.body),
					      targetEvent: null,
					      clickOutsideToClose:true
					    });
				}
				
				
				$scope.updateTicketRequestPojo={};
				$scope.updateTicketResponsePojo={};
				$scope.updateTicketStatus1=function(obj){
					console.log("-----------------updateTicketToSpam--------------------");
					console.log($scope.arr);
					console.log("-----------------updateTicketToSpam--------------------");
					for(var i=0;i<$scope.arr.length;i++){
					$scope.updateTicketRequestPojo.lang="en";
					$scope.updateTicketRequestPojo.trkr="";
					$scope.updateTicketRequestPojo.ticketId=$scope.updateTicktStatus[i].ticketID;
					$scope.updateTicketRequestPojo.remarks=obj;
					$scope.updateTicketRequestPojo.cceid="";
					if(crmFactory.getTicketStatus()=="spam"){
					$scope.updateTicketRequestPojo.status="spam";
					}
					else{
					$scope.updateTicketRequestPojo.status="close";
					}
					$scope.updateTicketBigArr.push(angular.copy($scope.updateTicketRequestPojo));
					}
					$scope.updateTicktStatus=[];
					console.log("---------------------updateTicketBigArr------------------------------------");
					console.log($scope.updateTicketBigArr);
					console.log("---------------------updateTicketBigArr------------------------------------");
					$scope.arr=[];
					crmFactory.updateTicket($scope.updateTicketBigArr).success(function(data){
						hideLoader();
						$scope.viewTicket();
						$scope.close();
						$scope.updateTicketBigArr=[];
						 $scope.updateTicketResponsePojo=data;
						 console.log($scope.updateTicketResponsePojo);
						/*for(var j=0;j<$scope.updateTvicketResponsePojo.pd.length;j++){
								$scope.updateTicketResponseList=$scope.updateTicketResponsePojo.pd[j].rd;
								if($scope.updateTicketResponsePojo.pd[j].rs=="S")
									{
									
									}
								else{
							 $mdDialog.show({
							      contentElement: '#myDialog15',
							      parent: angular.element(document.body),
							      targetEvent: null,
							      clickOutsideToClose:true
							    });
								}
							 }*/
						 
					
					}).error(function(error){
						hideLoader();
						$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
					})
				}

				
				
				$scope.updateTicketToAssign=function(obj){
					console.log("-----------------updateTicketToSpam--------------------");
					console.log($scope.arr);
					console.log("-----------------updateTicketToSpam--------------------");
					for(var i=0;i<$scope.arr.length;i++){
					$scope.updateTicketRequestPojo.lang="en";
					$scope.updateTicketRequestPojo.trkr="";
					$scope.updateTicketRequestPojo.cceid="";
					$scope.updateTicketRequestPojo.ticketId=$scope.updateTicktStatus[i].ticketID;
					if($scope.updateTicktStatus[i].remarks!=undefined || $scope.updateTicktStatus[i].remarks!=null || $scope.updateTicktStatus[i].remarks!=""){
					$scope.updateTicketRequestPojo.remarks=$scope.updateTicktStatus[i].remarks;
					}
					else
						{
						$scope.updateTicketRequestPojo.remarks="";
						}
					$scope.updateTicketRequestPojo.status="assign";
					$scope.updateTicketBigArr.push(angular.copy($scope.updateTicketRequestPojo));
					}
					$scope.updateTicktStatus=[];
					console.log("---------------------updateTicketBigArr------------------------------------");
					console.log($scope.updateTicketBigArr);
					console.log("---------------------updateTicketBigArr------------------------------------");
					$scope.arr=[];
					crmFactory.updateTicket($scope.updateTicketBigArr).success(function(data){
						$scope.viewTicket();
						hideLoader();
						$scope.updateTicketBigArr=[];
						if($scope.arr.length=="0"){
							$scope.flag10=true;
						}
						 $scope.updateTicketResponsePojo=data;
						 console.log($scope.updateTicketResponsePojo);
						for(var j=0;j<$scope.updateTicketResponsePojo.pd.length;j++){
								$scope.updateTicketResponseList=$scope.updateTicketResponsePojo.pd[j].rd;
								if($scope.updateTicketResponsePojo.pd[j].rs=="S")
									{
									
									}
								else{
							 $mdDialog.show({
							      contentElement: '#myDialog15',
							      parent: angular.element(document.body),
							      targetEvent: null,
							      clickOutsideToClose:true
							    });
								}
							 }
						 
					
					}).error(function(error){
						hideLoader();
						$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
					})
				}
				
				$scope.ticketDetailsIndex="";
				$scope.ticketParams={};
				$scope.arrIndex=[];
				$scope.updateTicketStatus=function(x,index,obj){
				$scope.ticketParams=x;
				console.log('selected'+x);
				$scope.ticketDetailsIndex=index;
				if(obj==1){
				$scope.arrIndex.push($scope.ticketDetailsIndex);
				$scope.updateTicktStatus.push($scope.ticketParams)
				console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
				console.log($scope.arr);
				console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
				}
				else{
				$scope.arrIndex.splice($scope.arrIndex.indexOf(index),1);
				$scope.updateTicktStatus.splice($scope.arr.indexOf(x),1);
				}
				console.log($scope.arrIndex);
				console.log($scope.updateTicktStatus);
				}
				
				
				
				
				$scope.ticketDetailsIndex="";
				$scope.ticketParams={};
				$scope.arrIndex=[];
				$scope.assignAgent=function(x,index,obj){
				$scope.ticketParams=x;
				console.log('selected'+x);
				$scope.ticketDetailsIndex=index;
				if(obj==1){
				$scope.arrIndex.push($scope.ticketDetailsIndex);
				$scope.arr.push($scope.ticketParams)
				console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
				console.log($scope.arr);
				$scope.flag10=false;
				console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
				}
				else{
				$scope.arrIndex.splice($scope.arrIndex.indexOf(index),1);
				$scope.arr.splice($scope.arr.indexOf(x),1);
				$scope.flag10=true;
				}
				console.log($scope.arrIndex);
				console.log($scope.arr);
				}
				
				$scope.showMobNo=function(){ 
				 	       $mdDialog.show({
							      contentElement: '#myDialog1',
							      parent: angular.element(document.body),
							      targetEvent: null,
							      clickOutsideToClose:true
							    });
				 	        }
				 	        
						$scope.userObj3="";
						var mobNumber1;
				 	      $scope.frwdToDeptpopUp=function(y){
				 	    	 console.log(y.msisdn);
				 	    	$scope.userObj3=y.msisdn;
				 	    	$scope.userObj2=y;
			 				mobNumber1 = $scope.userObj2.msisdn;
			 				var encodeMno1=mobNumber1.substring(1, mobNumber1.length-2);
			 				var a1=mobNumber1.replace(encodeMno1,"XXXXXXX");
			 				$scope.userObj2.msisdn=a1;
				 	    	
								 $scope.ticketID=y.ticketID;
								 $scope.deptName1=y.department_name;
								 $scope.dpId=y.departmentid;
								  $mdDialog.show({
									      contentElement: '#frwdToDeptId',
									      parent: angular.element(document.body),
									      targetEvent: null,
									      clickOutsideToClose: true
									    });
								   
					}
				 	      

				 	       
							$scope.updateTicketRequestPojo={};
							$scope.updateTicketResponsePojo={};
							$scope.updateTicketToForward=function(){
								showLoader();
										$scope.updateTicketRequestPojo.lang="en";
										$scope.updateTicketRequestPojo.trkr="";
										$scope.updateTicketRequestPojo.ticketId=$scope.ticketID;
										$scope.updateTicketRequestPojo.remarks=$scope.frwdToDeptRmks;
										$scope.updateTicketRequestPojo.cceid=localStorage.getItem("Cceid");
										$scope.updateTicketRequestPojo.departmentid=$scope.dpId;
										$scope.updateTicketRequestPojo.serviceid="";
										$scope.updateTicketRequestPojo.status="forward_to_deparment";
										
										try{
											$scope.updateTicketRequestPojo.user_mno=mobNumber1;
											$scope.updateTicketRequestPojo.ufathers_name=$scope.userObj2.father_name;
											$scope.updateTicketRequestPojo.category=$scope.userObj2.category_name;
											$scope.updateTicketRequestPojo.sub_category=$scope.userObj2.subcategory_name;
											$scope.updateTicketRequestPojo.query=$scope.userObj2.query;
											$scope.updateTicketRequestPojo.assign_cce="";
											$scope.updateTicketRequestPojo.severity_level="";
											$scope.updateTicketRequestPojo.debug="";
											$scope.updateTicketRequestPojo.attachment="";
											$scope.updateTicketRequestPojo.lmode=$scope.userObj2.lmode;
											$scope.updateTicketRequestPojo.department=$scope.userObj2.department_name;
											$scope.updateTicketRequestPojo.service=$scope.userObj2.service;
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
										console.log("Ticketdata::"+JSON.stringify($scope.updateTicketBigArr));
										crmFactory.updateTicket($scope.updateTicketBigArr).success(function(data){
											$scope.viewTicket();
											hideLoader();
											$scope.updateTicketBigArr=[];
											 $scope.updateTicketResponsePojo=data;
											 console.log($scope.updateTicketResponsePojo);
											 if($scope.updateTicketResponsePojo.pd[0].rs=="S"){
													$scope.commomSuccessPopUp($scope.updateTicketResponsePojo.pd[0].rd);
												}	
												else{
													$scope.commomErrorPopUp($scope.updateTicketResponsePojo.pd[0].rd);
												}
											 
										
										}).error(function(error){
											hideLoader();
											$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");	
										})
									
							}
						
		
							$scope.userObj5="";
							$scope.userObj6={};
							var mobNumber2;
					 	      $scope.frwdToTechops=function(c){
					 	    	 console.log(c.msisdn);
					 	    	$scope.userObj5=c.msisdn;
					 	    	$scope.userObj6=c;
				 				mobNumber2 = $scope.userObj6.msisdn;
				 				var encodeMno1=mobNumber2.substring(1, mobNumber2.length-2);
				 				var a1=mobNumber2.replace(encodeMno1,"XXXXXXX");
				 				$scope.userObj6.msisdn=a1;
				 				$scope.rmkssss="";
									 $scope.ticketID=c.ticketID;
									 $scope.deptName1=c.department_name;
									 $scope.dpId=c.departmentid;
									  $mdDialog.show({
										      contentElement: '#frwdToTechOps',
										      parent: angular.element(document.body),
										      targetEvent: null,
										      clickOutsideToClose: true
										    });
									   
						}	 	      
				 	      
					 	      
							$scope.updateTicketRequestPojo={};
							$scope.updateTicketResponsePojo={};
							$scope.updateTicketToTechOps=function(){
								showLoader();
								$scope.updateTicketRequestPojo.lang="en";
										$scope.updateTicketRequestPojo.trkr="";
										$scope.updateTicketRequestPojo.ticketId=$scope.ticketID;
										$scope.updateTicketRequestPojo.remarks=$scope.rmkssss;
										$scope.updateTicketRequestPojo.cceid=localStorage.getItem("Cceid" )
										$scope.updateTicketRequestPojo.departmentid=$scope.dpId;
										$scope.updateTicketRequestPojo.serviceid="";
										$scope.updateTicketRequestPojo.status="forward_to_techops";
										
										try{
											$scope.updateTicketRequestPojo.user_mno=mobNumber2;
											$scope.updateTicketRequestPojo.ufathers_name=$scope.userObj6.father_name;
											$scope.updateTicketRequestPojo.category=$scope.userObj6.category_name;
											$scope.updateTicketRequestPojo.sub_category=$scope.userObj6.subcategory_name;
											$scope.updateTicketRequestPojo.query=$scope.userObj6.query;
											$scope.updateTicketRequestPojo.assign_cce="";
											$scope.updateTicketRequestPojo.severity_level="";
											$scope.updateTicketRequestPojo.debug="";
											$scope.updateTicketRequestPojo.attachment="";
											$scope.updateTicketRequestPojo.lmode=$scope.userObj6.lmode;
											$scope.updateTicketRequestPojo.department=$scope.userObj6.department_name;
											$scope.updateTicketRequestPojo.service=$scope.userObj6.service;
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
											$scope.viewTicket();
											hideLoader();
											$scope.updateTicketBigArr=[];
											 $scope.updateTicketResponsePojo=data;
											 console.log($scope.updateTicketResponsePojo);
											 if($scope.updateTicketResponsePojo.pd[0].rs=="S"){
													$scope.commomSuccessPopUp($scope.updateTicketResponsePojo.pd[0].rd);
												}	
												else{
													$scope.commomErrorPopUp($scope.updateTicketResponsePojo.pd[0].rd);
												}
											
										}).error(function(error){
											hideLoader();
											$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
										})
							}
							$scope.userObj1="";
							$scope.ResponseDialog=function(obj){
								console.log(obj.msisdn);
								$scope.userObj1=obj.msisdn;
								$scope.userObj=obj;
								mobNumber = $scope.userObj.msisdn;
								var encodeMno=mobNumber.substring(1, mobNumber.length-2);
								var a=mobNumber.replace(encodeMno,"XXXXXXX");
								$scope.userObj.msisdn=a;
								$scope.selectDeptService($scope.userObj.departmentid);
								$mdDialog.show({
								      contentElement: '#ResponseDialog',
								      parent: angular.element(document.body),
								      targetEvent: null,
								      clickOutsideToClose:true
								    });
							}					
							
							
							$scope.updateTicketResponse=function(obj){
										$scope.updateTicketRequestPojo.lang="en";
										$scope.updateTicketRequestPojo.trkr="";
										$scope.updateTicketRequestPojo.ticketId=$scope.userObj.ticketID;
										$scope.updateTicketRequestPojo.remarks=obj.response;
										$scope.updateTicketRequestPojo.cceid=localStorage.getItem("Cceid")
										$scope.updateTicketRequestPojo.user_mno=$scope.userObj1;
										$scope.updateTicketRequestPojo.ufathers_name=$scope.userObj.father_name;
										$scope.updateTicketRequestPojo.category=$scope.userObj.category_name;
										$scope.updateTicketRequestPojo.sub_category=$scope.userObj.subcategory_name;
										$scope.updateTicketRequestPojo.query=$scope.userObj.query;
										$scope.updateTicketRequestPojo.assign_cce="";
										$scope.updateTicketRequestPojo.severity_level="";
										$scope.updateTicketRequestPojo.debug="";
										$scope.updateTicketRequestPojo.attachment="";
										$scope.updateTicketRequestPojo.lmode=$scope.userObj.lmode;
										$scope.updateTicketRequestPojo.department=$scope.userObj.department_name;
										$scope.updateTicketRequestPojo.service=$scope.userObj.service;
										if(obj.ticketSts=="close"){
											$scope.updateTicketRequestPojo.status="close";
										}
										else if(obj.ticketSts=="expire"){
											$scope.updateTicketRequestPojo.status="expire";
										}
										$scope.updateTicketBigArr.push(angular.copy($scope.updateTicketRequestPojo));
										
										$scope.updateTicktStatus=[];
										console.log("---------------------updateTicketBigArr------------------------------------");
										console.log($scope.updateTicketBigArr);
										console.log("---------------------updateTicketBigArr------------------------------------");
										$scope.arr=[];
										crmFactory.updateTicket($scope.updateTicketBigArr).success(function(data){
											$scope.viewTicket();
											$mdDialog.cancel();
											$scope.updateTicketBigArr=[];
											 $scope.updateTicketResponsePojo=data;
											 console.log($scope.updateTicketResponsePojo);
												if($scope.updateTicketResponsePojo.pd[0].rs=="S"){
													$scope.commomSuccessPopUp($scope.updateTicketResponsePojo.pd[0].rd);
												}	
												else{
													$scope.commomErrorPopUp($scope.updateTicketResponsePojo.pd[0].rd);
												}
										
										}).error(function(error){
											hideLoader();
											$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
										})
									
							}
				 	       
				 	        
				 	        
				 	        

		
		

									         
		$scope.reset1 = function(obj) { 
		$scope.ticket.mobNumber='';
		$scope.showTicket.$setPristine();
		$scope.showTicket.$setUntouched();
		angular.element(document.getElementsByTagName('md-input-container')).removeClass('md-input-focused md-input-invalid');
		angular.element(document.getElementsByTagName('md-input-container')).focus(false); 
		};
		

			
			$scope.forwardtoAgentRequestPojo={};
			$scope.forwardtoAgentResponsePojo={};
		    $scope.forwardToAgent=function(obj){
		    	var agentDtls = obj.split(",");
		    	if(document.getElementById("frwdToAgenTId").value=="forward"){
		    	$scope.forwardtoAgentRequestPojo.cceid=localStorage.getItem("Cceid");
		    	$scope.forwardtoAgentRequestPojo.ticketid=$scope.ticketDetails1.ticketID;
		    	$scope.forwardtoAgentRequestPojo.assigncceid=$scope.ticketDetails1.assign_cce;
		    	$scope.forwardtoAgentRequestPojo.forwardcceid=agentDtls[0].trim();
		    	$scope.forwardtoAgentRequestPojo.forwardempid="";
				$scope.forwardtoAgentRequestPojo.lang="";
				$scope.forwardtoAgentRequestPojo.ccemno="";
				showLoader();
				crmFactory.forwardToAgent($scope.forwardtoAgentRequestPojo).success(function(data){
					hideLoader();
					 $scope.forwardtoAgentResponsePojo=data;
					 console.log($scope.forwardtoAgentResponsePojo);
					if($scope.forwardtoAgentResponsePojo.rs=="S"){
						$rootScope.commomSuccessPopUp($scope.forwardtoAgentResponsePojo.rd);
					}
					else{
						$rootScope.commomErrorPopUp($scope.forwardtoAgentResponsePojo.rd);
					}
					
				}).error(function(error){
					hideLoader();
					$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
				})
		    }
			 }
		    
		    $scope.close=function(){
				$rootScope.cancel();
				}  
			
			
			
			
/*			$scope.FetchSubCategoriesRequestPojo={};
			$scope.fetchSubCategoriesResponsePojo={};
			$scope.fetchSubCategories=function(z){
				showLoader();
				$scope.FetchSubCategoriesRequestPojo.catid=z;
				$scope.FetchSubCategoriesRequestPojo.lang="en";
				$scope.fetchSubCategoriesResponsePojo.trkr="";
				createTicketFactory.fetchSubCategories($scope.FetchSubCategoriesRequestPojo).success(function(data){
					hideLoader();
					 $scope.fetchSubCategoriesResponsePojo=data;
					 console.log($scope.fetchSubCategoriesResponsePojo);
				
				}).error(function(error){
					
				})
			}*/
		    
			
		    $scope.fetchServicesRequestPojo={};
		    $scope.fetchServicesResponsePojo={};
		    $scope.fetchServices=function(){
		    	$scope.fetchServicesRequestPojo.lang="en";
				$scope.fetchServicesRequestPojo.srid="";
				showLoader();
				fetchServicesFactory.fetchServices($scope.fetchServicesRequestPojo).success(function(data){
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
		    
			
		    
		    $scope.SendSmsRequestPojo={};
			$scope.sendSms=function(deptName,deptContactNo,deptDes,deptWebsite,mobNo){
				$scope.SendSmsRequestPojo.lang="en";
				$scope.SendSmsRequestPojo.mno=mobNo;
				$scope.SendSmsRequestPojo.msg="Dear User, Please contact " +deptName+ " department for any inconvenience in service. Department's contact No. and website is " + deptContactNo+ ", "+deptWebsite;
				$scope.SendSmsRequestPojo.msgtype="PM";
				$scope.SendSmsRequestPojo.appname="umang";
				sendSmsFactory.sendSms($scope.SendSmsRequestPojo).success(function(data){
					hideLoader();
					 $scope.SendSmsResponsePojo=data;
					 if($scope.SendSmsResponsePojo.rs=="S"){
						 $scope.successMsg="Contact card has been shared.";
						 $scope.commomSuccessPopUp($scope.successMsg);
					 }
					 else{
						 $scope.errorMsg="Contact card has not been shared. Please try again later";
						 $scope.commomErrorPopUp($scope.errorMsg);
					 }
				}).error(function(error){
					
				})
			}
			
			 $scope.shareContactpopUp=function(y){
				 crmFactory.setUserDetails(y);
				 $scope.department_name1=y.department_name;
				  $mdDialog.show({
					      contentElement: '#shareCntctId',
					      parent: angular.element(document.body),
					      targetEvent: null,
					      clickOutsideToClose: true
					    });
				   
			  }
			
		    $scope.shareContactCard=function(obj){
		    	if($scope.fetchServicesResponsePojo.rs=="SU"){
		    		for(i=0;i<$scope.fetchServicesResponsePojo.pd.length;i++){
		    			if(crmFactory.getUserDetails().departmentid==$scope.fetchServicesResponsePojo.pd[i].srid){
		    				$scope.deptName=$scope.fetchServicesResponsePojo.pd[i].name;
		    				$scope.deptContactNo=$scope.fetchServicesResponsePojo.pd[i].contact;
		    				$scope.deptDes=$scope.fetchServicesResponsePojo.pd[i].des;
		    				$scope.deptWebsite=$scope.fetchServicesResponsePojo.pd[i].website;
		    				if($scope.deptDetails!=null || $scope.deptDetails!=undefined || $scope.deptDetails!=""){
		    					$scope.sendSms($scope.deptName,$scope.deptContactNo,$scope.deptDes,$scope.deptWebsite,crmFactory.getUserDetails().msisdn)
		    				}
		    			}
		    		}
		    	}
		    }
			
		    
			$scope.viewTicketDtlsRequestPojo={};
		    $scope.viewTicketDtlsResponsePojo={};
		    $scope.viewAllTickets=function(){
				    	$scope.viewTicketDtlsRequestPojo.lang="en";
						$scope.viewTicketDtlsRequestPojo.cceid=localStorage.getItem("Cceid");
				    	$scope.viewTicketDtlsRequestPojo.sdate="";
						$scope.viewTicketDtlsRequestPojo.edate="";
						showLoader();
						viewDetailsFactory.viewAllTickets($scope.viewTicketDtlsRequestPojo).success(function(data){
							hideLoader();
							 $scope.viewTicketDtlsResponsePojo=data;
							 console.log($scope.viewTicketDtlsResponsePojo);
							if($scope.viewTicketDtlsResponsePojo.rs=="S"){
								$scope.ticketDtls=$scope.viewTicketDtlsResponsePojo.pd;
							
							}
							
						}).error(function(error){
							hideLoader();
							$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
						})
		    		
		    		console.log("==========");
			 }
		    $scope.viewAllTickets();
		    
		    
			
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
						//	 $scope.Paging=$scope.fetchCceDetails;
						}
						else{
							$rootScope.commomErrorPopUp($scope.FetchCceDetailsResponsePojo.rd);
						}
						
					}).error(function(error){
						hideLoader();
						$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
					})
				 }
		    
		    
			   $scope.viewCceDetails();
		    
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
		    
		    $scope.close=function(){
				$rootScope.cancel();
			} 
		    $rootScope.cancel=function(){
		    	$rootScope.close() ;
			}
 			$scope.itemsPerPage = 5;
 			$scope.currentPage = 0;

 			$scope.range = function() {
 				var rangeSize = 5;
 				var ret = [];

 				var start;

 				start = $scope.currentPage;
 				if (start > $scope.pageCount() - rangeSize) {
 					start = $scope.pageCount() - rangeSize + 1;
 				}

 				for ( var i = start; i < start + rangeSize; i++) {
 					if (i < 0)
 						continue;
 					ret.push(i);

 				}
 				return ret;
 			};

 			$scope.prevPage = function() {
 				if ($scope.currentPage > 0) {
 					$scope.currentPage--;
 				}
 			};

 			$scope.prevPageDisabled = function() {
 				return $scope.currentPage === 0 ? "disabled"
 						: "";
 			};

 			$scope.pageCount = function() {
 				return Math.ceil($scope.Paging.length
 						/ $scope.itemsPerPage) - 1;
 			};
 			$scope.nextPage = function() {
 				if ($scope.currentPage < $scope.pageCount()) {
 					$scope.currentPage++;
 				}
 			};

 			$scope.nextPageDisabled = function() {
 				return $scope.currentPage === $scope
 						.pageCount() ? "disabled" : "";
 			};
 		$scope.setPage = function(n) {
 				$scope.currentPage = n;
 			};

 			
 			
 								});
 		String.prototype.replaceAll = function(s, r) {
 			return this.split(s).join(r)
 			}

 			 crm.filter('offset', function() {
 			return function(input, start) {
 			if (!input || !input.length) {
 			return;
 			}
 			start = +start; // parse to int
 			return input.slice(start);
 			}
 			   
 			
 		});


		

		
	
 


		
	
		
	
