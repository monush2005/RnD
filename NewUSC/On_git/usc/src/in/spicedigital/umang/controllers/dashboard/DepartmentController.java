package in.spicedigital.umang.controllers.dashboard;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.request.RequestContextHolder;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import in.spicedigital.umang.config.PropertyConfiguration;
import in.spicedigital.umang.dto.constants.RestServiceURIConstants;
import in.spicedigital.umang.usc.request.FetchDepartmentReqPojo;
import in.spicedigital.umang.usc.request.LogQueryStatusReqPojo;
import in.spicedigital.umang.utility.CommonApiUtility;
import in.spicedigital.umang.utility.Utility;

@Controller
public class DepartmentController {
	
	@Autowired
	private Utility encryptionUtility;
	
	@RequestMapping(value = "/app/getDashboardData", method = RequestMethod.POST)
		public @ResponseBody String  getDashboardDepartment(@RequestBody FetchDepartmentReqPojo requestBody,HttpSession session,HttpServletRequest request) {
			CommonApiUtility restTemplate=new CommonApiUtility();
			try {
				Gson gson=new GsonBuilder().serializeNulls().create();
				String requestJson=null;
				if(requestBody.getDepartment()!=null){
					requestBody.setService("");
					requestJson=gson.toJson(requestBody);
					return restTemplate.postForEntityBI(RestServiceURIConstants.REST_POST_USC_BI_DEPARTMENT,requestJson,request,encryptionUtility.getReadTimeout(),encryptionUtility.getConnectionTimeout());
				} else{
					requestBody.setDepartment("");
					requestJson=gson.toJson(requestBody);
					return restTemplate.postForEntityBI(RestServiceURIConstants.REST_POST_USC_BI_SERVICE_REPORT,requestJson,request,encryptionUtility.getReadTimeout(),encryptionUtility.getConnectionTimeout());
				}
			} catch (Exception e) {
				e.printStackTrace();
				return PropertyConfiguration.getExceptionResponse();
			}
	}
	
	@RequestMapping(value = "/app/getReportCardData", method = RequestMethod.POST)
	public @ResponseBody String  getReportCardDepartment(@RequestBody FetchDepartmentReqPojo requestBody,HttpSession session,HttpServletRequest request) {
		CommonApiUtility restTemplate=new CommonApiUtility();
		try {
			Gson gson=new GsonBuilder().serializeNulls().create();
			String requestJson=null;
			if(requestBody.getDepartment()!=null){
				requestBody.setService("");
				requestJson=gson.toJson(requestBody);
				return restTemplate.postForEntityBI(RestServiceURIConstants.REST_POST_USC_BI_DEPARTMENT_REPORT,requestJson,request,encryptionUtility.getReadTimeout(),encryptionUtility.getConnectionTimeout());
			} else{
				requestBody.setDepartment("");
				requestJson=gson.toJson(requestBody);
				return restTemplate.postForEntityBI(RestServiceURIConstants.REST_POST_USC_BI_SERVICE_REPORT,requestJson,request,encryptionUtility.getReadTimeout(),encryptionUtility.getConnectionTimeout());
			}
		} catch (Exception e) {
			e.printStackTrace();
			return PropertyConfiguration.getExceptionResponse();
		}
	}
		
}