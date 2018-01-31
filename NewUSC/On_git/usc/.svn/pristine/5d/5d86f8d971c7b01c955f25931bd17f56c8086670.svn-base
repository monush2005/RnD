package in.spicedigital.umang.controllers.common;

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
import in.spicedigital.umang.dto.constants.RestServiceURIConstants;
import in.spicedigital.umang.dto.constants.RestURIConstants;
import in.spicedigital.umang.dto.request.RegisterUserResponseReqPojo;
import in.spicedigital.umang.utility.CommonApiUtility;
import in.spicedigital.umang.utility.Utility;

@Controller
public class RegistrationResponseController {
	
	@Autowired
	private Utility encryptionUtility;
	
	@RequestMapping(value = RestURIConstants.REST_POST_REG_RESP, method = RequestMethod.POST)
		public @ResponseBody String  login(@RequestBody RegisterUserResponseReqPojo requestBody,HttpSession session,HttpServletRequest request) {
			CommonApiUtility restTemplate=new CommonApiUtility();
			try {
				Gson gson=new GsonBuilder().serializeNulls().create();
				requestBody.setToken(RequestContextHolder.currentRequestAttributes().getSessionId());
				String requestJson=gson.toJson(requestBody);
				System.out.println(RestURIConstants.REST_POST_REG_RESP);
				System.out.println("REQUEST::: "+requestJson+encryptionUtility.getReadTimeout()+encryptionUtility.getConnectionTimeout());
				return restTemplate.postForEntity(RestServiceURIConstants.REST_POST_REG_RESP,requestJson,request,encryptionUtility.getReadTimeout(),encryptionUtility.getConnectionTimeout());
			} catch (Exception e) {
				e.printStackTrace();
				return PropertyConfiguration.getDefaultErrorResponse("Sorry, Something went wrong");
			}
	}	
}