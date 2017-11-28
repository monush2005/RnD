var BOSH_SERVICE = "";
var xVar = window.location + "";
var yVar = "192.168.9.23";
var zVar = "103.15.179.63";
var uVar = "chatbot.spicesafar.com";
var mgsId;
var reqId;
var msgCouner=0;
if (xVar.indexOf(yVar) > -1) {
//	BOSH_SERVICE = 'http://192.168.9.23:7070/http-bind/';
	BOSH_SERVICE = 'https://reporting.umang.gov.in/http-bind';
}

if (xVar.indexOf(zVar) > -1 || xVar.indexOf(uVar) > -1) {
//	BOSH_SERVICE = 'http://103.15.179.63:7070/http-bind/';
	BOSH_SERVICE = 'https://reporting.umang.gov.in/http-bind';
}

//BOSH_SERVICE = 'http://192.168.9.23:7070/http-bind/';
BOSH_SERVICE = 'https://reporting.umang.gov.in/http-bind';

var connection = null;
var univ='';
function log(msg) {
	// $('#log').append('<div></div>').append(document.createTextNode(msg));
}

function onConnect(status) {
	if (status == Strophe.Status.CONNECTING) {
		console.log('Strophe is connecting.');
	} else if (status == Strophe.Status.CONNFAIL) {
		console.log('Strophe failed to connect.');
		$('#connect').get(0).value = 'connect';
		alert("Unable to login");
		window.location = "index.jsp";
	} else if (status == Strophe.Status.DISCONNECTING) {
		console.log('Strophe is disconnecting.');
	} else if (status == Strophe.Status.DISCONNECTED) {
		console.log('Strophe is disconnected.');
		$('#connect').get(0).value = 'connect';
	} else if (status == Strophe.Status.CONNECTED) {
		console.log('Strophe is connected.');
		console.log('ECHOBOT: Send a message to ' + connection.jid
				+ ' to talk to me.');

		connection.addHandler(onMessage, null, 'message', null, null, null);
		connection.send($pres().tree());
		alert("init");
	}
}

var finalByeMessage = "<li><div class='disable-message text-center' style='border:1px solid #ddd;background-color:#fff;width:80%;margin-left:auto;margin-right:auto;'>this is alert message.</div></li>";

var carouselWindowCount = 0;
var usrName = "You";

var agentMesssage_Part1 = "<li class='mar-btm'>" + "<div class='media-left'>"
		+ "<img src='http://bootdey.com/img/Content/avatar/avatar1.png' "
		+ " class='img-circle img-sm' alt='Profile Picture'> " + "</div> "
		+ "<div class='media-body pad-hor'>" + "<div class='speech'>"
		+ "<a href='#' class='media-heading'>Customer Care</a>";

var agentMessage_Part2 = "</div></div></li>";

