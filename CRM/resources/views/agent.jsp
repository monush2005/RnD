<!--  <html>
<head>
<title>Welcome to ChatBot Demo</title>
<meta content="width=device-width, initial-scale=1" name="viewport">
<meta content="text/html; charset=utf-8" http-equiv="Content-Type">

<link rel="stylesheet" type="text/css" href="resources/css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css" href="resources/css/font-awesome.min.css" />
<link type="text/css" rel="stylesheet"
	href="http://fonts.googleapis.com/css?family=Montserrat:400,700">
<link rel="stylesheet" type="text/css" href="resources/css/customerChatBox.css" />
<link href="http://localhost:8080/CRM/resources/css/chat-style.css" rel="stylesheet" type="text/css" /> -->
<style>
.panel {
	background-color: #ffffff;
	border: 1px solid #b0b0b0;
	bottom: 0;
	font-family: "Open Sans", sans-serif; 
	height: 415px;
	position: relative; 
	right: 20px;
	width: 300px;
}

.consumer-chat-container {
	float: right;
    margin-right: 0;
    right: 0;
    position: relative;
}

.my-chat-space {
	position: fixed;
	bottom: 0;
	width: 100%;
}

.nano {
	height: 250px;
}

@media only screen and (max-width: 500px) {
	.panel {
		background-color: #ffffff;
		border: 1px solid #b0b0b0;
		bottom: 0;
		font-family: "Open Sans", sans-serif;
		position: fixed;
		right: 20px;
		width: 250px;
	}
	.nano {
		height: 200px;
	}
}

.btn.outline {
	background: none;
	padding: 4px 4px;
	margin-top: 3px;
}

.btn-primary.outline {
	border: 1px solid #000 !important;
	color: #000 !important;
}

.btn-primary.outline:hover, .btn-primary.outline:focus, .btn-primary.outline:active,
	.btn-primary.outline.active, .open>.dropdown-toggle.btn-primary {
	color: #000 !important;
	border-color: #000 !important;
}

.btn-primary.outline:active, .btn-primary.outline.active {
	border-color: #000 !important;
	color: #000 !important;
	box-shadow: none;
}

.panel {
	background-color: #ffffff;
	border: 1px solid #b0b0b0;
	bottom: 0;
	font-family: "Open Sans", sans-serif; #
	height: 415px;
	position: relative; #
	right: 20px;
	width: 300px;
}

.consumer-chat-container {
	float: right;
	margin-right: 0px;
}

.my-chat-space {
	position: fixed;
    bottom: 0;
    width: auto;
    right: 0;
}

.nano {
	height: 312px;
}

@media only screen and (max-width: 500px) {
	.panel {
		background-color: #ffffff;
		border: 1px solid #b0b0b0;
		bottom: 0;
		font-family: "Open Sans", sans-serif;
		position: fixed;
		right: 20px;
		width: 250px;
	}
	.nano {
		height: 200px;
	}
}

.panel-heading {
	background: #72a4fd none repeat scroll 0 0;
}

#demo-chat-body {
	background: #f4f8f8 none repeat scroll 0 0;
}

.btn {
	border-radius: 3px;
}

.media-left, .media>.pull-left {
	padding-right: 0;
}

.speech::before {
	border-right: 7px solid #fff;
}

.speech {
	background: #fff none repeat scroll 0 0;
	color: #000;
	border-radius: 6px;
	bottom: 0px;
}

.speech .media-heading {
	color: #000;
}

.speech-right>.speech::before {
	border-color: transparent -moz-use-text-color transparent #ffffff !important;
}

.speech-right>.speech {
	background: #d6dcfe none repeat scroll 0 0;
	color: #000;
}

.speech-right>.speech .media-heading {
	color: #000;
}

.btn.outline {
	margin-top: 3px;
}

.carousel {
	height: 80%;
}

.carousel-inner {
	height: 100%;
}

.carousel-caption {
	top: 120px;
}

