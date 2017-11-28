/*    */ package in.spicedigital.crm.pojo.RequestPojo;
/*    */ 
/*    */ public class SendSmsRequestPojo
/*    */ {
/*    */   private String lang;
/*    */   private String mno;
/*    */   private String msg;
/*    */   private String msgtype;
/*    */   private String appname;
/*    */ 
/*    */   public String getLang()
/*    */   {
/* 10 */     return this.lang;
/*    */   }
/*    */   public void setLang(String lang) {
/* 13 */     this.lang = lang;
/*    */   }
/*    */   public String getMno() {
/* 16 */     return this.mno;
/*    */   }
/*    */   public void setMno(String mno) {
/* 19 */     this.mno = mno;
/*    */   }
/*    */   public String getMsg() {
/* 22 */     return this.msg;
/*    */   }
/*    */   public void setMsg(String msg) {
/* 25 */     this.msg = msg;
/*    */   }
/*    */   public String getMsgtype() {
/* 28 */     return this.msgtype;
/*    */   }
/*    */   public void setMsgtype(String msgtype) {
/* 31 */     this.msgtype = msgtype;
/*    */   }
/*    */   public String getAppname() {
/* 34 */     return this.appname;
/*    */   }
/*    */   public void setAppname(String appname) {
/* 37 */     this.appname = appname;
/*    */   }
/*    */ 
/*    */   public String toString() {
/* 41 */     return "SendSmsRequestPojo [lang=" + this.lang + ", mno=" + this.mno + 
/* 42 */       ", msg=" + this.msg + ", msgtype=" + this.msgtype + ", appname=" + 
/* 43 */       this.appname + "]";
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.pojo.RequestPojo.SendSmsRequestPojo
 * JD-Core Version:    0.6.0
 */