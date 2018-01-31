package in.spicedigital.umang.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class XSSFilter implements Filter {
	private FilterConfig config = null;
	private static final String APOSTROPHE = "apostrophe";
	private static boolean no_init = true;
	private String apostrophe = "&#39;";
	private static final String CPR = "(c) Mahaveer Singh ";
	private static final String VERSION = "version 1.0";
	private static final Logger logger = LoggerFactory.getLogger(XSSFilter.class);

	public void init(FilterConfig paramFilterConfig) throws ServletException {
		this.config = paramFilterConfig;
		no_init = false;
		String str = paramFilterConfig.getInitParameter(APOSTROPHE);
		if (str != null) {
			this.apostrophe = str.trim();
		}
		logger.info("XSS filter initiate {} {}", CPR, VERSION);
	}

	public void destroy() {
		this.config = null;
	}

	public FilterConfig getFilterConfig() {
		return this.config;
	}

	public void setFilterConfig(FilterConfig paramFilterConfig) {
		if (!no_init) {
			return;
		}
		no_init = false;
		this.config = paramFilterConfig;
		String str = paramFilterConfig.getInitParameter(APOSTROPHE);
		if (str != null) {
			this.apostrophe = str.trim();
		}
		logger.info("XSS filter Setting config  {} {}", CPR, VERSION);
	}

	public void doFilter(ServletRequest paramServletRequest, ServletResponse paramServletResponse,
			FilterChain paramFilterChain) throws IOException, ServletException {
		paramFilterChain.doFilter(new XSSRequestWrapper((HttpServletRequest) paramServletRequest, this.apostrophe),
				paramServletResponse);
	}
}