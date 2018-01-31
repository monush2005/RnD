package in.spicedigital.umang.filter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

public class RequestInterceptor extends HandlerInterceptorAdapter{
	
	    public boolean preHandle(HttpServletRequest request,
	        HttpServletResponse response, Object handler)
	        throws Exception {
	    	System.out.println("REQUEST URL::: "+request.getRequestURL().toString());
	    	
//	    	System.out.println("isLogin"+request.getSession().getAttribute("login"));
//	    	System.out.println("path:::::"+request.getRequestURL().toString() + "?" + request.getQueryString());
	    	String urlPath= request.getRequestURL().toString();
	    	 //response.sendError(HttpServletResponse.SC_FORBIDDEN);
/*	    	if("HEAD".equalsIgnoreCase(request.getMethod()) ||"PUT".equalsIgnoreCase(request.getMethod())||"DELETE".equalsIgnoreCase(request.getMethod())||"OPTIONS".equalsIgnoreCase(request.getMethod())||"TRACE".equalsIgnoreCase(request.getMethod())||"PATCH".equalsIgnoreCase(request.getMethod())||"GET".equalsIgnoreCase(request.getMethod())){
	    		 response.sendError(HttpServletResponse.SC_FORBIDDEN);
		    	 return false;
	    	}*/
	    	if(urlPath!=null &&!"".equals(urlPath) &&(urlPath.contains("/usc/api/auth/lg")||urlPath.contains("/usc/api/logout")||urlPath.contains("/usc/api/regVal")||urlPath.contains("/usc/api/reg")||urlPath.contains("/usc/api/mng/crtUsr")||urlPath.contains("/usc/api/forgot")||urlPath.contains("/usc/api/initForgot")||urlPath.contains("/usc/api/resetPass") || urlPath.contains("/usc/api/auth/onBoard") ||   urlPath.contains("/usc/api/fetchStates")||   urlPath.contains("/usc/api/commonData") ||  urlPath.contains("/usc/api/auth/initOtp") || urlPath.contains("/usc/api/auth/passwdReset") || ignoreCaseSensitiveUrl(urlPath).contains("/usc/api/admin/prop/reload/prod") || ignoreCaseSensitiveUrl(urlPath).contains("/usc/api/admin/prop/reload/stg") || ignoreCaseSensitiveUrl(urlPath).contains("/usc/api/admin/prop/reload/dev"))){
//	    		System.out.println("1");
	    	    return true;
	  	     }
	    	else if(request.getSession()!=null && request.getSession().getAttribute("login")!=null &&"yes".equalsIgnoreCase(request.getSession().getAttribute("login").toString())){
//	    		 System.out.println("2"); 
	    		return true;
	    	}else{
//	    		 System.out.println("3");
	    		 response.sendError(HttpServletResponse.SC_FORBIDDEN);
	    		 return false;
	    		
	    	}
	    	 
	    }
	    public void postHandle(HttpServletRequest request, HttpServletResponse response,Object handler, ModelAndView modelAndView) throws Exception {
	           /* long totalTime = System.currentTimeMillis() - (Long)request.getAttribute("time"); 
	            System.out.println(" post handle method, totalTime passed: " + totalTime + "ms");
	            modelAndView.addObject("totalTime", totalTime);*/
//	    	{"rs":"F","rc":"SLF0005","rd":"Authentication failed. Please try again","pd":null}
//	    System.out.println("postHandle::::"+request.getSession().getAttribute("logout"));
	    	if(request.getSession()!=null && request.getSession().getAttribute("logout")!=null &&"yes".equalsIgnoreCase(request.getSession().getAttribute("logout").toString())){
//	    		System.out.println("IN POST HANDLE");
	    	 response.sendError(HttpServletResponse.SC_FORBIDDEN);
	    	}
	        }
	    
	    public String ignoreCaseSensitiveUrl(String url){
	    	return url.toLowerCase();
	    }
}
