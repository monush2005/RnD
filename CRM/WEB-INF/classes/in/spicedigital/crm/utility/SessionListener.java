/*    */ package in.spicedigital.crm.utility;
/*    */ 
/*    */ import java.io.PrintStream;
/*    */ import javax.servlet.http.HttpSession;
/*    */ import javax.servlet.http.HttpSessionEvent;
/*    */ import javax.servlet.http.HttpSessionListener;
/*    */ 
/*    */ public class SessionListener
/*    */   implements HttpSessionListener
/*    */ {
/*  7 */   private int sessionCount = 0;
/*    */ 
/*    */   public void sessionCreated(HttpSessionEvent event) {
/* 10 */     System.out.println("In Session Created");
/* 11 */     synchronized (this) {
/* 12 */       this.sessionCount += 1;
/*    */     }
/* 14 */     System.out.println("Session Created: " + event.getSession().getId());
/* 15 */     System.out.println("Total Sessions: " + this.sessionCount);
/*    */   }
/*    */ 
/*    */   public void sessionDestroyed(HttpSessionEvent event) {
/* 19 */     System.out.println("In Session Destroyed");
/* 20 */     synchronized (this) {
/* 21 */       this.sessionCount -= 1;
/* 22 */       System.out.println(event.getSource());
/* 23 */       System.out.println(event.getSession());
/* 24 */       System.out.println(event.getSession().isNew());
/*    */     }
/* 26 */     System.out.println("Session Destroyed: " + event.getSession().getId());
/* 27 */     System.out.println("Total Sessions: " + this.sessionCount);
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.utility.SessionListener
 * JD-Core Version:    0.6.0
 */