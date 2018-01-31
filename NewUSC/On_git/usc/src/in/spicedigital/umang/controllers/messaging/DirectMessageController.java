package in.spicedigital.umang.controllers.messaging;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.request.RequestContextHolder;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import in.spicedigital.umang.config.PropertyConfiguration;
import in.spicedigital.umang.usc.request.BroadcastInboxPojo;
import in.spicedigital.umang.usc.request.BroadcastOutboxPojo;
import in.spicedigital.umang.usc.request.DirectMsgReplyPojo;
import in.spicedigital.umang.usc.request.DirectMsgSendPojo;
import in.spicedigital.umang.utility.CommonApiUtility;
import in.spicedigital.umang.utility.Utility;

@Controller
@RequestMapping(value = "/messaging")
public class DirectMessageController {
	@Autowired
	private Utility encryptionUtility;

	@RequestMapping(value = "/dmSend", method = RequestMethod.POST)
	public @ResponseBody String send(@RequestBody DirectMsgSendPojo requestBody, HttpSession session,
			HttpServletRequest request) {
		CommonApiUtility restTemplate = new CommonApiUtility();
		try {
			Gson gson = new GsonBuilder().serializeNulls().create();
			requestBody.setToken(RequestContextHolder.currentRequestAttributes().getSessionId());
			String requestJson = gson.toJson(requestBody);
			return restTemplate.postForEntity("slfDirectMessage", requestJson,
					request, encryptionUtility.getReadTimeout(), encryptionUtility.getConnectionTimeout());
		} catch (Exception e) {
			e.printStackTrace();
			return PropertyConfiguration.getExceptionResponse();
		}
	}
	

	@RequestMapping(value = "/dmReply", method = RequestMethod.POST)
	public @ResponseBody String reply(@RequestBody DirectMsgReplyPojo requestBody, HttpSession session,
			HttpServletRequest request) {
		CommonApiUtility restTemplate = new CommonApiUtility();
		try {
			Gson gson = new GsonBuilder().serializeNulls().create();
			requestBody.setToken(RequestContextHolder.currentRequestAttributes().getSessionId());
			String requestJson = gson.toJson(requestBody);
			return restTemplate.postForEntity("slfDirectMessageReply", requestJson,
					request, encryptionUtility.getReadTimeout(), encryptionUtility.getConnectionTimeout());
		} catch (Exception e) {
			e.printStackTrace();
			return PropertyConfiguration.getExceptionResponse();
		}
	}

	@RequestMapping(value = "/dmInbox", method = RequestMethod.POST)
	public @ResponseBody String dmInbox(@RequestBody BroadcastInboxPojo requestBody, HttpSession session,
			HttpServletRequest request) {
		CommonApiUtility restTemplate = new CommonApiUtility();
		try {
			Gson gson = new GsonBuilder().serializeNulls().create();
			requestBody.setToken(RequestContextHolder.currentRequestAttributes().getSessionId());
			String requestJson = gson.toJson(requestBody);
			return restTemplate.postForEntity("slfFetchInboxMsg", requestJson,
					request, encryptionUtility.getReadTimeout(), encryptionUtility.getConnectionTimeout());
		} catch (Exception e) {
			e.printStackTrace();
			return PropertyConfiguration.getExceptionResponse();
		}
	}

	@RequestMapping(value = "/dmOutbox", method = RequestMethod.POST)
	public @ResponseBody String dmOutbox(@RequestBody BroadcastOutboxPojo requestBody, HttpSession session,
			HttpServletRequest request) {
		CommonApiUtility restTemplate = new CommonApiUtility();
		try {
			Gson gson = new GsonBuilder().serializeNulls().create();
			requestBody.setToken(RequestContextHolder.currentRequestAttributes().getSessionId());
			String requestJson = gson.toJson(requestBody);
			return restTemplate.postForEntity("slfFetchOutboxMsg", requestJson,
					request, encryptionUtility.getReadTimeout(), encryptionUtility.getConnectionTimeout());
		} catch (Exception e) {
			e.printStackTrace();
			return PropertyConfiguration.getExceptionResponse();
		}
	}
}