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
import in.spicedigital.umang.dto.request.AnalyticsDemoPojo;
import in.spicedigital.umang.dto.request.AnalyticsDemoSubPojo;
import in.spicedigital.umang.dto.request.AnalyticsDeptDemoPojo;
import in.spicedigital.umang.dto.request.AnalyticsDeptDemoSubPojo;
import in.spicedigital.umang.dto.request.AnalyticsSFDataPojo;
import in.spicedigital.umang.dto.request.AppServicesRatingPojo;
import in.spicedigital.umang.dto.request.DateRangePojo;
import in.spicedigital.umang.dto.request.LoginReqPojo;
import in.spicedigital.umang.dto.request.LogoutCheck;
import in.spicedigital.umang.dto.request.LogoutReqPojo;
import in.spicedigital.umang.dto.request.MinistriesPojo;
import in.spicedigital.umang.dto.request.ReportingPerfRequestPojo;
import in.spicedigital.umang.dto.request.ReportingRequestMergedPojo;
import in.spicedigital.umang.dto.request.ReportingRequestPojo;
import in.spicedigital.umang.dto.request.ReportingTpsPojo;
import in.spicedigital.umang.utility.Utility;
@Controller
public class ReportingController {
	
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	@Autowired
	private Utility encryptionUtility;

