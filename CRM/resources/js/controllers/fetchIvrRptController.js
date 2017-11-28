crm.controller('fetchIvrRptController',function($scope,Excel,$timeout,$location,$http,$rootScope,loginFactory,fetchIvrReportFactory,viewCceDetailsFactory,resetPasswordFactory,forgotPasswordFactory,$mdDialog) {
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
          var exportHref=Excel.tableToExcel(tableId,'Report of IVR agents');
          $timeout(function(){location.href=exportHref;},100); // trigger download
   }

	
	$scope.fetchIvrRptRequestPojo={};
	$scope.fetchIvrRptResponsePojo={};
			$scope.fetchIvrReport=function(user){
			$scope.fetchIvrRptRequestPojo.trkr="";
			$scope.fetchIvrRptRequestPojo.lang="en";
			$scope.fetchIvrRptRequestPojo.type="all";
			$scope.fetchIvrRptRequestPojo.cceid=localStorage.getItem("Cceid");
			fetchIvrReportFactory.fetchIvrReport($scope.fetchIvrRptRequestPojo).success(function(data){
				 $scope.fetchIvrRptResponsePojo=data;
				 console.log($scope.fetchIvrRptResponsePojo);
				 if($scope.fetchIvrRptResponsePojo.rs=="S"){
					 //$rootScope.commomSuccessPopUp($scope.fetchIvrRptResponsePojo.rd);
				 }
				 else{
						$scope.commomErrorPopUp($scope.fetchIvrRptResponsePojo.rd);
					 
				 	}
			
			}).error(function(error){
				hideLoader();
				$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
			})
		}
			$scope.fetchIvrReport();
			
			
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