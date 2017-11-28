crm.controller('fetchChatRptController',function($scope,Excel,$timeout,$location,$http,$rootScope,loginFactory,crmFactory,fetchChatReportFactory,resetPasswordFactory,forgotPasswordFactory,$mdDialog) {
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
        var exportHref=Excel.tableToExcel(tableId,'Report of chat agents');
        $timeout(function(){location.href=exportHref;},100); // trigger download
    }

	$scope.fetchChatRptRequestPojo={};
	$scope.fetchChatRptResponsePojo={};
		$scope.fetchChatReport=function(user){
			$scope.fetchChatRptRequestPojo.trkr="";
			$scope.fetchChatRptRequestPojo.lang="en";
			$scope.fetchChatRptRequestPojo.cceid=localStorage.getItem("Cceid");
			$scope.fetchChatRptRequestPojo.type="all";
			fetchChatReportFactory.fetchChatReport($scope.fetchChatRptRequestPojo).success(function(data){
				 $scope.fetchChatRptResponsePojo=data;
				 console.log($scope.fetchChatRptResponsePojo);
				 if($scope.fetchChatRptResponsePojo.rs=="S"){
					// $rootScope.commomSuccessPopUp($scope.fetchChatRptResponsePojo.rd);
				 }
				 else{
						$scope.commomErrorPopUp($scope.fetchChatRptResponsePojo.rd);
					 
				 	}
			
			}).error(function(error){
				hideLoader();
				$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
			})
		}
		$scope.fetchChatReport();
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