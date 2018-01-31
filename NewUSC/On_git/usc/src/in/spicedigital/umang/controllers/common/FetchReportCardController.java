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
import in.spicedigital.umang.dto.request.FetchDeptReportcardReqPojo;
import in.spicedigital.umang.utility.Utility;
@Controller
public class FetchReportCardController {
	
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	@Autowired
	private Utility encryptionUtility;

	@RequestMapping(value = RestURIConstants.REST_POST_FETCH_REPORT_CARD, method = RequestMethod.POST)
		public @ResponseBody String  login(@RequestBody FetchDeptReportcardReqPojo requestBody,HttpSession session) {
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
				logger.info("URL: {}",WsConstants.WS_APPLICATION_URL+RestServiceURIConstants.REST_POST_FETCH_REPORT_CARD);
				response = restTemplate.postForEntity(WsConstants.WS_APPLICATION_URL+RestServiceURIConstants.REST_POST_FETCH_REPORT_CARD, entity,String.class);
				responseString=response.getBody();
			} catch (Exception e) {
				logger.error("Login Response",e);
				responseString=PropertyConfiguration.getDefaultErrorResponse("Sorry, Something went wrong");
				e.printStackTrace();
			}
			logger.info("Login Response:  {}",response);
			return responseString;
	}	
}