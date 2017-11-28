


<!doctype html>
<html ng-app="CRM">
<!-- manifest="../manifest.appcache"  type="text/appcache-manifest" -->
<head>
<meta charset="utf-8">
<meta name="viewport"
	content="minimum-scale=1.0, width=device-width, maximum-scale=0.25, initial-scale=1.0, user-scalable=no">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<title>Umang</title>
<link href="resources/css/angular-material.min.css" rel="stylesheet"
	type="text/css">
<link href="resources/css//angular-material.min.css" rel="stylesheet"
	type="text/css">
<link href="https://fonts.googleapis.com/css?family=Roboto"
	rel="stylesheet">
<link href="resources/css/custom.css" rel="stylesheet" type="text/css">
<!-- <link href="resources/css/chat-style.css" rel="stylesheet" type="text/css">  -->
<link href="resources/css/chat-style1.css" rel="stylesheet"
	type="text/css">
<script type="text/javascript" src="resources/js/jquery/jquery.min.js"></script>
<script type="text/javascript" src="resources/js/jquery/google.js"></script>
<script type="text/javascript"
	src="resources/js/jquery/transliteration.I.js"></script>
<link rel="stylesheet" type="text/css"
	href="resources/css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css"
	href="resources/css/font-awesome.min.css" />
<!-- <link type="text/css" rel="stylesheet" href="http://fonts.googleapis.com/css?family=Montserrat:400,700"> -->
<link rel="stylesheet" type="text/css"
	href="resources/css/customerChatBox.css" />
  <!-- email css -->
<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.css">
     <link rel="stylesheet" href="resources/css/mail.css">
     <link href="https://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
<!-- Custom JS -->
<script src='https://www.google.com/recaptcha/api.js'></script>
<script src="resources/js/angular/angular.min.js"></script>
<script src="resources/js/angular/angular-animate.min.js"></script>
<script src="resources/js/angular/angular-aria.min.js"></script>
<script src="resources/js/angular/angular-material.min.js"></script>
<script src="resources/js/angular/angular-messages.min.js"></script>
<script src="resources/js/angular/SHA256.js"></script>
<script src="resources/js/angular/angular-route.js"></script>
<script src="resources/js/angular/angular-sanitize.min.js"></script>
<script src="resources/js/main/CRM11.js?v=91"></script>
<style>
.se-pre-con {
	position: fixed;
	left: 0px;
	top: 0px;
	width: 100%;
	height: 100%;
	z-index: 9999;
	background: url(/CRM/resources/images/process.gif) center no-repeat #fff;
	background-size: 125px 125px;
}

.md-dialog-container, md-dialog {
	height: 100% !important;
}

md-content {
	overflow: auto !important;
}

.position-fixed {
	position: fixed !important;
}

.right-room {
	margin-left: 320px;
	margin-top: 65px;
}

@media screen and (max-width:1280px) {
	.right-room {
		margin-left: 0px;
	}
}

@media screen and (min-width:1280px) {
	.top-bar {
		margin-left: 320px;
		width: 79%;
	}
}

<!--
chat css -->.panel {
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
	float: none;
	margin-right: 0px;
	display: inline-block;
}

