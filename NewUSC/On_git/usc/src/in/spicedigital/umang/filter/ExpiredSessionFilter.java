package in.spicedigital.umang.filter;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.filter.GenericFilterBean;
public class ExpiredSessionFilter extends GenericFilterBean {
	static final String FILTER_APPLIED = "__spring_security_expired_session_filter_applied";
	private Logger logger = LoggerFactory.getLogger(ExpiredSessionFilter.class);
    @Override
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
    HttpServletRequest request = (HttpServletRequest) req;
    HttpServletResponse response = (HttpServletResponse) res;
    boolean isValid=true;
    String referrer = request.getHeader("referer");
//    logger.info("{},{},{}",request.getRequestURI(),request.getSession().isNew(),request.getSession().getId());
//		if(referrer!=null&&request.getSession()!=null&&!"/payws/login".equalsIgnoreCase(request.getRequestURI())&&request.getSession().isNew()){
//			System.out.println("===============================EXPIRED===============================");
//			String senderLogin="{\"rs\":\"Fail\",\"rc\":\"FFFFF\",\"rd\":\"Session Expired\"}";
//			response.setContentType("text/json; charset=UTF-8");
//		    PrintWriter out = response.getWriter();
//		    out.write(senderLogin);
//		    out.flush();
//		    out.close();
//			isValid=false;
//		}
		if(isValid){
			chain.doFilter(request, response);
		}
    }
}