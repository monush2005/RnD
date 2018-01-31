package in.spicedigital.umang.controllers.common;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Random;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
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
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import in.spicedigital.umang.config.PropertyConfiguration;
import in.spicedigital.umang.dto.constants.RestServiceURIConstants;
import in.spicedigital.umang.dto.constants.RestURIConstants;
import in.spicedigital.umang.dto.constants.WsConstants;
import in.spicedigital.umang.dto.request.AddCampaginReqPojo;
import in.spicedigital.umang.dto.request.FetchCampaignReqPojo;
import in.spicedigital.umang.dto.request.ReportingRequestPojo;
import in.spicedigital.umang.dto.request.StopDeleteCampaignReqPojo;
import in.spicedigital.umang.dto.request.UploadBannerReqPojo;
//import in.spicedigital.ppi.dto.constants.WsConstants;
//import java.util.ArrayList;
//import java.util.List;
//import javax.servlet.http.HttpSession;
import in.spicedigital.umang.utility.Utility;

@Controller
public class CampaignUploadController
{
	@Autowired
	ApplicationContext context;
	@Autowired
	private Utility encryptionUtility;
	private static final Logger logger = LoggerFactory.getLogger(CampaignUploadController.class);

	@RequestMapping(value = RestURIConstants.REST_CAMPAIGN_UPLOAD, method = RequestMethod.POST)
	@ResponseBody
	  public String imageUpload(HttpServletRequest request, HttpServletResponse response)
	  {
	    String responseString = "";
	    
	     try {
	    	 MultipartHttpServletRequest req = (MultipartHttpServletRequest)request;
	    	 AddCampaginReqPojo uploadObj = new AddCampaginReqPojo();
	    	 
	    	 uploadObj.setTitle(req.getParameter("campaignTitle"));
	    	 uploadObj.setMessage(req.getParameter("campaignSubTitle"));
	    	 uploadObj.setOs(req.getParameter("oses"));
	    	 uploadObj.setGender(req.getParameter("genders"));
	    	 uploadObj.setAge(req.getParameter("age"));
	    	 uploadObj.setScheduletime(req.getParameter("campaignDateServer"));
	    	 uploadObj.setDeptusage(req.getParameter("selectedApps"));
	    	 uploadObj.setLastlogin(req.getParameter("lastLoginDateServer"));
	    	 uploadObj.setUserid(request.getSession().getAttribute("userid").toString());
	    	 uploadObj.setImage(req.getParameter("imageURL"));
	    	 uploadObj.setState(req.getParameter("selectedStates"));
	    	 
	    	 boolean isUploaded=false;
	    	 
	    	 System.out.println(req.getFileNames().hasNext());
	    	 
	    	 Iterator itr = req.getFileNames();
	    	 
	    	 System.out.println(itr.hasNext());
	    	 
	    	 
	        while (itr.hasNext()) {
	          MultipartFile fl = req.getFile((String)itr.next());
	          String fileName = fl.getOriginalFilename();
	          Random num = new Random();
	          fileName =num.nextInt(999999)+""+fileName;
	         uploadObj.setImage("https://static.umang.gov.in/app/ico/service/"+fileName);
	             if (!fl.isEmpty()){
	        	  try {
	                  byte[] bytes = fl.getBytes();
	                  String filePathh="/home/application/campaignImages/";
	                  File dir = new File(filePathh);
	                  if (!dir.exists()) {
	                      dir.mkdirs();
	                    }
	                  File serverFile = new File(dir.getAbsolutePath() + 
	                          File.separator + fileName);
	                        BufferedOutputStream stream = new BufferedOutputStream(
	                          new FileOutputStream(serverFile));
	                        stream.write(bytes);
	                        stream.close();
	                        isUploaded=true;
	          }catch(Exception e){
	        	  }
	          }
	        }
	        
	        	
				ResponseEntity<String> responseApi =null;
				try {
					RestTemplate restTemplate = new RestTemplate();
					((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setReadTimeout(encryptionUtility.getReadTimeout());
					((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setConnectTimeout(encryptionUtility.getConnectionTimeout());
					HttpHeaders headers = new HttpHeaders();
					Gson gson=new GsonBuilder().serializeNulls().create();
					String requestJson=gson.toJson(uploadObj);
					System.out.println("requestJson"+requestJson);
					headers.setContentType(MediaType.APPLICATION_JSON);
					headers.set("Authorization", PropertyConfiguration.getConfiguration(WsConstants.WS_CAMPAIGN_AUTHORIZATION));
					HttpEntity<String> entity = new HttpEntity<String>(requestJson,headers);
					logger.info("URL: {}",PropertyConfiguration.getConfiguration(WsConstants.WS_CAMPAIGN_URL)+RestServiceURIConstants.REST_POST_CAMPAIGN_ADD);
					responseApi = restTemplate.postForEntity(PropertyConfiguration.getConfiguration(WsConstants.WS_CAMPAIGN_URL)+RestServiceURIConstants.REST_POST_CAMPAIGN_ADD, entity,String.class);
					System.out.println("RESPONSE: "+responseApi);
					responseString=responseApi.getBody();
				} catch (Exception e) {
					logger.error("Login Response",e);
					responseString=PropertyConfiguration.getDefaultErrorResponse("Sorry, Something went wrong");
					e.printStackTrace();
					e.getMessage();
				}
				logger.info("Login Response:  {}",response);
			
	        
	     }catch(Exception e){e.printStackTrace();}
		return responseString;
		}
	
	
	@RequestMapping(value = RestURIConstants.REST_CAMPAIGN_DELETE, method = RequestMethod.POST)
	public @ResponseBody String  delete(@RequestBody StopDeleteCampaignReqPojo requestBody,HttpSession session,HttpServletRequest request) {
		ResponseEntity<String> response =null;
		String responseString=null;
		System.out.println("JSSIONID:"+RequestContextHolder.currentRequestAttributes().getSessionId());
		System.out.println("path::::"+RestURIConstants.REST_CAMPAIGN_DELETE);
		logger.info("data: {}",requestBody);
		try {
			RestTemplate restTemplate = new RestTemplate();
			((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setReadTimeout(encryptionUtility.getReadTimeout());
			((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setConnectTimeout(encryptionUtility.getConnectionTimeout());
			HttpHeaders headers = new HttpHeaders();
			Gson gson=new GsonBuilder().serializeNulls().create();
			String requestJson=gson.toJson(requestBody);
			headers.setContentType(MediaType.APPLICATION_JSON);
			headers.set("Authorization", PropertyConfiguration.getConfiguration(WsConstants.WS_CAMPAIGN_AUTHORIZATION));
			HttpEntity<String> entity = new HttpEntity<String>(requestJson,headers);
			logger.info("URL: {}",PropertyConfiguration.getConfiguration(WsConstants.WS_CAMPAIGN_URL)+RestServiceURIConstants.REST_POST_CAMPAIGN_DELETE);
			response = restTemplate.postForEntity(PropertyConfiguration.getConfiguration(WsConstants.WS_CAMPAIGN_URL)+RestServiceURIConstants.REST_POST_CAMPAIGN_DELETE, entity,String.class);
			System.out.println("RESPONSE: "+response);
			responseString=response.getBody();				
		} catch (Exception e) {
			logger.error("Login Response",e);
			responseString=PropertyConfiguration.getDefaultErrorResponse("Sorry, Something went wrong");
			e.printStackTrace();
		}
		logger.info("Login Response:  {}",response);
		return responseString;
}
	
	
	@RequestMapping(value = RestURIConstants.REST_CAMPAIGN_STOP, method = RequestMethod.POST)
	public @ResponseBody String  stop(@RequestBody StopDeleteCampaignReqPojo requestBody,HttpSession session,HttpServletRequest request) {
		ResponseEntity<String> response =null;
		String responseString=null;
		System.out.println("JSSIONID:"+RequestContextHolder.currentRequestAttributes().getSessionId());
		System.out.println("path::::"+RestURIConstants.REST_CAMPAIGN_STOP);
		logger.info("data: {}",requestBody);
		try {
			RestTemplate restTemplate = new RestTemplate();
			((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setReadTimeout(encryptionUtility.getReadTimeout());
			((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setConnectTimeout(encryptionUtility.getConnectionTimeout());
			HttpHeaders headers = new HttpHeaders();
			Gson gson=new GsonBuilder().serializeNulls().create();
			String requestJson=gson.toJson(requestBody);
			headers.setContentType(MediaType.APPLICATION_JSON);
			headers.set("Authorization", PropertyConfiguration.getConfiguration(WsConstants.WS_CAMPAIGN_AUTHORIZATION));
			HttpEntity<String> entity = new HttpEntity<String>(requestJson,headers);
			logger.info("URL: {}",PropertyConfiguration.getConfiguration(WsConstants.WS_CAMPAIGN_URL)+RestServiceURIConstants.REST_POST_CAMPAIGN_STOP);
			response = restTemplate.postForEntity(PropertyConfiguration.getConfiguration(WsConstants.WS_CAMPAIGN_URL)+RestServiceURIConstants.REST_POST_CAMPAIGN_STOP, entity,String.class);
			System.out.println("RESPONSE: "+response);
			responseString=response.getBody();				
		} catch (Exception e) {
			logger.error("Login Response",e);
			responseString=PropertyConfiguration.getDefaultErrorResponse("Sorry, Something went wrong");
			e.printStackTrace();
		}
		logger.info("Login Response:  {}",response);
		return responseString;
}
	
	@RequestMapping(value = RestURIConstants.REST_CAMPAIGN_FETCH, method = RequestMethod.POST)
	public @ResponseBody String  fetch(@RequestBody FetchCampaignReqPojo requestBody,HttpSession session,HttpServletRequest request) {
		ResponseEntity<String> response =null;
		String responseString=null;
		System.out.println("JSSIONID:"+RequestContextHolder.currentRequestAttributes().getSessionId());
		System.out.println("path::::"+RestURIConstants.REST_CAMPAIGN_FETCH);
		requestBody.setUserid(request.getSession().getAttribute("userid").toString());
		logger.info("data: {}",requestBody);
		try {
			RestTemplate restTemplate = new RestTemplate();
			((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setReadTimeout(encryptionUtility.getReadTimeout());
			((SimpleClientHttpRequestFactory)restTemplate.getRequestFactory()).setConnectTimeout(encryptionUtility.getConnectionTimeout());
			HttpHeaders headers = new HttpHeaders();
			Gson gson=new GsonBuilder().serializeNulls().create();
			String requestJson=gson.toJson(requestBody);
			headers.setContentType(MediaType.APPLICATION_JSON);
			headers.set("Authorization", PropertyConfiguration.getConfiguration(WsConstants.WS_CAMPAIGN_AUTHORIZATION));
			HttpEntity<String> entity = new HttpEntity<String>(requestJson,headers);
			logger.info("URL: {}",PropertyConfiguration.getConfiguration(WsConstants.WS_CAMPAIGN_URL)+RestServiceURIConstants.REST_POST_CAMPAIGN_FETCH);
			response = restTemplate.postForEntity(PropertyConfiguration.getConfiguration(WsConstants.WS_CAMPAIGN_URL)+RestServiceURIConstants.REST_POST_CAMPAIGN_FETCH, entity,String.class);
			System.out.println("RESPONSE: "+response);
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
