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
import in.spicedigital.umang.dto.constants.WsConstants;
import in.spicedigital.umang.dto.request.UploadBannerReqPojo;
//import in.spicedigital.ppi.dto.constants.WsConstants;
//import java.util.ArrayList;
//import java.util.List;
//import javax.servlet.http.HttpSession;
import in.spicedigital.umang.utility.Utility;

@Controller
public class BannerUploadController
{
	@Autowired
	ApplicationContext context;
	@Autowired
	private Utility encryptionUtility;
	private static final Logger logger = LoggerFactory
			.getLogger(BannerUploadController.class);

	@RequestMapping(value = "docsUpload", method = RequestMethod.POST)
	@ResponseBody
	  public String imageUpload(HttpServletRequest request, HttpServletResponse response)
	  {
	    String responseString = "";
	    
	     try {
	    	 MultipartHttpServletRequest req = (MultipartHttpServletRequest)request;
	    	 UploadBannerReqPojo uploadObj = new UploadBannerReqPojo();
	    	 
	    	 uploadObj.setActiontype(req.getParameter("actiontype"));
	    	 uploadObj.setLang(req.getParameter("lang"));
	    	 uploadObj.setSdate(req.getParameter("sdate"));
	    	 uploadObj.setEdate(req.getParameter("edate"));
	    	 uploadObj.setActionurl(req.getParameter("actionurl"));
	    	 uploadObj.setActiontype(req.getParameter("actiontype"));
	    	 uploadObj.setState(req.getParameter("state"));
	    	 uploadObj.setBannername(req.getParameter("bannername"));
	    	 uploadObj.setToken(RequestContextHolder.currentRequestAttributes().getSessionId());
	    	 boolean isUploaded=false;
	    	Iterator itr = req.getFileNames();
	        while (itr.hasNext()) {
	          MultipartFile fl = req.getFile((String)itr.next());
	          String fileName = fl.getOriginalFilename();
	          Random num = new Random();
	          fileName =num.nextInt(999999)+""+fileName;
	         Random myNum=new Random();
	        uploadObj.setImageurl("home/application/selfcareBanners/"+fileName);
	             if (!fl.isEmpty()){
	        	  try {
	                  byte[] bytes = fl.getBytes();
	                  String filePathh="/home/application/selfcareBanners";
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
	        if(isUploaded){
	        	
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
					headers.set("Authorization", PropertyConfiguration.getConfiguration(WsConstants.WS_AUTHORIZATION));
					HttpEntity<String> entity = new HttpEntity<String>(requestJson,headers);
					logger.info("URL: {}",WsConstants.WS_APPLICATION_URL+RestServiceURIConstants.REST_POST_BANNER_UPLOAD);
					responseApi = restTemplate.postForEntity(WsConstants.WS_APPLICATION_URL+RestServiceURIConstants.REST_POST_BANNER_UPLOAD, entity,String.class);
					System.out.println("banner res::::"+responseApi);
					responseString=responseApi.getBody();
				} catch (Exception e) {
					logger.error("Login Response",e);
					responseString=PropertyConfiguration.getDefaultErrorResponse("Sorry, Something went wrong");
					e.printStackTrace();
				}
				logger.info("Login Response:  {}",response);
			}
	        
	     }catch(Exception e){e.printStackTrace();}
		return responseString;
		}
	
	
	
}
