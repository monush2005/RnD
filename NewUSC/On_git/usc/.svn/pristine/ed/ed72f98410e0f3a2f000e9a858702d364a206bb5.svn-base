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
import in.spicedigital.umang.usc.request.FetchServiceQueryCountReqPojo;
import in.spicedigital.umang.utility.CommonApiUtility;
import in.spicedigital.umang.utility.Utility;

@Controller
public class ServiceController {
	
	@Autowired
	private Utility encryptionUtility;
	
	@RequestMapping(value = "/service/getDashboardData", method = RequestMethod.POST)
		public @ResponseBody String  getDashboardDepartment(@RequestBody FetchDepartmentReqPojo requestBody,HttpSession session,HttpServletRequest request) {
			CommonApiUtility restTemplate=new CommonApiUtility();
			try {
				Gson gson=new GsonBuilder().serializeNulls().create();
				String requestJson=null;
				requestBody.setDepartment("");
				requestJson=gson.toJson(requestBody);
				return restTemplate.postForEntityBI(RestServiceURIConstants.REST_POST_USC_BI_SERVICES,requestJson,request,encryptionUtility.getReadTimeout(),encryptionUtility.getConnectionTimeout());
			} catch (Exception e) {
				e.printStackTrace();
				return PropertyConfiguration.getExceptionResponse();
			}
	}
	
	@RequestMapping(value = "/service/getReportCardData", method = RequestMethod.POST)
	public @ResponseBody String getBiServiceReport(@RequestBody FetchDepartmentReqPojo requestBody,HttpSession session,HttpServletRequest request) {
		CommonApiUtility restTemplate=new CommonApiUtility();
		try {
			Gson gson=new GsonBuilder().create();
			String requestJson=null;
			requestJson=gson.toJson(requestBody);
			return restTemplate.postForEntityBI(RestServiceURIConstants.REST_POST_USC_BI_SERVICES_REPORT,requestJson,request,encryptionUtility.getReadTimeout(),encryptionUtility.getConnectionTimeout());
		} catch (Exception e) {
			e.printStackTrace();
			return PropertyConfiguration.getExceptionResponse();
		}
	}
	
	@RequestMapping(value = "/service/fetchServiceQueryCount", method = RequestMethod.POST)
	public @ResponseBody String fetchServiceQueryCount(@RequestBody FetchServiceQueryCountReqPojo requestBody,HttpSession session,HttpServletRequest request) {
		CommonApiUtility restTemplate=new CommonApiUtility();
		try {
			Gson gson=new GsonBuilder().create();
			String requestJson=null;
			requestBody.setToken(RequestContextHolder.currentRequestAttributes().getSessionId());
			requestJson=gson.toJson(requestBody);
			return restTemplate.postForEntity(RestServiceURIConstants.REST_POST_USC_FETCH_SERVICE_QUERY_COUNT,requestJson,request,encryptionUtility.getReadTimeout(),encryptionUtility.getConnectionTimeout());
		} catch (Exception e) {
			e.printStackTrace();
			return PropertyConfiguration.getExceptionResponse();
		}
	}
	
	
}