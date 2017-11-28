crm.controller('viewCcePendingHistoryController',function($scope,$location,$http,crmFactory,$rootScope,loginFactory,viewCcePendingHistoryFactory,$mdDialog) {
	$rootScope.flagHideDrawer=true;	
	hideLoader();
	
			$rootScope.flexFlag = localStorage.getItem("flexFlag");
			$rootScope.flagAdmin=localStorage.getItem("flagAdmin");
			$rootScope.flagViewer=localStorage.getItem("flagViewer");
			$rootScope.flagAgent=localStorage.getItem("flagAgent");
			$rootScope.flagTL=localStorage.getItem("flagTL");
			$rootScope.ctrlPanl=localStorage.getItem("ctrlPanl");
			
			$rootScope.chatFlag=localStorage.getItem("chatFlag");
			$rootScope.ivrFlag=localStorage.getItem("ivrFlag");
			$rootScope.smsFlag=localStorage.getItem("smsFlag");
			
	
	
    if(localStorage.getItem("Cceid")==null || localStorage.getItem("Cceid")=="" || localStorage.getItem("Cceid")==undefined){
		$location.path("/");
    }
	$scope.viewPendingHistoryRequestPojo={};
			$scope.viewPendingHistoryResponsePojo={};
			$scope.viewPendingDetails=function(obj){
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
				
				$scope.viewPendingHistoryRequestPojo.cceid="";
				$scope.viewPendingHistoryRequestPojo.lang="en";
				$scope.viewPendingHistoryRequestPojo.sdate=$scope.finalStrt;
				$scope.viewPendingHistoryRequestPojo.edate=$scope.finalend;
				viewCcePendingHistoryFactory.viewPendingDetails($scope.viewPendingHistoryRequestPojo).success(function(data){
					hideLoader();
					 $scope.viewPendingHistoryResponsePojo=data;
					 console.log($scope.viewPendingHistoryResponsePojo);
					 if($scope.viewPendingHistoryResponsePojo.rs=="S"){
						$scope.history= $scope.viewPendingHistoryResponsePojo.pd.history;		
					}
					 else{
						 $rootScope.commomErrorPopUp($scope.viewPendingHistoryResponsePojo.rd);
					 }
				
				}).error(function(error){
					hideLoader();
					$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
				})
			}
					
});