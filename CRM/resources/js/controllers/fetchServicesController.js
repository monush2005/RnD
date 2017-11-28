crm.controller('fetchServicesController',function($scope,$location,$http,$rootScope,fetchServicesFactory,crmFactory ,loginFactory ) {
	if(localStorage.getItem("Cceid")==null || localStorage.getItem("Cceid")=="" || localStorage.getItem("Cceid")==undefined){
		$location.path("/");
 }
	
	
	$rootScope.flexFlag = localStorage.getItem("flexFlag" );
	$rootScope.flagAdmin=localStorage.getItem("flagAdmin" );
	$rootScope.flagViewer=localStorage.getItem("flagViewer" );
	$rootScope.flagAgent=localStorage.getItem("flagAgent" );
	$rootScope.flagTL=localStorage.getItem("flagTL" );
	$rootScope.ctrlPanl=localStorage.getItem("ctrlPanl" );
	
	$rootScope.chatFlag=localStorage.getItem("chatFlag" );
	$rootScope.ivrFlag=localStorage.getItem("ivrFlag" );
	$rootScope.smsFlag=localStorage.getItem("smsFlag" );
			
	
	
	$rootScope.flagHideDrawer=true;
	$scope.Paging={};
	$scope.fetchServicesRequestPojo={};
    $scope.fetchServicesResponsePojo={};
    $scope.fetchServices=function(){
    	$scope.fetchServicesRequestPojo.lang="en";
		$scope.fetchServicesRequestPojo.srid="";
		showLoader();
		fetchServicesFactory.fetchServices($scope.fetchServicesRequestPojo).success(function(data){
			hideLoader();
			 $scope.fetchServicesResponsePojo=data;
			 $scope.Paging=$scope.fetchServicesResponsePojo.pd;
			 $scope.fetchServicesDetails=$scope.fetchServicesResponsePojo.pd;
			 console.log($scope.fetchServicesResponsePojo);
			if($scope.fetchServicesResponsePojo.rs=="SU"){
			}
			
		}).error(function(error){
			hideLoader();
			$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");	
		})
	 }
    $scope.fetchServices();
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
	