function getCaurselWindowCode(data) {

	var carouselCode = "";
	var items = "";
	if (data.type == "template") {
		var attachmentPayload = data.payload;

		if (attachmentPayload["template_type"] == "generic") {

			carouselCode = "<p>" + "<div id='myCarousel" + carouselWindowCount
					+ "' class='carousel slide' data-ride='carousel'> "
					+ "<div class='carousel-inner' role='listbox'>";

			var templateElements = attachmentPayload["elements"];

			for (var i = 0; i < templateElements.length; i++) {
				var element = templateElements[i];
				var elementTitle = element["title"];
				var elementSubtitle = element["subtitle"];
				var elementImgUrl = element["image_url"];
				var elementButtons = element["buttons"];

				var active = "";
				if (i == 0) {
					active = "active";
				}
				var item = "<div class='item " + active + "' >";
				item = item + "<img src='" + elementImgUrl + "' alt='"
						+ elementTitle + "' width='250' height='210'>";
				item = item + "<div class='carousel-caption'>";
				item = item + "<p>" + elementTitle + "</p>";
				for (var j = 0; j < elementButtons.length; j++) {
					item = item
							+ "<a href='javascript:void(0);' class='btn btn-primary outline chat-opt-btn' data-value='"
							+ elementButtons[j]["payload"] + "' data-display='"+elementButtons[j]["title"]+"'>"
							+ elementButtons[j]["title"] + "</a><br/>";
				}

				item = item + "</div></div>";
				items = items + item;
			}

			carouselCode = carouselCode + items;
			carouselCode = carouselCode
					+ "</div>"
					+ "<a class='left carousel-control' href='#myCarousel"
					+ carouselWindowCount
					+ "' role='button' data-slide='prev'> <span "
					+ "class='glyphicon glyphicon-chevron-left crsl-left-btn' aria-hidden='true'></span> "
					+ "<span class='sr-only'>Previous</span> "
					+ "</a> <a class='right carousel-control' href='#myCarousel"
					+ carouselWindowCount
					+ "' role='button' data-slide='next'> <span "
					+ "class='glyphicon glyphicon-chevron-right crsl-left-btn' aria-hidden='true'></span>"
					+ "<span class='sr-only'>Next</span>" + "</a>" + "</div>"
					+ "</p>";
			carouselWindowCount++;
		} else if (attachmentPayload["template_type"] == "button") {
			var elementButtons = attachmentPayload["buttons"];
			item = "<p>" + attachmentPayload["text"] + "</p>";
			for (var j = 0; j < elementButtons.length; j++) {
				if (elementButtons[j]["type"] == "web_url") {
					item = item
							+ "<p><a href='"
							+ elementButtons[j]["url"]
							+ "' target='_blank' class='btn btn-primary outline chat-opt-btn' >"
							+ elementButtons[j]["title"] + "</a></p>";
				}
			}
			carouselCode = item;
		}
	}
	return carouselCode;
}

function onMessage(msg) {

	var to = msg.getAttribute('to');
	var from = msg.getAttribute('from');
	var type = msg.getAttribute('type');
	var elems = msg.getElementsByTagName('body');

	if (type == "chat" && elems.length > 0) {
		var data = elems[0];
		data = Strophe.getText(data);
		data = $('<textarea />').html(data).text();
		console.log(data + "strophe data");
		var dConn = false;
		if (data != undefined && $.trim(data).length > 0 && data != "error") {
			var jsonObj = JSON.parse(data);
			console.log(jsonObj);

			var msg = "";
			for (var xCount = 0; xCount < jsonObj.length; xCount++) {

				console.log("at " + xCount + " vlaue is "
						+ JSON.stringify(jsonObj[xCount]));
				if (jsonObj[xCount].text != undefined) {
					msg = msg + "<p>" + jsonObj[xCount].text + "</p>";
					if(jsonObj[xCount].text.indexOf("It was my pleasure talking to you .See you later. Have a nice day!")>-1){
						dConn = true;
					}
				}
				if (jsonObj[xCount].quick_replies != undefined) {
					msg = msg + "<p>";
					var elementButtons = jsonObj[xCount].quick_replies;
					for (var z = 0; z < elementButtons.length; z++) {
						msg = msg
								+ "<a href='javascript:void(0);' class='btn btn-primary outline chat-opt-btn' data-value='"
								+ elementButtons[z]["payload"] + "' data-display='"+elementButtons[z]["title"]+"'>"
								+ elementButtons[z]["title"] + "</a><br/>";
					}
					msg = msg + "</p>";
				}

				if (jsonObj[xCount].attachment != undefined) {
					msg = msg + "<p>"
							+ getCaurselWindowCode(jsonObj[xCount].attachment)
							+ "</p>";
				}
			}
			console.log("final message");
			if (msg != undefined && $.trim(msg).length > 0) {
msg=msg.split("_")[0];
				msg = agentMesssage_Part1 + msg + agentMessage_Part2;
				$(".user-chat-ul").append(msg);

				var touserVal = from;
				$(".nano-content").animate({
					scrollTop : $('.nano-content').prop("scrollHeight")
				}, 1000);
				$("#toUser_hidden").val(touserVal);
			}

		}
		if(dConn){
			$(".user-chat-ul").append(finalByeMessage);
			connection.disconnect();
		}
	}
	return true;
}

