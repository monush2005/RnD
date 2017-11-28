crm.controller('breakController',function($scope,$location,$http,$rootScope,breakFactory,$mdDialog) {
	if(localStorage.getItem("Cceid")==null || localStorage.getItem("Cceid")=="" || localStorage.getItem("Cceid")==undefined){
		$location.path("/");
 }
	$scope.brkFlag=false;
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
			
			
			$scope.breakRequestPojo={};
		    $scope.breakResponssePojo={};
		    $scope.breakReq=function(obj){
		    	var brkDtls = obj.split(",");
		    	    	$scope.breakRequestPojo.lang="en";
		    			$scope.breakRequestPojo.bid=brkDtls[0].trim();
		    	    	$scope.breakRequestPojo.cceid=localStorage.getItem("Cceid")
		    			$scope.breakRequestPojo.uniqueid="";
		    	    	$scope.breakRequestPojo.reason=brkDtls[1].trim();
		    			$scope.breakRequestPojo.type="break_start";
		    			showLoader();
		    			breakFactory.breakReq($scope.breakRequestPojo).success(function(data){
		    				hideLoader();
		    				console.log($scope.breakRequestPojo);
		    				 $scope.breakResponssePojo=data;
		    				 console.log($scope.breakResponssePojo);
		    				if($scope.breakResponssePojo.rs=="S"){
		    					$scope.brkFlag=true;
		    					$scope.uniqueID=$scope.breakResponssePojo.pd.uniqueId;
		    					localStorage.setItem("uniqueID",$scope.uniqueID);
		    					$scope.commomSuccessPopUp($scope.breakResponssePojo.rd);
		    				}
		    				else{
		    					$scope.commomErrorPopUp($scope.breakRequestPojo.rd);
		    				}
		    				
		    			}).error(function(error){
							hideLoader();
							$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
		    			})
		    		

			 }
		    
		    
		    $scope.breakoff=function(obj){
		    	$scope.breakRequestPojo.lang="en";
				$scope.breakRequestPojo.bid="";
		    	$scope.breakRequestPojo.cceid=localStorage.getItem("Cceid")
				$scope.breakRequestPojo.uniqueid=localStorage.getItem("Cceid")
		    	$scope.breakRequestPojo.reason="end";
				$scope.breakRequestPojo.type="break_end";
				showLoader();
				breakFactory.breakReq($scope.breakRequestPojo).success(function(data){
					hideLoader();
					 $scope.breakResponssePojo=data;
					 console.log($scope.breakResponssePojo);
					if($scope.breakResponssePojo.rs=="S"){
						$scope.commomSuccessPopUp($scope.breakResponssePojo.rd);
						$scope.brkFlag=false;
						$scope.listOfBreaks=$scope.fetchBreaksResponsePojo.pd.breaklist;
					}
					else{
						$scope.commomErrorPopUp($scope.breakRequestPojo.rd);
					}
					
				}).error(function(error){
					hideLoader();
					$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
				})
		}
		    
		    $scope.fetchBreaksRequestPojo={};
		    $scope.fetchBreaksResponsePojo={};
		    $scope.fetchBreaks=function(obj){
		    	$scope.fetchBreaksRequestPojo.lang="en";
		    	$scope.fetchBreaksRequestPojo.cceid=localStorage.getItem("Cceid")
				showLoader();
				breakFactory.fetchBreaks($scope.fetchBreaksRequestPojo).success(function(data){
					hideLoader();
					 $scope.fetchBreaksResponsePojo=data;
					 console.log($scope.fetchBreaksResponsePojo);
					if($scope.fetchBreaksResponsePojo.rs=="S"){
						//$scope.commomSuccessPopUp($scope.fetchBreaksResponsePojo.rd);
						if($scope.fetchBreaksResponsePojo.pd.agentlist!=null && $scope.fetchBreaksResponsePojo.pd.agentlist!="" && $scope.fetchBreaksResponsePojo.pd.agentlist!=undefined)
							{
							$scope.listOfBreaks=$scope.fetchBreaksResponsePojo.pd.agentlist;
							$scope.brkFlag=true;
							}
						else{
							$scope.listOfBreaks=$scope.fetchBreaksResponsePojo.pd.breaklist;
						}
					}
					else{
						$scope.commomErrorPopUp($scope.fetchBreaksResponsePojo.rd);
					}
					
				}).error(function(error){
					
				})
		}
		    $scope.fetchBreaks();
			
			

    
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


	
