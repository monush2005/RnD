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
import in.spicedigital.umang.dto.request.FetchAppFeedbackPojo;
import in.spicedigital.umang.dto.request.FetchAvgAppFeedbackPojo;
import in.spicedigital.umang.dto.request.FetchDeptFeedbackPojo;
import in.spicedigital.umang.dto.request.FetchRatingCommentsReqPojo;
import in.spicedigital.umang.dto.request.FetchServiceFeedbackPojo;
import in.spicedigital.umang.utility.Utility;
@Controller
public class FetchServiceFeedbackController {
	
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	@Autowired
	private Utility encryptionUtility;

	@RequestMapping(value = RestURIConstants.REST_POST_FETCH_SERVICE_FEEDBACK, method = RequestMethod.POST)
		public @ResponseBody String  login(@RequestBody FetchServiceFeedbackPojo	 requestBody,HttpSession session) {
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
				logger.info("URL: {}",WsConstants.WS_APPLICATION_URL+RestServiceURIConstants.REST_POST_FETCH_SERVICE_FEEDBACK);
				response = restTemplate.postForEntity(WsConstants.WS_APPLICATION_URL+RestServiceURIConstants.REST_POST_FETCH_SERVICE_FEEDBACK, entity,String.class);
				responseString=response.getBody();
				//responseString="{\r\n\t\"rc\": \"S\",\r\n\t\"pd\": {\r\n\t\t\"totalCount\": \"12\",\r\n\t\t\"feedbacks\" : [{\r\n            \"stars\": \"1\",\r\n            \"os\": \"Android\",\r\n            \"lang\": \"en\",\r\n            \"profileId\": \"3243225\",\r\n            \"datetime\": \"2017-05-13 22:20:07.503729\",\r\n            \"text\": \"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\",\r\n            \"deptId\": \"10\"\r\n        },\r\n        {\r\n            \"stars\": \"3\",\r\n            \"os\": \"iOS\",\r\n            \"lang\": \"en\",\r\n            \"profileId\": \"32425\",\r\n            \"datetime\": \"2017-05-13 22:20:07.503729\",\r\n            \"text\": \"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\",\r\n            \"serviceId\": \"407\"\r\n        },\r\n        {\r\n            \"stars\": \"2\",\r\n            \"os\": \"Android\",\r\n            \"lang\": \"en\",\r\n            \"profileId\": \"233\",\r\n            \"datetime\": \"2017-05-13 22:20:07.503729\",\r\n            \"text\": \"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\",\r\n            \"deptId\": \"12\"\r\n        }]\r\n\t}\r\n}";
				
			} catch (Exception e) {
				logger.error("Login Response",e);
				responseString=PropertyConfiguration.getDefaultErrorResponse("Sorry, Something went wrong");
				e.printStackTrace();
			}
			logger.info("Login Response:  {}",response);
			return responseString;
	}
}