$(document).ready(function() {
	var idleTime = 0;
	var idleInterval = setInterval(timerIncrement, 60000); // 1 minute

    //Zero the idle timer on mouse movement.
    $(this).mousemove(function (e) {
        idleTime = 0;
    });
    $(this).keypress(function (e) {
        idleTime = 0;
    });

    alert("---------------");
function timerIncrement() {
    idleTime = idleTime + 1;
    if (idleTime > 2) { // 20 minutes
    	alert("---------------");
    	var fromUser = connection.jid;
		var reply = $msg({
			to : toUser_hidden,
			from : fromUser,
			type : 'chat'
		}).c('body').t('idle');

		connection.send(reply.tree());
    }
}                    
	connection = new Strophe.Connection(BOSH_SERVICE);
univ=Math.floor((Math.random() * 100) + 1);
	Strophe.log = function(level, msg) {
		log('LOG: ' + msg);
	};

	var user ='monika';// $("#login_jid").val();
	var pass ='monika';// $("#login_jpass").val();

	connection.connect(user, pass, onConnect);

	var userMessage_Part1 = "<li class='mar-btm'>"
			+ "<div class='media-body pad-hor speech-right'>"
			+ "<div class='speech'>"
			+ "<a href='#' class='media-heading'>" + usrName
			+ "</a>";

	var userMessage_Part2 = "</div></div></li>";

	var btnPayload = "";
	
	$(document).on("click", ".chat-opt-btn", function() {
		var optVal = $(this).data("value");
		var optDisp = $(this).data("display");
		if (optVal != undefined && $.trim(optVal).length > 0) {
			var showVal = optVal;
			if (optDisp != undefined && $.trim(optDisp).length > 0) {
				btnPayload= optVal;
				showVal = optDisp;
			}
			$("#message-text").val(showVal);
			$("#sendMessage").click();
		}
	});

	$(document).on("keypress","#message-text",function(e) {
		if (e.which == 13) {
			var optVal = $(this).val();
			if (optVal != undefined
					&& $.trim(optVal).length > 0) {
				$("#sendMessage").click();
			}
		}
	});

	$("#sendMessage").on("click",function() {
		var msg_txt = $("#message-text").val();//+'_'+univ+'_test';
		var toUser_hidden = $("#toUser_hidden").val();

		if ((msg_txt != undefined && $.trim(msg_txt).length > 0)&& (toUser_hidden != undefined && $.trim(toUser_hidden).length > 0)) {

			var fMsg = userMessage_Part1
				+ "<p>" + msg_txt + "</p>"
				+ userMessage_Part2;

			
			
			
			$(".user-chat-ul").append(fMsg);
			$(".nano-content").animate({scrollTop : $('.nano-content').prop("scrollHeight")}, 1000);
			$("#message-text").val("");

			var tmpMsgtxt = msg_txt.toLowerCase();
			//tmpMsgtxt.indexOf("bie")>-1 ||
			if(btnPayload!=undefined && $.trim(btnPayload).length>0){
				msg_txt = btnPayload;
				btnPayload = "";
			}
		tmpMsgtxt=tmpMsgtxt+'_'+univ+'_test';
			 if(msgCouner <=0) {
tmpMsgtxt= tmpMsgtxt+'_init';			}
 if( tmpMsgtxt.indexOf("bye")>-1){
tmpMsgtxt= tmpMsgtxt+'_clientclose';
}
var fromUser = connection.jid;
			var reply = $msg({
				to : toUser_hidden,
				from : fromUser,
				type : 'chat'
			}).c('body').t(tmpMsgtxt);
	
			connection.send(reply.tree());
			
msgCouner++;
			if( tmpMsgtxt.indexOf("bye")>-1){
				$("#message-text").prop("disabled",true);
				$("#sendMessage").prop("disabled",true);
				if(toUser_hidden.indexOf("bot@poc")==-1){
					//$(".user-chat-ul").append(finalByeMessage);
					setTimeout(function(){ connection.disconnect(); }, 10000);	//connection.disconnect();
				}
			}
		}
	});
	
	

});
