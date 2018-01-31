package in.spicedigital.umang.controllers.appdetails;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.util.Iterator;
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
import in.spicedigital.umang.usc.request.EditApplicationReqPojo;
import in.spicedigital.umang.usc.response.AppLogoResPojo;
import in.spicedigital.umang.utility.CommonApiUtility;
import in.spicedigital.umang.utility.Utility;

@Controller
@RequestMapping(value="/app")
public class AppLogoController {
	
	@Autowired
	private Utility encryptionUtility;
	
	@RequestMapping(value = "/editAppLogo", method = RequestMethod.POST)
	public @ResponseBody String editAppLogo(HttpServletResponse response,HttpSession session,HttpServletRequest request) {

		EditApplicationReqPojo requestBody=new EditApplicationReqPojo();
		try{
			 MultipartHttpServletRequest req = (MultipartHttpServletRequest)request;
			 byte[] bytes;
			 boolean isSaved=false;
			 Iterator itr = req.getFileNames();
             String random = PropertyConfiguration.getConfiguration("umang.cdn.logoPrefix") + System.currentTimeMillis();
	    	 if(itr.hasNext()){
	    		 while(itr.hasNext()) {
			          MultipartFile multiPartFile = req.getFile((String)itr.next());
			          requestBody.setAppid(req.getParameter("appid"));
			          String fileName = multiPartFile.getOriginalFilename();
			          if(!multiPartFile.isEmpty()){
			        	  try{
			        		  bytes = multiPartFile.getBytes();
			                  String dirPath=PropertyConfiguration.getConfiguration("umang.cdn.saveLogo");
			                  File dir = new File(dirPath);
			                 // System.out.println("PATHH:::::::::::: "+dir.getAbsolutePath());  
			                  if (!dir.exists()) {
			                      dir.mkdirs();
			                  }
     // System.out.println("PATHH:::::::::::: "+dir.getAbsolutePath()+"  ,   "+File.separator + random +fileName);
			                  File serverFile = new File(dir.getAbsolutePath()+File.separator + random +fileName);
			                  requestBody.setLogo(PropertyConfiguration.getConfiguration("umang.cdn.fetchLogo")+ random +fileName);
			                  BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(serverFile));
			                  stream.write(bytes);
			                  stream.close();
			                  isSaved=true;
			        	  }catch(Exception e){
			        		  e.printStackTrace();
			      			  return PropertyConfiguration.getExceptionResponse();
			        	  }
			          }
	    		 }
	    	 }
	    	 
	    	 if(isSaved){
	    		CommonApiUtility restTemplate=new CommonApiUtility();
	 			Gson gson=new GsonBuilder().serializeNulls().create();
				requestBody.setToken(RequestContextHolder.currentRequestAttributes().getSessionId());
				String requestJson=gson.toJson(requestBody);
//				System.out.println("REQUEST:: "+requestJson);
				String responseString  =  restTemplate.postForEntity(RestServiceURIConstants.REST_POST_USC_EDIT_APP,requestJson,request,encryptionUtility.getReadTimeout(),encryptionUtility.getConnectionTimeout());
				
				AppLogoResPojo resObj =new AppLogoResPojo();
				resObj = gson.fromJson(responseString, AppLogoResPojo.class);
				AppLogoResPojo.Pd payload=new AppLogoResPojo.Pd();
				
				if("S".equalsIgnoreCase(resObj.getRs())){
					payload.setLogoUrl(requestBody.getLogo());
					resObj.setPd(payload);
					return gson.toJson(resObj);
				}else{
					return responseString;
				}
	    	 }else{
	    		 return PropertyConfiguration.getDefaultErrorResponse("Sorry, Something went wrong");
	    	 }
			 
		}catch(Exception e){
			e.printStackTrace();
			return PropertyConfiguration.getExceptionResponse();
		}
	}
	
}