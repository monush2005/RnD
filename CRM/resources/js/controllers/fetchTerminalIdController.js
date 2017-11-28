	crm.controller('fetchTerminalIdController',function($scope,$location,$http,$rootScope,fetchTerminalIdFactory) {
		angular.element(document).ready(function () { 
hideLoader();
		console.log('page loading completed'); });
	
		$scope.FetchTerminalIdRequestPojo={};
		$scope.fetchTerminalId=function(){
			$scope.FetchTerminalIdRequestPojo.type="admin";
			$scope.FetchTerminalIdRequestPojo.lang="en";
			fetchTerminalIdFactory.fetchTerminalId($scope.FetchTerminalIdRequestPojo).success(function(data){
				 $scope.FetchTerminalIdResPojo=data;
				console.log(data);
			
			}).error(function(error){
				
			})
			
		

		}
		$scope.fetchTerminalId();
    });