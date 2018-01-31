package in.spicedigital.umang.filter;

import java.io.IOException;
import java.util.Enumeration;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Servlet Filter implementation class AccessFilter
 */
public class AccessFilter implements Filter {
	private Logger logger = LoggerFactory.getLogger("acccessOut");

	/**
	 * Default constructor.
	 */
	public AccessFilter() {
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see Filter#destroy()
	 */
	public void destroy() {
		// TODO Auto-generated method stub
	}

	/**
	 * @see Filter#doFilter(ServletRequest, ServletResponse, FilterChain)
	 */
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		try {
			long before = System.currentTimeMillis();
			
			boolean supportCompression = false;
			if (request instanceof HttpServletRequest) {
				HttpServletRequest httpServletRequest = (HttpServletRequest) request;
				
//			MDC.put("UNIQUE","UNIQUE:"+tracker+","+ipAddress+","+user_agent);			
			Enumeration<String> e = httpServletRequest.getHeaders("Accept-Encoding");
			while (e.hasMoreElements()) {
				String name = (String) e.nextElement();
				if (name.indexOf("gzip") != -1) {
					supportCompression = true;
				}
			}
		}
			
			GZIPResponseWrapper wrappedResponse = null;
			CommonResponseWrapper commonResponseWrapper = null;
			
			HttpServletResponse resp = (HttpServletResponse) response;
//			resp.addHeader("X-XSS-Protection","1; mode=block;");
//			resp.addHeader("Strict-Transport-Security","max-age=31536000; includeSubDomains; preload");
//			resp.addHeader("X-Frame-Options", "SAMEORIGIN");
//			resp.addHeader("X-Content-Type-Options", "nosniff");
			resp.addHeader("Cache-Control", "no-cache, no-store, must-revalidate");
			resp.addHeader("Pragma", "no-cache");
//			resp.addHeader("Allow", "POST");

			if (!supportCompression) {
				commonResponseWrapper = new CommonResponseWrapper((HttpServletResponse) response);
				chain.doFilter(request, commonResponseWrapper);
				commonResponseWrapper.finishResponse();
			} else {
				if (response instanceof HttpServletResponse) {
					wrappedResponse = new GZIPResponseWrapper((HttpServletResponse) response);
					chain.doFilter(request, wrappedResponse);
					wrappedResponse.finishResponse();
				}
			}
			long after = System.currentTimeMillis();
			String name = "";
			if (request instanceof HttpServletRequest) {
				name = ((HttpServletRequest) request).getRequestURI();
			}
			Long bytesRequest = Long.parseLong(String.valueOf(((HttpServletRequest) request).getContentLength()));
			if (wrappedResponse != null) {
				// logger.info(" [" + ipAddress + "] " + " [" +
				// ((HttpServletRequest) request).getScheme() + "] " + " ["
				// + ((HttpServletRequest) request).getMethod() + "] " + "
				// .......... " + name + ","
				// + ((HttpServletResponse) response).getStatus() + "," + (after
				// - before) + "ms,"
				// + readableFileSize(bytesRequest) + "," +
				// readableFileSize(wrappedResponse.getContentLength())
				// + "," + ((HttpServletRequest)
				// request).getHeader("User-Agent") + "," +
				// supportCompression+","+request.getAttribute("TRACKER"));
//				logger.info(" [{}] [{}]  [{}] .......... {},{},{}ms,{},{},{},{},{}", ipAddress, ((HttpServletRequest) request).getScheme(), ((HttpServletRequest) request).getMethod(), name, ((HttpServletResponse) response).getStatus(), (after - before), readableFileSize(bytesRequest), readableFileSize(wrappedResponse.getContentLength()), user_agent, supportCompression,
//						tracker);
			} else {
				// logger.info(" [" + ipAddress + "] " + " [" +
				// ((HttpServletRequest) request).getScheme() + "] " + " ["
				// + ((HttpServletRequest) request).getMethod() + "] " + "
				// .......... " + name + ","
				// + ((HttpServletResponse) response).getStatus() + "," + (after
				// - before) + "ms,"
				// + readableFileSize(bytesRequest) + ","
				// + readableFileSize(commonResponseWrapper.getContentLength())
				// + ","
				// + ((HttpServletRequest) request).getHeader("User-Agent") +
				// "," +
				// supportCompression+","+request.getAttribute("TRACKER"));
//				logger.info(" [{}] [{}]  [{}] .......... {},{},{}ms,{},{},{},{},{}", ipAddress, ((HttpServletRequest) request).getScheme(), ((HttpServletRequest) request).getMethod(), name, ((HttpServletResponse) response).getStatus(), (after - before), readableFileSize(bytesRequest), readableFileSize(commonResponseWrapper.getContentLength()), user_agent, supportCompression,
//						tracker);
			}
		} catch (Exception e) {
			logger.error("Exception in AccessFilter ::: ", e);
		}
	}

	/**
	 * @see Filter#init(FilterConfig)
	 */
	public void init(FilterConfig fConfig) throws ServletException {
		// TODO Auto-generated method stub
	}


}
