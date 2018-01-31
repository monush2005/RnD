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
import in.spicedigital.umang.dto.request.ChangeUserRoleReqPojo;
import in.spicedigital.umang.usc.request.AddRoleReqPojo;
import in.spicedigital.umang.usc.request.FetchRightForRoleReqPojo;
import in.spicedigital.umang.usc.request.FetchRoleReqPojo;
import in.spicedigital.umang.usc.request.SaveRoleReqPojo;
import in.spicedigital.umang.usc.request.SaveUserRoleReqPojo;
import in.spicedigital.umang.utility.CommonApiUtility;
import in.spicedigital.umang.utility.Utility;

@Controller
@RequestMapping(value="/mng")
public class RoleRightController {
	
	@Autowired
	private Utility encryptionUtility;
	
	@RequestMapping(value = "/fetchRole", method = RequestMethod.POST)
		public @ResponseBody String  fetchRole(@RequestBody FetchRoleReqPojo requestBody,HttpSession session,HttpServletRequest request) {
			CommonApiUtility restTemplate=new CommonApiUtility();
			try {
				Gson gson=new GsonBuilder().serializeNulls().create();
				requestBody.setToken(RequestContextHolder.currentRequestAttributes().getSessionId());
				String requestJson=gson.toJson(requestBody);
				return restTemplate.postForEntity(RestServiceURIConstants.REST_POST_USC_FETCH_USER_ROLE,requestJson,request,encryptionUtility.getReadTimeout(),encryptionUtility.getConnectionTimeout());
			} catch (Exception e) {
				e.printStackTrace();
				return PropertyConfiguration.getExceptionResponse();
			}
	}
	
	@RequestMapping(value = "/addRole", method = RequestMethod.POST)
	public @ResponseBody String  addRole(@RequestBody AddRoleReqPojo requestBody,HttpSession session,HttpServletRequest request) {
		CommonApiUtility restTemplate=new CommonApiUtility();
		try {
			Gson gson=new GsonBuilder().serializeNulls().create();
			requestBody.setToken(RequestContextHolder.currentRequestAttributes().getSessionId());
			String requestJson=gson.toJson(requestBody);
			return restTemplate.postForEntity(RestServiceURIConstants.REST_POST_USC_ADD_ROLE,requestJson,request,encryptionUtility.getReadTimeout(),encryptionUtility.getConnectionTimeout());
		} catch (Exception e) {
			e.printStackTrace();
			return PropertyConfiguration.getExceptionResponse();
		}
	}
	
	@RequestMapping(value = "/saveRole", method = RequestMethod.POST)
	public @ResponseBody String  saveRole(@RequestBody SaveRoleReqPojo requestBody,HttpSession session,HttpServletRequest request) {
		CommonApiUtility restTemplate=new CommonApiUtility();
		try {
			Gson gson=new GsonBuilder().serializeNulls().create();
			requestBody.setToken(RequestContextHolder.currentRequestAttributes().getSessionId());
			String requestJson=gson.toJson(requestBody);
			return restTemplate.postForEntity(RestServiceURIConstants.REST_POST_USC_SAVE_ROLE,requestJson,request,encryptionUtility.getReadTimeout(),encryptionUtility.getConnectionTimeout());
		} catch (Exception e) {
			e.printStackTrace();
			return PropertyConfiguration.getExceptionResponse();
		}
	}
	
	@RequestMapping(value = "/fthRghtForRole", method = RequestMethod.POST)
	public @ResponseBody String  fetchRight(@RequestBody FetchRightForRoleReqPojo requestBody,HttpSession session,HttpServletRequest request) {
		CommonApiUtility restTemplate=new CommonApiUtility();
		try {
			Gson gson=new GsonBuilder().serializeNulls().create();
			requestBody.setToken(RequestContextHolder.currentRequestAttributes().getSessionId());
			String requestJson=gson.toJson(requestBody);
			return restTemplate.postForEntity(RestServiceURIConstants.REST_POST_USC_FETCH_USER_RIGHTS,requestJson,request,encryptionUtility.getReadTimeout(),encryptionUtility.getConnectionTimeout());
		} catch (Exception e) {
			e.printStackTrace();
			return PropertyConfiguration.getExceptionResponse();
		}
	}
	
	@RequestMapping(value = "/saveUserRole", method = RequestMethod.POST)
	public @ResponseBody String  saveUserRole(@RequestBody SaveUserRoleReqPojo requestBody,HttpSession session,HttpServletRequest request) {
		CommonApiUtility restTemplate=new CommonApiUtility();
		try {
			Gson gson=new GsonBuilder().serializeNulls().create();
			requestBody.setToken(RequestContextHolder.currentRequestAttributes().getSessionId());
			String requestJson=gson.toJson(requestBody);
			return restTemplate.postForEntity(RestServiceURIConstants.REST_POST_USC_SAVE_USER_ROLE,requestJson,request,encryptionUtility.getReadTimeout(),encryptionUtility.getConnectionTimeout());
		} catch (Exception e) {
			e.printStackTrace();
			return PropertyConfiguration.getExceptionResponse();
		}
	}
	@RequestMapping(value = "/changeUserRole", method = RequestMethod.POST)
	public @ResponseBody String  changeUserRole(@RequestBody ChangeUserRoleReqPojo requestBody,HttpSession session,HttpServletRequest request) {
	CommonApiUtility restTemplate=new CommonApiUtility();
	System.out.println("Request for change role=================");
	try {
	Gson gson=new GsonBuilder().serializeNulls().create();
	requestBody.setToken(RequestContextHolder.currentRequestAttributes().getSessionId());
	String requestJson=gson.toJson(requestBody);
	return restTemplate.postForEntity(RestServiceURIConstants.REST_POST_USC_SAVE_USER_ROLE1,requestJson,request,encryptionUtility.getReadTimeout(),encryptionUtility.getConnectionTimeout());
	} catch (Exception e) {
	e.printStackTrace();
	return PropertyConfiguration.getExceptionResponse();
	}
	}
	
}