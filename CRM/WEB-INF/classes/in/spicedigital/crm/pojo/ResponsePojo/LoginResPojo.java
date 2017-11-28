/*     */ package in.spicedigital.crm.pojo.ResponsePojo;
/*     */ 
/*     */ public class LoginResPojo
/*     */ {
/*     */   private String rs;
/*     */   private String rc;
/*     */   private String rd;
/*     */   private Pd pd;
/*     */ 
/*     */   public String getRs()
/*     */   {
/*  16 */     return this.rs;
/*     */   }
/*     */ 
/*     */   public void setRs(String rs)
/*     */   {
/*  21 */     this.rs = rs;
/*     */   }
/*     */ 
/*     */   public String getRc()
/*     */   {
/*  26 */     return this.rc;
/*     */   }
/*     */ 
/*     */   public void setRc(String rc)
/*     */   {
/*  31 */     this.rc = rc;
/*     */   }
/*     */ 
/*     */   public String getRd()
/*     */   {
/*  36 */     return this.rd;
/*     */   }
/*     */ 
/*     */   public void setRd(String rd)
/*     */   {
/*  41 */     this.rd = rd;
/*     */   }
/*     */ 
/*     */   public Pd getPd()
/*     */   {
/*  46 */     return this.pd;
/*     */   }
/*     */ 
/*     */   public void setPd(Pd pd)
/*     */   {
/*  51 */     this.pd = pd;
/*     */   }
/*     */ 
/*     */   public String toString()
/*     */   {
/* 200 */     return "LoginResPojo [rs=" + this.rs + ", rc=" + this.rc + ", rd=" + this.rd + 
/* 201 */       ", pd=" + this.pd + "]";
/*     */   }
/*     */ 
/*     */   public static class Pd
/*     */   {
/*     */     private String jid;
/*     */     private String accessId;
/*     */     private String cceid;
/*     */     private String language;
/*     */     private String category;
/*     */     private String userType;
/*     */     private String terminalID;
/*     */     private String requestID;
/*     */     private String channel;
/*     */     private String lastUpdateDays;
/*     */     private String sessionid;
/*     */     private String flagExpiry;
/*     */     private String flagFirst;
/*     */     private String captcha;
/*     */     private String mode;
/*     */     private String pwdvalidity;
/*     */     private String adminEmail;
/*     */ 
/*     */     public String getPwdvalidity()
/*     */     {
/*  76 */       return this.pwdvalidity;
/*     */     }
/*     */     public void setPwdvalidity(String pwdvalidity) {
/*  79 */       this.pwdvalidity = pwdvalidity;
/*     */     }
/*     */     public String getChannel() {
/*  82 */       return this.channel;
/*     */     }
/*     */     public void setChannel(String channel) {
/*  85 */       this.channel = channel;
/*     */     }
/*     */     public String getCceid() {
/*  88 */       return this.cceid;
/*     */     }
/*     */     public void setCceid(String cceid) {
/*  91 */       this.cceid = cceid;
/*     */     }
/*     */     public String getLanguage() {
/*  94 */       return this.language;
/*     */     }
/*     */     public void setLanguage(String language) {
/*  97 */       this.language = language;
/*     */     }
/*     */     public String getCategory() {
/* 100 */       return this.category;
/*     */     }
/*     */     public void setCategory(String category) {
/* 103 */       this.category = category;
/*     */     }
/*     */     public String getUserType() {
/* 106 */       return this.userType;
/*     */     }
/*     */     public void setUserType(String userType) {
/* 109 */       this.userType = userType;
/*     */     }
/*     */     public String getTerminalID() {
/* 112 */       return this.terminalID;
/*     */     }
/*     */     public void setTerminalID(String terminalID) {
/* 115 */       this.terminalID = terminalID;
/*     */     }
/*     */     public String getRequestID() {
/* 118 */       return this.requestID;
/*     */     }
/*     */     public void setRequestID(String requestID) {
/* 121 */       this.requestID = requestID;
/*     */     }
/*     */     public String getLastUpdateDays() {
/* 124 */       return this.lastUpdateDays;
/*     */     }
/*     */     public void setLastUpdateDays(String lastUpdateDays) {
/* 127 */       this.lastUpdateDays = lastUpdateDays;
/*     */     }
/*     */     public String getSessionid() {
/* 130 */       return this.sessionid;
/*     */     }
/*     */     public void setSessionid(String sessionid) {
/* 133 */       this.sessionid = sessionid;
/*     */     }
/*     */     public String getFlagExpiry() {
/* 136 */       return this.flagExpiry;
/*     */     }
/*     */     public void setFlagExpiry(String flagExpiry) {
/* 139 */       this.flagExpiry = flagExpiry;
/*     */     }
/*     */     public String getFlagFirst() {
/* 142 */       return this.flagFirst;
/*     */     }
/*     */     public void setFlagFirst(String flagFirst) {
/* 145 */       this.flagFirst = flagFirst;
/*     */     }
/*     */ 
/*     */     public String getCaptcha() {
/* 149 */       return this.captcha;
/*     */     }
/*     */     public void setCaptcha(String captcha) {
/* 152 */       this.captcha = captcha;
/*     */     }
/*     */ 
/*     */     public String getMode() {
/* 156 */       return this.mode;
/*     */     }
/*     */     public void setMode(String mode) {
/* 159 */       this.mode = mode;
/*     */     }
/*     */     public String getAdminEmail() {
/* 162 */       return this.adminEmail;
/*     */     }
/*     */     public void setAdminEmail(String adminEmail) {
/* 165 */       this.adminEmail = adminEmail;
/*     */     }
/*     */     public String getJid() {
/* 168 */       return this.jid;
/*     */     }
/*     */     public void setJid(String jid) {
/* 171 */       this.jid = jid;
/*     */     }
/*     */     public String getAccessId() {
/* 174 */       return this.accessId;
/*     */     }
/*     */     public void setAccessId(String accessId) {
/* 177 */       this.accessId = accessId;
/*     */     }
/*     */ 
/*     */     public String toString() {
/* 181 */       return "Pd [cceid=" + this.cceid + ", language=" + this.language + 
/* 182 */         ", category=" + this.category + ", userType=" + this.userType + 
/* 183 */         ", terminalID=" + this.terminalID + ", requestID=" + this.requestID + 
/* 184 */         ", channel=" + this.channel + ", lastUpdateDays=" + 
/* 185 */         this.lastUpdateDays + ", sessionid=" + this.sessionid + 
/* 186 */         ", flagExpiry=" + this.flagExpiry + ", flagFirst=" + this.flagFirst + 
/* 187 */         ", captcha=" + this.captcha + ", mode=" + this.mode + 
/* 188 */         ", pwdvalidity=" + this.pwdvalidity + ", adminEmail=" + 
/* 189 */         this.adminEmail + "]";
/*     */     }
/*     */   }
/*     */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.pojo.ResponsePojo.LoginResPojo
 * JD-Core Version:    0.6.0
 */