.my-chat-space {
	position: fixed;
	bottom: 0;
	width: 100%;
	z-index: 1000;
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
	border-color: transparent -moz-use-text-color transparent #ffffff
		!important;
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

</head>
<div id="loaderId" class="se-pre-con"></div>
<div id="loaderText"
	style="display: none; position: fixed; left: 0px; top: 375px; width: 100%; height: 100%; z-index: 9999; text-align: center; vertical-align: middle;">Dear
	User, We are re-trying to get status of your request. Please wait while
	we re-try</div>

<body id="agentChat">
	<!-- <div style="width:100%;height:100px;background:yellow;position:fixed">
	  d,mbdbfjbfkjbfkjbfkjff 
	</div> -->

	<div layout="column" ng-controller="myCtrlController">
		<section layout="row" flex>
			<md-sidenav ng-show="flagHideDrawer==true" flex="25"
				class="md-sidenav-left position-fixed" md-component-id="left"
				md-is-locked-open="$mdMedia('gt-md')" md-whiteframe="4">

			<md-toolbar class="md-theme-indigo">
			<h1 class="md-toolbar-tools logomainn">
				<img src="/CRM/resources/images/logo-umang1.png" />
			</h1>
			</md-toolbar> <md-content layout-padding> <md-button
				ng-click="close1()" class="md-primary" hide-gt-md> Close
			Sidenav Left </md-button> <md-list-item class="secondary-button-padding"
				ng-click="viewDetails()" ng-if="flagAdmin=='true' || flagTL=='true'">
			<i class="fa fa-ticket" aria-hidden="true"></i>
			<p>Dashboard</p>
			</md-list-item> <md-list-item class="secondary-button-padding"
				ng-click="viewTicket()"
				ng-if="ivrFlag=='true'  || flagTL=='true' || chatFlag=='true' || smsFlag=='true'">
			<i class="fa fa-cog" aria-hidden="true"></i>
			<p>Dashboard</p>
			</md-list-item> <md-list-item class="secondary-button-padding"
				ng-click="createTicket()"> <i class="fa fa-ticket"
				aria-hidden="true"></i>
			<p>Create Ticket</p>
			</md-list-item> <md-list-item class="secondary-button-padding"
				ng-click="showPrerenderedDialog($event)"
				ng-if="ivrFlag=='true' || flagAdmin=='true' || flagTL=='true'">
			<i class="fa fa-microphone" aria-hidden="true"></i>
			<p>IVR</p>
			</md-list-item> <md-list-item class="secondary-button-padding"
				ng-click="ticketHistory()"> <i class="fa fa-ticket"
				aria-hidden="true"></i>
			<p>Ticket History</p>
			</md-list-item> <md-list-item class="secondary-button-padding"
				ng-click="fetchServices()"> <i
				class="fa fa-arrow-down" aria-hidden="true"></i>
			<p>Fetch Services</p>
			</md-list-item> <md-list-item class="secondary-button-padding"
				ng-click="viewAgents()" ng-if="flagAdmin=='true'"><!-- ng-hide="flagTL==false" -->
			<i class="fa fa-wrench" aria-hidden="true"></i>
			<p>Control Panel</p>
			</md-list-item> <md-list-item class="secondary-button-padding"
				ng-click="viewPendingDtls()"
				ng-if="flagAdmin=='true'|| flagTL=='true'"> <i
				class="fa fa-info-circle" aria-hidden="true"></i>
			<p>View Pending Details</p>
			</md-list-item> 
			<md-list-item id="listItmID" ng-disabled="false"
				class="secondary-button-padding" ng-style="isChatEnabled===true&&{'background-color':'green'}" ng-click="isChatEnabled===true||getChat()"
				ng-if="chatFlag=='true' || flagTL=='true'"> <i
				class="fa fa-commenting" aria-hidden="true"></i>
			<p>Chat</p>
			</md-list-item>
			 <md-list-item class="secondary-button-padding"
				ng-click="getEmails()"
				ng-if="emailFlag=='true' || flagAdmin=='true' || flagTL=='true'"><!-- ng-if="emailFlag=='true'" -->
			<i class="fa fa-envelope" aria-hidden="true"></i>
			<p>Emails</p>
			</md-list-item> <md-list-item class="secondary-button-padding"
				ng-click="getViewFeedbacks()"
				ng-if="flagViewer=='true' || flagAdmin=='true' || flagTL=='true'">
			<i class="fa fa-commenting" aria-hidden="true"></i>
			<p>View Feedbacks</p>
			</md-list-item> <md-list-item class="secondary-button-padding"
				ng-click="viewLiveAgents()"
				ng-if=" flagAdmin=='true' || flagTL=='true'"> <i
				class="fa fa-history" aria-hidden="true"></i>
			<p>View Live History</p>
			</md-list-item> <md-list-item class="secondary-button-padding"
				ng-click="breakTimeReq()"
				ng-if="ivrFlag=='true' || chatFlag=='true'"> <i
				class="fa fa-comments" aria-hidden="true"></i>
			<p>Break time</p>
			</md-list-item> <md-list-item class="secondary-button-padding"
				ng-click="ivrKpiRptReq()" ng-if="flagAdmin=='true'">
			<i class="fa fa-list-ol" aria-hidden="true"></i>
			<p>Ivr Report</p>
			</md-list-item> <md-list-item class="secondary-button-padding"
				ng-click="colRptReq()" ng-if="flagAdmin=='true'"> <i
				class="fa fa-users" aria-hidden="true"></i>
			<p>CRM Report</p>
			</md-list-item> <md-list-item class="secondary-button-padding"
				ng-click="chatkpirpt()" ng-if="flagAdmin=='true'"> <i
				class="fa fa-commenting" aria-hidden="true"></i>
			<p>Chat Report</p>
			</md-list-item> <md-list-item class="secondary-button-padding"
				ng-click="ivrDtlsRpt()" ng-if="flagAdmin=='true'"> <i
				class="fa fa-bars" aria-hidden="true"></i>
			<p>IVR Detail Report</p>

			</md-list-item> <md-list-item class="secondary-button-padding"
				ng-click="chatDtlRpt()" ng-if="flagAdmin=='true'"> <i
				class="fa fa-comments" aria-hidden="true"></i>
			<p>Chat Detail Report</p>
			</md-list-item> <md-list-item class="secondary-button-padding"
				ng-click="viewSlaRpt()" ng-if="flagAdmin=='true'"> <i
				class="fa fa-comments" aria-hidden="true"></i>
			<p>SLA Report</p>
			</md-list-item> <md-list-item class="secondary-button-padding"
				ng-click="ivrHrWiseRpt()" ng-if="flagAdmin=='true'">
			<i class="fa fa-comments" aria-hidden="true"></i>
			<p>IVR Hour Wise Report</p>
			</md-list-item> 
			<md-list-item class="secondary-button-padding"
				ng-click="emailDtlRpt()" ng-if="flagAdmin=='true'"> <i
				class="fa fa-comments" aria-hidden="true"></i>
			<p>Email Detail Report</p>
			</md-list-item> 
			<md-list-item class="secondary-button-padding"
				ng-click="agentPerfRpt()" ng-if="flagAdmin=='true'"> <i
				class="fa fa-comments" aria-hidden="true"></i>
			<p>Agent Performance report</p>
			</md-list-item>
			<md-list-item class="secondary-button-padding"
				ng-click="pendingWrapups()" ng-if="flagAdmin=='true'"> <i
				class="fa fa-comments" aria-hidden="true"></i>
			<p>Pending wrapups</p>
			</md-list-item>
			<!--    			<md-list-item class="secondary-button-padding" ng-click="logout()">
			<p>Logout</p>
			</md-list-item>   --> </md-content> </md-sidenav>


			<div layout="column" class="layout-column flex marrginleft24"
				flex="75">
				<md-toolbar layout="row"
					class="md-theme-indigo position-fixed top-bar"
					ng-show="flagHideDrawer==true">
				<h1 class="md-toolbar-tools welcome_titlemain">
					<span ng-click="toggleLeft()" hide-gt-md><md-button
							class="md-icon-button md-primary" aria-label="Settings">
						<svg style="width: 24px; height: 24px" class="md-primary"
							viewBox="0 0 24 24">
    <path fill="#fff" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
</svg></span><span class="welcomtextmsg">Welcome {{userType}}</span>

					<div class="user-profile logoutbtntop" layout="column"
						layout-align="center end">

						<md-button class="md-raised" ng-click="logout()">Logout</md-button>


					</div>
				</h1>
				</md-toolbar>

				<md-content ng-view class="right-content right-room" flex>
				</md-content>


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
			</div>
		</section>



		<!-- chat module -->
		<div id="agentChat">
			<!-- 		      <div id="content">
         <input type="checkbox" name="check" id="check">
         <label for="check">
            <div id="heads" >
               <span id="commentBubble"><img src="https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAmgAAAAJDg4NGNmYzVhLTAzNDUtNDBiNS1iZmJiLTUyOWQyNjE3ZWU5OQ.jpg" alt="" /></span>
               <span id="commentBubble"><img src="https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAmgAAAAJDg4NGNmYzVhLTAzNDUtNDBiNS1iZmJiLTUyOWQyNjE3ZWU5OQ.jpg" alt="" /></span>
               <span id="commentBubble" ><img src="https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAmgAAAAJDg4NGNmYzVhLTAzNDUtNDBiNS1iZmJiLTUyOWQyNjE3ZWU5OQ.jpg" alt="" /></span>
               <span id="commentBubble"><img src="https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAmgAAAAJDg4NGNmYzVhLTAzNDUtNDBiNS1iZmJiLTUyOWQyNjE3ZWU5OQ.jpg" alt="" /></span>
               <span id="commentBubble"><img src="https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAmgAAAAJDg4NGNmYzVhLTAzNDUtNDBiNS1iZmJiLTUyOWQyNjE3ZWU5OQ.jpg" alt="" /></span>
               <span id="commentBubble">
               <a href="" class="entypo-comment"><i class="entypo-flash"></i></a>
               </span>
            </div>

         </label>
      </div> -->
			<div class="my-chat-space"></div>
			<!-- 	Begin page content
	 start  -->
			<div class="example-chat-window" style="display: none">
				<div class="consumer-chat-container" data-userjid="" data-chatid=""
					data-fbchatid="" data-chatuniqueid="" data-jid="" ref-Id="">
					<div class="crm-chat_window">

						<div class="top_menu">
							<div class="title">
								<svg style="width: 16px; height: 16px" viewBox="0 0 24 24">
            <path fill="#41c822"
										d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />
        </svg>
								<span class="chat_namesite">UMANG</span> <span class="usrIdUni"
									id="userName"></span>
								<!--  <span>CCE is typing...</span> -->
								<select name="langpair" style="height: 32px; padding: 0;"
									class="langpair" id="langpair" size="1">
									<option value="ENGLISH">Select one...</option>
									<!-- this is more more UX to me says, "hey, change me and Ill do something..."-->
									<option value="ENGLISH">ENGLISH</option>
									<option value="BENGALI">BENGALI</option>
									<option value="GUJARATI">GUJARATI</option>
									<option value="HINDI">HINDI</option>
									<option value="KANNADA">KANNADA</option>
									<option value="MALAYALAM">MALAYALAM</option>
									<option value="MARATHI">MARATHI</option>
									<option value="ORIYA">ORIYA</option>
									<option value="PUNJABI">PUNJABI</option>
									<option value="TAMIL">TAMIL</option>
									<option value="TELUGU">TELUGU</option>
									<option value="URDU">URDU</option>
								</select>
							</div>
							<audio id="audio" src="/CRM/resources/images/beep.wav"></audio>
							<div class="buttons">

								<svg style="width: 20px; height: 20px" viewBox="0 0 24 24"
									class="miniMize_window" id="TEST"
									onclick="minimizeWindow(this.id)">
			<path fill="#fff" d="M20,14H4V10H20" />
		</svg>
								&nbsp;
								<!--  onclick="wrapChat1(this.id)" -->

								<svg style="width: 20px; height: 20px" viewBox="0 0 24 24"
									class="wCls" id="wId" datajid="" onclick='wrapChat1(this)'>
    <path fill="#fff"
										d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z" />
			</svg>

								<svg style="width: 20px; height: 20px" viewBox="0 0 24 24"
									class="wClss" id="wrId" onclick="wrapChat2(this.id)">
    <path fill="#fff"
										d="M21,5H3V7H21V5M3,19H10V17H3V19M3,13H18C19,13 20,13.43 20,15C20,16.57 19,17 18,17H16V15L12,18L16,21V19H18C20.95,19 22,17.73 22,15C22,12.28 21,11 18,11H3V13Z" />
</svg>

								<svg style="width: 20px; height: 2opx" viewBox="0 0 24 24"
									class="chat-close">
					<path fill="#fff"
										d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
		 		</svg>






							</div>
						</div>

						<div class="close-this-window" data-chatid="" data-fbchatid=""
							data-chatuniqueid="" ref-Id="">
							<div id="demo-chat-body" class="collapse in chatroom-height">
								<div class="nano has-scrollbar">
									<div id="" class="nano-content pad-all pad-topbot0 pad-left5"
										tabindex="0" style="right: -17px;">
										<ul id="message"
											class="list-unstyled media-block user-chat-ul messages">

										</ul>
									</div>
									<div class="nano-pane">
										<div class="nano-slider"
											style="height: 141px; transform: translate(0px, 0px);"></div>
									</div>
								</div>

								<!--Widget footer-->
								<div class="panel-footer">
									<div class="row bottom_wrapper clearfix">
										
										<button title="End Chat"  class="md-fab md-primary2 chat-user-icon endMessage">
											<img src="resources/images/stop_chat.png" alt="">
										</button>
										<script>
										
</script>
										<div class="chat_inout_area">
											<!-- 		<input type="text" id="" placeholder="Enter your text" class="form-control chat-input message-text">
 -->
											<textarea rows="4" cols="5" id="message-text"
												placeholder="Enter your message here..."
												class="form-control chat-input message-text"></textarea>

										</div>


										<button class="md-fab md-primary2 chat-user-icon sendMessage"
											style="float: right;">

										
											<img src="resources/images/btn-send.png" alt="">

										</button>	

									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
			<!--  end  -->

			<div style="display: none">
	<md-card layout-padding>
	<div class="md-dialog-container" id="createTicketPopUp">
		<form name="createTicketForm1" class="createTicketForm1class">
			<md-dialog class="crm-dialog-height minwidthsize">
			  <md-card flex="100">
			  <md-content> 
				 <div id = "dialogContainer" layout = "row" ng-cloak>			         
			           <md-list role="list">
							<div class="star-rating layout-padding text-center">
								<h4 style="margin: 0;">WrapUp Window</h4>
							</div>
						</md-list>			         	 
			      </div>
			      <div layout="row" class="layout-row">
					<md-input-container flex="50" class="plus_91 flex-50">
					<strong
						style="width: 50%; text-align: center; float: left; font-size: 15px;">Aadhaar
						status</strong> <span style="padding-left: 0px;" class="ng-binding">{{aadhaarStatus}}</span>
					</md-input-container>
					<md-input-container flex="50" class="flex-50">
					<strong
						style="width: 50%; text-align: center; float: left; font-size: 15px;">State</strong>
					<span style="padding-left: 0px;" class="ng-binding">{{state}}</span>
					</md-input-container>
				</div>
				<div layout="row" class="layout-row">
					<md-input-container flex="50" class="plus_91 flex-50">
					<strong
						style="width: 50%; text-align: center; float: left; font-size: 15px;">Email
						authentication</strong> <span style="padding-left: 0px;" class="ng-binding">{{emailAuth}}</span>
					</md-input-container>
	
				</div>
				<div layout="row" class="layout-row layout-padding">
					<md-input-container flex="50"
						class="plus_91 md-icon-left flex-50 md-input-has-value" style="">
					<label class="md-required" for="mobNo">Mobile Number</label> <md-icon
						class="material-icons"> <svg
						style="width: 24px; height: 24px" viewBox="0 0 24 24">
	                           <path fill="#7f7f7f"
							d="M17.25,18H6.75V4H17.25M14,21H10V20H14M16,1H8A3,3 0 0,0 5,4V20A3,3 0 0,0 8,23H16A3,3 0 0,0 19,20V4A3,3 0 0,0 16,1Z"></path>
	                        </svg> </md-icon> <input name="mobNo" autocomplete="off"
						id="mobNo" ng-model="user.user_mno" mobile-length-directive=""
						maxlength="10" ng-required="true" no-special-directive=""
						ng-pattern="/^[7-9][0-9]{9}$/"
						class="md-input ng-valid-maxlength ng-dirty ng-valid-parse ng-touched ng-not-empty ng-valid-required ng-valid ng-valid-pattern"
						required="required" aria-invalid="false" style="" type="tel">
					<div class="md-errors-spacer"></div>
					<div ng-messages="createTicketForm1.mobNo.$error" role="alert"
						class="md-input-messages-animation md-auto-hide ng-inactive"
						aria-live="assertive">
						<!-- ngMessage: required -->
						<!-- ngMessage: pattern -->
					</div>
					</md-input-container>
					<md-input-container flex="50"
						class="md-icon-left flex-50 md-input-has-value">
					<label for="fatherName">User Name</label> <md-icon
						class="material-icons"> <svg
						style="width: 24px; height: 24px" viewBox="0 0 24 24">
	                           <path fill="#7f7f7f"
							d="M12,2A2,2 0 0,1 14,4A2,2 0 0,1 12,6A2,2 0 0,1 10,4A2,2 0 0,1 12,2M10.5,7H13.5A2,2 0 0,1 15.5,9V14.5H14V22H10V14.5H8.5V9A2,2 0 0,1 10.5,7Z"></path>
	                        </svg> </md-icon> <input name="fatherName" id="fatherName"
						ng-model="user.ufathers_name" maxlength="50"
						characters-only-directive="" no-special-directive=""
						class="ng-pristine ng-untouched ng-valid md-input ng-valid-maxlength ng-not-empty"
						aria-invalid="false" style="" type="text">
					<div class="md-errors-spacer"></div>
					</md-input-container>
				</div>
				<div layout="row" class="layout-row layout-padding">
					<md-input-container flex="50" class="flex-50">
					<label>Category</label> <md-select name="category"
						ng-model="user.category" ng-required="true"
						ng-change="fetchSubCategories(user.category)"> <md-option
						ng-repeat="x in fetchCategoriesResponsePojo.pd" value="{{x.catid}}">{{x.catnam}}</md-option>
	
					</md-select> </md-input-container>
					<md-input-container flex="50" class="flex-50">
					<label>Languages</label> <md-select name="language"
						ng-model="user.language1" ng-required="true"> <md-option
						ng-repeat="x in languages" value="{{x.id}}">{{x.language}}</md-option>
	
					</md-select> </md-input-container>
				</div>
				<div layout="row" class="layout-row layout-padding">
					<md-input-container flex="50" class="flex-50">
					<label>Department Name </label> <md-select
						ng-model="user.department"
						ng-change="selectDeptService(user.department)"
						ng-disabled="!disFlag"> <md-option value="{{x.srid}}"
						ng-repeat="x in fetchServicesResponsePojo.pd">{{x.name}}</md-option>
					</md-select> </md-input-container>
					<md-input-container flex="50" class="flex-50">
					<label>Services</label> <md-select name="type"
						ng-model="user.service" ng-disabled="!deptFlag || !disFlag">
					<md-option value="{{y.srid}}"
						ng-repeat="y in fetchDeptServicesResponsePojo.pd">{{y.name}}</md-option>
					</md-select> </md-input-container>
				</div>
				<md-input-container class="md-block" ng-show="disFlag==false">
					<label>Remarks</label> <textarea maxlength="600" name="rmks"
						id="rmks" rows="5" ng-required="true" ng-model="user.rmks"></textarea>
					<div ng-messages="createTicketForm1.rmks.$error" role="alert">
						<div ng-message="required">Remarks is required.</div>
					</div>
					</md-input-container>
					<div layout="row" class="layout-row layout-padding">
						<md-input-container flex="100" class="md-block md-input-invalid">
						<label class="md-required" for="query">Query</label> <textarea
							maxlength="600" name="query" id="query" rows="5" ng-required="true"
							ng-model="user.query"
							class="ng-pristine md-input ng-empty ng-invalid ng-invalid-required ng-valid-maxlength ng-touched"
							required="required" aria-invalid="true" style="height: 135px;"></textarea>
		
						</md-input-container>
					</div>
					<div layout="row" class="layout-row layout-padding">
						<md-input-container flex="50" class="flex-50">
						<label>Query types</label> <md-select name="qtype"
							ng-model="user.qtype" ng-required="true"> <md-option
							value="General">General</md-option> <md-option value="Bug">Bug</md-option>
						<md-option value="Feedback">Feedback</md-option></md-select> </md-input-container>
						<md-input-container flex="50" class="flex-50">
						<label>status</label> <md-select name="status"
							ng-model="user.status" ng-required="true"> <md-option
							value="close">Close</md-option> <md-option value="assign">Assign</md-option></md-select>
						</md-input-container>
					</div>
					<div class="custom_button_box1" align="center" layout-margin>
						<md-button class="md-raised custom-green" ng-click="wrapUpReq(user)"
							ng-disabled="!(user.query  && user.status && user.user_mno && user.category && user.language1 )">Submit</md-button>
						<md-button class="md-raised md-primary md-hue-2 md-primary"
							ng-click="reset(user)">Refresh</md-button>
						<md-button class="md-raised md-primary md-hue-2 md-primary"
							ng-click="cancel()">Cancel</md-button>
					</div>
				</md-content>
			  </md-card>
		    </md-dialog>
	</div>
	</md-card>
</div>

			
		
		</div>



		<div style="display: none">
			<md-card layout-padding>
			<div class="md-dialog-container" id="commonSuccess11">
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
			<div class="md-dialog-container" id="commonError11">
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
			<div class="md-dialog-container crm-ticket" id="wrapups"
				style="height: auto; z-index: 10001">
				<md-dialog class="umang-dialog Previous_WrapUps_main crm-tckt-popup"
					style="min-width:1100px;"> <md-list role="list">
				<div class="star-rating">
					<h4 style="margin: 0;">Previous WrapUps</h4>
				</div>
				</md-list>
				<div class="" align="left">
					<md-card class="_md" layout-padding
						ng-repeat="x in preWrapUpsResponsePojo.pd.calls">

					<div layout="row">
						<md-input-container flex="40"> <label>Reference
							ID</label> <input type="text" id="mobNo" value="{{x.referenceId}}"
							disabled="" /> </md-input-container>

						<md-input-container flex="30"> <label>Cceid
							ID/Name</label> <input type="text" id="mobNo"
							value="{{x.cceid}} / {{x.agentName}}" disabled="" /> </md-input-container>

						<md-input-container flex="15"> <label>Channel</label>

						<input type="text" id="mobNo" value="{{x.channel}}" disabled="" />
						</md-input-container>
						<md-input-container flex="15"> <label>Status</label>
						<input type="text" value="{{x.status}}" disabled="" /> </md-input-container>
					</div>





					<div layout="row">
						<md-input-container flex="100"> <label>query</label>

						<input type="text" value="{{x.query}}" disabled="" /> </md-input-container>

					</div>
					</md-card>

					<div class="custom_button_box1" align="center" layout-margin>
						<md-button class="md-raised md-primary md-hue-2 md-primary"
							ng-click="cancel()">Cancel</md-button>
					</div>
				</div>
				</md-dialog>
			</div>
		</div>


	</div>
</body>

<script src="resources/js/controllers/loginController11.js"></script>
<script src="resources/js/factory/loginFactory.js?v=2"></script>
<script src="resources/js/controllers/fetchTerminalIdController.js"></script>
<script src="resources/js/factory/fetchTerminalIdFactory.js?v=2"></script>
<script src="resources/js/factory/sendSmsFactory.js?v=15"></script>
<script src="resources/js/factory/logoutFactory.js?v=15"></script>
<script src="resources/js/controllers/crmController.js?v=10"></script>
<script src="resources/js/factory/crmFactory.js?v=15"></script>
<script src="resources/js/directives/mobNumbers.js"></script>
<script src="resources/js/directives/noSpecialDirective.js"></script>
<script src="resources/js/directives/charactersOnlyDirective.js"></script>
<script src="resources/js/directives/numbersOnly.js"></script>
<script src="resources/js/controllers/imageUplaod.js"></script>
<script src="resources/js/controllers/picUploadController.js?v=10"></script>
<script src="resources/js/factory/picUploadFactory.js?v=15"></script>
<script src="resources/js/factory/addAgentFactory.js?v=15"></script>
<script src="resources/js/controllers/ForgotPasswordController.js?v=10"></script>
<script src="resources/js/factory/forgotPasswordFactory.js?v=15"></script>
<script src="resources/js/controllers/ticketHistoryController.js?v=10"></script>
<script src="resources/js/factory/ticketHistoryFactory.js?v=15"></script>
<script src="resources/js/controllers/fetchServicesController.js?v=15"></script>
<script src="resources/js/factory/fetchServicesFactory.js?v=15"></script>
<script src="resources/js/controllers/createTicketController.js?v=15"></script>
<script src="resources/js/factory/createTicketFactory.js?v=15"></script>
<script src="resources/js/controllers/viewCceDetailsController.js?v=15"></script>
<script src="resources/js/factory/viewCceDetailsFactory.js?v=15"></script>
<script src="resources/js/controllers/addAgentController.js?v=15"></script>
<script src="resources/js/factory/addAgentFactory.js?v=15"></script>
<script src="resources/js/controllers/resetPasswordController.js?v=15"></script>
<script src="resources/js/factory/resetPasswordFactory.js?v=15"></script>
<script
	src="resources/js/controllers/editAgentDetailsController.js?v=15"></script>
<script src="resources/js/factory/editAgentDetailsFactory.js?v=15"></script>
<script src="resources/js/controllers/viewDetailsController.js?v=15"></script>
<script src="resources/js/factory/viewDetailsFactory.js?v=15"></script>
<script src="resources/js/controllers/userDetailsController.js?v=15"></script>
<script src="resources/js/factory/userDetailsFactory.js?v=15"></script>
<script src="resources/js/factory/userDetailsFactory.js?v=15"></script>
<script
	src="resources/js/controllers/viewEmailController.js?v=15"></script>
<script src="resources/js/factory/viewCcePendingHistoryFactory.js?v=15"></script>
<script src="resources/js/controllers/manageCategoryController.js?v=15"></script>
<script src="resources/js/factory/manageCategoryFactory.js?v=15"></script>
<script
	src="resources/js/controllers/agentChatHistoryController11.js?v=16"></script>
<script src="resources/js/factory/agentChatHistoryFactory.js?v=16"></script>
<script type="text/javascript" src="resources/js/jquery/jquery.min.js"></script>
<script type="text/javascript"
	src="resources/js/jquery/bootstrap.min.js"></script>
<script type="text/javascript" src="resources/js/jquery/strophe.js"></script>
<script src="resources/js/controllers/otherController.js?v=15"></script>
<script src="resources/js/controllers/feedBackController.js?v=15"></script>
<script src="resources/js/controllers/wrapUpController.js?v=15"></script>
<script src="resources/js/factory/wrapUpFactory.js?v=16"></script>
<script src="resources/js/factory/feedbackFactory.js?v=16"></script>
<script src="resources/js/controllers/FetchEmailsController.js?v=15"></script>
<script src="resources/js/factory/fetchEmailsFactory.js?v=16"></script>
<script src="resources/js/controllers/emailHisController.js?v=15"></script>
<script src="resources/js/factory/emaiHisFactory.js?v=16"></script>
<script src="resources/js/controllers/fetchChatRptController.js?v=15"></script>
<script src="resources/js/factory/fetchChatReportFactory.js?v=16"></script>

<script src="resources/js/controllers/fetchIvrRptController.js?v=15"></script>
<script src="resources/js/factory/fetchIvrReportFactory.js?v=16"></script>
<script src="resources/js/factory/table2ExcelFactory.js?v=16"></script>
<script src="resources/js/controllers/viewLiveAgentsController.js?v=15"></script>
<script src="resources/js/controllers/breakController.js?v=15"></script>
<script src="resources/js/factory/breakFactory.js?v=16"></script>
<script src="resources/js/controllers/ivrKpiRptController.js?v=15"></script>
<script src="resources/js/factory/ivrKpiRptFactory.js?v=16"></script>
<script src="resources/js/controllers/crmCollectiveRptController.js?v=15"></script>
<script src="resources/js/factory/crmCollectiveRptFactory.js?v=16"></script>

<script src="resources/js/controllers/chatKpiReportController.js?v=15"></script>
<script src="resources/js/controllers/ivrDetailRptController.js?v=15"></script>
<script src="resources/js/controllers/chatDtlsRptController.js?v=15"></script>
<script src="resources/js/controllers/slaReportController.js?v=15"></script>
<script src="resources/js/controllers/ivrHourWiseRptController.js?v=15"></script>
<script src="resources/js/controllers/emailDtlRptController.js?v=15"></script>
<script src="resources/js/controllers/agentPerformanceRptController.js?v=15"></script>
<script src="resources/js/controllers/fetchPendingWrapupController.js?v=15"></script>
<script src="resources/js/factory/fetchPendingWrapupFactory.js?v=16"></script>






<!-- 	<script type="text/javascript" src="resources/js/jquery/agentChatBot.js"></script> -->

<!--  -->
<script>
	crm
			.controller(
					'myCtrlController',
					function($scope, $window, $timeout, $mdSidenav, $log,
							$mdDialog, $location, $rootScope, loginFactory,
							logoutFactory) 
					 {
						
						if(localStorage.getItem("isChatLogin")=="true")
						{
							$scope.isChatEnabled=true;	
							//$("#listItmID").css("background","green");
						}
						$rootScope.popUpFlag = "false";
						$rootScope.flagHideDrawer = false;
						$rootScope.flagCtrlPanel == false;
						$scope.breakFlag = false;
						var agentLoginStatus;
						var loginStatus;
						var isAgentLogout = true;
						$("#listItmID").css("background", "white");
						$scope.toggleLeft = buildDelayedToggler('left');
						$scope.toggleRight = buildToggler('right');
						$scope.isOpenRight = function() {
							return $mdSidenav('right').isOpen();
						};

						function debounce(func, wait, context) {
							var timer;

							return function debounced() {
								var context = $scope, args = Array.prototype.slice
										.call(arguments);
								$timeout.cancel(timer);
								timer = $timeout(function() {
									timer = undefined;
									func.apply(context, args);
								}, wait || 10);
							};
						}

						function buildDelayedToggler(navID) {
							return debounce(function() {
								$mdSidenav(navID).toggle().then(function() {
									$log.debug("toggle " + navID + " is done");
								});
							}, 200);
						}

						function buildToggler(navID) {
							return function() {
								$mdSidenav(navID).toggle().then(function() {
									$log.debug("toggle " + navID + " is done");
								});
							}
						}

						$scope.close1 = function() {
							$mdSidenav('left').close().then(function() {
								$log.debug("close LEFT is done");
							});

						};

						$scope.ticketHistory = function() {
							$scope.close1();
							$location.path("/ticketHistory");
						}
						$scope.fetchServices = function() {
							$scope.close1();
							$location.path("/fetchServicess");
						}
						$scope.viewTicket = function() {
							$scope.close1();
							$location.path("/crm");
						}
						$scope.showPrerenderedDialog = function(ev) {
							$scope.close1();
							$location.path("/wrapUp");

						}
						$scope.createTicket = function(ev) {
							$scope.close1();
							$location.path("/createTicket");

						}
						$scope.viewAgents = function() {
							$scope.close1();
							$location.path("/viewAgents");
						}
						$scope.viewDetails = function() {
							$scope.close1();
							$location.path("/viewDetails");
						}
						$scope.UserDetails = function() {
							$scope.close1();
							$location.path("/userDetails");
						}
						$scope.viewPendingDtls = function() {
							$scope.close1();
							$location.path("/viewPending");
						}
						$scope.getChat = function() {
							$scope.close1();
							$scope.startChat();
						}
						$scope.getViewFeedbacks = function() {
							$scope.close1();
							$location.path("/vFeedback");
						}
						$scope.getEmails = function() {
							$scope.close1();
							$location.path("/fetchMails");
						}
						$scope.emailHis = function() {
							$scope.close1();
							$location.path("/emailHis");
						}

						$scope.viewLiveAgents = function() {
							$scope.close1();
							$location.path("/viewLiveAgents");
						}
						$scope.breakTimeReq = function() {
							$scope.close1();
							$location.path("/breakTime");
						}
						$scope.ivrKpiRptReq = function() {
							$scope.close1();
							$location.path("/ivrKpiRpt");
						}
						$scope.colRptReq = function() {
							$scope.close1();
							$location.path("/crmColRpt");
						}
						$scope.chatkpirpt = function() {
							$scope.close1();
							$location.path("/chtKpiRpt");
						}
						$scope.ivrDtlsRpt = function() {
							$scope.close1();
							$location.path("/ivrDtlsRpt");
						}
						$scope.chatDtlRpt = function() {
							$scope.close1();
							$location.path("/chtDtlRpt");
						}
						$scope.viewSlaRpt = function() {
							$scope.close1();
							$location.path("/slaRpt");
						}
						$scope.ivrHrWiseRpt = function() {
							$scope.close1();
							$location.path("/ivrHrWise");
						}
						$scope.emailDtlRpt = function() {
							$scope.close1();
							$location.path("/emailRpt");
						}
						$scope.agentPerfRpt = function() {
							$scope.close1();
							$location.path("/agentPerfRpt");
						}
						$scope.pendingWrapups = function() {
							$scope.close1();
							$location.path("/fetchPenWrapup");
						}
						$scope.startChat = function() 
						{
							if (localStorage.getItem("conid") != ""
									|| localStorage.getItem("conid") != undefined) 
							{
								$scope.isChatEnabled=true;
							
								$scope.loginRequest = loginFactory
										.getLoginReq();
								$scope.LoginRequestPojo.uname = localStorage
										.getItem("userid");
								$scope.LoginRequestPojo.pwd = localStorage
										.getItem("pwd11");//SHA256(obj.pswd);
								$scope.LoginRequestPojo.lang = "en";
								$scope.LoginRequestPojo.ip = "";
								$scope.LoginRequestPojo.connectionid = localStorage
										.getItem("userid").toLowerCase()
										+ "@reporting.umang.gov.in";
								$scope.LoginRequestPojo.sessionid = localStorage
										.getItem("conid");
								getConnect($scope.LoginRequestPojo.uname,
										$scope.LoginRequestPojo.pwd);
								loginFactory
										.login1($scope.LoginRequestPojo)
										.success(
												function(data) {
													console.log(data);
													$scope.LoginResponsePojo = data;
													if ($scope.LoginResponsePojo.rs == "S") 
													{
														localStorage.setItem("isChatLogin",true);
														$scope.breakFlag = true;
														$scope.loginDetails = $scope.LoginResponsePojo;
														$rootScope.btnFlag = true;
														$("#listItmID").css(
																"background",
																"green");
														// getConnect($scope.LoginRequestPojo.uname,$scope.LoginRequestPojo.pwd);
														$scope
																.commomSuccessPopUp("Dear agent, Now you are enabled at chat");
													} else 
													{
														$scope.isChatEnabled=false;
														console
																.log("---------------------");
														$scope
																.commomErrorPopUp($scope.LoginResponsePojo.rd);
														$rootScope.btnFlag = false;

													}
												}).error(function(error) {

										})
							}
							else 
							{
								alert("Please wait till connection establish .");
							}

						}
						if ((localStorage.getItem("Cceid") != "null")
								&& (localStorage.getItem("Cceid") != "")) {

							$rootScope.logoutStatus();
						}

						$(window).bind("beforeunload", function() {
							if (logout == true) {
								return undefined;
							}
							if (connection != null) {
								logout = true;
								connection.disconnect();
							}

							return "";

						});

					});
</script>
<script src="resources/js/angular/agentChatBot11.js"></script>
</html>