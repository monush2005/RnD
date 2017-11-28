crm.controller('ivrHourWiseRptController',function($scope,$location,$http,$rootScope,Excel,$timeout,ivrKpiRptFactory,viewCceDetailsFactory ,$mdDialog) {
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
		    
	$scope.ivrHourWiseRptRequestPojo={};
    $scope.ivrHourWiseRptResponsePojo={};
    $scope.ivrhourWiseRpt=function(obj){
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
    	    	$scope.ivrHourWiseRptRequestPojo.lang="en";
    			if(obj.agentId=="all"){
        			$scope.ivrHourWiseRptRequestPojo.cceid="";
        			}
        			else{
        	    	$scope.ivrHourWiseRptRequestPojo.cceid=obj.agentId;
        			}
    			$scope.ivrHourWiseRptRequestPojo.sdate=$scope.finalStrt;
    	    	$scope.ivrHourWiseRptRequestPojo.edate=$scope.finalend;
    	    	console.log($scope.ivrHourWiseRptRequestPojo);
    			ivrKpiRptFactory.ivrhourWiseRpt($scope.ivrHourWiseRptRequestPojo).success(function(data){
    				hideLoader();
    				 $scope.ivrHourWiseRptResponsePojo=data;
    				 $scope.ivrReportData=$scope.ivrHourWiseRptResponsePojo.pd;
    				 console.log($scope.ivrHourWiseRptResponsePojo);
    				if($scope.ivrHourWiseRptResponsePojo.rs=="S"){
    					if($scope.ivrHourWiseRptResponsePojo.pd.length<1){
    						$scope.commomErrorPopUp("No data found");	
    					}
    				}
    				else{
    					$scope.commomErrorPopUp($scope.ivrHourWiseRptResponsePojo.rd);
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


	
