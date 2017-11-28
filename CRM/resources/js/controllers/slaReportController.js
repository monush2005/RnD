crm.controller('slaReportController',function($scope,$location,$http,$rootScope,Excel,$timeout,ivrKpiRptFactory,viewCceDetailsFactory ,$mdDialog) {
	if(localStorage.getItem("Cceid")==null || localStorage.getItem("Cceid")=="" || localStorage.getItem("Cceid")==undefined){
		$location.path("/");
 }
	hideLoader();
	$rootScope.flagHideDrawer=true;
	 $scope.myDate = new Date();
	 $scope.month=$scope.myDate.getMonth()+1;
    $scope.maxDate = new Date($scope.myDate.getFullYear()+"-"+$scope.month+"-"+$scope.myDate.getDate());
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
		    $scope.exportToExcel=function(tableId){ // ex: '#my-table'
		          var exportHref=Excel.tableToExcel(tableId,'IVR KPI report');
		          $timeout(function(){location.href=exportHref;},100); // trigger download
		   }
		    $scope.dataFlg=false;
		    
	$scope.slaRptRequestPojo={};
    $scope.slaRptResponsePojo={};
    $scope.slaRpt=function(obj){
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

    	    	$scope.slaRptRequestPojo.lang="en";
    		
    			$scope.slaRptRequestPojo.sdate=$scope.finalStrt;
    			$scope.slaRptRequestPojo.edate=$scope.finalStrt;
    	    	console.log($scope.slaRptRequestPojo);
    			ivrKpiRptFactory.slaRpt($scope.slaRptRequestPojo).success(function(data){
    				hideLoader();
    				 $scope.slaRptResponsePojo=data;
    				 $scope.slaReportData=$scope.slaRptResponsePojo.pd;
    				 console.log($scope.slaRptResponsePojo);
    				if($scope.slaRptResponsePojo.rs=="S"){
    					if($scope.slaRptResponsePojo.pd.length<1){
    						$scope.commomErrorPopUp("No data found");	
    					}
    					else{
    						$scope.dataFlg=true;
    					}
    				}
    				else{
    					$scope.commomErrorPopUp($scope.slaRptResponsePojo.rd);
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
	
	$scope.itemsPerPage = 15;
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


	