.cntrl-btn { 
	padding: 0; 
	font-size: 25px;
	background: transparent;
}

.cntrl-btn:hover, .cntrl-btn.focus, .cntrl-btn:focus, .cntrl-btn.active
	{
	background: transparent;
}

.carousel-caption {
	color: #000;
}

.carousel-control.left, .carousel-control.right {
	background-image: none;
}

.carousel-control {
	opacity: 1;
}

.carousel-control .glyphicon-chevron-left, .carousel-control .glyphicon-chevron-right,
	.carousel-control .icon-next, .carousel-control .icon-prev {
	font-size: 11px;
}

.crsl-left-btn {
	background-color: #72a4fd;
	padding: 10px;
	border-radius: 50%;
}
</style>
<!-- </head>
<body> -->

<div>

  <md-button ng-click="login()"  class="md-raised custom-green"  ng-disabled="(btnFlag)">Click here to start chat  </md-button><!-- ng-disabled="(btnFlag)" -->
<!--    <md-button class="md-raised md-primary md-hue-2 md-primary" ng-click="wrapUpReqPopUp()">Wrap Up</md-button> -->

<!--   <md-button ng-click="abc()">click</md-button> -->

<!-- 	<div class="my-chat-space"></div>
	Begin page content
	 start  
	<div class="example-chat-window" style="display: none">
		<div class="consumer-chat-container" data-userjid=""  data-chatid="" data-fbchatid="" data-chatuniqueid="" ref-Id="" >
			<div class="crm-chat_window">
				
				 <div class="top_menu">
 <div class="title">
		<svg style="width:16px;height:16px" viewBox="0 0 24 24">
            <path fill="#41c822" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />
        </svg>
        UMANG <span class="usrIdUni" id="userName"></span>
        <span>CCE is typing...</span>
      </div>
    <div class="buttons">
    
 		<svg style="width:20px;height:20px" viewBox="0 0 24 24"  class="miniMize_window" id="TEST" onclick="minimizeWindow(this.id)">
			<path fill="#fff" d="M20,14H4V10H20" />
		</svg> &nbsp;
		  onclick="wrapChat1(this.id)"
		  <svg style="width:20px;height:20px" viewBox="0 0 24 24" class="wCls" id="wId" onclick="wrapChat1(this.id)">
    <path fill="#fff" d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z" />
			</svg>

	 <svg style="width:20px;height:20px" viewBox="0 0 24 24" class="wClss" id="wrId" onclick="wrapChat2(this.id)">
    <path fill="#fff" d="M21,5H3V7H21V5M3,19H10V17H3V19M3,13H18C19,13 20,13.43 20,15C20,16.57 19,17 18,17H16V15L12,18L16,21V19H18C20.95,19 22,17.73 22,15C22,12.28 21,11 18,11H3V13Z" />
</svg>
         
        		<svg style="width:20px;height:2opx" viewBox="0 0 24 24" class="chat-close" >
					<path fill="#fff" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
		 		</svg>
		 		

		 		
		 		
		 		
	
    </div>
  </div>
  
  <div class="close-this-window"  data-chatid="" data-fbchatid="" data-chatuniqueid="" ref-Id="">
  			<div id="demo-chat-body" class="collapse in chatroom-height">
					<div class="nano has-scrollbar">
						<div id="" class="nano-content pad-all pad-topbot0 pad-left5" tabindex="0"
							style="right: -17px;">
							<ul  id="message" class="list-unstyled media-block user-chat-ul messages">
							
							</ul>
						</div>
				 		<div class="nano-pane">
							<div class="nano-slider"
								style="height: 141px; transform: translate(0px, 0px);"></div>
						</div>  
					</div>

					Widget footer
					<div class="panel-footer">
						<div class="row bottom_wrapper clearfix" >
							<div class="col-xs-9">
		<input type="text" id="" placeholder="Enter your text" class="form-control chat-input message-text">
		<textarea rows="4" cols="5" id="message-text" placeholder="Enter your message here..." class="form-control chat-input message-text"></textarea>
									
							</div>
							
      
      <button class="md-fab md-primary2 chat-user-icon sendMessage" style="float:right;">
            
  
                <img src="resources/images/btn-send.png" alt="">
            
        </button>
      
						</div>
					</div>
				</div>
				
				</div>
			</div>
		</div>
	</div>
	 end 
	
