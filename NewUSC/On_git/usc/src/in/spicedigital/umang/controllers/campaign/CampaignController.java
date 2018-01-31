package in.spicedigital.umang.controllers.campaign;

import java.util.Iterator;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
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
import in.spicedigital.umang.dto.constants.RestServiceURIConstants;
import in.spicedigital.umang.dto.request.CampaignReqPojo;
import in.spicedigital.umang.usc.request.FetchCampaignReqPojo;
import in.spicedigital.umang.usc.request.StopCampaignReqPojo;
import in.spicedigital.umang.utility.CommonApiUtility;
import in.spicedigital.umang.utility.Utility;

@Controller
@RequestMapping(value="/campMang")
public class CampaignController {
	
	@Autowired
	private Utility encryptionUtility;
	
	@RequestMapping(value = "/campaignSchedule", method = RequestMethod.POST)
		public @ResponseBody String getCampaignSchedule(HttpServletResponse response,HttpSession session,HttpServletRequest request) {
			CommonApiUtility restTemplate=new CommonApiUtility();
			try {
				 MultipartHttpServletRequest req = (MultipartHttpServletRequest)request;
				 CampaignReqPojo requestBody = new CampaignReqPojo();
				 
				 requestBody.setTitle(req.getParameter("campaignTitle"));
				 requestBody.setType(req.getParameter("selectedNotificationType"));
				 requestBody.setLongdesc(req.getParameter("longDescription"));
				 requestBody.setRedirecturl(req.getParameter("redirectUrl"));
				 requestBody.setScheduletime(req.getParameter("campaignDateServer"));
				 requestBody.setUserid(request.getSession().getAttribute("userid").toString());
				 requestBody.setDeptid(request.getParameter("appIds"));
				 requestBody.setOs(request.getParameter("oses"));
				 requestBody.setGender(request.getParameter("genders"));
				 requestBody.setState(request.getParameter("selectedStates"));		 
				 requestBody.setWebviewtitle(request.getParameter("webViewTitle"));
				 requestBody.setOccup(request.getParameter("selectedOccupations"));
				 requestBody.setQual(request.getParameter("selectedQualifications"));
				 requestBody.setServiceid(request.getParameter("favApps"));
				 requestBody.setAge(request.getParameter("age"));
				 requestBody.setRedirectserviceid(request.getParameter("redirectserviceid"));
				 requestBody.setIcon(request.getParameter("icon"));
				 requestBody.setDeptname(request.getParameter("deptname"));
				 
				 byte[] bytes;
				 Iterator itr = req.getFileNames();
		    	 
		    	 if(itr.hasNext()){
		    		 while(itr.hasNext()) {
				          MultipartFile multiPartFile = req.getFile((String)itr.next());

				          if(!multiPartFile.isEmpty()){
				        	  try{
				        		  bytes = multiPartFile.getBytes();
				        		  requestBody.setFile(bytes);
				        	  }catch(Exception e){
				        		  e.printStackTrace();
				        	  }
				          }
		    		 }
		    		MultiValueMap<String, Object> body = new LinkedMultiValueMap<String, Object>();
	            		body.add("basetype","file");
	            		body.add("deptid",requestBody.getDeptid());
	            		body.add("file",requestBody.getFile());
	            		body.add("gender",requestBody.getGender());
	            		body.add("longdesc",requestBody.getLongdesc());
	            		body.add("os",requestBody.getOs());
	            		body.add("redirecturl",requestBody.getRedirecturl());
	            		body.add("scheduletime",requestBody.getScheduletime());
	            		body.add("state",requestBody.getState());
	            		body.add("title",requestBody.getTitle());
	            		body.add("type",requestBody.getType());
	            		body.add("userid",requestBody.getUserid());
	            		body.add("userrole",requestBody.getUserrole());
	            		body.add("webviewtitle", requestBody.getWebviewtitle());
	            		body.add("redirectserviceid",requestBody.getRedirectserviceid());
	            		body.add("icon",requestBody.getIcon());
	            		body.add("deptname",requestBody.getDeptname());
	            		
	            	return restTemplate.postFileForEntity(RestServiceURIConstants.REST_POST_CAMPAIGN_ADD, body,request,encryptionUtility.getReadTimeout(),encryptionUtility.getConnectionTimeout());
		    	 }else{
		    		requestBody.setFile(null);
		    		requestBody.setBasetype("extract");
		    		requestBody.setMessage(request.getParameter("campaignSubTitle"));
					Gson gson=new GsonBuilder().create();
		    		return restTemplate.postForEntityCampaign(RestServiceURIConstants.REST_POST_CAMPAIGN_ADD,gson.toJson(requestBody),request,encryptionUtility.getReadTimeout(),encryptionUtility.getConnectionTimeout());
		    	 }
			
			} catch (Exception e) {
				e.printStackTrace();
				return PropertyConfiguration.getExceptionResponse();
			}
	}

	@RequestMapping(value = "/fetchCampaign", method = RequestMethod.POST)
	public @ResponseBody String fetchCampaign(@RequestBody FetchCampaignReqPojo requestBody,HttpSession session,HttpServletRequest request) {
		CommonApiUtility restTemplate=new CommonApiUtility();
		try{
			Gson gson=new GsonBuilder().create();
			requestBody.setUserid(request.getSession().getAttribute("userid").toString());
			String requestJson=gson.toJson(requestBody);
			return restTemplate.postForEntityCampaign(RestServiceURIConstants.REST_POST_CAMPAIGN_FETCH,requestJson,request,encryptionUtility.getReadTimeout(),encryptionUtility.getConnectionTimeout());
		}catch(Exception e) {
			e.printStackTrace();
			return PropertyConfiguration.getExceptionResponse();
		}
	}
	
	@RequestMapping(value = "/stopCampaign", method = RequestMethod.POST)
	public @ResponseBody String stopCampaign(@RequestBody StopCampaignReqPojo requestBody,HttpSession session,HttpServletRequest request) {
		CommonApiUtility restTemplate=new CommonApiUtility();
		try {
			Gson gson=new GsonBuilder().create();
			String requestJson=gson.toJson(requestBody);
			return restTemplate.postForEntityCampaign(RestServiceURIConstants.REST_POST_CAMPAIGN_STOP,requestJson,request,encryptionUtility.getReadTimeout(),encryptionUtility.getConnectionTimeout());
		} catch (Exception e) {
			e.printStackTrace();
			return PropertyConfiguration.getExceptionResponse();
		}
	}
	
	@RequestMapping(value = "/downloadFile", method = RequestMethod.POST)
	public @ResponseBody String downloadCsvForCampiagn(@RequestBody StopCampaignReqPojo requestBody,HttpSession session,HttpServletRequest request) {
		CommonApiUtility restTemplate=new CommonApiUtility();
		try {
			Gson gson=new GsonBuilder().create();
			String requestJson=gson.toJson(requestBody);
			return restTemplate.postForEntityCampaignCsv(RestServiceURIConstants.REST_POST_DOWNLOAD_CAMPAIGN_FILE,requestJson,request,encryptionUtility.getReadTimeout(),encryptionUtility.getConnectionTimeout());
		} catch (Exception e) {
			e.printStackTrace();
			return PropertyConfiguration.getExceptionResponse();
		}
	}
}