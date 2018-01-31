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
import in.spicedigital.umang.dto.request.FetchRatingCommentsReqPojo;
import in.spicedigital.umang.dto.request.ProfileFetchInfoPojo;
import in.spicedigital.umang.utility.Utility;
@Controller
public class ProfileFetchInfoController {
	
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	@Autowired
	private Utility encryptionUtility;

	@RequestMapping(value = RestURIConstants.REST_POST_PROFILE_FETCH_INFO, method = RequestMethod.POST)
		public @ResponseBody String  login(@RequestBody ProfileFetchInfoPojo	 requestBody,HttpSession session) {
			ResponseEntity<String> response =null;
			logger.info("Login Request: {}",requestBody);
			//requestBody.setToken(RequestContextHolder.currentRequestAttributes().getSessionId());
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
				logger.info("URL: {}",WsConstants.WS_APPLICATION_URL+RestServiceURIConstants.REST_POST_PROFILE_FETCH_INFO);
				response = restTemplate.postForEntity(WsConstants.WS_APPLICATION_URL+RestServiceURIConstants.REST_POST_PROFILE_FETCH_INFO, entity,String.class);
			responseString=response.getBody();
	//			responseString="{\r\n    \"rs\": \"S\",\r\n    \"rc\": \"SLF0000\",\r\n    \"rd\": null,\r\n    \"pd\": {\r\n        \"details\": [\r\n            {\r\n                \"rating\": \"5\",\r\n                \"os\": \"app\",\r\n                \"userLanguage\": null,\r\n                \"mno\": \"9915354316\",\r\n                \"logdate\": \"2017-05-24 21:42:48.725515\",\r\n                \"feedback\": \"dfg\",\r\n                \"category\": \"appfd\"\r\n            },\r\n            {\r\n                \"rating\": \"5\",\r\n                \"os\": \"app\",\r\n                \"userLanguage\": null,\r\n                \"mno\": \"9915354316\",\r\n                \"logdate\": \"2017-05-24 22:00:32.449087\",\r\n                \"feedback\": \"filter\",\r\n                \"category\": \"appfd\"\r\n            },\r\n            {\r\n                \"rating\": \"3\",\r\n                \"os\": \"app\",\r\n                \"userLanguage\": null,\r\n                \"mno\": \"9915354316\",\r\n                \"logdate\": \"2017-05-24 22:23:10.930102\",\r\n                \"feedback\": \"jskosos\",\r\n                \"category\": \"otherfd\"\r\n            },\r\n            {\r\n                \"rating\": \"4\",\r\n                \"os\": \"app\",\r\n                \"userLanguage\": null,\r\n                \"mno\": \"9915354316\",\r\n                \"logdate\": \"2017-05-24 23:27:33.227519\",\r\n                \"feedback\": \"ndkdl\",\r\n                \"category\": \"otherfd\"\r\n            },\r\n            {\r\n                \"rating\": \"2\",\r\n                \"os\": \"app\",\r\n                \"userLanguage\": null,\r\n                \"mno\": \"9915354316\",\r\n                \"logdate\": \"2017-05-25 03:34:16.63739\",\r\n                \"feedback\": \"H\",\r\n                \"category\": \"appfd\"\r\n            },\r\n            {\r\n                \"rating\": \"1\",\r\n                \"os\": \"app\",\r\n                \"userLanguage\": null,\r\n                \"mno\": \"9915354316\",\r\n                \"logdate\": \"2017-05-25 03:43:44.129795\",\r\n                \"feedback\": \"Cuff\",\r\n                \"category\": \"appfd\"\r\n            },\r\n            {\r\n                \"rating\": \"4\",\r\n                \"os\": \"app\",\r\n                \"userLanguage\": null,\r\n                \"mno\": \"9915354316\",\r\n                \"logdate\": \"2017-05-25 11:28:04.659122\",\r\n                \"feedback\": \"Ufifif\",\r\n                \"category\": \"appfd\"\r\n            },\r\n            {\r\n                \"rating\": \"5\",\r\n                \"os\": \"app\",\r\n                \"userLanguage\": null,\r\n                \"mno\": \"9988006086\",\r\n                \"logdate\": \"2017-05-25 13:06:35.76883\",\r\n                \"feedback\": \"Vsbbsnsnnansnsn\",\r\n                \"category\": \"appfd\"\r\n            },\r\n            {\r\n                \"rating\": \"1\",\r\n                \"os\": \"app\",\r\n                \"userLanguage\": null,\r\n                \"mno\": \"9501260190\",\r\n                \"logdate\": \"2017-05-25 15:27:50.07763\",\r\n                \"feedback\": \"number of services is getting changed . sometimes it shows 18 another moment 17\",\r\n                \"category\": \"appfd\"\r\n            },\r\n            {\r\n                \"rating\": \"4\",\r\n                \"os\": \"app\",\r\n                \"userLanguage\": null,\r\n                \"mno\": \"9711739316\",\r\n                \"logdate\": \"2017-05-25 20:04:28.912105\",\r\n                \"feedback\": \"Vhjj\",\r\n                \"category\": \"appfd\"\r\n            },\r\n            {\r\n                \"rating\": \"2\",\r\n                \"os\": \"app\",\r\n                \"userLanguage\": null,\r\n                \"mno\": \"9711739316\",\r\n                \"logdate\": \"2017-05-25 20:04:48.951808\",\r\n                \"feedback\": \"Vhjj\",\r\n                \"category\": \"otherfd\"\r\n            },\r\n            {\r\n                \"rating\": \"4\",\r\n                \"os\": \"app\",\r\n                \"userLanguage\": null,\r\n                \"mno\": \"9711739316\",\r\n                \"logdate\": \"2017-05-25 20:38:41.757214\",\r\n                \"feedback\": \"Kudf\",\r\n                \"category\": \"otherfd\"\r\n            },\r\n            {\r\n                \"rating\": \"3\",\r\n                \"os\": \"app\",\r\n                \"userLanguage\": null,\r\n                \"mno\": \"9711739316\",\r\n                \"logdate\": \"2017-05-25 20:55:08.081084\",\r\n                \"feedback\": \"Busied\",\r\n                \"category\": \"otherfd\"\r\n            },\r\n            {\r\n                \"rating\": \"3\",\r\n                \"os\": \"app\",\r\n                \"userLanguage\": null,\r\n                \"mno\": \"9711739316\",\r\n                \"logdate\": \"2017-05-26 01:27:15.899844\",\r\n                \"feedback\": \"Jjlhlghlhxlxlhxhlchlculchlxhlxlhxogogcpyfypcypxypxypxypxypcufuufificucucififififfifggghhh\",\r\n                \"category\": \"otherfd\"\r\n            },\r\n            {\r\n                \"rating\": \"4\",\r\n                \"os\": \"app\",\r\n                \"userLanguage\": null,\r\n                \"mno\": \"9711739316\",\r\n                \"logdate\": \"2017-05-26 01:27:33.875016\",\r\n                \"feedback\": \"H\",\r\n                \"category\": \"otherfd\"\r\n            }\r\n        ],\r\n        \"totalCount\": \"27\",\r\n        \"totalRating\": \"0\",\r\n        \"totalFeedbacks\": \"27\"\r\n    }\r\n}";
				
			} catch (Exception e) {
				logger.error("Login Response",e);
				responseString=PropertyConfiguration.getDefaultErrorResponse("Sorry, Something went wrong");
				e.printStackTrace();
			}
			logger.info("Login Response:  {}",response);
			return responseString;
	}
}