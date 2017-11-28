/*     */ package in.spicedigital.crm.pojo.ResponsePojo;
/*     */ 
/*     */ import java.util.ArrayList;
/*     */ 
/*     */ public class LogoutResponsePojo
/*     */ {
/*     */   private String rs;
/*     */   private String rc;
/*     */   private String rd;
/*     */   private Pd pd;
/*     */ 
/*     */   public Pd getPd()
/*     */   {
/*  17 */     return this.pd;
/*     */   }
/*     */ 
/*     */   public void setPd(Pd pd) {
/*  21 */     this.pd = pd;
/*     */   }
/*     */ 
/*     */   public String getRs()
/*     */   {
/* 154 */     return this.rs;
/*     */   }
/*     */ 
/*     */   public void setRs(String rs) {
/* 158 */     this.rs = rs;
/*     */   }
/*     */ 
/*     */   public String getRc() {
/* 162 */     return this.rc;
/*     */   }
/*     */ 
/*     */   public void setRc(String rc) {
/* 166 */     this.rc = rc;
/*     */   }
/*     */ 
/*     */   public String getRd() {
/* 170 */     return this.rd;
/*     */   }
/*     */ 
/*     */   public void setRd(String rd) {
/* 174 */     this.rd = rd;
/*     */   }
/*     */ 
/*     */   public String toString()
/*     */   {
/* 179 */     return "LogoutResPojo [rs=" + this.rs + ", rc=" + this.rc + ", rd=" + this.rd + ", pd=" + this.pd + "]";
/*     */   }
/*     */ 
/*     */   public static class Pd
/*     */   {
/*     */     private String cceid;
/*     */     private String language;
/*     */     private String category;
/*     */     private String requestID;
/*     */     private String terminalID;
/*     */     private String channel;
/*     */     private String logoutCount;
/*     */     private ArrayList<Logout> logoutlogs;
/*     */ 
/*     */     public String getLogoutCount()
/*     */     {
/*  37 */       return this.logoutCount;
/*     */     }
/*     */ 
/*     */     public void setLogoutCount(String logoutCount) {
/*  41 */       this.logoutCount = logoutCount;
/*     */     }
/*     */ 
/*     */     public ArrayList<Logout> getLogoutlogs() {
/*  45 */       return this.logoutlogs;
/*     */     }
/*     */ 
/*     */     public void setLogoutlogs(ArrayList<Logout> logoutlogs) {
/*  49 */       this.logoutlogs = logoutlogs;
/*     */     }
/*     */ 
/*     */     public String getTerminalID()
/*     */     {
/*  95 */       return this.terminalID;
/*     */     }
/*     */ 
/*     */     public void setTerminalID(String terminalID) {
/*  99 */       this.terminalID = terminalID;
/*     */     }
/*     */ 
/*     */     public String getChannel() {
/* 103 */       return this.channel;
/*     */     }
/*     */ 
/*     */     public void setChannel(String channel) {
/* 107 */       this.channel = channel;
/*     */     }
/*     */ 
/*     */     public String getRequestID() {
/* 111 */       return this.requestID;
/*     */     }
/*     */ 
/*     */     public void setRequestID(String requestID) {
/* 115 */       this.requestID = requestID;
/*     */     }
/*     */ 
/*     */     public String getCceid() {
/* 119 */       return this.cceid;
/*     */     }
/*     */ 
/*     */     public void setCceid(String cceid) {
/* 123 */       this.cceid = cceid;
/*     */     }
/*     */ 
/*     */     public String getLanguage() {
/* 127 */       return this.language;
/*     */     }
/*     */ 
/*     */     public void setLanguage(String language) {
/* 131 */       this.language = language;
/*     */     }
/*     */ 
/*     */     public String getCategory() {
/* 135 */       return this.category;
/*     */     }
/*     */ 
/*     */     public void setCategory(String category) {
/* 139 */       this.category = category;
/*     */     }
/*     */ 
/*     */     public String toString()
/*     */     {
/* 144 */       return "Pd [cceid=" + this.cceid + ", language=" + this.language + ", category=" + this.category + ", requestID=" + 
/* 145 */         this.requestID + ", terminalID=" + this.terminalID + ", channel=" + this.channel + ", logoutCount=" + this.logoutCount + 
/* 146 */         ", logoutlogs=" + this.logoutlogs + "]";
/*     */     }
/*     */ 
/*     */     public static class Logout
/*     */     {
/*     */       private String cceid;
/*     */       private String terminalID;
/*     */       private String requestID;
/*     */       private String mode;
/*     */       private String lang;
/*     */ 
/*     */       public String getCceid()
/*     */       {
/*  60 */         return this.cceid;
/*     */       }
/*     */       public void setCceid(String cceid) {
/*  63 */         this.cceid = cceid;
/*     */       }
/*     */       public String getTerminalID() {
/*  66 */         return this.terminalID;
/*     */       }
/*     */       public void setTerminalID(String terminalID) {
/*  69 */         this.terminalID = terminalID;
/*     */       }
/*     */       public String getRequestID() {
/*  72 */         return this.requestID;
/*     */       }
/*     */       public void setRequestID(String requestID) {
/*  75 */         this.requestID = requestID;
/*     */       }
/*     */       public String getMode() {
/*  78 */         return this.mode;
/*     */       }
/*     */       public void setMode(String mode) {
/*  81 */         this.mode = mode;
/*     */       }
/*     */       public String getLang() {
/*  84 */         return this.lang;
/*     */       }
/*     */       public void setLang(String lang) {
/*  87 */         this.lang = lang;
/*     */       }
/*     */     }
/*     */   }
/*     */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.pojo.ResponsePojo.LogoutResponsePojo
 * JD-Core Version:    0.6.0
 */