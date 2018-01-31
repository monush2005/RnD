package in.spicedigital.umang.utility;

import java.util.Arrays;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.http.converter.ByteArrayHttpMessageConverter;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import com.google.gson.Gson;

import in.spicedigital.umang.config.PropertyConfiguration;
import in.spicedigital.umang.dto.constants.WsConstants;
import in.spicedigital.umang.usc.response.LogoutResponsePojo;

public class CommonApiUtility {

	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	public <T> String postForEntity(String apiUrl, T requestJson,HttpServletRequest request,int readTimeout,int connectionTimeout) {
		RestTemplate restTemplate = new RestTemplate();
		ResponseEntity<String> repsonse = null;
		String responseString=null;
		
		try {
			((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setReadTimeout(readTimeout);
			((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setConnectTimeout(connectionTimeout);
			
			HttpHeaders headers = new HttpHeaders();
			headers.add("Content-Type", "application/json;charset=utf-8");
			headers.set("Authorization", PropertyConfiguration.getConfiguration(WsConstants.WS_AUTHORIZATION));
			HttpEntity<T> entity = new HttpEntity<T>(requestJson, headers);
			logger.info("REQUEST_ID: {}, Request: {}, Authorization: {}, User-Agent: {}, IP: {}", request.getHeader("requestid"), requestJson, PropertyConfiguration.getConfiguration(WsConstants.WS_AUTHORIZATION),request.getHeader("user-agent"),request.getHeader("x-forwarded-for"));
			Long start=System.currentTimeMillis();
			try{
				repsonse = restTemplate.postForEntity(WsConstants.WS_APPLICATION_URL + apiUrl, entity, String.class);				
				responseString=repsonse.getBody();
				logger.info("RESPONSE_ID: {}, RESPONSE: {}, Response_Time: {}",request.getHeader("requestid"),responseString,System.currentTimeMillis()-start);
			}catch(Exception e){
				logger.info("EXCEPTION_ID: {}, Exception: {}",request.getHeader("requestid"),e.getMessage());
				responseString=PropertyConfiguration.getExceptionResponse();
			}
		} catch (Exception ex) {
			ex.printStackTrace();
			logger.info("EXCEPTION_ID: {}, Exception: {}",request.getHeader("requestid"),ex.getMessage());
		}
		return responseString;
	}
	
	public <T> String postForEntityBI(String apiUrl, T requestJson,HttpServletRequest request,int readTimeout,int connectionTimeout) {
		RestTemplate restTemplate = new RestTemplate();
		ResponseEntity<String> repsonse = null;
		String responseString=null;
		
		try {
			((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setReadTimeout(readTimeout);
			((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setConnectTimeout(connectionTimeout);
			
			HttpHeaders headers = new HttpHeaders();
			headers.setContentType(MediaType.APPLICATION_JSON);
			HttpEntity<T> entity = new HttpEntity<T>(requestJson, headers);
			logger.info("REQUEST_ID: {}, Request: {}, User-Agent: {}, IP: {}", request.getHeader("requestid"), requestJson, request.getHeader("user-agent"),request.getHeader("x-forwarded-for"));
			Long start=System.currentTimeMillis();
			try{
				repsonse = restTemplate.postForEntity(PropertyConfiguration.getConfiguration(WsConstants.WS_REPORTING_URL) + apiUrl, entity, String.class);				
				responseString=repsonse.getBody();
				logger.info("RESPONSE_ID: {}, RESPONSE: {}, Response_Time: {}",request.getHeader("requestid"),responseString,System.currentTimeMillis()-start);
			}catch(Exception e){
				logger.info("EXCEPTION_ID: {}, Exception: {}",request.getHeader("requestid"),e.getMessage());
				responseString=PropertyConfiguration.getExceptionResponse();
			}
		} catch (Exception ex) {
			ex.printStackTrace();
			logger.info("EXCEPTION_ID: {}, Exception: {}",request.getHeader("requestid"),ex.getMessage());
		}
		return responseString;
	}
	
	public <T> String postForEntityCampaign(String apiUrl, T requestJson,HttpServletRequest request,int readTimeout,int connectionTimeout) {
		RestTemplate restTemplate = new RestTemplate();
		ResponseEntity<String> repsonse = null;
		String responseString=null;
		
		try {
			((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setReadTimeout(readTimeout);
			((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setConnectTimeout(connectionTimeout);
			
			HttpHeaders headers = new HttpHeaders();
			headers.setContentType(MediaType.APPLICATION_JSON);
	        headers.set("Authorization", PropertyConfiguration.getConfiguration(WsConstants.WS_CAMPAIGN_AUTHORIZATION));
			HttpEntity<T> entity = new HttpEntity<T>(requestJson, headers);
			logger.info("REQUEST_ID: {}, Request: {}, Authorization: {}, User-Agent: {}, IP: {}", request.getHeader("requestid"), requestJson, PropertyConfiguration.getConfiguration(WsConstants.WS_AUTHORIZATION),request.getHeader("user-agent"),request.getHeader("x-forwarded-for"));
			Long start=System.currentTimeMillis();
			try{
				repsonse = restTemplate.postForEntity(PropertyConfiguration.getConfiguration(WsConstants.WS_CAMPAIGN_URL) + apiUrl, entity, String.class);				
				responseString=repsonse.getBody();
				logger.info("RESPONSE_ID: {}, RESPONSE: {}, Response_Time: {}",request.getHeader("requestid"),responseString,System.currentTimeMillis()-start);
			}catch(Exception e){
				logger.info("EXCEPTION_ID: {}, Exception: {}",request.getHeader("requestid"),e.getMessage());
				responseString=PropertyConfiguration.getExceptionResponse();
			}
		} catch (Exception ex) {
			ex.printStackTrace();
			logger.info("EXCEPTION_ID: {}, Exception: {}",request.getHeader("requestid"),ex.getMessage());
		}
		return responseString;
	}
	
	public <T> String postFileForEntity(String apiUrl, MultiValueMap<String, Object> body,HttpServletRequest request,int readTimeout,int connectionTimeout) {
		RestTemplate restTemplate = new RestTemplate();
		ResponseEntity<String> repsonse = null;
		String responseString=null;
		
		try {
			((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setReadTimeout(readTimeout);
			((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setConnectTimeout(connectionTimeout);
			
			HttpHeaders headers = new HttpHeaders();
			headers.setContentType(MediaType.MULTIPART_FORM_DATA);
	        headers.set("Authorization", PropertyConfiguration.getConfiguration(WsConstants.WS_CAMPAIGN_AUTHORIZATION));
			HttpEntity<Object> entity = new HttpEntity<Object>(body,headers);	            		
			logger.info("REQUEST_ID: {}, Request: {}, Authorization: {}, User-Agent: {}, IP: {}", request.getHeader("requestid"), body.toString(), PropertyConfiguration.getConfiguration(WsConstants.WS_AUTHORIZATION),request.getHeader("user-agent"),request.getHeader("x-forwarded-for"));
			Long start=System.currentTimeMillis();
			try{
				repsonse = restTemplate.postForEntity(PropertyConfiguration.getConfiguration(WsConstants.WS_CAMPAIGN_URL) + apiUrl, entity, String.class);				
				responseString=repsonse.getBody();
				logger.info("RESPONSE_ID: {}, RESPONSE: {}, Response_Time: {}",request.getHeader("requestid"),responseString,System.currentTimeMillis()-start);
			}catch(Exception e){
				logger.info("EXCEPTION_ID: {}, Exception: {}",request.getHeader("requestid"),e.getMessage());
				responseString=PropertyConfiguration.getExceptionResponse();
			}
		} catch (Exception ex) {
			ex.printStackTrace();
			logger.info("EXCEPTION_ID: {}, Exception: {}",request.getHeader("requestid"),ex.getMessage());
		}
		return responseString;
	}
	
	public <T> String postForEntityCampaignCsv(String apiUrl, T requestJson,HttpServletRequest request,int readTimeout,int connectionTimeout) {
		RestTemplate restTemplate = new RestTemplate();
		ResponseEntity<String> repsonse = null;
		String responseString=null;
		
		try {
			 restTemplate.getMessageConverters().add(new ByteArrayHttpMessageConverter());
			((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setReadTimeout(readTimeout);
			((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setConnectTimeout(connectionTimeout);
			
			HttpHeaders headers = new HttpHeaders();
			headers.setContentType(MediaType.APPLICATION_JSON);
			headers.setAccept(Arrays.asList(MediaType.APPLICATION_OCTET_STREAM));
	        headers.set("Authorization", PropertyConfiguration.getConfiguration(WsConstants.WS_CAMPAIGN_AUTHORIZATION));
			HttpEntity<T> entity = new HttpEntity<T>(requestJson,headers);	            		
			logger.info("REQUEST_ID: {}, Request: {}, Authorization: {}, User-Agent: {}, IP: {}", request.getHeader("requestid"), requestJson, PropertyConfiguration.getConfiguration(WsConstants.WS_CAMPAIGN_AUTHORIZATION),request.getHeader("user-agent"),request.getHeader("x-forwarded-for"));
			Long start=System.currentTimeMillis();
			try{
				ResponseEntity<String> response = restTemplate.exchange(PropertyConfiguration.getConfiguration(WsConstants.WS_CAMPAIGN_URL) + apiUrl,HttpMethod.POST, entity, String.class, "1");

				if (response.getStatusCode() == HttpStatus.OK) {
					 LogoutResponsePojo responseObj = new LogoutResponsePojo();
					 responseObj.setRc("S001");
					 responseObj.setRs("S");
					 responseObj.setPd(response.getBody().toString());
					 responseString=new Gson().toJson(responseObj);
				 }else{
						responseString=PropertyConfiguration.getExceptionResponse();
				 }
				logger.info("RESPONSE_ID: {}, RESPONSE: {}, Response_Time: {}",request.getHeader("requestid"),responseString,System.currentTimeMillis()-start);				 
			}catch(Exception e){
				logger.info("EXCEPTION_ID: {}, Exception: {}",request.getHeader("requestid"),e.getMessage());
				responseString=PropertyConfiguration.getExceptionResponse();
			}
		} catch (Exception ex) {
			ex.printStackTrace();
			logger.info("EXCEPTION_ID: {}, Exception: {}",request.getHeader("requestid"),ex.getMessage());
		}
		return responseString;
	}
	
}
