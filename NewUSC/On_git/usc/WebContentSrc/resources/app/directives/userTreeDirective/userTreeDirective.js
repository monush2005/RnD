(function(app) {
   'use strict';
   app.directive('userTreeDirective', userTreeDirectiveFn);
   userTreeDirectiveFn.$inject = ['usersService'];
   function userTreeDirectiveFn(usersService) {
       return {
           restrict: 'E',
           replace: true,
           templateUrl: 'resources/app/directives/userTreeDirective/userTreeDirective.html',
           scope: { user: '<' ,searchuser:'<'},
       	link: function($scope, element, attrs) 
       	{
       		$scope.userSearch = function(userId,searchId) 
           	{
           	
           	if ( typeof(searchId) !== "undefined" && searchId !== null  && searchId !="") {
           	userId = userId.toUpperCase();
           	searchId=searchId.toUpperCase();
           	if (userId.indexOf(searchId) > -1) {
           	         return true;
           	       }else{
           	       	return false;
           	       }
           	}else 
           	return false;
              }
       		
       	 	$scope.getUserDetails = function(userId,$mdOpenMenu,$event) 
           	{
           	   
           	     usersService.getSubUserDetails(userId).then((detailedUser) => {
           	    	 //console.log("detailedUser"+JSON.stringify(detailedUser));
           	     $scope.userdetail=detailedUser[0];
           	    var stateRadio;
           	    	if(detailedUser[0].stateCentral==99){
           	    		stateRadio="Central"
           	    	}
           	    	else if(detailedUser[0].stateCentral==99){
           	    		stateRadio="State"
           	    	}else{
           	    		stateRadio="All"
           	    	}
           	     $mdOpenMenu($event);	
           	   	
           	    })
           	    
           	    
              }
           
       		
       		
       }
       }
   }
})(angular.module('selfcare'));