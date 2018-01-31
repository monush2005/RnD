package in.spicedigital.umang.controllers.category;

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
import in.spicedigital.umang.usc.request.FetchCategoriesPojo;
import in.spicedigital.umang.usc.request.LinkCategoryPojo;
import in.spicedigital.umang.usc.request.UnlinkCategoryPojo;
import in.spicedigital.umang.utility.CommonApiUtility;
import in.spicedigital.umang.utility.Utility;

@Controller
@RequestMapping(value="/category")
public class CategoryController {
	
	@Autowired
	private Utility encryptionUtility;
	
	@RequestMapping(value = "/fetchAll", method = RequestMethod.POST)
		public @ResponseBody String  saveMasterQuestions(@RequestBody FetchCategoriesPojo requestBody,HttpSession session,HttpServletRequest request) {
			CommonApiUtility restTemplate=new CommonApiUtility();
			try {
				Gson gson=new GsonBuilder().serializeNulls().create();
				requestBody.setToken(RequestContextHolder.currentRequestAttributes().getSessionId());
				String requestJson=gson.toJson(requestBody);
				return restTemplate.postForEntity(RestServiceURIConstants.REST_POST_USC_GET_ALL_CATEGORIES,requestJson,request,encryptionUtility.getReadTimeout(),encryptionUtility.getConnectionTimeout());
			} catch (Exception e) {
				e.printStackTrace();
				return PropertyConfiguration.getExceptionResponse();
			}
	}
	
	@RequestMapping(value = "/link", method = RequestMethod.POST)
	public @ResponseBody String  saveMasterQuestions(@RequestBody LinkCategoryPojo requestBody,HttpSession session,HttpServletRequest request) {
		CommonApiUtility restTemplate=new CommonApiUtility();
		try {
			Gson gson=new GsonBuilder().serializeNulls().create();
			requestBody.setToken(RequestContextHolder.currentRequestAttributes().getSessionId());
			String requestJson=gson.toJson(requestBody);
			return restTemplate.postForEntity(RestServiceURIConstants.REST_POST_USC_LINK_CATEGORY,requestJson,request,encryptionUtility.getReadTimeout(),encryptionUtility.getConnectionTimeout());
		} catch (Exception e) {
			e.printStackTrace();
			return PropertyConfiguration.getExceptionResponse();
		}
}
	
	@RequestMapping(value = "/unlink", method = RequestMethod.POST)
	public @ResponseBody String  saveMasterQuestions(@RequestBody UnlinkCategoryPojo requestBody,HttpSession session,HttpServletRequest request) {
		CommonApiUtility restTemplate=new CommonApiUtility();
		try {
			Gson gson=new GsonBuilder().serializeNulls().create();
			requestBody.setToken(RequestContextHolder.currentRequestAttributes().getSessionId());
			String requestJson=gson.toJson(requestBody);
			return restTemplate.postForEntity(RestServiceURIConstants.REST_POST_USC_UNLINK_CATEGORY,requestJson,request,encryptionUtility.getReadTimeout(),encryptionUtility.getConnectionTimeout());
		} catch (Exception e) {
			e.printStackTrace();
			return PropertyConfiguration.getExceptionResponse();
		}
}
}