package in.spicedigital.umang.controllers.manageuser;

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
import in.spicedigital.umang.dto.request.FetchDeptBasedonStateRequestPojo;
import in.spicedigital.umang.usc.request.CreateUserReqPojo;
import in.spicedigital.umang.usc.request.FetchSubUsersReqPojo;
import in.spicedigital.umang.usc.request.FetchSubUsersWFPojo;
import in.spicedigital.umang.usc.request.UpdateUserAccountReqPojo;
import in.spicedigital.umang.usc.request.UpdateUserStatusReqPojo;
import in.spicedigital.umang.utility.CommonApiUtility;
import in.spicedigital.umang.utility.Utility;

@Controller
@RequestMapping(value="/mng")
public class UserController {
	
	@Autowired
	private Utility encryptionUtility;
	
	@RequestMapping(value = "/crtUsr", method = RequestMethod.POST)
		public @ResponseBody String  createUser(@RequestBody CreateUserReqPojo requestBody,HttpSession session,HttpServletRequest request) {
			CommonApiUtility restTemplate=new CommonApiUtility();
			try {
				Gson gson=new GsonBuilder().serializeNulls().create();
				requestBody.setToken(RequestContextHolder.currentRequestAttributes().getSessionId());
				String requestJson=gson.toJson(requestBody);
				return restTemplate.postForEntity(RestServiceURIConstants.REST_POST_USC_CREATE_USR,requestJson,request,encryptionUtility.getReadTimeout(),encryptionUtility.getConnectionTimeout());
			} catch (Exception e) {
				e.printStackTrace();
				return PropertyConfiguration.getExceptionResponse();
			}
	}	
	
	@RequestMapping(value = "/getSubUserDetails", method = RequestMethod.POST)
	public @ResponseBody String  getSubUserDetails(@RequestBody FetchSubUsersReqPojo requestBody,HttpSession session,HttpServletRequest request) {
		CommonApiUtility restTemplate=new CommonApiUtility();
		try {
			Gson gson=new GsonBuilder().create();
			requestBody.setToken(RequestContextHolder.currentRequestAttributes().getSessionId());
			String requestJson=gson.toJson(requestBody);
			return restTemplate.postForEntity(RestServiceURIConstants.REST_POST_USC_FETCH_PARTICULAR_SUB_USER,requestJson,request,encryptionUtility.getReadTimeout(),encryptionUtility.getConnectionTimeout());
		} catch (Exception e) {
			e.printStackTrace();
			return PropertyConfiguration.getExceptionResponse();
		}
	}
	
	@RequestMapping(value = "/getSubUsers", method = RequestMethod.POST)
	public @ResponseBody String  getSubUsers(@RequestBody FetchSubUsersWFPojo requestBody,HttpSession session,HttpServletRequest request) {
		CommonApiUtility restTemplate=new CommonApiUtility();
		try {
			Gson gson=new GsonBuilder().create();
			requestBody.setToken(RequestContextHolder.currentRequestAttributes().getSessionId());
			String requestJson=gson.toJson(requestBody);
			return restTemplate.postForEntity(RestServiceURIConstants.REST_POST_USC_FETCH_SUB_USER,requestJson,request,encryptionUtility.getReadTimeout(),encryptionUtility.getConnectionTimeout());
		} catch (Exception e) {
			e.printStackTrace();
			return PropertyConfiguration.getExceptionResponse();
		}
	}
	
	
	@RequestMapping(value = "/updateUserAccount", method = RequestMethod.POST)
	public @ResponseBody String updateUserAccount(@RequestBody UpdateUserAccountReqPojo requestBody,HttpSession session,HttpServletRequest request) {
		CommonApiUtility restTemplate=new CommonApiUtility();
		try {
			Gson gson=new GsonBuilder().serializeNulls().create();
			requestBody.setToken(RequestContextHolder.currentRequestAttributes().getSessionId());
			String requestJson=gson.toJson(requestBody);
			return restTemplate.postForEntity(RestServiceURIConstants.REST_POST_USC_UPDATE_USER_ACCOUNT,requestJson,request,encryptionUtility.getReadTimeout(),encryptionUtility.getConnectionTimeout());
			} catch (Exception e) {
			e.printStackTrace();
			return PropertyConfiguration.getExceptionResponse();
		}
	}
	
	@RequestMapping(value = "/updateUserStatus", method = RequestMethod.POST)
	public @ResponseBody String updateUserStatus(@RequestBody UpdateUserStatusReqPojo requestBody,HttpSession session,HttpServletRequest request) {
		CommonApiUtility restTemplate=new CommonApiUtility();
		try {
			Gson gson=new GsonBuilder().serializeNulls().create();
			requestBody.setToken(RequestContextHolder.currentRequestAttributes().getSessionId());
			String requestJson=gson.toJson(requestBody);
			return restTemplate.postForEntity(RestServiceURIConstants.REST_POST_USC_UPDATE_USER_STATUS,requestJson,request,encryptionUtility.getReadTimeout(),encryptionUtility.getConnectionTimeout());
			} catch (Exception e) {
			e.printStackTrace();
			return PropertyConfiguration.getExceptionResponse();
		}
	}
	
	
	@RequestMapping(value = "/FetchDeptBasedState", method = RequestMethod.POST)
	public @ResponseBody String updateUserStatus(@RequestBody FetchDeptBasedonStateRequestPojo requestBody,HttpSession session,HttpServletRequest request) {
		CommonApiUtility restTemplate=new CommonApiUtility();
		System.out.println("==========================================================");
		try {
			
			Gson gson=new GsonBuilder().serializeNulls().create();
			requestBody.setToken(RequestContextHolder.currentRequestAttributes().getSessionId());
			String requestJson=gson.toJson(requestBody);
			System.out.println("==========================================================");
			return restTemplate.postForEntity(RestServiceURIConstants.REST_POST_slfFetchDeptBasedState,requestJson,request,encryptionUtility.getReadTimeout(),encryptionUtility.getConnectionTimeout());
			} catch (Exception e) {
			e.printStackTrace();
			return PropertyConfiguration.getExceptionResponse();
		}
	}
	
}