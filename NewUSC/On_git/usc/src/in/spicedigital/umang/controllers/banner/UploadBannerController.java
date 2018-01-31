package in.spicedigital.umang.controllers.banner;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import in.spicedigital.umang.config.PropertyConfiguration;
import in.spicedigital.umang.dto.constants.RestServiceURIConstants;
import in.spicedigital.umang.usc.request.UploadBannerListReqPojo;
import in.spicedigital.umang.usc.request.UploadBannerReqPojo;
import in.spicedigital.umang.utility.CommonApiUtility;
import in.spicedigital.umang.utility.Utility;

@Controller
@RequestMapping(value="/banner")
public class UploadBannerController {
	
	@Autowired
	private Utility encryptionUtility;
	
	@RequestMapping(value = "/uploadBanner", method = RequestMethod.POST)
	public @ResponseBody String uploadBanner(HttpServletResponse response,HttpSession session,HttpServletRequest request) {

		UploadBannerReqPojo requestObject=new UploadBannerReqPojo();
		
		List<UploadBannerListReqPojo> requestBodyList=new ArrayList<UploadBannerListReqPojo>();
		try {
			 MultipartHttpServletRequest req = (MultipartHttpServletRequest)request;
			 byte[] bytes;
			 Iterator itr = req.getFileNames();
			 String random = localDate()+System.currentTimeMillis();
			
			 if(itr.hasNext()){
	    		 while(itr.hasNext()) {
	    			 String lang=((String)itr.next()).toLowerCase();
	    		//	 System.out.println("LANGUAGE:: "+lang+" # "+itr.hasNext());
			          MultipartFile multiPartFile = req.getFile(lang);
			          String fileName = multiPartFile.getOriginalFilename();

			          UploadBannerListReqPojo requestBody=new UploadBannerListReqPojo();

			          if(!multiPartFile.isEmpty()){
			        	  try{
			        	//	System.out.println("fileName:: "+fileName);
			  				requestBody.setActionType(req.getParameter("actionType"));
			  				requestBody.setActionUrl(req.getParameter("actionUrl"));
			  				requestBody.setBannerName(req.getParameter("bannerName"));
			  				requestBody.setComment(req.getParameter("comment"));
			  				requestBody.setLanguage(lang);
			  				requestBody.setSource(req.getParameter("source"));
			  				requestBody.setStateId(req.getParameter("stateId"));

			  				bytes = multiPartFile.getBytes();
			                String dirPath=PropertyConfiguration.getConfiguration("umang.cdn.saveBanner");
			                File dir = new File(dirPath);
			                if (!dir.exists()) {
			                	dir.mkdirs();
			                }
			                  File serverFile = new File(dir.getAbsolutePath()+File.separator + lang+"_"+ random + fileName);
			                  requestBody.setImageUrl(PropertyConfiguration.getConfiguration("umang.cdn.fetchBanner")+ lang+"_"+ random + fileName);
			                  BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(serverFile));
			                  stream.write(bytes);
			                  stream.close();
			        	  }catch(Exception e){
			        		  e.printStackTrace();
			      			  return PropertyConfiguration.getExceptionResponse();
			        	  }
			          }else{
			  				requestBody.setActionType(req.getParameter("actionType"));
			  				requestBody.setActionUrl(req.getParameter("actionUrl"));
			  				requestBody.setBannerName(req.getParameter("bannerName"));
			  				requestBody.setComment(req.getParameter("comment"));
			  				requestBody.setLanguage(lang);
			  				requestBody.setSource(req.getParameter("source"));
			  				requestBody.setStateId(req.getParameter("stateId"));
			  				requestBody.setImageUrl(PropertyConfiguration.getConfiguration("umang.cdn.fetchBanner")+"en_"+ random + fileName);
			          }
			          requestBodyList.add(requestBody);
	    		 }
	    	 }
			 
			 requestObject.setBanner(requestBodyList);
			 requestObject.setToken(RequestContextHolder.currentRequestAttributes().getSessionId());

			 CommonApiUtility restTemplate=new CommonApiUtility();
	 		Gson gson=new GsonBuilder().serializeNulls().create();
			String requestJson=gson.toJson(requestObject);
			System.out.println("REQUEST:: "+requestJson);
			return restTemplate.postForEntity(RestServiceURIConstants.REST_POST_USC_UPLOAD_BANNERS,requestJson,request,encryptionUtility.getReadTimeout(),encryptionUtility.getConnectionTimeout());
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