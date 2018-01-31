package in.spicedigital.umang.controllers.directory;

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
import in.spicedigital.umang.utility.CommonApiUtility;
import in.spicedigital.umang.utility.Utility;

@Controller
@RequestMapping(value = "/directory")
public class DirectoryController {
	@Autowired
	private Utility encryptionUtility;

	@RequestMapping(value = "/add", method = RequestMethod.POST)
	public @ResponseBody String add(@RequestBody InsertDirectoryDeptPojo requestBody, HttpSession session, HttpServletRequest request) {
		CommonApiUtility restTemplate = new CommonApiUtility();
		try {
			Gson gson = new GsonBuilder().serializeNulls().create();
			requestBody.setToken(RequestContextHolder.currentRequestAttributes().getSessionId());
			String requestJson = gson.toJson(requestBody);
			return restTemplate.postForEntity("slfInsertDirectoryServices", requestJson, request, encryptionUtility.getReadTimeout(),
					encryptionUtility.getConnectionTimeout());
		} catch (Exception e) {
			e.printStackTrace();
			return PropertyConfiguration.getExceptionResponse();
		}
	}
	
	@RequestMapping(value = "/update", method = RequestMethod.POST)
	public @ResponseBody String update(@RequestBody DirectoryDeptPojo requestBody, HttpSession session, HttpServletRequest request) {
		CommonApiUtility restTemplate = new CommonApiUtility();
		try {
			Gson gson = new GsonBuilder().serializeNulls().create();
			requestBody.setToken(RequestContextHolder.currentRequestAttributes().getSessionId());
			String requestJson = gson.toJson(requestBody);
			return restTemplate.postForEntity("slfUpdateDirectoryServices", requestJson, request, encryptionUtility.getReadTimeout(),
					encryptionUtility.getConnectionTimeout());
		} catch (Exception e) {
			e.printStackTrace();
			return PropertyConfiguration.getExceptionResponse();
		}
	}
	
	@RequestMapping(value = "/fetch", method = RequestMethod.POST)
	public @ResponseBody String fetch(@RequestBody FetchDirectoryPojo requestBody, HttpSession session, HttpServletRequest request) {
		CommonApiUtility restTemplate = new CommonApiUtility();
		try {
			Gson gson = new GsonBuilder().serializeNulls().create();
			requestBody.setToken(RequestContextHolder.currentRequestAttributes().getSessionId());
			String requestJson = gson.toJson(requestBody);
			return restTemplate.postForEntity("slfFetchDirectoryServices", requestJson, request, encryptionUtility.getReadTimeout(),
					encryptionUtility.getConnectionTimeout());
		} catch (Exception e) {
			e.printStackTrace();
			return PropertyConfiguration.getExceptionResponse();
		}
	}
	
	@RequestMapping(value = "/delete", method = RequestMethod.POST)
	public @ResponseBody String delete(@RequestBody DeleteDirectoryDeptPojo requestBody, HttpSession session, HttpServletRequest request) {
		CommonApiUtility restTemplate = new CommonApiUtility();
		try {
			Gson gson = new GsonBuilder().serializeNulls().create();
			requestBody.setToken(RequestContextHolder.currentRequestAttributes().getSessionId());
			String requestJson = gson.toJson(requestBody);
			return restTemplate.postForEntity("slfDeleteDirectoryServices", requestJson, request, encryptionUtility.getReadTimeout(),
					encryptionUtility.getConnectionTimeout());
		} catch (Exception e) {
			e.printStackTrace();
			return PropertyConfiguration.getExceptionResponse();
		}
	}
}