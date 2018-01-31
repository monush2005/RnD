package in.spicedigital.umang.config;

import java.util.Properties;

import in.spicedigital.umang.dto.constants.WsConstants;
	
public class PropertyConfiguration {
	private static Properties configuration;

	public static String getConfiguration(String property){
		return configuration.getProperty(property);
	}
	public static void setConfiguration(Properties configuration) {
		PropertyConfiguration.configuration = configuration;
	}
	public static Boolean isConfigurationAvail(String property){
		return configuration.containsKey(property);
	}
	public static String getDefaultErrorResponse(String msg) {
		 String errorString=null;
		try {
			errorString = configuration.getProperty(WsConstants.WS_COMMON_ERROR_RESPONSE,"{\"rs\":\"F\",\"rc\":\"FC0001\",\"rd\":\"=\"}").replaceAll("=", msg);
		} catch (Exception e) {
			errorString="{\"rs\":\"F\",\"rc\":\"FC0001\",\"rd\":\"Sorry, Something went wrong\"}";
		}
		return errorString;
	}
	public static String getExceptionResponse() {
		return "{\"rs\":\"F\",\"rc\":\"EXP0001\",\"rd\":\"Sorry, Something went wrong\"}";
	}
	
}
