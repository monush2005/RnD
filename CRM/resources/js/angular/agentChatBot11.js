BOSH_SERVICE = 'https://stgreporting.umang.gov.in/http-bind';
var connection = null;
var logout=false;
var wCnt = 1;	
var  univ=0;


function log(msg) {
	//    $('#log').append('<div></div>').append(document.createTextNode(msg));
}
var usrList = [];
var fadeInterval=new Array();
$( document ).ready(function() 
{
	if(typeof localStorage.getItem("userid")!=undefined&&localStorage.getItem("userid")!=null)
	{
		getConnect(localStorage.getItem("userid").toLowerCase(),localStorage.getItem("pwd11"));
	}
});


var finalByeMessage = "<li><div class='disable-message text-center' style='border:1px solid #ddd;background-color:#fff;width:80%;margin-left:auto;margin-right:auto;'>This client is offline now.</div></li>";
function minimizeWindow(idz)
{
	var test=idz.replace("TEST","window");
	console.log(test);
	$("#"+test).find(".chatroom-height").toggle();
	//$("#"+test).find(".chatroom-height").css("display","none");
	console.log($("#"+test));
	console.log($("#"+test).find(".chatroom-height"));
					function getMessages(letter) 
					{
						
						var ul = $('[id^=message]');
						ul.each(function(i, obj)
						{
							$(obj).scrollTop($(obj).prop('scrollHeight'));
						});
					    
					}

					$(function() {
					    getMessages();
					});
};

function onConnect(status)
{
	if (status == Strophe.Status.CONNECTING)
	{
		console.log('Strophe is connecting.');
	} else if (status == Strophe.Status.CONNFAIL)
	{
		console.log('Strophe failed to connect.');
		$('#connect').get(0).value = 'connect';
		window.location = "index.jsp";
	} else if (status == Strophe.Status.DISCONNECTING)
	{
		
		console.log('Strophe is disconnecting.');
	} else if (status == Strophe.Status.DISCONNECTED)
	{
		console.log('Strophe is disconnected.');
		
		
		try
		{
			connection.connected=false;
			sendTypingStatus("harsh@reporting.umang.gov.in","sss");
		    //connection.connect(usridd.toLowerCase()+"@reporting.umang.gov.in",localStorage.getItem("pwd11"), onConnect);
		    if(logout!=true)
			{
			   getConnect(localStorage.getItem("userid").toLowerCase(),localStorage.getItem("pwd11"));
			}  
		}
		catch(error)
		{
			console.log(error.lineNumber);
		}
		
	} else if (status == Strophe.Status.CONNECTED)
	{
		console.log('Strophe is connected.');
		console.log('ECHOBOT: Send a message to ' + connection.jid
				+ ' to talk to me.');
		localStorage.setItem("conid",connection.jid);
		onSuccessConnection(connection.jid);
		connection.addHandler(onMessage, null, 'message', null, null, null);
		connection.send($pres().tree());
	}
}

function onSuccessConnection(sessionJid)
{
	var user = $("#login_jid").val();
	var fStr = "agentName=" + user + "&agentJid=" + sessionJid;

	fStr = encodeURI(fStr);

}



var usrName = "You";
var historyMsg;
function getJsonObj(){
	//alert(historyMsg);
	
}
var refID="";