<input type="hidden" value="" id="conIDU">
	<input type="hidden" id="login_jid"
		value="Manpreet.kaur" />
	<input type="hidden" id="login_jpass"
		value="mark" />
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
 
       <div style="display: none">
 	<md-card layout-padding>
   
 		<div class="md-dialog-container" id="createTicketPopUp" >
 		<md-dialog>
            <md-list role="list">
              <div class="star-rating"><h4 style="margin:0;">WrapUp Window</h4></div>
            </md-list>
            <form name="createTicketForm">



     <div style="visibility: hidden">
    <div class="md-dialog-container crm-ticket" id="createTicketPopUp" style="height:auto;">
    <form name="createTicketForm">
    	<md-dialog class="umang-dialog crm-tckt-popup" style="min-width:600px;">
		<div class="" align="left">
		<md-card class="_md" layout-padding>
            <md-list role="list">
              <div class="star-rating"><h4 style="margin:0;">WrapUp Window</h4></div>
            </md-list>
                       
             <div layout="row">
                <md-input-container  flex="50" class="plus_91" >
                <label>Mobile Number</label>
                <md-icon><svg style="width:24px;height:24px" viewBox="0 0 24 24">
                            <path fill="#7f7f7f" d="M17.25,18H6.75V4H17.25M14,21H10V20H14M16,1H8A3,3 0 0,0 5,4V20A3,3 0 0,0 8,23H16A3,3 0 0,0 19,20V4A3,3 0 0,0 16,1Z" />
                        </svg></md-icon>
                <input type="tel" name="mobNo" autocomplete="off" id="mobNo" ng-model="user.user_mno" mobile-length-directive maxlength="10" ng-required="true" no-special-directive ng-pattern="/^[7-9][0-9]{9}$/"/>
         <div ng-messages="createTicketForm.mobNo.$error" role="alert">
          <div ng-message="required">
            Mobile Number is required.
          </div>
          <div ng-message="pattern">
            Mobile Number must be 10 digit number and start with 7,8 or 9 only.
          </div>
        </div>
                </md-input-container>
                <md-input-container  flex="50">
                <label>User Name</label>
                <md-icon><svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="#7f7f7f" d="M12,2A2,2 0 0,1 14,4A2,2 0 0,1 12,6A2,2 0 0,1 10,4A2,2 0 0,1 12,2M10.5,7H13.5A2,2 0 0,1 15.5,9V14.5H14V22H10V14.5H8.5V9A2,2 0 0,1 10.5,7Z" />
                </svg></md-icon>
               <input ng-required="true" type="text" name="fatherName"  id="fatherName" ng-model="user.ufathers_name" maxlength="50" characters-only-directive no-special-directive/>
        <div ng-messages="createTicketForm.fatherName.$error" role="alert">
          <div ng-message="required">
            Name is required.
          </div>
        </div>
                </md-input-container>
            </div>
            
            <div layout="row">
                <md-input-container flex="50">
              <label>Category</label>
              <md-icon>
              <svg style="width:24px;height:24px" viewBox="0 0 24 24">
				<path fill="#5f5f5f" d="M4,2C2.89,2 2,2.89 2,4V14H4V4H14V2H4M8,6C6.89,6 6,6.89 6,8V18H8V8H18V6H8M12,10C10.89,10 10,10.89 10,12V20C10,21.11 10.89,22 12,22H20C21.11,22 22,21.11 22,20V12C22,10.89 21.11,10 20,10H12Z" />
			</svg>
			</md-icon>
                  <md-select name="category" ng-model="user.category" ng-required="true" ng-change="fetchSubCategories(user.category)">
            <md-option ng-repeat="x in fetchCategoriesResponsePojo.pd" value="{{x.catid}}">{{x.catnam}}</md-option>
            
          </md-select>
           <div ng-messages="createTicketForm.category.$error" role="alert">
          <div ng-message="required">
            Category is required.
          </div>
        </div>
            </md-input-container>
                <md-input-container flex="50">
              <label>Sub Category</label>
              <md-icon>
              	<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#5f5f5f" d="M3,3H9V7H3V3M15,10H21V14H15V10M15,17H21V21H15V17M13,13H7V18H13V20H7L5,20V9H7V11H13V13Z" />
