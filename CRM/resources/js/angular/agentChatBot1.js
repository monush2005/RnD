var BOSH_SERVICE = '';
var xVar = window.location + "";
var yVar = "192.168.9.23";
var zVar = "103.15.179.63";
var uVar = "chatbot.spicesafar.com";
//BOSH_SERVICE = 'http://192.168.9.23:7070/http-bind/';
if (xVar.indexOf(yVar) > -1) {
	BOSH_SERVICE = 'http://192.168.9.23:7070/http-bind/';
}

if (xVar.indexOf(zVar) > -1 || xVar.indexOf(uVar) > -1) {
	BOSH_SERVICE = 'http://103.15.179.63:7070/http-bind/';
}
//BOSH_SERVICE = 'http://192.168.9.23:7070/http-bind/';
BOSH_SERVICE = 'https://reporting.umang.gov.in/http-bind';

var connection = null;
var wCnt = 1;
var  univ=0;
function log(msg) {
	//    $('#log').append('<div></div>').append(document.createTextNode(msg));
}
var usrList = [];


var finalByeMessage = "<li><div class='disable-message text-center' style='border:1px solid #ddd;background-color:#fff;width:80%;margin-left:auto;margin-right:auto;'>This client is offline now.</div></li>";


function onConnect(status) {
	if (status == Strophe.Status.CONNECTING) {
		console.log('Strophe is connecting.');
	} else if (status == Strophe.Status.CONNFAIL) {
		console.log('Strophe failed to connect.');
		$('#connect').get(0).value = 'connect';
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
		onSuccessConnection(connection.jid);

		connection.addHandler(onMessage, null, 'message', null, null, null);
		connection.send($pres().tree());
	}
}

function onSuccessConnection(sessionJid) {
	var user = $("#login_jid").val();
	var fStr = "agentName=agent&agentJid=" + sessionJid;

	fStr = encodeURI(fStr);

	$.ajax({
		url : 'AgentInfo',
		type : 'POST',
		data : fStr,
		success : function(data) {
			// $('#target').html(data.msg);
		}
	});
}

var agentMesssage_Part1 = "<li class='mar-btm'>"
	+ "<div class='media-left'>"
	+ "<img src='http://bootdey.com/img/Content/avatar/avatar1.png' "
	+ " class='img-circle img-sm' alt='Profile Picture'> "
	+ "</div> "
	+ "<div class='media-body pad-hor'>"
	+ "<div class='speech'>"
	+ "<a href='#' class='media-heading'>User</a>";

var agentMessage_Part2 = "</div></div></li>";

var usrName = "You";

function onMessage(msg) {

	var to = msg.getAttribute('to');
	var from = msg.getAttribute('from');
	var type = msg.getAttribute('type');
	var elems = msg.getElementsByTagName('body');
	
	var fbfrom = from;

	if (type == "chat" && elems.length > 0) {
		var data = elems[0];
		data = Strophe.getText(data);
		data = $('<textarea />').html(data).text();
	
		console.log(data + "strophe data");
	if(true){
 	// if(from.indexOf("fbbot")>-1 || from.indexOf("bot")>-1){
		if (data != undefined && $.trim(data).length > 0) {

			var jsonObj = JSON.parse(data);
			console.log(jsonObj);

			if (jsonObj[0].user != undefined && $.trim(jsonObj[0].user).length > 0) {
				var usr = jsonObj[0].user;
 var uniqueid=jsonObj[0].uniqid;		
		from = usr;
				if ($.inArray(usr, usrList) <= -1) {
					usrList.push(usr);
					var y = wCnt++;
		// if (jsonObj[0].uniqid != undefined && $.trim(jsonObj[0].uniqid).length > 0) 
	//	var uniqueid=jsonObj[0].uniqid;
					$(".example-chat-window").find(".consumer-chat-container").attr("data-chatid",usr).attr("data-chatuniqueid",uniqueid).attr("id", "window-" + y);
					
					if(fbfrom.indexOf("fbbot") > -1){
						$(".example-chat-window").find(".consumer-chat-container").attr("data-fbchatid", fbfrom);
					}
					
					$(".example-chat-window").find("#collapseButton").attr("data-target", "#demo-chat-body-" + y);
					$(".example-chat-window").find("#demo-chat-body").attr("id", "demo-chat-body-" + y);
					var chatWindow = $(".example-chat-window").html();

					$(".example-chat-window").find("#collapseButton").attr("data-target", "#demo-chat-body");
					
					if(fbfrom.indexOf("fbbot") > -1){
						$(".example-chat-window").find(".consumer-chat-container").attr("data-fbchatid", "");
					}
					
					$(".example-chat-window").find("#demo-chat-body-" + y).attr("id", "demo-chat-body");
					$(".example-chat-window").find(".consumer-chat-container").attr("data-chatid","");

					$(".my-chat-space").append(chatWindow);
				}
			}

			var chatListContainer = null;
			$(".consumer-chat-container").each(function() {
				if ($(this).attr("data-chatid") == from) {
					chatListContainer = $(this).find(".user-chat-ul");
				}
			});
	
 //chatListContainer = $(this).find(".user-chat-ul");
			if (chatListContainer != null) {
				var msg = "";
			
				if (jsonObj[0].text != undefined) {					
					msg = jsonObj[0].text;
					 univ=msg.split("_")[1];
					var fMsg = agentMesssage_Part1 + "<p>" + msg + "</p>"+ agentMessage_Part2;

					$(chatListContainer).append(fMsg);
					var chatContainer = $(chatListContainer).closest(".consumer-chat-container");
					$(chatContainer).find(".nano-content").animate({scrollTop : $(chatContainer).find('.nano-content').prop("scrollHeight")}, 1000);
					msg = msg.toLowerCase();
		            //msg.indexOf("bie")>-1 || 
		            if(msg.indexOf("bye")>-1){
		            	$(chatContainer).find(".message-text").val("").prop("disabled",true);
		            	$(chatContainer).find(".sendMessage").prop("disabled",true);
		            	$(chatContainer).find(".user-chat-ul").append(finalByeMessage);
		            	
		            }	
				}
			}
		}
 	 }else {

 		var chatListContainer = null;
	      $(".consumer-chat-container").each(function(){
	        console.log($(this).attr("data-chatid")==from);
	        if($(this).attr("data-chatid")==from){
	          console.log($(this).attr("id")+" _ found");
	          chatListContainer = $(this).find(".user-chat-ul");
	        }
	      });
	      //console.log((chatListContainer!=null)+" containerFound");
	      if(chatListContainer!=null){
			 var data = elems[0];
			 data = Strophe.getText(data);
			 data = $('<textarea />').html(data).text();
	
	        var msg = "";
	        if(data!=undefined){
	            msg = data;
	            var fMsg = agentMesssage_Part1 +"<p>"+msg+"</p>"+agentMessage_Part2;
	            $(chatListContainer).append(fMsg);
	            var chatContainer = $(chatListContainer).closest(".consumer-chat-container");
	            $(chatContainer).find(".nano-content").animate({ scrollTop: $(chatContainer).find('.nano-content').prop("scrollHeight")}, 1000);
	            msg = msg.toLowerCase();
	            //msg.indexOf("bie")>-1 ||
	            console.log(msg.indexOf("bye")); 
	            if(msg.indexOf("bye")>-1){
	            	$(chatContainer).find(".message-text").val("").prop("disabled",true);
	            	$(chatContainer).find(".sendMessage").prop("disabled",true);
		       	$(chatContainer).find(".user-chat-ul").append(finalByeMessage);
	            }	
	        }
	      }

 	 }
	}

	return true;
}