	@RequestMapping(value = RestURIConstants.REST_REPORTING, method = RequestMethod.POST)
		public @ResponseBody String  login(@RequestBody ReportingRequestPojo requestBody,HttpSession session,HttpServletRequest request) {
			ResponseEntity<String> response =null;
			String responseString=null;
			System.out.println("JSSIONID:"+RequestContextHolder.currentRequestAttributes().getSessionId());
			System.out.println("path::::"+RestURIConstants.REST_REPORTING);
			logger.info("reporting data: {}",requestBody);
			try {
				String reportType = requestBody.getType();
				requestBody.setType("");
				if(requestBody.getDepartment()!=null){
					requestBody.setService("");
				} else{
					requestBody.setDepartment("");
				}
				RestTemplate restTemplate = new RestTemplate();
				((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setReadTimeout(encryptionUtility.getReadTimeout());
				((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setConnectTimeout(encryptionUtility.getConnectionTimeout());
				HttpHeaders headers = new HttpHeaders();
				Gson gson=new GsonBuilder().serializeNulls().create();
				String requestJson=gson.toJson(requestBody);
				headers.setContentType(MediaType.APPLICATION_JSON);
//				headers.set("Authorization", PropertyConfiguration.getConfiguration(WsConstants.WS_AUTHORIZATION));
				HttpEntity<String> entity = new HttpEntity<String>(requestJson,headers);
				String reportingURL = PropertyConfiguration.getConfiguration(WsConstants.WS_REPORTING_URL)+reportType;
				logger.info("URL: {}",reportingURL);
				response = restTemplate.postForEntity(reportingURL, entity,String.class);
				responseString=response.getBody();				
			} catch (Exception e) {
				logger.error("Login Response",e);
				responseString=PropertyConfiguration.getDefaultErrorResponse("Sorry, Something went wrong");
				e.printStackTrace();
			}
			logger.info("Login Response:  {}",response);
			return responseString;
	}
	
	
	@RequestMapping(value = RestURIConstants.REST_REPORTING_MERGED, method = RequestMethod.POST)
	public @ResponseBody String  reportingMerged(@RequestBody ReportingRequestMergedPojo requestBody,HttpSession session,HttpServletRequest request) {
		ResponseEntity<String> response =null;
		String responseString=null;
		System.out.println("JSSIONID:"+RequestContextHolder.currentRequestAttributes().getSessionId());
		System.out.println("path::::"+RestURIConstants.REST_REPORTING);
		logger.info("reporting data: {}",requestBody);
		try {
			String reportURL = "";
			if(requestBody.getDepartment()!=null){
				requestBody.setService("");
				reportURL= "bideptreprt";				
			} else{
				requestBody.setDepartment("");
				reportURL = "biservicereprt";
			}
			RestTemplate restTemplate = new RestTemplate();
			((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setReadTimeout(encryptionUtility.getReadTimeout());
			((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setConnectTimeout(encryptionUtility.getConnectionTimeout());
			HttpHeaders headers = new HttpHeaders();
			Gson gson=new GsonBuilder().serializeNulls().create();
			String requestJson=gson.toJson(requestBody);
			headers.setContentType(MediaType.APPLICATION_JSON);
//			headers.set("Authorization", PropertyConfiguration.getConfiguration(WsConstants.WS_AUTHORIZATION));
			HttpEntity<String> entity = new HttpEntity<String>(requestJson,headers);
			String reportingURL = PropertyConfiguration.getConfiguration(WsConstants.WS_REPORTING_URL)+reportURL;
			logger.info("URL: {}",reportingURL);
			response = restTemplate.postForEntity(reportingURL, entity,String.class);
			responseString=response.getBody();				
		} catch (Exception e) {
			logger.error("Login Response",e);
			responseString=PropertyConfiguration.getDefaultErrorResponse("Sorry, Something went wrong");
			e.printStackTrace();
		}
		logger.info("Login Response:  {}",response);
		return responseString;
}
	
	@RequestMapping(value = "dashboardDept", method = RequestMethod.POST)
	public @ResponseBody String  dashboardDept(@RequestBody ReportingRequestMergedPojo requestBody,HttpSession session,HttpServletRequest request) {
		ResponseEntity<String> response =null;
		String responseString=null;
		System.out.println("JSSIONID:"+RequestContextHolder.currentRequestAttributes().getSessionId());
		System.out.println("path::::"+RestURIConstants.REST_REPORTING);
		logger.info("reporting data: {}",requestBody);
		try {
			String reportURL = "";
			if(requestBody.getDepartment()!=null){
				requestBody.setService("");
				reportURL= "bidepartment";				
			} else{
				requestBody.setDepartment("");
				reportURL = "biservicereprt";
			}
			RestTemplate restTemplate = new RestTemplate();
			((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setReadTimeout(encryptionUtility.getReadTimeout());
			((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setConnectTimeout(encryptionUtility.getConnectionTimeout());
			HttpHeaders headers = new HttpHeaders();
			Gson gson=new GsonBuilder().serializeNulls().create();
			String requestJson=gson.toJson(requestBody);
			headers.setContentType(MediaType.APPLICATION_JSON);
//			headers.set("Authorization", PropertyConfiguration.getConfiguration(WsConstants.WS_AUTHORIZATION));
			HttpEntity<String> entity = new HttpEntity<String>(requestJson,headers);
			String reportingURL = PropertyConfiguration.getConfiguration(WsConstants.WS_REPORTING_URL)+reportURL;
			logger.info("URL: {}",reportingURL);
			response = restTemplate.postForEntity(reportingURL, entity,String.class);
			responseString=response.getBody();				
		} catch (Exception e) {
			logger.error("Login Response",e);
			responseString=PropertyConfiguration.getDefaultErrorResponse("Sorry, Something went wrong");
			e.printStackTrace();
		}
		logger.info("Login Response:  {}",response);
		return responseString;
}
	
	
	@RequestMapping(value = "reportCardDept", method = RequestMethod.POST)
	public @ResponseBody String  reportCardDept(@RequestBody ReportingRequestMergedPojo requestBody,HttpSession session,HttpServletRequest request) {
		ResponseEntity<String> response =null;
		String responseString=null;
		System.out.println("JSSIONID:"+RequestContextHolder.currentRequestAttributes().getSessionId());
		System.out.println("path::::"+RestURIConstants.REST_REPORTING);
		logger.info("reporting data: {}",requestBody);
		try {
			String reportURL = "";
			if(requestBody.getDepartment()!=null){
				requestBody.setService("");
				reportURL= "bidepartmentRepo";				
			} else{
				requestBody.setDepartment("");
				reportURL = "biservicereprt";
			}
			RestTemplate restTemplate = new RestTemplate();
			((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setReadTimeout(encryptionUtility.getReadTimeout());
			((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setConnectTimeout(encryptionUtility.getConnectionTimeout());
			HttpHeaders headers = new HttpHeaders();
			Gson gson=new GsonBuilder().serializeNulls().create();
			String requestJson=gson.toJson(requestBody);
			headers.setContentType(MediaType.APPLICATION_JSON);
//			headers.set("Authorization", PropertyConfiguration.getConfiguration(WsConstants.WS_AUTHORIZATION));
			HttpEntity<String> entity = new HttpEntity<String>(requestJson,headers);
			String reportingURL = PropertyConfiguration.getConfiguration(WsConstants.WS_REPORTING_URL)+reportURL;
			logger.info("URL: {}",reportingURL);
			response = restTemplate.postForEntity(reportingURL, entity,String.class);
			responseString=response.getBody();				
		} catch (Exception e) {
			logger.error("Login Response",e);
			responseString=PropertyConfiguration.getDefaultErrorResponse("Sorry, Something went wrong");
			e.printStackTrace();
		}
		logger.info("Login Response:  {}",response);
		return responseString;
}
	
	
	@RequestMapping(value = RestURIConstants.REST_REPORTING_PERFORMANCE, method = RequestMethod.POST)
	public @ResponseBody String  reportingPerformance(@RequestBody ReportingPerfRequestPojo requestBody,HttpSession session,HttpServletRequest request) {
		ResponseEntity<String> response =null;
		String responseString=null;
		System.out.println("JSSIONID:"+RequestContextHolder.currentRequestAttributes().getSessionId());
		System.out.println("path::::"+RestURIConstants.REST_REPORTING);
		logger.info("reporting data: {}",requestBody);
		try {
			String reportType = requestBody.getType();
			requestBody.setType("");
			RestTemplate restTemplate = new RestTemplate();
			((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setReadTimeout(encryptionUtility.getReadTimeout());
			((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setConnectTimeout(encryptionUtility.getConnectionTimeout());
			HttpHeaders headers = new HttpHeaders();
			Gson gson=new GsonBuilder().serializeNulls().create();
			String requestJson=gson.toJson(requestBody);
			headers.setContentType(MediaType.APPLICATION_JSON);
//			headers.set("Authorization", PropertyConfiguration.getConfiguration(WsConstants.WS_AUTHORIZATION));
			HttpEntity<String> entity = new HttpEntity<String>(requestJson,headers);
			String reportingURL = PropertyConfiguration.getConfiguration(WsConstants.WS_REPORTING_URL)+reportType;
			logger.info("URL: {}",reportingURL);
			response = restTemplate.postForEntity(reportingURL, entity,String.class);
			responseString=response.getBody();				
		} catch (Exception e) {
			logger.error("Login Response",e);
			responseString=PropertyConfiguration.getDefaultErrorResponse("Sorry, Something went wrong");
			e.printStackTrace();
		}
		logger.info("Login Response:  {}",response);
		return responseString;
}
	
	@RequestMapping(value = RestURIConstants.REST_REPORT_CARD_DATA, method = RequestMethod.POST)
	public @ResponseBody String  reportCard(@RequestBody ReportingRequestPojo requestBody,HttpSession session) {
		ResponseEntity<String> response =null;
		logger.info("Request data: ",requestBody);
		String responseString=null;
		try {
			
			String reportType;
			if(requestBody.getDepartment()!=null){
				requestBody.setService("");
				reportType = RestServiceURIConstants.REST_POST_DEPT_REPORT_CARD_DATA;
			} else{
				if("slab".equalsIgnoreCase(requestBody.getType())){
					reportType = RestServiceURIConstants.REST_POST_SERVICE_REPORT_SLAB_DATA;
				} else{
					reportType = RestServiceURIConstants.REST_POST_SERVICE_REPORT_CARD_DATA;
				}
				requestBody.setDepartment("");				
			}
			requestBody.setType("");
			RestTemplate restTemplate = new RestTemplate();
			((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setReadTimeout(encryptionUtility.getReadTimeout());
			((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setConnectTimeout(encryptionUtility.getConnectionTimeout());
			HttpHeaders headers = new HttpHeaders();
			Gson gson=new GsonBuilder().serializeNulls().create();
			String requestJson=gson.toJson(requestBody);
			headers.setContentType(MediaType.APPLICATION_JSON);
//			headers.set("Authorization", PropertyConfiguration.getConfiguration(WsConstants.WS_AUTHORIZATION));
			HttpEntity<String> entity = new HttpEntity<String>(requestJson,headers);
			String reportingURL = PropertyConfiguration.getConfiguration(WsConstants.WS_REPORTING_URL)+reportType;
			logger.info("URL: {}",reportingURL);
			response = restTemplate.postForEntity(reportingURL, entity,String.class);
			responseString=response.getBody();
		} catch (Exception e) {
			logger.error("Login Response",e);
			responseString=PropertyConfiguration.getDefaultErrorResponse("Sorry, Something went wrong");
			e.printStackTrace();
		}
		logger.info("Login Response:  {}",response);
		return responseString;
}	

	@RequestMapping(value = RestURIConstants.REST_REPORT_CARD_TPS_DATA, method = RequestMethod.POST)
	public @ResponseBody String  reportCard(@RequestBody ReportingTpsPojo requestBody,HttpSession session) {
		ResponseEntity<String> response =null;
		logger.info("Request data: ",requestBody);
		String responseString=null;
		try {
			RestTemplate restTemplate = new RestTemplate();
			((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setReadTimeout(encryptionUtility.getReadTimeout());
			((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setConnectTimeout(encryptionUtility.getConnectionTimeout());
			HttpHeaders headers = new HttpHeaders();
			Gson gson=new GsonBuilder().serializeNulls().create();
			String requestJson=gson.toJson(requestBody);
			headers.setContentType(MediaType.APPLICATION_JSON);
//			headers.set("Authorization", PropertyConfiguration.getConfiguration(WsConstants.WS_AUTHORIZATION));
			HttpEntity<String> entity = new HttpEntity<String>(requestJson,headers);
			String reportingURL = PropertyConfiguration.getConfiguration(WsConstants.WS_REPORTING_URL)+"bictps";
			logger.info("URL: {}",reportingURL);
			response = restTemplate.postForEntity(reportingURL, entity,String.class);
			responseString=response.getBody();
		} catch (Exception e) {
			logger.error("Login Response",e);
			responseString=PropertyConfiguration.getDefaultErrorResponse("Sorry, Something went wrong");
			e.printStackTrace();
		}
		logger.info("Login Response:  {}",response);
		return responseString;
}	
	
	@RequestMapping(value = "/umangAnalytics", method = RequestMethod.POST)
	public @ResponseBody String  umangAnalytics(@RequestBody DateRangePojo requestBody,HttpSession session) {
		ResponseEntity<String> response =null;
		logger.info("Request data: ",requestBody);
		String responseString=null;
		try {
			RestTemplate restTemplate = new RestTemplate();
			((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setReadTimeout(encryptionUtility.getReadTimeout());
			((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setConnectTimeout(encryptionUtility.getConnectionTimeout());
			HttpHeaders headers = new HttpHeaders();
			Gson gson=new GsonBuilder().serializeNulls().create();
			String requestJson=gson.toJson(requestBody);
			headers.setContentType(MediaType.APPLICATION_JSON);
			HttpEntity<String> entity = new HttpEntity<String>(requestJson,headers);
			String reportingURL = PropertyConfiguration.getConfiguration(WsConstants.WS_REPORTING_URL)+requestBody.getUrl();
			response = restTemplate.postForEntity(reportingURL, entity,String.class);
			responseString=response.getBody();
		} catch (Exception e) {
			responseString=PropertyConfiguration.getDefaultErrorResponse("Sorry, Something went wrong");
			e.printStackTrace();
		}
		logger.info("Login Response:  {}",response);
		return responseString;
}	
	
	@RequestMapping(value = "/analyticsDemo", method = RequestMethod.POST)
	public @ResponseBody String  analyticsDemo(@RequestBody AnalyticsDemoPojo requestBody,HttpSession session) {
		ResponseEntity<String> response =null;
		logger.info("Request data: ",requestBody);
		String responseString=null;
		try {
			RestTemplate restTemplate = new RestTemplate();
			((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setReadTimeout(encryptionUtility.getReadTimeout());
			((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setConnectTimeout(encryptionUtility.getConnectionTimeout());
			HttpHeaders headers = new HttpHeaders();
			Gson gson=new GsonBuilder().serializeNulls().create();
			String requestJson=gson.toJson(requestBody);
			headers.setContentType(MediaType.APPLICATION_JSON);
			HttpEntity<String> entity = new HttpEntity<String>(requestJson,headers);
			String reportingURL = PropertyConfiguration.getConfiguration(WsConstants.WS_REPORTING_URL)+"biDemographics";
			response = restTemplate.postForEntity(reportingURL, entity,String.class);
			responseString=response.getBody();
		} catch (Exception e) {
			responseString=PropertyConfiguration.getDefaultErrorResponse("Sorry, Something went wrong");
			e.printStackTrace();
		}
		logger.info("Login Response:  {}",response);
		return responseString;
}
	
	@RequestMapping(value = "/analyticsDemoSub", method = RequestMethod.POST)
	public @ResponseBody String  analyticsDemoSub(@RequestBody AnalyticsDemoSubPojo requestBody,HttpSession session) {
		ResponseEntity<String> response =null;
		logger.info("Request data: ",requestBody);
		String responseString=null;
		try {
			requestBody.setMf(requestBody.getSubCriteria());
			RestTemplate restTemplate = new RestTemplate();
			((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setReadTimeout(encryptionUtility.getReadTimeout());
			((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setConnectTimeout(encryptionUtility.getConnectionTimeout());
			HttpHeaders headers = new HttpHeaders();
			Gson gson=new GsonBuilder().serializeNulls().create();
			String requestJson=gson.toJson(requestBody);
			headers.setContentType(MediaType.APPLICATION_JSON);
			HttpEntity<String> entity = new HttpEntity<String>(requestJson,headers);
			String reportingURL = PropertyConfiguration.getConfiguration(WsConstants.WS_REPORTING_URL)+"biDemographicsSubCategory";
			response = restTemplate.postForEntity(reportingURL, entity,String.class);
			responseString=response.getBody();
		} catch (Exception e) {
			responseString=PropertyConfiguration.getDefaultErrorResponse("Sorry, Something went wrong");
			e.printStackTrace();
		}
		logger.info("Login Response:  {}",response);
		return responseString;
}
	
	@RequestMapping(value = "/analyticsDeptDemo", method = RequestMethod.POST)
	public @ResponseBody String  analyticsDeptDemo(@RequestBody AnalyticsDeptDemoPojo requestBody,HttpSession session) {
		ResponseEntity<String> response =null;
		logger.info("Request data: ",requestBody);
		String responseString=null;
		try {
			RestTemplate restTemplate = new RestTemplate();
			((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setReadTimeout(encryptionUtility.getReadTimeout());
			((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setConnectTimeout(encryptionUtility.getConnectionTimeout());
			HttpHeaders headers = new HttpHeaders();
			Gson gson=new GsonBuilder().serializeNulls().create();
			String requestJson=gson.toJson(requestBody);
			headers.setContentType(MediaType.APPLICATION_JSON);
			HttpEntity<String> entity = new HttpEntity<String>(requestJson,headers);
			String reportingURL = PropertyConfiguration.getConfiguration(WsConstants.WS_REPORTING_URL)+"biDemographicsDepartment";
			response = restTemplate.postForEntity(reportingURL, entity,String.class);
			responseString=response.getBody();
		} catch (Exception e) {
			responseString=PropertyConfiguration.getDefaultErrorResponse("Sorry, Something went wrong");
			e.printStackTrace();
		}
		logger.info("Login Response:  {}",response);
		return responseString;
}
	
	@RequestMapping(value = "/ministries", method = RequestMethod.POST)
	public @ResponseBody String  ministries(@RequestBody MinistriesPojo requestBody,HttpSession session) {
		ResponseEntity<String> response =null;
		logger.info("Request data: ",requestBody);
		String responseString=null;
		try {
			RestTemplate restTemplate = new RestTemplate();
			((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setReadTimeout(encryptionUtility.getReadTimeout());
			((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setConnectTimeout(encryptionUtility.getConnectionTimeout());
			HttpHeaders headers = new HttpHeaders();
			Gson gson=new GsonBuilder().serializeNulls().create();
			String requestJson=gson.toJson(requestBody);
			headers.setContentType(MediaType.APPLICATION_JSON);
			HttpEntity<String> entity = new HttpEntity<String>(requestJson,headers);
			String reportingURL = PropertyConfiguration.getConfiguration(WsConstants.WS_REPORTING_URL)+"biDemographicsMappingMinistry";
			response = restTemplate.postForEntity(reportingURL, entity,String.class);
			responseString=response.getBody();
		} catch (Exception e) {
			responseString=PropertyConfiguration.getDefaultErrorResponse("Sorry, Something went wrong");
			e.printStackTrace();
		}
		logger.info("Login Response:  {}",response);
		return responseString;
}
	
	@RequestMapping(value = "/analyticsDeptDemoSub", method = RequestMethod.POST)
	public @ResponseBody String  analyticsDeptDemoSub(@RequestBody AnalyticsDeptDemoSubPojo requestBody,HttpSession session) {
		ResponseEntity<String> response =null;
		logger.info("Request data: ",requestBody);
		String responseString=null;
		try {
			RestTemplate restTemplate = new RestTemplate();
			((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setReadTimeout(encryptionUtility.getReadTimeout());
			((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setConnectTimeout(encryptionUtility.getConnectionTimeout());
			HttpHeaders headers = new HttpHeaders();
			Gson gson=new GsonBuilder().serializeNulls().create();
			String requestJson=gson.toJson(requestBody);
			headers.setContentType(MediaType.APPLICATION_JSON);
			HttpEntity<String> entity = new HttpEntity<String>(requestJson,headers);
			String reportingURL = PropertyConfiguration.getConfiguration(WsConstants.WS_REPORTING_URL)+"biDemographicsDepartmentSubCategory";
			response = restTemplate.postForEntity(reportingURL, entity,String.class);
			responseString=response.getBody();
		} catch (Exception e) {
			responseString=PropertyConfiguration.getDefaultErrorResponse("Sorry, Something went wrong");
			e.printStackTrace();
		}
		logger.info("Login Response:  {}",response);
		return responseString;
}
	
	
	
	@RequestMapping(value = "/analyticsSFData", method = RequestMethod.POST)
	public @ResponseBody String  analyticsSFData(@RequestBody AnalyticsSFDataPojo requestBody,HttpSession session) {
		ResponseEntity<String> response =null;
		logger.info("Request data: ",requestBody);
		String responseString=null;
		try {
			RestTemplate restTemplate = new RestTemplate();
			((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setReadTimeout(encryptionUtility.getReadTimeout());
			((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setConnectTimeout(encryptionUtility.getConnectionTimeout());
			HttpHeaders headers = new HttpHeaders();
			Gson gson=new GsonBuilder().serializeNulls().create();
			String requestJson=gson.toJson(requestBody);
			headers.setContentType(MediaType.APPLICATION_JSON);
			HttpEntity<String> entity = new HttpEntity<String>(requestJson,headers);
			String reportingURL = PropertyConfiguration.getConfiguration(WsConstants.WS_REPORTING_URL)+"biDemographicsDept";
			response = restTemplate.postForEntity(reportingURL, entity,String.class);
			responseString=response.getBody();
		} catch (Exception e) {
			responseString=PropertyConfiguration.getDefaultErrorResponse("Sorry, Something went wrong");
			e.printStackTrace();
		}
		logger.info("Login Response:  {}",response);
		return responseString;
}

}