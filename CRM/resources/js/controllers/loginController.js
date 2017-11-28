crm.controller('loginController', function($scope, $location, $http,
		$rootScope, loginFactory, $location, $mdDialog, $route) {
	angular.element(document).ready(function() {

		console.log('page loading completed');
	});
	hideLoader();
	$rootScope.flexFlag = "100";
	$scope.LoginRequestPojo = {};
	$scope.errorMsg = "";
	$scope.login = function(obj) {
		showLoader();
		$scope.LoginRequestPojo.uname = obj.name;
		loginFactory.setUname(obj.name);
		$scope.LoginRequestPojo.pwd = obj.pswd;//SHA256(obj.pswd);
		$scope.LoginRequestPojo.lang = "en";
		$scope.LoginRequestPojo.ip = "";
		$scope.LoginRequestPojo.connectionid = "";
		loginFactory.setLoginReq($scope.LoginRequestPojo);
		loginFactory.login($scope.LoginRequestPojo).success(
				function(data) {
					console.log(data);
					$scope.LoginResponsePojo = data;
					if ($scope.LoginResponsePojo.rs == "S") {
						
						$scope.loginDetails = $scope.LoginResponsePojo;
						loginFactory.setCceid($scope.loginDetails.pd.cceid);
						localStorage.setItem("Cceid",
								$scope.loginDetails.pd.cceid);
						loginFactory
								.setUserType($scope.loginDetails.pd.userType);
						getConnect(obj.name,obj.pswd);
						if ($scope.loginDetails.pd.userType == "admin") {
							$rootScope.flagCtrlPanel = true;
						} else {
							$rootScope.flagCtrlPanel = false;
						}
						localStorage.setItem("userType",
								$scope.loginDetails.pd.userType);
						$rootScope.userType = $scope.loginDetails.pd.userType;
						// $location.path("/crm"); 
						if ($scope.LoginResponsePojo.pd.flagExpiry == "false") {
							$location.path("/crm");
						} else {
							$location.path("/resetPswd");
						}
					} else {
						hideLoader();
						console.log("---------------------");
						$rootScope.commomErrorPopUp($scope.LoginResponsePojo.rd);

					}

				}).error(function(error) {
					hideLoader();
					$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
		})
	}
	$scope.sendUserName = function() {
		$location.path("/forgotPswd");
	}

	$scope.resetPswd = function(obj) {
		loginFactory.setUname(obj.name);
		$location.path("/resetPswd");
	}

	$scope.user = {};
	$rootScope.cancel=function(){
    	$rootScope.close() ;
	}

	$scope.reset = function() {
		$scope.user.pswd = '';
		$scope.user.name = '';
		$scope.loginForm.$setPristine();
		$scope.loginForm.$setUntouched();
		angular.element(document.getElementsByTagName('md-input-container'))
				.removeClass('md-input-focused md-input-invalid');
		angular.element(document.getElementsByTagName('md-input-container'))
				.focus(false);
	};

});