function sendTypingStatus(to,from)
{
	var reply = $msg({
	to : "bot@reporting.umang.gov.in",//toUser_hidden,
	from : from,
	type : 'chat'
}).c('composing',{xmlns:"urn:xmpp:type"}).c('to').t(to);
connection.send(reply.tree());
}
function sendPausStatus(to,from)
{
	var reply = $msg({
	to : "bot@reporting.umang.gov.in",//toUser_hidden,
	from : from,
	type : 'chat'
	}).c('paused',{xmlns:"urn:xmpp:type"}).c('to').t(to);
	connection.send(reply.tree());
}
function xmlToJson(xml) {
	
	// Create the return object
	var obj = {};

	if (xml.nodeType == 1) { // element
		// do attributes
		if (xml.attributes.length > 0) {
		obj["@attributes"] = {};
			for (var j = 0; j < xml.attributes.length; j++) {
				var attribute = xml.attributes.item(j);
				obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
			}
		}
	} else if (xml.nodeType == 3) { // text
		obj = xml.nodeValue;
	}

	// do children
	if (xml.hasChildNodes()) {
		for(var i = 0; i < xml.childNodes.length; i++) {
			var item = xml.childNodes.item(i);
			var nodeName = item.nodeName;
			if (typeof(obj[nodeName]) == "undefined") {
				obj[nodeName] = xmlToJson(item);
			} else {
				if (typeof(obj[nodeName].push) == "undefined") {
					var old = obj[nodeName];
					obj[nodeName] = [];
					obj[nodeName].push(old);
				}
				obj[nodeName].push(xmlToJson(item));
			}
		}
	}
	return obj;
};
function addTypingStatus(jid)
{
	var agentMesssage_Part1 = "<li class='mar-btm typing'>"
		+ "<div class='media-left'>"
		+ "<img src='resources/images/user-img.png' "
		+ " class='img-circle img-sm' alt='Profile Picture'> "
		+ "</div> "
		+ "<div class='media-body pad-hor'>"
		+ "<div class='speech'>";
		/* + "<a href='#' class='media-heading'>User</a>"; */

	var agentMessage_Part2 = "</div>";
	
	var chatListContainer = null;
	var chatContainerDiv = null;
	var fromMobile = jid;
	console.log("in typinggg"+fromMobile);
	$(".consumer-chat-container").each(function() 
	{
		console.log($(this).attr("data-chatid")+"::"+fromMobile);
		if ($(this).attr("data-chatid") == fromMobile)
		{
			console.log("in typingggdd");
			chatContainerDiv = this;
			chatListContainer = $(this).find(".user-chat-ul");
			var fMsg = agentMesssage_Part1 + "<p>" +"<img src='resources/images/typing1.gif'>" + "</p>"+ agentMessage_Part2;
			$(chatListContainer).append(fMsg);
			function getMessages(letter) 
			{
				
				var ul = $('[id^=message]');
				ul.each(function(i, obj)
				{
					$(obj).scrollTop($(obj).prop('scrollHeight'));
				});
			    
			}

			$(function() {
			    getMessages();
			});
		}
	});
	
}
function removeTypingStatus(jid)
{
	var chatListContainer = null;
	var chatContainerDiv = null;
	//var tmpFrom = jid.split("@")[0];
	var fromMobile =jid// tmpFrom.substring(tmpFrom.length-10,tmpFrom.length);
	console.log("pausss...")
	$(".consumer-chat-container").each(function() {
		if ($(this).attr("data-chatid") == fromMobile)
		{
			console.log("pausss...")
			chatContainerDiv = this;
			//chatListContainer = $(this).find(".user-chat-ul");
			var typingli = $(this).find(".typing");
			$(typingli).remove();
			
			
		}
	});
	
}
function readFile(jid,url,name)
{
	
	
	url=decodeURIComponent(url);
	var agentMesssage_Part1 = "<li class='mar-btm typing'>"
		+ "<div class='media-left'>"
		+ "<img src='resources/images/user-img.png' "
		+ " class='img-circle img-sm' alt='Profile Picture'> "
		+ "</div> "
		+ "<div class='media-body pad-hor'>"
		+ "<div class='speech'>";
		/* + "<a href='#' class='media-heading'>User</a>"; */

	var agentMessage_Part2 = "</div>";
	var chatListContainer = null;
	var chatContainerDiv = null;
	var fromMobile = jid;
	console.log("file"+fromMobile+"url::"+url);
	$(".consumer-chat-container").each(function() 
	{
		console.log($(this).attr("data-chatid")+"::"+fromMobile);
		if ($(this).attr("data-chatid") == fromMobile)
		{
			uniId =$(this).attr("data-chatuniqueid");
			url=url+uniId;
			console.log("in fileee");
			chatContainerDiv = this;
			chatListContainer = $(this).find(".user-chat-ul");
			var fMsg = agentMesssage_Part1 + "<p>" +"<a target='_blank' href="+url+">" +name+ "</a></p>"+ agentMessage_Part2;
			$(chatListContainer).append(fMsg);
			function getMessages(letter) 
			{
				
				var ul = $('[id^=message]');
				ul.each(function(i, obj)
				{
					$(obj).scrollTop($(obj).prop('scrollHeight'));
				});
			    
			}

			$(function() {
			    getMessages();
			});
		}
	});
}
function onMessage(msg) 
{
	var audio = new Audio('/CRM/resources/images/beep.wav');
	console.log('Msg is coming');
	var date = new Date();
	var hour = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();
	if(hour<=9){
		hour="0"+hour;
	}
	if(min<=9){
		min="0"+min;
	}
	console.log(hour+":"+min);
	var agentMesssage_Part1 = "<li class='mar-btm'>"
		+ "<div class='media-left'>"
		+ "<img src='resources/images/user-img.png' "
		+ " class='img-circle img-sm' alt='Profile Picture'> "
		+ "</div> "
		+ "<div class='media-body pad-hor'>"
		+ "<div class='speech'>";
		/* + "<a href='#' class='media-heading'>User</a>"; */

	var agentMessage_Part2 = "</div><p class='timer_cls'>"+hour+":"+min+":"+sec+"</p></div></li>";
	console.log(msg);
	var fMsg="";
	var to = msg.getAttribute('to');
	var from = msg.getAttribute('from');
	var type = msg.getAttribute('type');
	var elems = msg.getElementsByTagName('body');
	
	var compose = msg.getElementsByTagName('composing');
	var pause = msg.getElementsByTagName('paused');
	var elems = msg.getElementsByTagName('body');
	var file = msg.getElementsByTagName('file');
	var fbfrom = from;
	if(file.length>0)
	{
		try
		{
			var json=xmlToJson(msg);
			if(typeof json.file.to !=="undefined"&&typeof json.file.url !=="undefined")
			readFile(json.file.to["#text"],json.file.url["#text"],json.file.fname["#text"]);
		}
		catch(err)
		{
			console.error(err);
		}
		
	}
	else
	if(compose.length>0)
	{
		try
		{
			var json=xmlToJson(msg);
			if(typeof json.composing.to !=="undefined")
			addTypingStatus(json.composing.to["#text"]);
		}
		catch(err)
		{
			console.error(err);
		}
	}
	else
	if(pause.length>0)	
	{
		try
		{
			var json=xmlToJson(msg);
			if(typeof json.paused.to !=="undefined")
				removeTypingStatus(json.paused.to["#text"]);
		}
		catch(err)
		{
			console.error(err);
		}
	}
	else
	if (type == "chat" && elems.length > 0) {
		var data = elems[0];
		data = Strophe.getText(data);
		data = $('<textarea />').html(data).text();
	
		console.log(data + "strophe data");
		
		console.log("========SID==========");
		console.log("sid on message===>"+connection._proto.sid);
		console.log("jid on each message recevie"+connection.jid);
		console.log("========SID==========");
 	 if(true||from.indexOf("fbbot")>-1 || from.indexOf("bot")>-1){
		if (data != undefined && $.trim(data).length > 0) {

			var jsonObj = JSON.parse(data);
			console.log(jsonObj);

			if (jsonObj[0].user != undefined && $.trim(jsonObj[0].user).length > 0) {
				var usr = jsonObj[0].user;
			 var uniqueid=jsonObj[0].uniqid; 
			 var msg1=jsonObj[0].text; 
			refID=jsonObj[0].refid;
			if(msg1.trim()!="initconversation"){
				audio.play();
			}
			if(msg1.trim()=="userdisconnected"){
				var ref_id={'refID':refID,'jid':usr}
			try
			{
				$.ajax({
					 type: "POST",			             
					 url:'/CRM/userDis',
		             data:JSON.stringify(ref_id),
		             contentType: "application/json; charset=utf-8",
		             success: function (response) { 
		            	console.log("****"+response);
							
		              },
		             error: function (response) {
		            	 console.log("res error "+response);
		             }
		         });
			}
			catch(error){
				//alert('e')
				console.log(error);
				console.log(error.lineNumber);
			}
			}
			
			
			console.log("--------------");
			console.log("refID="+refID);
			console.log("--------------");
			localStorage.setItem("refID",refID);
			console.log("*************"+uniqueid)
			from = usr;
			var tmpFrom = from.split("@")[0];
			var fromMobile = from;//tmpFrom.substring(tmpFrom.length-10,tmpFrom.length);

	//localStorage.setItem("uniqueID",uniqueid);
				
			if(msg1.trim()!="userdisconnected"){
			 	if ($.inArray(usr, usrList) <= -1) { 
			 		console.log(""+usr);
					usrList.push(usr);
					var d = new Date();
					var timeMillies=d.getTime();
				 var object = {'requestId':timeMillies, 'msisdn':fromMobile};
/*					try
					{
						$.ajax({
							 type: "POST",			             
							 url:'/CRM/agentChatHis',
				             data:JSON.stringify(object),
				             contentType: "application/json; charset=utf-8",
				             success: function (response) { 
				            	 historyMsg = response;
									historyMsg=decodeURIComponent(historyMsg).replace(new RegExp("\\+","g"),' ');
									historyMsg=JSON.parse(historyMsg);
				            	// var mobNo = response.msisdn;
				            	// document.getElementById("userName").innerHTML= mobNo;
				                 //console.log(mobNo);
								for(var i=0;i<historyMsg.history.length;i++)
									{
									if(typeof historyMsg.history[i].user !='undefined')
									{	
									for(var y=0;y<historyMsg.history[i].user.length;y++)
									{
										console.log("user msg--"+historyMsg.history[i].user[y].msg);
										historyMsg.history[i].user[y].msg=decodeURI(historyMsg.history[i].user[y].msg);
										time = historyMsg.history[i].user[y].time;
										//var time=time.substring(0,time.lastIndexOf(":"));
										fMsg = agentMesssage_Part1 + "<p>" +historyMsg.history[i].user[y].msg + "</p>"+ "</div><p class='timer_cls'>"+time+"</p></div></li>";
										$(chatListContainer).append(fMsg);
										var chatContainer = $(chatListContainer).closest(".consumer-chat-container");
										$(chatContainer).find(".nano-content").animate({scrollTop : $(chatContainer).find('.nano-content').prop("scrollHeight")}, 1000);
										//msg = msg.toLowerCase();
										function getMessages(letter) 
										{
											var ul = $('[id^=message]');
											ul.each(function(i, obj)
											{
												$(obj).scrollTop($(obj).prop('scrollHeight'));
											});
										    
										}

										$(function() {
										    getMessages();
										});
									}
									}
									if(typeof historyMsg.history[i].agent !='undefined')
									{
									for(var z=0;z<historyMsg.history[i].agent.length;z++)
									{
										var userMessage_Part11 = "<li class='mar-btm'>"
											+ "<div class='media-body pad-hor speech-right'>"
											+ "<div class='speech'>";
										console.log("agent msg--"+historyMsg.history[i].agent[z].msg);
										historyMsg.history[i].agent[z].msg=decodeURI(historyMsg.history[i].agent[z].msg);
										time1 = historyMsg.history[i].agent[z].time;
										//var time1=time1.substring(0,time1.lastIndexOf(":"));
										var fMsg = userMessage_Part11
										+ "<p>" + historyMsg.history[i].agent[z].msg + "</p>"
										+ "</div><p class='timer_cls'>"+time1+"</p></div></li>";
								console.log("**********************************");
								$(chatContainer).find(".user-chat-ul").append(fMsg);
								$(chatContainer).find(".message-text").val("");
								var fbChatid = $(chatContainer).attr("data-fbchatid");
								function getMessages(letter) 
								{
									var ul = $('[id^=message]');
									ul.each(function(i, obj)
									{
										$(obj).scrollTop($(obj).prop('scrollHeight'));
									});
								}

								$(function() {
								    getMessages();
								});
									}
									}
								}	
				              },
				              
				             error: function (response) {
				            	 console.log("res error "+response);
				             }
				         });
					}
					catch(error){
						//alert('e')
						console.log(error);
						console.log(error.lineNumber);
					} */ 
					console.log("------------");
					console.log(usrList);
					console.log("------------");
					var y = wCnt++;
					console.log("kulbhushan=====>"+y);
					
					$(".example-chat-window").find(".consumer-chat-container").attr("data-jid",usr).attr("data-chatid",fromMobile).attr("data-chatuniqueid",uniqueid).attr("ref-Id",refID).attr("id", "window-" + y);
					try{
						$(".example-chat-window").find(".usrIdUni").attr("id", "userName-" + y);
						$(".example-chat-window").find(".wCls").attr("id",refID);
						$(".example-chat-window").find(".wCls").attr("datajid",usr);
						$(".example-chat-window").find(".wClss").attr("id",refID);
						var res = usr.split("@");
						var valPop = res[0].substr(res[0].length - 3);
						 document.getElementById("userName-" + y).innerHTML=valPop;
					}
					catch(error){
						console.log(error);
					}
					$(".example-chat-window").find(".miniMize_window").attr("id","TEST-" + y);
					
					
					if(fbfrom.indexOf("fbbot") > -1){
						$(".example-chat-window").find(".consumer-chat-container").attr("data-fbchatid", fbfrom);
					}
					
					$(".example-chat-window").find("#collapseButton").attr("data-target", "#demo-chat-body-" + y);
					$(".example-chat-window").find("#demo-chat-body").attr("id", "demo-chat-body-" + y);
					$(".example-chat-window").find("#demo-chat-body").find("textarea").attr("name",y);
					$(".example-chat-window").find("#message").attr("id", "message-" + y);
					var chatWindow = $(".example-chat-window").html();

					$(".example-chat-window").find("#collapseButton").attr("data-target", "#demo-chat-body");
					if(fbfrom.indexOf("fbbot") > -1){
						$(".example-chat-window").find(".consumer-chat-container").attr("data-fbchatid", "");
					}
					$(".example-chat-window").find("textarea").attr("name",refID);
					$(".example-chat-window").find("#demo-chat-body-" + y).attr("id", "demo-chat-body");
					$(".example-chat-window").find("#message-"+y).attr("id", "message");
					$(".example-chat-window").find(".consumer-chat-container").attr("data-chatid","");
						
					$(".my-chat-space").append(chatWindow);
					$("#demo-chat-body-" +y).find("textarea").attr("name",y);
					$("#demo-chat-body-" +y).find("textarea").attr("id","text"+y);
					$("#window-"+y).attr("name",y);
					//fadeIn($("#window-"+y+" .top_menu"),y);
				}
}
			}
			
			var chatListContainer = null;
			var chatContainerDiv = null;
			$(".consumer-chat-container").each(function() {
				if ($(this).attr("data-chatid") == fromMobile)
				{
					chatContainerDiv = this;
					chatListContainer = $(this).find(".user-chat-ul");
					var y=$(this).attr("name");
					////alert($(this).find(".top_menu").attr("name"));
					var typingli = $(this).find(".typing");
					$(typingli).remove();
					
					var textArea=$("#text"+y).is(':focus');
					fadeIn($("#window-"+y+" .top_menu"),y,textArea);
				}
			});
 //chatListContainer = $(this).find(".user-chat-ul");
			if (chatListContainer != null) {
				var msg = "";
					
				if (jsonObj[0].text != undefined) {					
					msg = jsonObj[0].text;
					//alert("vinod"+msg);
					 univ=msg.split("_")[1];
					 msg = decodeURIComponent(msg);
					 msg=replaceXSSField(msg);
					 console.log("final msg=="+msg);
					 msg=msg.replaceAll("+"," ");
					 fMsg = agentMesssage_Part1 + "<p>" + msg + "</p>"+ agentMessage_Part2;
					 $(chatContainerDiv).attr("data-userjid",from);
					 if(msg.trim()!='initconversation' && msg.trim()!='userdisconnected'){
					     $(chatListContainer).append(fMsg);
					 }else{
					}
					var chatContainer = $(chatListContainer).closest(".consumer-chat-container");
					$(chatContainer).find(".nano-content").animate({scrollTop : $(chatContainer).find('.nano-content').prop("scrollHeight")}, 1000);
					msg = msg.toLowerCase();
					
					function getMessages(letter) 
					{
						
						var ul = $('[id^=message]');
						ul.each(function(i, obj)
						{
							$(obj).scrollTop($(obj).prop('scrollHeight'));
						});
					    
					}

					$(function() {
					    getMessages();
					});
					console.log("msgsggsgs::"+msg);
					//msg.indexOf("bie")>-1 || 
		            if(msg.indexOf("userdisconnected")>-1)
		            {
		            	console.log($(chatContainerDiv).attr("data-jid")+"=="+from);
	
		            	if($(chatContainerDiv).attr("data-jid")==from)
		            	{
		            		
					$(chatContainer).find(".user-chat-ul").append(finalByeMessage);

					function getMessages(letter) 
					{
						var ul = $('[id^=message]');
						ul.each(function(i, obj)
						{
							$(obj).scrollTop($(obj).prop('scrollHeight'));
						});
					    
					}

					$(function() {
					    getMessages();
					});
		            		
		            		$(chatContainer).find(".message-text").val("").prop("disabled",true);
			            	$(chatContainer).find(".sendMessage").prop("disabled",true);

					
							
			            	
		            	}		    			
		            }
		            else {
		            	$(chatContainer).find(".message-text").prop("disabled",false);
		            	$(chatContainer).find(".sendMessage").prop("disabled",false);
		            }
				}
			}
		}
		
 	 }else {

 		
 		 if(from.indexOf("@")>-1){
 			 var tmpFrom = from.split("@")[0];
 			 
 			 var fromMobile = tmpFrom.substring(tmpFrom.length-10,tmpFrom.length);

 	 		var chatListContainer = null;
 		      $(".consumer-chat-container").each(function(){
 		        console.log($(this).attr("data-chatid")==fromMobile);
 		        if($(this).attr("data-chatid")==fromMobile){
 		          console.log($(this).attr("id")+" _ found");
 		          chatListContainer = $(this).find(".user-chat-ul");
 		          //dddd
 		          
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
 		            console.log('abcd text - '+JSON.stringify(history))
 		            $(chatListContainer).append(fMsg);
 		            var chatContainer = $(chatListContainer).closest(".consumer-chat-container");
 		            $(chatContainer).find(".nano-content").animate({ scrollTop: $(chatContainer).find('.nano-content').prop("scrollHeight")}, 1000);
 		            msg = msg.toLowerCase();
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
	}
	
	return true;
}
var fbChatid="";


/*$(document).ready(function() {*/
function getConnect(userName,pswd)
{
	if(connection==null||!connection.connected)
	{	
		connection = new Strophe.Connection(BOSH_SERVICE);
		Strophe.log = function(level, msg) {
			log('LOG: ' + msg);
		};
		var user =userName.toLowerCase()+"@reporting.umang.gov.in"; //$("#login_jid").val();
		console.log("user==="+user);
		var pass = pswd;//$("#login_jpass").val();
		console.log("user==="+pass);
		connection.connect(user, pass, onConnect);
	}	


	$(document).on("click",".chat-opt-btn",function() {
		var optVal = $(this).attr("data-value");
		var chatContainer = $(this).closest(".consumer-chat-container");

		if (optVal != undefined && $.trim(optVal).length > 0) {
			$(chatContainer).find(".message-text").val(optVal);
			$(chatContainer).find(".sendMessage").click();
		}
	});


/*	$(document).on("keypress",".message-text",function(e) {
		if (e.which == 13) {
			var optVal = $(this).val();
			if (optVal != undefined && $.trim(optVal).length > 0) {
				$(".sendMessage").click();
			}
		}
	});*/

	var bot='bot@reporting.umang.gov.in';
	var fromUser = connection.jid;
	var toUser_hidden;
	 var uniId ;

	 
	 
		$(document).on("click",".endMessage",function() 
			    {
					
					var res=confirm("Are you sure to end Chat!");
					if(res==true)
					{	
							var chatContainer = $(this).closest(".consumer-chat-container");
							uniId =$(chatContainer).attr("data-chatuniqueid");
							toUser_hidden = $(chatContainer).attr("data-userjid");
							console.log("***"+toUser_hidden);
						
								console.log("**********************************");
									var msgJson = "agetntDissconected"+'~~~'+ uniId+'~~~'+"exit";
										
								var reply = $msg({
									to : bot,//toUser_hidden,
									from : fromUser,
									type : 'chat'
								}).c('body').t(msgJson);
								console.log("endJson"+msgJson);
								console.log("reply.tree()"+reply.tree());
								connection.send(reply.tree());
					}		
					event.stoppropagation();
				});
		
		
	$(document).on("click",".sendMessage",function() 
    {
		var userMessage_Part1 = "<li class='mar-btm'>"
			+ "<div class='media-body pad-hor speech-right'>"
			+ "<div class='speech'>";

		var date1 = new Date();
		var hour1 = date1.getHours();
		var min1 = date1.getMinutes();
		var sec1 = date1.getSeconds();
		if(hour1<=9){
			hour1="0"+hour1;
		}
		if(min1<=9){
			min1="0"+min1;
		}
		console.log(hour1+":"+min1);
		var userMessage_Part2 = "</div><p class='timer_cls'>"+hour1+":"+min1+":"+sec1+"</p></div></li>";
		
		var chatContainer = $(this).closest(".consumer-chat-container");
		console.log("");
		uniId =$(chatContainer).attr("data-chatuniqueid");

		var msg_txt = $(chatContainer).find(".message-text").val();
		////alert("*******"+msg_txt)
		toUser_hidden = $(chatContainer).attr("data-userjid");
		console.log("***"+toUser_hidden);
		//uniId =$(chatContainer).attr("data-chatuniqueid");

		
if ((msg_txt != undefined && $.trim(msg_txt).length > 0) && (toUser_hidden != undefined && $.trim(toUser_hidden).length > 0)) {
	msg_txt=replaceXSSField(msg_txt);	
	var fMsg = userMessage_Part1
					+ "<p>" + msg_txt + "</p>"
					+ userMessage_Part2;
			console.log("**********************************");
			$(chatContainer).find(".user-chat-ul").append(fMsg);
			$(chatContainer).find(".message-text").val("");
			fbChatid = $(chatContainer).attr("data-fbchatid");
			function getMessages(letter) 
			{
				var ul = $('[id^=message]');
				ul.each(function(i, obj)
				{
					$(obj).scrollTop($(obj).prop('scrollHeight'));
				});
			}

			$(function() {
			    getMessages();
			});
			
			/* var msgJson = msg_txt+'_'+ uniId+'@'+toUser_hidden; *//* '[{"text":"'
					+ msg_txt
					+ '","type":"text"}]';
			
*/
				var msgJson = msg_txt+'@%%@'+ uniId+'@%%@'+toUser_hidden;
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
			console.log("msgJson"+msgJson);
			console.log("reply.tree()"+reply.tree());
			connection.send(reply.tree());
			sendPausStatus(toUser_hidden, connection.jid);
		}
	});
	$(document).on("keydown",".message-text",function(event)
			{
				event.stopImmediatePropagation();
				var chatContainer = $(this).closest(".consumer-chat-container");
				uniId =$(chatContainer).attr("data-chatuniqueid");
				var msg_txt = $(chatContainer).find(".message-text").val();
				toUser_hidden = $(chatContainer).attr("data-userjid");
				var keyCode=event.keyCode
				if(connection.connected)
				{
					
				     	if(keyCode==8&&$(this).val().length==1)
				     	{
				     		console.log("send pause status");
				     		sendPausStatus(toUser_hidden, connection.jid);
				     	}
				     	else
						if(keyCode!=8&&$(this).val().length==0)
						{
							console.log("send typing status");
							sendTypingStatus(toUser_hidden, connection.jid);
						}	
				}	
				event.stopPropagation();
			});
	   $(document).on("focus",".message-text",function(event){
				
			//	$(this).closest(".top_menu").css({"":""});
				fadeOut($(this).attr("name"));
				event.preventDefault();
			});	
	$(document).on("click",".chat-close",function() {
/*		var cnfrm = confirm("Are you sure to end this chat Now");
		if (cnfrm) {*/
			var chatid = $(this).closest(".consumer-chat-container").attr("data-jid");
			//usrList = usrList.splice($.inArray(chatid, usrList), 1);
			//usrList.remove(chatid);
			console.log("-----**-------");
			console.log(usrList);
			console.log("-----**-------");
			
			$(this).closest(".consumer-chat-container").remove();
			//usrList=[];
			usrList = jQuery.grep(usrList, function(value) {
				  return value != chatid;
				});

	});
	
	
	
};

function fadeOut(value)
{
	if(fadeInterval[parseInt(value)]>0)
	{	
		clearInterval(fadeInterval[parseInt(value)]);
		$("#window-"+value+" .top_menu").css("background","#3F51B5");
		fadeInterval[parseInt(value)]=-1;
	}	
}
function fadeIn(id,value,textArea)
{
	
	var isRed=true;
	if((typeof fadeInterval[parseInt(value)]==="undefined"||fadeInterval[parseInt(value)]<0)&&textArea==false)
	{
		fadeInterval[parseInt(value)] = setInterval(function()
		{
			if(isRed)
			{
				isRed=false;
				id.css("background","rgba(255,0,0,0.8)");
			}
			else
			{
				isRed=true;
				id.css("background","#3F51B5");
			}
	 },600);
	}
	
}


function wrapChat1(obj)
{
	try{	    
		    var scope = angular.element(document.getElementById("agentChat")).scope();
		    scope.$apply(function()
		    {
		    	scope.wrapUpReqPopUp($(obj).attr("id"),$(obj).attr("datajid"),$(obj).closest(".consumer-chat-container").attr("id"));
		    });
		   }catch(error){
			   console.log(error.message);
		   }
}


function wrapChat2(obj1){
	try{	    
	    var scope = angular.element(document.getElementById("agentChat")).scope();
	    scope.$apply(function(){
	    	scope.fetchchatDtls(obj1);
	    });
	   }catch(error){
		   console.log(error.message);
	   }
}


function replaceXSSField(iVal){
    if(iVal!=undefined && iVal!=null && $.trim(iVal).length>0){
            iVal = iVal.replace(new RegExp("<", 'g'), "&#60;");
            iVal = iVal.replace(new RegExp(">", 'g'), "&#62;");
            return iVal;
    }
    return "";
}


function convertUnicodeToChar( strUnicode){
	  // var strUnicode="091509410932092d09420937092300200915094809380947002009390948";

	   		var  strReturnValue = "", strSubUnicode = "";

	   			var intLength = strUnicode.length;
	   			if (strUnicode.length % 4 != 0) {
	   				return "";
	   			}

	   			while (intLength > 0) {
	   				strSubUnicode = strUnicode.substring(0, 4);
	   			//	alert(String.fromCharCode(parseInt(strSubUnicode, 16)));
	   				strUnicode = strUnicode.substring(4);
	   			//	strReturnValue += (char) Integer.parseInt(strSubUnicode, 16) + "";
	   			    strReturnValue += String.fromCharCode(parseInt(strSubUnicode, 16))+ "";
	   				intLength -= 4;
	   			}
	   			return strReturnValue;

		}
