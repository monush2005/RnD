package in.spicedigital.umang.filter;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.web.filter.GenericFilterBean;
public class SenderSessionFilter extends GenericFilterBean {
	static final String FILTER_APPLIED = "__spring_security_expired_session_filter_applied";
    @Override
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
    HttpServletRequest request = (HttpServletRequest) req;
    HttpServletResponse response = (HttpServletResponse) res;
    System.out.println("-------------------------------------IN SENDER SESSION FILTER----------------------------");
    String urls="/payws/login 	/payws/phishing	/payws/postTnc	/payws/annualFees	/payws/logout	/payws/agentMIS	/payws/searchKYC	/payws/transactionLedger	/payws/walletLedger	/payws/transactionStatus		/payws/logoutSender	/payws/smlc";
    System.out.println(!urls.contains(request.getRequestURI())+","+!request.getRequestURI().contains("/payws/resources"));
    if(!urls.contains(request.getRequestURI()) && !request.getRequestURI().contains("/payws/resources")){
    String senderLogin="";
		if(senderLogin.contains("Fail")){
			  response.sendError(111, senderLogin);
			  System.out.println("GO GO GO GO TO HELLL");
		}else{
			System.out.println("GO GO GO GO");
			
		}
    }
		System.out.println("-------------------------------------IN SENDER SESSION FILTER----------------------------");
    	chain.doFilter(request, response);
    }
    
}