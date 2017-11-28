/*    */ package in.spicedigital.crm.pojo.RequestPojo;
/*    */ 
/*    */ public class LoginRequestPojo
/*    */ {
/*    */   private String uname;
/*    */   private String pwd;
/*    */   private String lang;
/*    */   private String ip;
/*    */   private String sessionid;
/*    */   private String connectionid;
/*    */ 
/*    */   public String getUname()
/*    */   {
/* 15 */     return this.uname;
/*    */   }
/*    */ 
/*    */   public void setUname(String uname) {
/* 19 */     this.uname = uname;
/*    */   }
/*    */ 
/*    */   public String getPwd() {
/* 23 */     return this.pwd;
/*    */   }
/*    */ 
/*    */   public void setPwd(String pwd) {
/* 27 */     this.pwd = pwd;
/*    */   }
/*    */ 
/*    */   public String getLang() {
/* 31 */     return this.lang;
/*    */   }
/*    */ 
/*    */   public void setLang(String lang) {
/* 35 */     this.lang = lang;
/*    */   }
/*    */ 
/*    */   public String getConnectionid()
/*    */   {
/* 41 */     return this.connectionid;
/*    */   }
/*    */ 
/*    */   public void setConnectionid(String connectionid) {
/* 45 */     this.connectionid = connectionid;
/*    */   }
/*    */ 
/*    */   public String getIp() {
/* 49 */     return this.ip;
/*    */   }
/*    */ 
/*    */   public void setIp(String ip) {
/* 53 */     this.ip = ip;
/*    */   }
/*    */ 
/*    */   public String getSessionid() {
/* 57 */     return this.sessionid;
/*    */   }
/*    */ 
/*    */   public void setSessionid(String sessionid) {
/* 61 */     this.sessionid = sessionid;
/*    */   }
/*    */ 
/*    */   public String toString()
/*    */   {
/* 66 */     return "LoginRequestPojo [uname=" + this.uname + ", pwd=" + this.pwd + ", lang=" + 
/* 67 */       this.lang + ", ip=" + this.ip + ", sessionid=" + this.sessionid + "]";
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.pojo.RequestPojo.LoginRequestPojo
 * JD-Core Version:    0.6.0
 */