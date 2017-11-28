crm.controller('feedBackController',function($scope,$location,crmFactory,$http,$rootScope,feedbackFactory,loginFactory ,$mdDialog) {
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
			
	
	$scope.Paging={};
	$scope.feedBackRequestPojo={};
    $scope.feedbackResponsePojo={};
    $scope.feedbackReq=function(obj){
    	
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
    	    	$scope.feedBackRequestPojo.lang="en";
    			$scope.feedBackRequestPojo.trkr="798";
    	    	$scope.feedBackRequestPojo.cceid=localStorage.getItem("Cceid")
    			$scope.feedBackRequestPojo.startdate=$scope.finalStrt;
    	    	$scope.feedBackRequestPojo.enddate=$scope.finalend;
    			$scope.feedBackRequestPojo.page="1";
    			showLoader();
    			feedbackFactory.feedbackReq($scope.feedBackRequestPojo).success(function(data){
    				hideLoader();
    				 $scope.feedbackResponsePojo=data;
    				 $scope.feedBack=$scope.feedbackResponsePojo.pd.feedbackList;
    				 console.log($scope.feedbackResponsePojo);
    				if($scope.feedbackResponsePojo.rs=="S"){
    					if($scope.feedbackResponsePojo.pd.feedbackList.length<1){
    						$scope.commomErrorPopUp("No data found");	
    					}
    				}
    				else{
    					$scope.commomErrorPopUp($scope.feedBackRequestPojo.rd);
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
	
    //$scope.feedbackReq();
	$scope.itemsPerPage = 10;
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
	