</svg>
              </md-icon>
             <md-select name="subCategory" ng-model="user.subCategory" ng-required="true">
            <md-option value="{{z.subcid}}" ng-repeat="z in fetchSubCategoriesResponsePojo.pd">{{z.subcnam}}</md-option>


          </md-select>
          <div ng-messages="createTicketForm.subCategory.$error" role="alert">
          <div ng-message="required">
            Sub Category is required.
          </div>
        </div>
            </md-input-container>
            </div>
        
            <div layout="row">
                <md-input-container flex="50" >
              <label>Department Name </label>
              <md-icon>
              	<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#5f5f5f" d="M12.6,2.86C15.27,4.1 18,5.39 20.66,6.63C20.81,6.7 21,6.75 21,6.95C21,7.15 20.81,7.19 20.66,7.26C18,8.5 15.3,9.77 12.62,11C12.21,11.21 11.79,11.21 11.38,11C8.69,9.76 6,8.5 3.32,7.25C3.18,7.19 3,7.14 3,6.94C3,6.76 3.18,6.71 3.31,6.65C6,5.39 8.74,4.1 11.44,2.85C11.73,2.72 12.3,2.73 12.6,2.86M12,21.15C11.8,21.15 11.66,21.07 11.38,20.97C8.69,19.73 6,18.47 3.33,17.22C3.19,17.15 3,17.11 3,16.9C3,16.7 3.19,16.66 3.34,16.59C3.78,16.38 4.23,16.17 4.67,15.96C5.12,15.76 5.56,15.76 6,15.97C7.79,16.8 9.57,17.63 11.35,18.46C11.79,18.67 12.23,18.66 12.67,18.46C14.45,17.62 16.23,16.79 18,15.96C18.44,15.76 18.87,15.75 19.29,15.95C19.77,16.16 20.24,16.39 20.71,16.61C20.78,16.64 20.85,16.68 20.91,16.73C21.04,16.83 21.04,17 20.91,17.08C20.83,17.14 20.74,17.19 20.65,17.23C18,18.5 15.33,19.72 12.66,20.95C12.46,21.05 12.19,21.15 12,21.15M12,16.17C11.9,16.17 11.55,16.07 11.36,16C8.68,14.74 6,13.5 3.34,12.24C3.2,12.18 3,12.13 3,11.93C3,11.72 3.2,11.68 3.35,11.61C3.8,11.39 4.25,11.18 4.7,10.97C5.13,10.78 5.56,10.78 6,11C7.78,11.82 9.58,12.66 11.38,13.5C11.79,13.69 12.21,13.69 12.63,13.5C14.43,12.65 16.23,11.81 18.04,10.97C18.45,10.78 18.87,10.78 19.29,10.97C19.76,11.19 20.24,11.41 20.71,11.63C20.77,11.66 20.84,11.69 20.9,11.74C21.04,11.85 21.04,12 20.89,12.12C20.84,12.16 20.77,12.19 20.71,12.22C18,13.5 15.31,14.75 12.61,16C12.42,16.09 12.08,16.17 12,16.17Z" />
