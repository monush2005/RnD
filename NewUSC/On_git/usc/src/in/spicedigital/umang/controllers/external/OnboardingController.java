package in.spicedigital.umang.controllers.external;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import in.spicedigital.umang.config.PropertyConfiguration;
import in.spicedigital.umang.dto.constants.RestServiceURIConstants;
import in.spicedigital.umang.usc.request.UserOnboardingReqPojo;
import in.spicedigital.umang.utility.CommonApiUtility;
import in.spicedigital.umang.utility.Utility;

@Controller
@RequestMapping(value="/auth")
public class OnboardingController {
	
	@Autowired
	private Utility encryptionUtility;
	
	@RequestMapping(value = "/onBoard", method = RequestMethod.POST)
		public @ResponseBody String  userOnboard(@RequestBody UserOnboardingReqPojo requestBody,HttpSession session,HttpServletRequest request) {
			CommonApiUtility restTemplate=new CommonApiUtility();
			try {
				Gson gson=new GsonBuilder().serializeNulls().create();
				String requestJson=gson.toJson(requestBody);
				
			//	System.out.println("body ====="+restTemplate.postForEntity(RestServiceURIConstants.REST_POST_USC_USER_ONBOARD,requestJson,request,encryptionUtility.getReadTimeout(),encryptionUtility.getConnectionTimeout()));
				return restTemplate.postForEntity(RestServiceURIConstants.REST_POST_USC_USER_ONBOARD,requestJson,request,encryptionUtility.getReadTimeout(),encryptionUtility.getConnectionTimeout());					
			   
	         
			} catch (Exception e) {
				e.printStackTrace();
				return PropertyConfiguration.getExceptionResponse();
			}
	}
	
}