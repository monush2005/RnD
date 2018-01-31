package in.spicedigital.umang.controllers.attScreen;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.time.LocalDateTime;
import java.util.Iterator;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import in.spicedigital.umang.config.PropertyConfiguration;
import in.spicedigital.umang.utility.CommonApiUtility;
import in.spicedigital.umang.utility.Utility;

@Controller
@RequestMapping(value = "/attScreen")
public class AttScreenController {
	@Autowired
	private Utility encryptionUtility;
	
	@RequestMapping(value = "/schedule", method = RequestMethod.POST)
	public @ResponseBody String add(@RequestBody ScheduleAttScreenPojo requestBody, HttpSession session, HttpServletRequest request) {
		CommonApiUtility restTemplate = new CommonApiUtility();
		try {
			Gson gson = new GsonBuilder().serializeNulls().create();
			requestBody.setToken(RequestContextHolder.currentRequestAttributes().getSessionId());
			String requestJson = gson.toJson(requestBody);
			return restTemplate.postForEntity("slfUpdateAttentionScreen", requestJson, request, encryptionUtility.getReadTimeout(),
					encryptionUtility.getConnectionTimeout());
		} catch (Exception e) {
			e.printStackTrace();
			return PropertyConfiguration.getExceptionResponse();
		}
	}
	
	@RequestMapping(value = "/fetchActive", method = RequestMethod.POST)
	public @ResponseBody String fetchActive(@RequestBody ActiveAttScreenPojo requestBody, HttpSession session, HttpServletRequest request) {
		CommonApiUtility restTemplate = new CommonApiUtility();
		try {
			Gson gson = new GsonBuilder().serializeNulls().create();
			requestBody.setToken(RequestContextHolder.currentRequestAttributes().getSessionId());
			String requestJson = gson.toJson(requestBody);
			return restTemplate.postForEntity("slfFetchAttentionScreenDaterange", requestJson, request, encryptionUtility.getReadTimeout(),
					encryptionUtility.getConnectionTimeout());
		} catch (Exception e) {
			e.printStackTrace();
			return PropertyConfiguration.getExceptionResponse();
		}
	}
	
	@RequestMapping(value = "/fetch", method = RequestMethod.POST)
	public @ResponseBody String fetch(@RequestBody FetchAttScreenPojo requestBody, HttpSession session, HttpServletRequest request) {
		CommonApiUtility restTemplate = new CommonApiUtility();
		try {
			Gson gson = new GsonBuilder().serializeNulls().create();
			requestBody.setToken(RequestContextHolder.currentRequestAttributes().getSessionId());
			String requestJson = gson.toJson(requestBody);
			return restTemplate.postForEntity("slfFetchAttentionScreen", requestJson, request, encryptionUtility.getReadTimeout(),
					encryptionUtility.getConnectionTimeout());
		} catch (Exception e) {
			e.printStackTrace();
			return PropertyConfiguration.getExceptionResponse();
		}
	}
	
	@RequestMapping(value = "/upload", method = RequestMethod.POST)
	public @ResponseBody String upload(HttpServletResponse response,HttpSession session,HttpServletRequest request) {

		UploadAttScreenPojo requestObject=new UploadAttScreenPojo();
		try {
			 MultipartHttpServletRequest req = (MultipartHttpServletRequest)request;
			 byte[] bytes;
			 Iterator<String> itr = req.getFileNames();
			 String random = localDate()+System.currentTimeMillis();
			
			 if(itr.hasNext()){
	    		 while(itr.hasNext()) {
			          MultipartFile multiPartFile = req.getFile((String)itr.next());
			          String fileName = multiPartFile.getOriginalFilename();
			          if(!multiPartFile.isEmpty()){
			        	  try{
			        		System.out.println("fileName:: "+fileName);
			  				bytes = multiPartFile.getBytes();
			                String dirPath=PropertyConfiguration.getConfiguration("umang.cdn.saveAtt");
			                File dir = new File(dirPath);
			                if (!dir.exists()) {
			                	dir.mkdirs();
			                }
			                  File serverFile = new File(dir.getAbsolutePath()+File.separator + random + fileName);
			                  requestObject.setImg(PropertyConfiguration.getConfiguration("umang.cdn.fetchAtt")+random + fileName);
			                  BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(serverFile));
			                  stream.write(bytes);
			                  stream.close();
			        	  }catch(Exception e){
			        		  e.printStackTrace();
			      			  return PropertyConfiguration.getExceptionResponse();
			        	  }
			          }
			          
			          
	    		 }
	    	 }
			 
			 requestObject.setTitle(request.getParameter("title"));
			 requestObject.setDesc(request.getParameter("description"));
			 requestObject.setTxt(request.getParameter("buttonText"));
			 requestObject.setType(request.getParameter("actionType"));
			 requestObject.setUrl(request.getParameter("actionUrl"));
			 requestObject.setToken(RequestContextHolder.currentRequestAttributes().getSessionId());

			 CommonApiUtility restTemplate=new CommonApiUtility();
	 		Gson gson=new GsonBuilder().serializeNulls().create();
			String requestJson=gson.toJson(requestObject);
			System.out.println("REQUEST:: "+requestJson);
			return restTemplate.postForEntity("slfInsertAttentionScreen",requestJson,request,encryptionUtility.getReadTimeout(),encryptionUtility.getConnectionTimeout());
		} catch (Exception e) {
			e.printStackTrace();
			return PropertyConfiguration.getExceptionResponse();
		}
	}
	
	public String localDate(){
		LocalDateTime now = LocalDateTime.now();
		return String.valueOf(now.getDayOfMonth()+now.getMonthValue()+now.getYear());
	}
}
