package in.spicedigital.umang.controllers.common;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.context.request.RequestContextHolder;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import in.spicedigital.umang.config.PropertyConfiguration;
import in.spicedigital.umang.dto.constants.RestServiceURIConstants;
import in.spicedigital.umang.dto.constants.RestURIConstants;
import in.spicedigital.umang.dto.constants.WsConstants;
import in.spicedigital.umang.dto.request.LoginReqPojo;
import in.spicedigital.umang.dto.request.LogoutCheck;
import in.spicedigital.umang.dto.request.LogoutReqPojo;
import in.spicedigital.umang.utility.Utility;
@Controller
public class LoginController {
	
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	@Autowired
	private Utility encryptionUtility;

	@RequestMapping(value = RestURIConstants.REST_POST_LOGIN, method = RequestMethod.POST)
		public @ResponseBody String  login(@RequestBody LoginReqPojo requestBody,HttpSession session,HttpServletRequest request) {
			ResponseEntity<String> response =null;
			System.out.println("login request");
			String responseString=null;
			if (session != null && !session.isNew()) {
			    session.invalidate();
			}
			session=request.getSession(true);
			request.getSession().setAttribute("login","yes");
			request.getSession().setAttribute("userid",requestBody.getUserid());
			System.out.println("JSSIONID:"+RequestContextHolder.currentRequestAttributes().getSessionId());
			requestBody.setToken(RequestContextHolder.currentRequestAttributes().getSessionId());
			System.out.println("path::::"+RestURIConstants.REST_POST_LOGIN);
			
			logger.info("lLogin Request: {}",requestBody);
			try {
				RestTemplate restTemplate = new RestTemplate();
				((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setReadTimeout(encryptionUtility.getReadTimeout());
				((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setConnectTimeout(encryptionUtility.getConnectionTimeout());
				HttpHeaders headers = new HttpHeaders();
				Gson gson=new GsonBuilder().serializeNulls().create();
				String requestJson=gson.toJson(requestBody);
				headers.add("Content-Type", "application/json;charset=utf-8");
				headers.set("Authorization", PropertyConfiguration.getConfiguration(WsConstants.WS_AUTHORIZATION));
				HttpEntity<String> entity = new HttpEntity<String>(requestJson,headers);
				logger.info("URL: {}",WsConstants.WS_APPLICATION_URL+RestServiceURIConstants.REST_POST_LOGIN);
				response = restTemplate.postForEntity(WsConstants.WS_APPLICATION_URL+RestServiceURIConstants.REST_POST_LOGIN, entity,String.class);
				responseString=response.getBody();
				
			} catch (Exception e) {
				logger.error("Login Response",e);
				responseString=PropertyConfiguration.getDefaultErrorResponse("Sorry, Something went wrong");
				e.printStackTrace();
			}
			logger.info("Login Response:  {}",response);
			return responseString;
	}	
	@RequestMapping(value = RestURIConstants.REST_POST_LOGOUT, method = RequestMethod.POST)
	public @ResponseBody String  login(@RequestBody LogoutReqPojo requestBody,HttpSession session,HttpServletRequest request) {
		ResponseEntity<String> response =null;
		requestBody.setToken(RequestContextHolder.currentRequestAttributes().getSessionId());
		logger.info("Logout Request: {}",requestBody);
		String responseString=null;
		System.out.println("log before JSSIONID:"+RequestContextHolder.currentRequestAttributes().getSessionId());
		try {
			RestTemplate restTemplate = new RestTemplate();
			((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setReadTimeout(encryptionUtility.getReadTimeout());
			((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setConnectTimeout(encryptionUtility.getConnectionTimeout());
			HttpHeaders headers = new HttpHeaders();
			Gson gson=new GsonBuilder().serializeNulls().create();
			String requestJson=gson.toJson(requestBody);
			headers.setContentType(MediaType.APPLICATION_JSON);
			headers.set("Authorization", PropertyConfiguration.getConfiguration(WsConstants.WS_AUTHORIZATION));
			HttpEntity<String> entity = new HttpEntity<String>(requestJson,headers);
			logger.info("URL: {}",WsConstants.WS_APPLICATION_URL+RestServiceURIConstants.REST_POST_LOGOUT);
			response = restTemplate.postForEntity(WsConstants.WS_APPLICATION_URL+RestServiceURIConstants.REST_POST_LOGOUT, entity,String.class);
			responseString=response.getBody();
			System.out.println("log jsut before JSSIONID:"+RequestContextHolder.currentRequestAttributes().getSessionId());
			session.invalidate();
			System.out.println("log after JSSIONID:"+RequestContextHolder.currentRequestAttributes().getSessionId());
		} catch (Exception e) {
			logger.error("Logout Response",e);
			responseString=PropertyConfiguration.getDefaultErrorResponse("Sorry, Something went wrong");
			e.printStackTrace();
		}
		logger.info("Logout Response:  {}",response);
		try {
		ObjectMapper mapper = new ObjectMapper();
		LogoutCheck user = mapper.readValue(responseString, LogoutCheck.class);
		System.out.println("==="+user.getRd());
		if("Authentication failed. Please try again".equalsIgnoreCase(user.getRd())){
			request.getSession().setAttribute("logout","yes");
		}
		} catch (Exception e) {
			// TODO: handle exception
		}
		return responseString;
}	
}