/*     */ package in.spicedigital.crm.pojo.RequestPojo;
/*     */ 
/*     */ public class EmailHandlerIntegrationReqPojo
/*     */ {
/*     */   private String to;
/*     */   private String cc;
/*     */   private String bcc;
/*     */   private String senderid;
/*     */   private String subject;
/*     */   private String lang;
/*     */   private String tag;
/*     */   private String vmtype;
/*     */   private String appname;
/*     */   private String vmname;
/*     */   private String trkr;
/*     */   private Body body;
/*     */ 
/*     */   public String getTo()
/*     */   {
/*  18 */     return this.to;
/*     */   }
/*     */ 
/*     */   public void setTo(String to) {
/*  22 */     this.to = to;
/*     */   }
/*     */ 
/*     */   public String getCc() {
/*  26 */     return this.cc;
/*     */   }
/*     */ 
/*     */   public void setCc(String cc) {
/*  30 */     this.cc = cc;
/*     */   }
/*     */ 
/*     */   public String getBcc() {
/*  34 */     return this.bcc;
/*     */   }
/*     */ 
/*     */   public void setBcc(String bcc) {
/*  38 */     this.bcc = bcc;
/*     */   }
/*     */ 
/*     */   public String getSenderid() {
/*  42 */     return this.senderid;
/*     */   }
/*     */ 
/*     */   public void setSenderid(String senderid) {
/*  46 */     this.senderid = senderid;
/*     */   }
/*     */ 
/*     */   public String getSubject() {
/*  50 */     return this.subject;
/*     */   }
/*     */ 
/*     */   public void setSubject(String subject) {
/*  54 */     this.subject = subject;
/*     */   }
/*     */ 
/*     */   public String getLang() {
/*  58 */     return this.lang;
/*     */   }
/*     */ 
/*     */   public void setLang(String lang) {
/*  62 */     this.lang = lang;
/*     */   }
/*     */ 
/*     */   public String getTag() {
/*  66 */     return this.tag;
/*     */   }
/*     */ 
/*     */   public void setTag(String tag) {
/*  70 */     this.tag = tag;
/*     */   }
/*     */ 
/*     */   public String getVmtype() {
/*  74 */     return this.vmtype;
/*     */   }
/*     */ 
/*     */   public void setVmtype(String vmtype) {
/*  78 */     this.vmtype = vmtype;
/*     */   }
/*     */ 
/*     */   public String getAppname() {
/*  82 */     return this.appname;
/*     */   }
/*     */ 
/*     */   public void setAppname(String appname) {
/*  86 */     this.appname = appname;
/*     */   }
/*     */ 
/*     */   public String getVmname() {
/*  90 */     return this.vmname;
/*     */   }
/*     */ 
/*     */   public void setVmname(String vmname) {
/*  94 */     this.vmname = vmname;
/*     */   }
/*     */ 
/*     */   public String getTrkr() {
/*  98 */     return this.trkr;
/*     */   }
/*     */ 
/*     */   public void setTrkr(String trkr) {
/* 102 */     this.trkr = trkr;
/*     */   }
/*     */   public Body getBody() {
/* 105 */     return this.body;
/*     */   }
/*     */ 
/*     */   public void setBody(Body body) {
/* 109 */     this.body = body;
/*     */   }
/*     */ 
/*     */   public String toString()
/*     */   {
/* 117 */     return "EmailHandlerIntegrationReqPojo [to=" + this.to + ", cc=" + this.cc + 
/* 118 */       ", bcc=" + this.bcc + ", senderid=" + this.senderid + ", subject=" + 
/* 119 */       this.subject + ", lang=" + this.lang + ", tag=" + this.tag + ", vmtype=" + 
/* 120 */       this.vmtype + ", appname=" + this.appname + ", vmname=" + this.vmname + 
/* 121 */       ", trkr=" + this.trkr + ", body=" + this.body + "]"; } 
/*     */   public static class Body { private String uname;
/*     */     private String mno;
/*     */     private String otp;
/*     */     private String vldtime;
/*     */     private String gentime;
/*     */     private String agentName;
/*     */     private String agentId;
/*     */     private String agentMno;
/*     */     private String passwd;
/*     */ 
/* 138 */     public String getUname() { return this.uname; }
/*     */ 
/*     */     public void setUname(String uname) {
/* 141 */       this.uname = uname;
/*     */     }
/*     */     public String getMno() {
/* 144 */       return this.mno;
/*     */     }
/*     */     public void setMno(String mno) {
/* 147 */       this.mno = mno;
/*     */     }
/*     */ 
/*     */     public String getPasswd() {
/* 151 */       return this.passwd;
/*     */     }
/*     */     public void setPasswd(String passwd) {
/* 154 */       this.passwd = passwd;
/*     */     }
/*     */     public String getOtp() {
/* 157 */       return this.otp;
/*     */     }
/*     */     public void setOtp(String otp) {
/* 160 */       this.otp = otp;
/*     */     }
/*     */     public String getVldtime() {
/* 163 */       return this.vldtime;
/*     */     }
/*     */     public void setVldtime(String vldtime) {
/* 166 */       this.vldtime = vldtime;
/*     */     }
/*     */     public String getGentime() {
/* 169 */       return this.gentime;
/*     */     }
/*     */     public void setGentime(String gentime) {
/* 172 */       this.gentime = gentime;
/*     */     }
/*     */     public String getAgentName() {
/* 175 */       return this.agentName;
/*     */     }
/*     */     public void setAgentName(String agentName) {
/* 178 */       this.agentName = agentName;
/*     */     }
/*     */     public String getAgentId() {
/* 181 */       return this.agentId;
/*     */     }
/*     */     public void setAgentId(String agentId) {
/* 184 */       this.agentId = agentId;
/*     */     }
/*     */     public String getAgentMno() {
/* 187 */       return this.agentMno;
/*     */     }
/*     */     public void setAgentMno(String agentMno) {
/* 190 */       this.agentMno = agentMno;
/*     */     }
/*     */ 
/*     */     public String toString() {
/* 194 */       return "Body [uname=" + this.uname + ", mno=" + this.mno + ", otp=" + this.otp + 
/* 195 */         ", vldtime=" + this.vldtime + ", gentime=" + this.gentime + 
/* 196 */         ", agentName=" + this.agentName + ", agentId=" + this.agentId + 
/* 197 */         ", agentMno=" + this.agentMno + ", passwd=" + this.passwd + "]";
/*     */     }
/*     */   }
/*     */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.pojo.RequestPojo.EmailHandlerIntegrationReqPojo
 * JD-Core Version:    0.6.0
 */