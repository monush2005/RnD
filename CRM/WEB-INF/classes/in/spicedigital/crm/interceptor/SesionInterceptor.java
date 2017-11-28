/*    */ package in.spicedigital.crm.interceptor;
/*    */ 
/*    */ import javax.servlet.http.HttpServletRequest;
/*    */ import javax.servlet.http.HttpServletResponse;
/*    */ import javax.servlet.http.HttpSession;
/*    */ import org.springframework.beans.factory.annotation.Autowired;
/*    */ import org.springframework.web.servlet.HandlerInterceptor;
/*    */ import org.springframework.web.servlet.ModelAndView;
/*    */ 
/*    */ public class SesionInterceptor
/*    */   implements HandlerInterceptor
/*    */ {
/*    */ 
/*    */   @Autowired
/*    */   HttpSession session;
/*    */ 
/*    */   public void afterCompletion(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2, Exception arg3)
/*    */     throws Exception
/*    */   {
/*    */   }
/*    */ 
/*    */   public void postHandle(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2, ModelAndView arg3)
/*    */     throws Exception
/*    */   {
/*    */   }
/*    */ 
/*    */   public boolean preHandle(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2)
/*    */     throws Exception
/*    */   {
/* 34 */     this.session.getAttribute("user");
/*    */ 
/* 38 */     return false;
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.interceptor.SesionInterceptor
 * JD-Core Version:    0.6.0
 */