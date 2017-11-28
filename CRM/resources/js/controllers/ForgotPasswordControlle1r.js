crm.controller('ForgotPasswordController',function($scope,$location,$http,$rootScope,loginFactory,sendUserNameFactory,forgotPasswordFactory,$location,$mdDialog) {
		angular.element(document).ready(function () { 
		console.log('page loading completed'); });
		hideLoader();		
		$scope.ForgotPswdRequestPojo={};
		$scope.ForgotPswdResponsePojo={};
		
		$scope.forgotPswd=function(obj){
			showLoader();
			$scope.ForgotPswdRequestPojo.uname=obj.uname;
			$scope.ForgotPswdRequestPojo.otp=obj.otp;
			$scope.ForgotPswdRequestPojo.newpwd=obj.newPswd;
			$scope.ForgotPswdRequestPojo.type="";
			$scope.ForgotPswdRequestPojo.udf3="";
			$scope.ForgotPswdRequestPojo.udf4="";
			$scope.ForgotPswdRequestPojo.lang="";
			$scope.ForgotPswdRequestPojo.trkr="";
		//	$scope.ForgotPswdRequestPojo.mno=sendUserNameFactory.getuserName();
			$scope.ForgotPswdRequestPojo.mno="9898989898";
			$scope.ForgotPswdRequestPojo.ort="frgtmpn";
		
			forgotPasswordFactory.forgotPswd($scope.ForgotPswdRequestPojo).success(function(data){
				 $scope.ForgotPswdResponsePojo=data;
				 if($scope.ForgotPswdResponsePojo.rs=="S"){
					 $scope.ForgotPswdResponse=$scope.ForgotPswdResponsePojo;
					 
				 }
				 else
					 {
					 hideLoader();
					 $scope.errorMsg=$scope.ForgotPswdResponsePojo.rd;
					    $mdDialog.show({
						      contentElement: '#myDialogFont1',
						      parent: angular.element(document.body),
						      targetEvent: null,
						      clickOutsideToClose: false
						    });
					}
				console.log(data);
			
			}).error(function(error){
				
			})
		}
		
		$scope.cancel = function() {
	           $mdDialog.cancel();
		};
});