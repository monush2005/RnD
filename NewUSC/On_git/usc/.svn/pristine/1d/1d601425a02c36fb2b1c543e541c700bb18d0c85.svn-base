package in.spicedigital.umang.controllers.admin;

import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.util.Properties;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import in.spicedigital.umang.config.ConfigurationReader;
import in.spicedigital.umang.config.PropertyConfiguration;
import in.spicedigital.umang.dto.constants.RestURIConstants;
import in.spicedigital.umang.dto.constants.ViewConstants;
import in.spicedigital.umang.dto.constants.WsConstants;
import in.spicedigital.umang.utility.OsType;

@Controller
@RequestMapping(value ="/admin")
public class ConfigurationController {

	private static final Logger logger = LoggerFactory.getLogger(ConfigurationController.class);
	@RequestMapping(value =  RestURIConstants.REST_COMMON_RELOAD_CONFIG, method = RequestMethod.GET)
	@ResponseBody
	public String reloadProperty(ModelMap model) {
		try{
			logger.info("Reloading property files!!!!");
			logger.info(PropertyConfiguration.getConfiguration("ppi.ws.protocal"));
			ConfigurationReader.getInstance().reloadConfigurations();
			PropertyConfiguration.setConfiguration(ConfigurationReader.getInstance().loadConfigurations());
			logger.info(PropertyConfiguration.getConfiguration("ppi.ws.protocal"));
			ConfigurationReader.getInstance().reloadMessages();
			logger.info(PropertyConfiguration.getConfiguration("ppi.ws.protocal"));
		} catch (Exception e) {
				e.printStackTrace();
			}
		return "Property file Reloaded!!";
	}
	
	@RequestMapping(value =  RestURIConstants.REST_COMMON_SHOW_CONFIG, method = RequestMethod.GET)
	public String showProperty(ModelMap model) {
		try{
			logger.info("Show property files");
			ConfigurationReader.getInstance().reloadConfigurations();
			PropertyConfiguration.setConfiguration(ConfigurationReader.getInstance().loadConfigurations());
			ConfigurationReader.getInstance().reloadMessages();
			model.put("configurations", ConfigurationReader.getInstance().loadConfigurations());
			model.put("messages", ConfigurationReader.getInstance().loadMessages());
			
		} catch (Exception e) {
				e.printStackTrace();
			}
		return ViewConstants.COMMON_PROPERTY_FILE;
	}
	
	@RequestMapping(value = "/{username}/{password}/{environment}", method = RequestMethod.GET)
	public @ResponseBody String adminPropertyReload(@PathVariable String username,@PathVariable String password,@PathVariable String environment,ModelMap model,HttpServletRequest request) {

		String result = null;
		logger.info("Property Reload, Username: {}, Password: {}, Environment: {}, IP: {}",username,password,environment,request.getHeader("x-forwarded-for"));
		try{
			if("prop".equalsIgnoreCase(username) && "reload".equalsIgnoreCase(password)){

				if("prod".equalsIgnoreCase(environment) || "stg".equalsIgnoreCase(environment) || "dev".equalsIgnoreCase(environment)){
					result = loadPropertyFile(environment);
				}else{
				result = "Wrong Environment";
			}
				
			}else{
				result = "Wrong URL";
			}
			
		}catch(Exception e) {
			result = "You are not authorised to this link.";
			e.printStackTrace();
		}
		logger.info("Property Reload, Result: {}",result);
		return result;
	}	
	
	
	synchronized public static String loadPropertyFile(String environment){
		
		String result="";
		String configPath = null;
		Properties commonProperty=new Properties();
		
		if("prod".equalsIgnoreCase(environment)){
			if (OsType.isWindows()){
				configPath = "D:/Umang_Workspace/usc/src/application.properties";
			}else{
				configPath = "/home/tomcat/commonappbase/usc/WEB-INF/classes/application.properties";
			}
		}else if("stg".equalsIgnoreCase(environment) || "dev".equalsIgnoreCase(environment)){
			if (OsType.isWindows()){
				configPath = "D:/Umang_Workspace/usc/src/application.properties";
			}else{
				configPath = "/home/tomcat/stgtomcatweb/webapps/usc/WEB-INF/classes/application.properties";
			}
		}/*else if("dev".equalsIgnoreCase(environment)){
			if (OsType.isWindows()){
				configPath = "D:/Umang_Workspace/usc/src/application.properties";
			}else{
				configPath = "/home/tomcat/stgtomcatweb/webapps/usc/WEB-INF/classes/application.properties";
			}
		}*/
		
		try(FileInputStream fileConfigStream = new FileInputStream(configPath); InputStreamReader inputConfigReader = new InputStreamReader(fileConfigStream, "UTF-8");) {
			commonProperty.load(inputConfigReader);
			PropertyConfiguration.setConfiguration(commonProperty);
			WsConstants.setWsApplicationUrl(PropertyConfiguration.getConfiguration(WsConstants.WS_URL_IP)+PropertyConfiguration.getConfiguration(WsConstants.WS_APPLICATION));
			result = "Done";
		} catch (Exception e) {
			result = "Exception: "+e.getMessage();
			e.printStackTrace();
		}
		return result;
	};
}