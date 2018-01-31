package in.spicedigital.umang.controllers.external;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.request.RequestContextHolder;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import in.spicedigital.umang.config.PropertyConfiguration;
import in.spicedigital.umang.dto.constants.RestServiceURIConstants;
import in.spicedigital.umang.usc.request.LoginUserReqPojo;
import in.spicedigital.umang.usc.request.LogoutReqPojo;
import in.spicedigital.umang.usc.response.LoginResponsePojo;
import in.spicedigital.umang.usc.response.LogoutResponsePojo;
import in.spicedigital.umang.utility.CommonApiUtility;
import in.spicedigital.umang.utility.Utility;

@Controller
@RequestMapping(value="/auth")
public class UscLoginLogoutController {
	
	@Autowired
	private Utility encryptionUtility;
	
	@RequestMapping(value = "/lg", method = RequestMethod.POST)
		public @ResponseBody String  login(@RequestBody LoginUserReqPojo requestBody,HttpSession session,HttpServletRequest request) {
			CommonApiUtility restTemplate=new CommonApiUtility();
			try {
				if (session != null && !session.isNew()) {
				    session.invalidate();
				}
				session=request.getSession(true);
				requestBody.setToken(RequestContextHolder.currentRequestAttributes().getSessionId());
				
				Gson gson=new GsonBuilder().serializeNulls().create();
				String requestJson=gson.toJson(requestBody);
				
				String responseString=restTemplate.postForEntity(RestServiceURIConstants.REST_POST_USC_LOGIN,requestJson,request,encryptionUtility.getReadTimeout(),encryptionUtility.getConnectionTimeout());
				ObjectMapper mapper = new ObjectMapper();
				LoginResponsePojo resObj = mapper.readValue(responseString, LoginResponsePojo.class);
				
				if("S".equalsIgnoreCase(resObj.getRs())){
					request.getSession().setAttribute("login","yes");
					request.getSession().setAttribute("userid",requestBody.getUserId());					
				}
				
				return responseString;			
			} catch (Exception e) {
				e.printStackTrace();
				return PropertyConfiguration.getExceptionResponse();
			}
	}
	
	
	@RequestMapping(value = "/lgout", method = RequestMethod.POST)
	public @ResponseBody String  logout(@RequestBody LogoutReqPojo requestBody,HttpSession session,HttpServletRequest request) {
		CommonApiUtility restTemplate=new CommonApiUtility();
		String response=null;
		
		try {
			requestBody.setToken(RequestContextHolder.currentRequestAttributes().getSessionId());
			Gson gson=new GsonBuilder().serializeNulls().create();
			String requestJson=gson.toJson(requestBody);
			response = restTemplate.postForEntity(RestServiceURIConstants.REST_POST_USC_LOGOUT,requestJson,request,encryptionUtility.getReadTimeout(),encryptionUtility.getConnectionTimeout());
			
			try{
				ObjectMapper mapper = new ObjectMapper();
				LogoutResponsePojo user = mapper.readValue(response, LogoutResponsePojo.class);
				if("S".equalsIgnoreCase(user.getRs())){
					request.getSession().setAttribute("logout","yes");
					session.invalidate();
				}
			}catch(Exception e) {
				e.printStackTrace();
				response = PropertyConfiguration.getExceptionResponse();
			}
		} catch (Exception e) {
			e.printStackTrace();
			response = PropertyConfiguration.getExceptionResponse();
		}
		return response;
	}
	
}