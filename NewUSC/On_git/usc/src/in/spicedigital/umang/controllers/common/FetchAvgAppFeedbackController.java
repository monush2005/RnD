package in.spicedigital.umang.controllers.common;

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

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import in.spicedigital.umang.config.PropertyConfiguration;
import in.spicedigital.umang.dto.constants.RestServiceURIConstants;
import in.spicedigital.umang.dto.constants.RestURIConstants;
import in.spicedigital.umang.dto.constants.WsConstants;
import in.spicedigital.umang.dto.request.FetchAvgAppFeedbackPojo;
import in.spicedigital.umang.dto.request.FetchRatingCommentsReqPojo;
import in.spicedigital.umang.utility.Utility;
@Controller
public class FetchAvgAppFeedbackController {
	
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	@Autowired
	private Utility encryptionUtility;

	@RequestMapping(value = RestURIConstants.REST_POST_FETCH_AVG_APP_FEEDBACK, method = RequestMethod.POST)
		public @ResponseBody String  login(@RequestBody FetchAvgAppFeedbackPojo	 requestBody,HttpSession session) {
			ResponseEntity<String> response =null;
			logger.info("Login Request: {}",requestBody);
			requestBody.setToken(RequestContextHolder.currentRequestAttributes().getSessionId());
			String responseString=null;
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
				logger.info("URL: {}",WsConstants.WS_APPLICATION_URL+RestServiceURIConstants.REST_POST_FETCH_AVG_APP_FEEDBACK);
			response = restTemplate.postForEntity(WsConstants.WS_APPLICATION_URL+RestServiceURIConstants.REST_POST_FETCH_AVG_APP_FEEDBACK, entity,String.class);
				responseString=response.getBody();
				//responseString=" {\r\n \t\"rc\": \"CRM0000\",\r\n \t\"rs\": \"S\",\r\n \t\"rd\": \"\",\r\n\r\n \t\"pd\": {\r\n\r\n \t\t\"totalUsers\": \"5506\",\r\n \t\t\"totalFeedbacks\": \"345\",\r\n \t\t\"details\": [{\r\n \t\t\t\"rating5\": \"4250\",\r\n \t\t\t\"rating4\": \"32\",\r\n \t\t\t\"rating3\": \"12\",\r\n \t\t\t\"rating2\": \"456\",\r\n \t\t\t\"rating1\": \"567\",\r\n \t\t\t\"noRating\": \"45\",\r\n \t\t\t\"average\": \"45\"\r\n\r\n \t\t}]\r\n \t}\r\n }\r\n";
				
			} catch (Exception e) {
				logger.error("Login Response",e);
				responseString=PropertyConfiguration.getDefaultErrorResponse("Sorry, Something went wrong");
				e.printStackTrace();
			}
			logger.info("Login Response:  {}",response);
			return responseString;
	}
}