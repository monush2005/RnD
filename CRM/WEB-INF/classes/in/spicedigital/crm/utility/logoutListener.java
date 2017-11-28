/*    */ package in.spicedigital.crm.utility;
/*    */ 
/*    */ import java.io.IOException;
/*    */ import java.io.PrintStream;
/*    */ import javax.servlet.FilterChain;
/*    */ import javax.servlet.ServletException;
/*    */ import javax.servlet.ServletRequest;
/*    */ import javax.servlet.ServletResponse;
/*    */ import javax.servlet.http.HttpServletRequest;
/*    */ import javax.servlet.http.HttpServletResponse;
/*    */ import org.springframework.web.filter.GenericFilterBean;
/*    */ 
/*    */ public class logoutListener extends GenericFilterBean
/*    */ {
/*    */   public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain)
/*    */     throws IOException, ServletException
/*    */   {
/* 39 */     HttpServletRequest request = (HttpServletRequest)req;
/* 40 */     HttpServletResponse response = (HttpServletResponse)res;
/*    */ 
/* 44 */     String senderLogin = "{\"rs\":\"Fail\",\"rc\":\"FFFFF\",\"rd\":\"Session Expired\"}";
/* 45 */     response.setContentType("text/json; charset=UTF-8");
/* 46 */     System.out.println("in session");
/*    */ 
/* 56 */     chain.doFilter(request, response);
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.utility.logoutListener
 * JD-Core Version:    0.6.0
 */