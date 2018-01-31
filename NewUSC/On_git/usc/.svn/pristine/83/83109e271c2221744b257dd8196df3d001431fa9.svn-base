package in.spicedigital.umang.filter;

import java.io.IOException;
import java.io.PrintWriter;
import java.security.NoSuchAlgorithmException;
import java.text.DecimalFormat;

import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.slf4j.MDC;

import in.spicedigital.umang.config.PropertyConfiguration;
import in.spicedigital.umang.dto.constants.WsConstants;
import in.spicedigital.umang.services.AuthenticationService;
import in.spicedigital.umang.utility.Utility;

public class RestAuthenticationFilter implements javax.servlet.Filter {
	public static final String AUTHENTICATION_HEADER = "X-App-Authorization";
	public static final String DATE_HEADER = "X-App-Date";
	public static final String CONTENT_HEADER = "X-App-Content";
	public static final String CONTENT_TYPE_VALUE = "application/vnd.umang.web+json";
	public static final String CONTENT_TYPE = "Content-Type";
	public static final String APP_DATA = "X-App-Data";
	public static final String APP_DATA_OBJECT = "objAppData";
	private Utility encryptionUtility;
	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain filter)
			throws IOException, ServletException {
		String tracker = null, ipAddress = null, user_agent = null;
		if (request instanceof HttpServletRequest) {
			HttpServletRequest httpServletRequest = (HttpServletRequest) request;
			if (httpServletRequest.getSession().getAttribute("isValid") != null
					&& (boolean) httpServletRequest.getSession().getAttribute("isValid")) {
				tracker = httpServletRequest.getSession().getAttribute("TRACKER") + "";
				if (httpServletRequest.getSession().getAttribute("TRACKER") == null) {
					tracker = getTracker();
					httpServletRequest.getSession().setAttribute("TRACKER", tracker);
				}
				MDC.put("UNIQUE",
						"UNIQUE: [ { " + httpServletRequest.getSession().getAttribute("TRACKER") + "," + null + " } ]"
								+ ", " + httpServletRequest.getSession().getAttribute("CLIENT-IP") + ","
								+ httpServletRequest.getSession().getAttribute("USER-AGENT"));
				logger.info("APP DATA FOR USER:{}", httpServletRequest.getSession().getAttribute(APP_DATA));

				filter.doFilter(request, response);
			} else {
				String authHeader = httpServletRequest.getHeader(AUTHENTICATION_HEADER);
				String dateHeader = httpServletRequest.getHeader(DATE_HEADER);
				String contentHeader = httpServletRequest.getHeader(CONTENT_HEADER);
				String requestBody = httpServletRequest.getHeader(APP_DATA);
				String contentType = httpServletRequest.getHeader(CONTENT_TYPE);

				tracker = httpServletRequest.getSession().getAttribute("TRACKER") + "";
				ipAddress = httpServletRequest.getHeader("x-real-ip");
				user_agent = httpServletRequest.getHeader("agent");
				httpServletRequest.getSession().setAttribute("CLIENT-IP", ipAddress);
				httpServletRequest.getSession().setAttribute("USER-AGENT", user_agent);
				if (httpServletRequest.getSession().getAttribute("TRACKER") == null) {
					tracker = getTracker();
					httpServletRequest.getSession().setAttribute("TRACKER", tracker);
				}

				AuthenticationService authenticationService = new AuthenticationService();
				boolean authenticationStatus = false;
				try {
					
					httpServletRequest.getSession().setAttribute(APP_DATA, requestBody);
					MDC.put("UNIQUE",
							"UNIQUE: [ { " + httpServletRequest.getSession().getAttribute("TRACKER") + "," + null
									+ " } ]" + ", " + httpServletRequest.getSession().getAttribute("CLIENT-IP") + ","
									+ httpServletRequest.getSession().getAttribute("USER-AGENT"));
					logger.info(
							"APP DATA FOR USER: sessionID:{}, authHeader:{},dateHeader:{},contentHeader:{},requestBody:{},contentType:{}",
							httpServletRequest.getSession().getId(), authHeader, dateHeader, contentHeader, requestBody,
							contentType);
					authenticationStatus = authenticationService.authenticate(encryptionUtility, httpServletRequest,
							authHeader, dateHeader, contentHeader, requestBody, contentType);
					// FOR TESTING MADE TRUE
					authenticationStatus = true;
				} catch (NoSuchAlgorithmException e) {
					e.printStackTrace();
				}
				if (authenticationStatus) {
					logger.info("Authorized: User already authorized");
					httpServletRequest.getSession().setAttribute("isValid", true);
					filter.doFilter(request, response);
				} else {
					/*
					 * 
					 * For app commented, need to put condition for web part
					 * 
					 */

					// httpServletResponse.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
					// httpServletResponse.sendRedirect("/Umang/resources/error/401.html");
					logger.info("Unauthorized: Unauthorized access");
					if (response instanceof HttpServletResponse) {
						HttpServletResponse httpServletResponse = (HttpServletResponse) response;
						String senderLogin = PropertyConfiguration.getConfiguration(WsConstants.WS_AUTHORIZATION_FAIL);
						response.setContentType("text/json; charset=UTF-8");
						PrintWriter out = httpServletResponse.getWriter();
						out.write(senderLogin);
						out.flush();
						out.close();
					}
				}
			}
		}
	}

	private String counter;

	private synchronized String getTracker() {
		counter = TrackerCounter.CHAR[TrackerCounter.CHAR_COUNTER++] + String.valueOf(System.currentTimeMillis());
		if (TrackerCounter.CHAR_COUNTER >= TrackerCounter.CHAR.length) {
			TrackerCounter.CHAR_COUNTER = 0;
		}
		return "UW-" + counter;
	}

	public String readableFileSize(long size) {
		if (size <= 0)
			return "0";
		final String[] units = new String[] { "B", "kB", "MB", "GB", "TB" };
		int digitGroups = (int) (Math.log10(size) / Math.log10(1024));
		return new DecimalFormat("#,##0.#").format(size / Math.pow(1024, digitGroups)) + " " + units[digitGroups];
	}


	@Override
	public void destroy() {
	}

	@Override
	public void init(FilterConfig arg0) throws ServletException {
	}

	public Utility getEncryptionUtility() {
		return encryptionUtility;
	}

	public void setEncryptionUtility(Utility encryptionUtility) {
		this.encryptionUtility = encryptionUtility;
	}

	public String getCounter() {
		return counter;
	}

	public void setCounter(String counter) {
		this.counter = counter;
	}
}
