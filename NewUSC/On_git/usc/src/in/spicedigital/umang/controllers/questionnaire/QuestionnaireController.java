package in.spicedigital.umang.controllers.questionnaire;

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
import in.spicedigital.umang.usc.request.FetchUserQuestionnaireReqPojo;
import in.spicedigital.umang.usc.request.SaveDraftQuestionnaireReqPojo;
import in.spicedigital.umang.usc.request.SaveMasterQuestionnaireReqPojo;
import in.spicedigital.umang.utility.CommonApiUtility;
import in.spicedigital.umang.utility.Utility;

@Controller
@RequestMapping(value="/ques")
public class QuestionnaireController {
	
	@Autowired
	private Utility encryptionUtility;
	
	@RequestMapping(value = "/saveMasterQues", method = RequestMethod.POST)
		public @ResponseBody String  saveMasterQuestions(@RequestBody SaveMasterQuestionnaireReqPojo requestBody,HttpSession session,HttpServletRequest request) {
			CommonApiUtility restTemplate=new CommonApiUtility();
			try {
				Gson gson=new GsonBuilder().serializeNulls().create();
				requestBody.setToken(RequestContextHolder.currentRequestAttributes().getSessionId());
				String requestJson=gson.toJson(requestBody);
				return restTemplate.postForEntity(RestServiceURIConstants.REST_POST_USC_SAVE_MASTER_QUESTIONS,requestJson,request,encryptionUtility.getReadTimeout(),encryptionUtility.getConnectionTimeout());
			} catch (Exception e) {
				e.printStackTrace();
				return PropertyConfiguration.getExceptionResponse();
			}
	}
	
	@RequestMapping(value = "/getMasterQues", method = RequestMethod.POST)
	public @ResponseBody String  getMasterQuestions(@RequestBody SaveMasterQuestionnaireReqPojo requestBody,HttpSession session,HttpServletRequest request) {
		CommonApiUtility restTemplate=new CommonApiUtility();
		try {
			Gson gson=new Gson();
			requestBody.setJson(null);
			requestBody.setToken(RequestContextHolder.currentRequestAttributes().getSessionId());
			String requestJson=gson.toJson(requestBody);
			return restTemplate.postForEntity(RestServiceURIConstants.REST_POST_USC_GET_MASTER_QUESTIONS,requestJson,request,encryptionUtility.getReadTimeout(),encryptionUtility.getConnectionTimeout());
		} catch (Exception e) {
			e.printStackTrace();
			return PropertyConfiguration.getExceptionResponse();
		}
	}
	
	@RequestMapping(value = "/getSubUserQues", method = RequestMethod.POST)
	public @ResponseBody String  getSubmittedUserQuestions(@RequestBody FetchUserQuestionnaireReqPojo requestBody,HttpSession session,HttpServletRequest request) {
		CommonApiUtility restTemplate=new CommonApiUtility();
		try {
			Gson gson=new GsonBuilder().serializeNulls().create();
			requestBody.setToken(RequestContextHolder.currentRequestAttributes().getSessionId());
			String requestJson=gson.toJson(requestBody);
			return restTemplate.postForEntity(RestServiceURIConstants.REST_POST_USC_GET_SUBMITTED_USER_QUESTIONS,requestJson,request,encryptionUtility.getReadTimeout(),encryptionUtility.getConnectionTimeout());
		} catch (Exception e) {
			e.printStackTrace();
			return PropertyConfiguration.getExceptionResponse();
		}
	}
	
	@RequestMapping(value = "/getUserQues", method = RequestMethod.POST)
	public @ResponseBody String  getListOfUserSubmitQuestions(@RequestBody SaveMasterQuestionnaireReqPojo requestBody,HttpSession session,HttpServletRequest request) {
		CommonApiUtility restTemplate=new CommonApiUtility();
		try {
			Gson gson=new Gson();
			requestBody.setJson(null);
			requestBody.setToken(RequestContextHolder.currentRequestAttributes().getSessionId());
			String requestJson=gson.toJson(requestBody);
			return restTemplate.postForEntity(RestServiceURIConstants.REST_POST_USC_GET_LIST_OF_USER_SUBMIT_QUESTIONS,requestJson,request,encryptionUtility.getReadTimeout(),encryptionUtility.getConnectionTimeout());
		} catch (Exception e) {
			e.printStackTrace();
			return PropertyConfiguration.getExceptionResponse();
		}
	}
	
	@RequestMapping(value = "/getParQues", method = RequestMethod.POST)
	public @ResponseBody String  getPartialQuestions(@RequestBody SaveMasterQuestionnaireReqPojo requestBody,HttpSession session,HttpServletRequest request) {
		CommonApiUtility restTemplate=new CommonApiUtility();
		try {
			Gson gson=new Gson();
			requestBody.setJson(null);
			requestBody.setToken(RequestContextHolder.currentRequestAttributes().getSessionId());
			String requestJson=gson.toJson(requestBody);
			return restTemplate.postForEntity(RestServiceURIConstants.REST_POST_USC_GET_PARTIALS_QUESTIONS,requestJson,request,encryptionUtility.getReadTimeout(),encryptionUtility.getConnectionTimeout());
		} catch (Exception e) {
			e.printStackTrace();
			return PropertyConfiguration.getExceptionResponse();
		}
	}
	
	@RequestMapping(value = "/saveDraftQues", method = RequestMethod.POST)
	public @ResponseBody String  saveDraftQuestions(@RequestBody SaveDraftQuestionnaireReqPojo requestBody,HttpSession session,HttpServletRequest request) {
		CommonApiUtility restTemplate=new CommonApiUtility();
		try {
			Gson gson=new GsonBuilder().serializeNulls().create();
			requestBody.setToken(RequestContextHolder.currentRequestAttributes().getSessionId());
			String requestJson=gson.toJson(requestBody);
			return restTemplate.postForEntity(RestServiceURIConstants.REST_POST_USC_SAVE_DRAFT_QUESTIONS,requestJson,request,encryptionUtility.getReadTimeout(),encryptionUtility.getConnectionTimeout());
		} catch (Exception e) {
			e.printStackTrace();
			return PropertyConfiguration.getExceptionResponse();
		}
	}
}