</svg>
              </md-icon>
              <md-select ng-model="user.department" ng-change="selectDeptService(user.department)">
                <md-option value="{{x.srid}}" ng-repeat="x in fetchServicesResponsePojo.pd">{{x.name}}</md-option>
             </md-select>
            </md-input-container>
                <md-input-container flex="50">
              <label>Services</label>
              <md-icon>
              	<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#7f7f7f" d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
</svg>
              </md-icon>
              <md-select name="type" ng-model="user.service" >
                <md-option value="{{y.srid}}" ng-repeat="y in fetchDeptServicesResponsePojo.pd">{{y.name}}</md-option>
              </md-select>
            </md-input-container>
           </div>
	
               <md-input-container class="md-block">
              <label>Query's Mode</label>
              <md-icon><svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="7f7f7f" d="M19,8L15,12H18A6,6 0 0,1 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20A8,8 0 0,0 20,12H23M6,12A6,6 0 0,1 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4A8,8 0 0,0 4,12H1L5,16L9,12" />
</svg></md-icon>
              <md-select name="level" ng-model="user.lmode" ng-required="true">
 
            <md-option value="chat">Chat</md-option>
          </md-select>
          <div ng-messages="createTicketForm.level.$error" role="alert">
          <div ng-message="required">
            Mode is required.
          </div>
        </div>
            </md-input-container>
            </div>
            
                <md-input-container class="md-block">
                  <label>Query</label>
                           <textarea   maxlength="600" name="query" id="query" rows="5" ng-required="true"   ng-model="user.query"></textarea>
       	<div ng-messages="createTicketForm.query.$error" role="alert">
          <div ng-message="required">
            Query is required.
          </div>
        </div>
                </md-input-container>
                
         
            <div layout="row">
           <md-input-container flex="50">
          <label>Query type</label>
           <md-select name="qtype" ng-model="user.qtype" ng-required="true">
            <md-option value="General">General</md-option>
            <md-option value="Bug">Bug</md-option>
           <md-option value="Feedback">Feedback</md-option>
            </md-input-container>
          <md-input-container flex="50">
          <label>Status</label>
           <md-select name="status" ng-model="user.status" ng-required="true">
            <md-option value="close">Close</md-option>
            <md-option value="assign">Assign</md-option>
            </md-input-container>
            </div>       
                
            
       
        <div class="custom_button_box1" align="center" layout-margin>
        ng-disabled="!(user.query && user.subCategory && user.mobNo && user.category)"
            <md-button class="md-raised custom-green" ng-click="wrapUpReq(user)" ng-disabled="!(user.user_mno  && user.category && user.query && user.status )" >Submit</md-button>
            <md-button class="md-raised md-primary md-hue-2 md-primary" ng-click="reset(user)">Refresh</md-button>
            <md-button class="md-raised md-primary md-hue-2 md-primary" ng-click="cancel()">Cancel</md-button>
           </div>
  
    </md-card>
    </div>
    </md-dialog>
    </form>
    </div>
    </div>
    </div>
      

		
		  				<div style="display: none">
					<md-card layout-padding>
					<div class="md-dialog-container" id="commonSuccess">
						<md-dialog class="crm-dialog-height">
						<div class="popup-svg" align="center">
							<span><svg style="width: 24px; height: 24px"
									viewBox="0 0 24 24">
    <path fill="#008000"
										d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10.08L23,10M1,21H5V9H1V21Z" />
</svg></span>
							<p>{{successMsg}}</p>
							<div class="custom_button_box custom-green">
								<md-button class="md-raised custom-green" ng-click="cancel()">OK</md-button>
							</div>
						</div>
						</md-dialog>
					</div>
					 </md-card>
				</div>



				<div style="display: none">
					<md-card layout-padding>
					<div class="md-dialog-container" id="commonError">
						<md-dialog style="overflow:hidden; height:auto !important;">
						<div class="popup-svg" align="center">
							<span><svg style="width: 35px; height: 35px"
									viewBox="0 0 24 24">
    <path fill="#ff0000"
										d="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
