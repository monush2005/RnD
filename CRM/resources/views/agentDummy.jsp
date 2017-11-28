<html>
<head>
<title>Welcome to ChatBot Demo</title>
<meta content="width=device-width, initial-scale=1" name="viewport">
<meta content="text/html; charset=utf-8" http-equiv="Content-Type">

<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css" href="css/font-awesome.min.css" />
<link type="text/css" rel="stylesheet"
	href="http://fonts.googleapis.com/css?family=Montserrat:400,700">
<link rel="stylesheet" type="text/css" href="css/customerChatBox.css" />
<!--
<style>
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
	margin-right: 10px;
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
</style>
-->
<style>
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
	margin-right: 10px;
}

.my-chat-space {
	position: fixed;
	bottom: 0;
	width: 100%;
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
	bottom: 5px;
	box-shadow: 1px 2px 3px #cccccc
}

.speech .media-heading {
	color: #000;
}

.speech-right>.speech::before {
	border-color: transparent -moz-use-text-color transparent #eaeaf4;
}

.speech-right>.speech {
	background: #eaeaf4 none repeat scroll 0 0;
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

.cntrl-btn { ##
	padding: 0; ##
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
<body>
	<nav class="navbar navbar-default">
		<div class="container-fluid">
			<div class="navbar-header">
				<a class="navbar-brand" href="#">ChatBot Demo</a>
			</div>
		</div>
	</nav>


	<div class="container">
		<div class="row">
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<h1>Welcome Agent</h1>
				<input type='hidden' id="usrName" value='user' /> <input
					type='hidden' id="usrEmail" value='user' />
				<!--	<button id="b1">click me</button> -->
			</div>
		</div>
	</div>

	<div class="my-chat-space"></div>
	<!-- Begin page content -->
	<div class="example-chat-window" style="display: none">
		<div class="consumer-chat-container " data-chatid="" data-fbchatid="" data-chatuniqueid="">
			<div class="panel">
				<!--Heading-->
				<div class="panel-heading">
					<div class="panel-control">
						<div class="btn-group">
							<button class="btn btn-default cntrl-btn" type="button"
								id="collapseButton" data-toggle="collapse"
								data-target="#demo-chat-body">
								<i class="fa fa-chevron-down"></i>
							</button>
							<button class="btn btn-default cntrl-btn chat-close"
								type="button">
								<i class="fa fa-times"></i>
							</button>
						</div>
					</div>
					<h3 class="panel-title">Dear User</h3>
				</div>

				<!--Widget body-->
				<div id="demo-chat-body" class="collapse in">
					<div class="nano has-scrollbar">
						<div class="nano-content pad-all" tabindex="0"
							style="right: -17px;">
							<ul class="list-unstyled media-block user-chat-ul">

							</ul>
						</div>
						<div class="nano-pane">
							<div class="nano-slider"
								style="height: 141px; transform: translate(0px, 0px);"></div>
						</div>
					</div>

					<!--Widget footer-->
					<div class="panel-footer">
						<div class="row">
							<div class="col-xs-9">
								<input type="text" id="" placeholder="Enter your text"
									class="form-control chat-input message-text">
							</div>
							<div class="col-xs-3">
								<button class="btn btn-primary btn-block sendMessage">
									<i class="fa fa-send"></i>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<input type="hidden" id="login_jid"
		value='<%=request.getAttribute("username")%>' />
	<input type="hidden" id="login_jpass"
		value='<%=request.getAttribute("usrpassword")%>' />
	<script type="text/javascript" src="js/jquery.min.js"></script>
	<script type="text/javascript" src="js/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/strophe.js"></script>
	<script type="text/javascript" src="js/agentChatBot.js"></script>
</body>
</html>
