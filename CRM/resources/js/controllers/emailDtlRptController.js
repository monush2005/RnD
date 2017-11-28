crm.controller('emailDtlRptController',function($scope,$location,$http,$rootScope,Excel,$timeout,ivrKpiRptFactory,viewCceDetailsFactory ,$mdDialog) {
	if(localStorage.getItem("Cceid")==null || localStorage.getItem("Cceid")=="" || localStorage.getItem("Cceid")==undefined){
		$location.path("/");
 }
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
			
		    $scope.exportToExcel=function(tableId){ // ex: '#my-table'
		          var exportHref=Excel.tableToExcel(tableId,'Chat details report');
		          $timeout(function(){location.href=exportHref;},100); // trigger download
		   }
		    
	$scope.emailDtlRptRptRequestPojo={};
    $scope.emailDtlRptRptResponsePojo={};
    $scope.emailDtlRptRpt=function(obj){
    	showLoader();
    			console.log("===============================");
    			console.log(obj);
				  var d = new Date(obj.strtDate);
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
		          	
		          	var d = new Date( obj.endDate);
			        	var date1=d.getDate()
			        	
			        	var month=d.getMonth()+1;
			        	if(month<=9){
			        		month=0+''+month;
			        	}
			        	if(date1<=9){
			        		date1=0+''+date1;
			        	}
			          	var year=d.getFullYear();
			          	$scope.finalend=year+'-'+month+'-'+date1;
    	    	$scope.emailDtlRptRptRequestPojo.lang="en";
    			if(obj.agentId=="all"){
        			$scope.emailDtlRptRptRequestPojo.cceid="";
        			}
        			else{
        	    	$scope.emailDtlRptRptRequestPojo.cceid=obj.agentId;
        			}
    			$scope.emailDtlRptRptRequestPojo.sdate=$scope.finalStrt;
    	    	$scope.emailDtlRptRptRequestPojo.edate=$scope.finalend;
    	    	console.log($scope.emailDtlRptRptRequestPojo);
    			ivrKpiRptFactory.emailDtlRpt($scope.emailDtlRptRptRequestPojo).success(function(data){
    				hideLoader();
    				 $scope.emailDtlRptRptResponsePojo=data;
    				 $scope.emailRptData=$scope.emailDtlRptRptResponsePojo.pd;
    				 console.log($scope.emailDtlRptRptResponsePojo);
    				if($scope.emailDtlRptRptResponsePojo.rs=="S"){
    					if($scope.emailDtlRptRptResponsePojo.pd.length<1){
    						$scope.commomErrorPopUp("No data found");	
    					}
    				}
    				else{
    					$scope.commomErrorPopUp($scope.emailDtlRptRptResponsePojo.rd);
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
					$scope.fetchCceDetails=$scope.FetchCceDetailsResponsePojo.pd.cceDetails;
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
	
						});


	