</svg></span>
							<p>{{errorMsg}}</p>
							<div class="custom_button_box custom-green">
								<md-button class="md-raised custom-green" ng-click="cancel()">OK</md-button>
							</div>
						</div>
						</md-dialog>
					</div>

					</md-card>
				</div>
  
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
     <div style="visibility: hidden">
    <div class="md-dialog-container crm-ticket" id="wrapups" style="height:auto;">
     		<md-dialog>
            <md-list role="list">
              <div class="star-rating"><h4 style="margin:0;">WrapUp Window</h4></div>
            </md-list>
    <form name="createTicketForm">
    	<md-dialog class="umang-dialog crm-tckt-popup" style="min-width:600px;">
	             <md-card flex="100" >
             <div layout="row">
                <md-input-container  flex="50"  >
                <label>Reference ID</label>
                
        <input type="text"   id="mobNo" value="{{x.referenceId}}" disabled="" />
         
                </md-input-container>
                <md-input-container  flex="50">
                <label>User Name</label>
               
                     <input  type="text" value="{{x.name}}" disabled=""/>

                </md-input-container>
                </div>
                
                
                             <div layout="row">
                <md-input-container  flex="50"  >
                <label>Cceid ID/Name</label>
                
        <input type="text"   id="mobNo" value="{{x.cceid}} / {{x.agentName}}" disabled="" />
         
                </md-input-container>
                <md-input-container  flex="50">
                <label>query</label>
               
                     <input  type="text" value="{{x.query}}" disabled=""/>

                </md-input-container>
                </div>
                
                
                
                                
                             <div layout="row">
                <md-input-container  flex="50"  >
                <label>Channel</label>
                
        <input type="text"   id="mobNo" value="{{x.channel}}"  disabled="" />
         
                </md-input-container>
                <md-input-container  flex="50">
                <label>Status</label>
               
                     <input  type="text" value="{{x.status}}" disabled=""/>

                </md-input-container>
                </div>
                        <div class="custom_button_box1" align="center" layout-margin>
<md-button class="md-raised md-primary md-hue-2 md-primary" ng-click="cancel()">Cancel</md-button>
           </div>
              </md-card>
</md-dialog></form></div></div>  
























  <div style="visibility: hidden">
    <div class="md-dialog-container crm-ticket" id="wrapups" style="height:auto;">
    <form name="createTicketForm">
    	<md-dialog class="umang-dialog crm-tckt-popup" style="min-width:1100px;">
    	  <md-list role="list">
              <div class="star-rating"><h4 style="margin:0;">Previous WrapUps</h4></div>
            </md-list>
		<div class="" align="left">
		<md-card class="_md" layout-padding ng-repeat="x in preWrapUpsResponsePojo.pd.calls">

             <div layout="row">
                <md-input-container  flex="40"  >
                <label>Reference ID</label>
        <input type="text"   id="mobNo" value="{{x.referenceId}}" disabled="" />
         </md-input-container>
                
                <md-input-container  flex="30"  >
                <label>Cceid ID/Name</label>
                
        <input type="text"   id="mobNo" value="{{x.cceid}} / {{x.agentName}}" disabled="" />
         
                </md-input-container>

                  <md-input-container  flex="15"  >
                <label>Channel</label>
                
        <input type="text"   id="mobNo" value="{{x.channel}}"  disabled="" />
         			</md-input-container>
         			                <md-input-container  flex="15">
                <label>Status</label>
               <input  type="text" value="{{x.status}}" disabled=""/>
				</md-input-container>
                </div>
                
                
                
                
                                
                             <div layout="row">
                <md-input-container  flex="100">
                <label>query</label>
               
                     <input  type="text" value="{{x.query}}" disabled=""/>

                </md-input-container>

                </div>
        </md-card>
       
        <div class="custom_button_box1" align="center" layout-margin>
            <md-button class="md-raised md-primary md-hue-2 md-primary" ng-click="cancel()">Cancel</md-button></div>
        </div>
		</md-dialog>
		</form>  	
    </div>
  </div>
 -->