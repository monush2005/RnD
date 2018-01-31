package in.spicedigital.umang.dto.constants;

import java.util.HashMap;
import java.util.Map;


public class SenderSession {
	private static Map<String,Object> senderSession;

	public static Map<String,Object> getSenderSession() {
		return senderSession;
	}
	public static synchronized  String createSenderSession(String agentId,String senderId,Boolean continueLogin){
		String rc="FFFFF",rd="Invalid login attempt. Please contact mcomm support!!!",rs="Fail";
		if(senderSession==null){
			senderSession= new HashMap<String,Object>();
		}
		if(senderSession.get(senderId)==null){
			rd="New Sender Loggin in!!!";
			senderSession.put(senderId, agentId);
			rc="S";
			rs="Success";
		}else if(senderSession.get(senderId)!=null&&senderSession.get(senderId).toString().equalsIgnoreCase(agentId)){
			rd="Continue go ahead!!!";
			rc="S";
			rs="Success";
		}else if(senderSession.get(senderId)!=null&&!senderSession.get(senderId).toString().equalsIgnoreCase(agentId)&&!continueLogin){
			rd="Sender is already logined under different Agent";
			rc="FFFFF";
			rs="Fail";
		}else if(senderSession.get(senderId)!=null&&!senderSession.get(senderId).toString().equalsIgnoreCase(agentId)&&continueLogin){
			rd="Invalid login of sender under different Agent, let him login forcefully!!!";
			senderSession.remove(senderId);
			senderSession.put(senderId, agentId);
			rc="S";
			rs="Success";
		}
		System.out.println("Agent:"+agentId+"SenderId:"+senderId+"{\"rs\":\""+rs+"\",\"rc\":\""+rc+"\",\"rd\":\""+rd+"\"}");
		return "{\"rs\":\""+rs+"\",\"rc\":\""+rc+"\",\"rd\":\""+rd+"\"}";
	}
	
	public static synchronized void destroy(String senderId){
		 senderSession.remove(senderId);
	} 
	
}