$(document).ready(function() {
	connection = new Strophe.Connection(BOSH_SERVICE);
	Strophe.log = function(level, msg) {
		log('LOG: ' + msg);
	};

	var user ='monika'; //$("#login_jid").val();
	var pass = 'monika';//$("#login_jpass").val();

	connection.connect(user, pass, onConnect);

	var userMessage_Part1 = "<li class='mar-btm'>"
			+ "<div class='media-body pad-hor speech-right'>"
			+ "<div class='speech'>"
			+ "<a href='#' class='media-heading'>" + usrName
			+ "</a>";

	var userMessage_Part2 = "</div></div></li>";

	$(document).on("click",".chat-opt-btn",function() {
		var optVal = $(this).attr("data-value");
		var chatContainer = $(this).closest(".consumer-chat-container");

		if (optVal != undefined && $.trim(optVal).length > 0) {
			$(chatContainer).find(".message-text").val(optVal);
			$(chatContainer).find(".sendMessage").click();
		}
	});


	$(document).on("keypress",".message-text",function(e) {
		if (e.which == 13) {
			var optVal = $(this).val();
			if (optVal != undefined && $.trim(optVal).length > 0) {
				$(".sendMessage").click();
			}
		}
	});

	$(document).on("click",".sendMessage",function() {
		var chatContainer = $(this).closest(".consumer-chat-container");
		var msg_txt = $(chatContainer).find(".message-text").val();
		var toUser_hidden = $(chatContainer).attr("data-chatid");
 var uniId =$(chatContainer).attr("data-chatuniqueid");
alert("data-chatuniqueid  "+uniId);
alert("hidden user is"+toUser_hidden);
var bot='bot@itx1spip-momt1';		
if ((msg_txt != undefined && $.trim(msg_txt).length > 0) && (toUser_hidden != undefined && $.trim(toUser_hidden).length > 0)) {
			var fMsg = userMessage_Part1
					+ "<p>" + msg_txt + "</p>"
					+ userMessage_Part2;
			$(chatContainer).find(".user-chat-ul").append(fMsg);
			$(chatContainer).find(".message-text").val("");
			var fromUser = connection.jid;
			var fbChatid = $(chatContainer).attr("data-fbchatid");

			var msgJson = msg_txt+'@'+ uniId+'@'+toUser_hidden;/* '[{"text":"'
					+ msg_txt
					+ '","type":"text"}]';
*/
 if( msg_txt.indexOf("bye")>-1){
msgJson=msgJson+'@agentClose';
}

			$(chatContainer).find(".nano-content").animate({scrollTop : $(chatContainer).find('.nano-content').prop("scrollHeight")}, 1000);

			if (fbChatid != undefined && fbChatid != null && $.trim(fbChatid).length > 0) {
				msgJson = msg_txt + "@@"+ toUser_hidden;
				toUser_hidden = fbChatid;
			}
		
			var reply = $msg({
				to : bot,//toUser_hidden,
				from : fromUser,
				type : 'chat'
			}).c('body').t(msgJson);

			connection.send(reply.tree());
		}
	});

	$(document).on("click",".chat-close",function() {
		var cnfrm = confirm("Are you sure to end this chat Now");
		if (cnfrm) {
			var chatid = $(this).closest(".consumer-chat-container").attr("data-chatid");
			usrList = usrList.splice($.inArray(chatid, usrList), 1);
			$(this).closest(".consumer-chat-container").remove();
		}
	});
});
