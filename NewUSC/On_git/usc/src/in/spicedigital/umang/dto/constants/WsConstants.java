package in.spicedigital.umang.dto.constants;

import in.spicedigital.umang.config.PropertyConfiguration;


public class WsConstants {
	public static final String WS_URL_IP="umang.ws.ip";
	public static final String WS_COMMON_ERROR_RESPONSE="umang.ws.common.errorresponse";
	public static final String WS_PROTOCOL="umang.ws.protocal";
	public static final String URL_LOGIN="umang.ws.login.url";
	public static final String WS_APPLICATION="umang.ws.application";
	public static final String WS_AUTHORIZATION="umang.ws.authorization";
	public static final String WS_IS_LOGINED="isLogined";
	public static final String WS_USERNAME="username";
	public static final String WS_AUTHORIZATION_FAIL="umang.ws.common.unauthorized";
	public static final String WS_READ_TIMEOUT="umang.ws.readtimeout";
	public static final String WS_CONNECTION_TIMEOUT="umang.ws.connectiontimeout";
	public static final String WS_DEFAULT_TIMEOUT="umang.ws.defaulttimeout";
	public static final String WS_REPORTING_URL="umang.ws.reporting.url";
	public static final String WS_CAMPAIGN_URL="umang.ws.campaign.url";
	public static final String WS_CAMPAIGN_AUTHORIZATION="umang.ws.campaign.authorization";
	public static String WS_APPLICATION_URL=PropertyConfiguration.getConfiguration(WS_URL_IP)+PropertyConfiguration.getConfiguration(WS_APPLICATION);
	
	public static void setWsApplicationUrl(String wS_APPLICATION_URL) {
		WS_APPLICATION_URL=wS_APPLICATION_URL;
	}
	
}
