<html lang="en" >
   <head>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <!-- Angular Material style sheet -->
      <link rel="stylesheet" href="resources/css//angular-material.min.css"/>
      <style>
         .maintitlebg{
         background:#4285F4 !important; 
         min-height: 50px;
         max-height: 50px;
         }
         .md-toolbar-tools {
         height: 50px;
         max-height: 50px;
         }
         md-input-container {
         margin: 5px 0;
         }
         .greenbtn{
         background-color: #34A853 !important;
         }
         .bluebtn{
         background-color: #4285F4 !important;
         }
      </style>
   </head>
   <body>
      <!-- Using Angular Material 6.1 + Jade Templates-->
     
      <div ng-app="MyApp" ng-controller="AppCtrl" layout="column" layout-align="center center" layout-fill="layout-fill">
      <form name="myForm" class="container-fluid" method='post' action='newLogin'>
 
         <div class="loginBox md-whiteframe-z1" layout="column" style="min-width: 350px;">
            <md-content class="" layout="column">
               <div layout="row" layout-align="center center">
                  <div class="umglogin_logo"><img style="max-width: 160px;margin: 20px 0;" src="resources/images/umang.png" alt="umang"></div>
               </div>
            </md-content>
            <md-toolbar class="maintitlebg">
               <h2 class="md-toolbar-tools"><span>Login</span></h2>
            </md-toolbar>
            <md-content class="md-padding" layout="column">
               <md-input-container>
                  <label>EmailAddress</label>
                  <md-icon class="name material-icons">
                     <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                        <path fill="#000000" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"></path>
                     </svg>
                  </md-icon>
                  <input type="text" name='userName' ng-model="username" required="required"/>
               </md-input-container>
               <md-input-container>
                  <label>Password</label>
                  <md-icon class="name material-icons">
                     <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                        <path fill="#000000" d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"></path>
                     </svg>
                  </md-icon>
                  <input type="password" name='password' ng-model="password" required="required"/>
               </md-input-container>
               <div ng-messages="myForm.status.$error" style='text-align:center;color:red'>
          		<div ng-message="required">${desc}</div>
       		   </div>
               <div layout="row" layout-align="center center newwidth" style="padding:10px 45px">
                <md-button class="md-raised md-warn bluebtn">Cancel</md-button>
                  <div flex="flex"></div>
                  <md-button class="md-raised md-primary greenbtn" type='submit' >Login</md-button>
               </div>
               
            </md-content>
         </div>
        </form>  
      </div>
     
      <!-- Angular Material requires Angular.js Libraries -->
<script src="resources/js/angular/angular.min.js"></script>
<script src="resources/js/angular/angular-animate.min.js"></script>
<script src="resources/js/angular/angular-aria.min.js"></script>
<script src="resources/js/angular/angular-material.min.js"></script>
<script src="resources/js/angular/angular-messages.min.js"></script>
      <!-- Your application bootstrap  -->
      <script type="text/javascript">    
         var app = angular.module('MyApp', [
         	'ngMaterial',
         ])
         .controller('AppCtrl', function($scope)
         {
        	 $scope.submit = function() {
        	      
        	    };
         
         })
         ;
          
      </script>
   </body>
</html>