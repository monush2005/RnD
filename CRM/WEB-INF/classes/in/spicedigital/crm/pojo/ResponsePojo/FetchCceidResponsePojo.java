/*     */ package in.spicedigital.crm.pojo.ResponsePojo;
/*     */ 
/*     */ import java.util.List;
/*     */ 
/*     */ public class FetchCceidResponsePojo
/*     */ {
/*     */   private String rc;
/*     */   private String rd;
/*     */   private String rs;
/*     */   private List<PD> pd;
/*     */ 
/*     */   public String getRc()
/*     */   {
/*  11 */     return this.rc;
/*     */   }
/*     */   public void setRc(String rc) {
/*  14 */     this.rc = rc;
/*     */   }
/*     */   public String getRd() {
/*  17 */     return this.rd;
/*     */   }
/*     */   public void setRd(String rd) {
/*  20 */     this.rd = rd;
/*     */   }
/*     */   public String getRs() {
/*  23 */     return this.rs;
/*     */   }
/*     */   public void setRs(String rs) {
/*  26 */     this.rs = rs;
/*     */   }
/*     */   public List<PD> getPd() {
/*  29 */     return this.pd;
/*     */   }
/*     */   public void setPd(List<PD> pd) {
/*  32 */     this.pd = pd;
/*     */   }
/*     */ 
/*     */   public String toString()
/*     */   {
/* 196 */     return "FetchCceidResponsePojo [rc=" + this.rc + ", rd=" + this.rd + ", rs=" + this.rs + 
/* 197 */       ", pd=" + this.pd + "]";
/*     */   }
/*     */ 
/*     */   public static class PD
/*     */   {
/*     */     private String empid;
/*     */     private String cceid;
/*     */     private String name;
/*     */     private String mno;
/*     */     private String uname;
/*     */     private String pwd;
/*     */     private String cdate;
/*     */     private String status;
/*     */     private String type;
/*     */     private String ccelang;
/*     */     private String email;
/*     */     private String mode;
/*     */     private String rrespond;
/*     */     private String chat;
/*     */     private String query;
/*     */     private String call;
/*     */     private String qrmno;
/*     */     private String sme;
/*     */     private String viewrpt;
/*     */     private String terminalid;
/*     */     private String updatepwdtime;
/*     */     private String rating;
/*     */ 
/*     */     public String getEmpid()
/*     */     {
/*  59 */       return this.empid;
/*     */     }
/*     */     public void setEmpid(String empid) {
/*  62 */       this.empid = empid;
/*     */     }
/*     */     public String getCceid() {
/*  65 */       return this.cceid;
/*     */     }
/*     */     public void setCceid(String cceid) {
/*  68 */       this.cceid = cceid;
/*     */     }
/*     */     public String getName() {
/*  71 */       return this.name;
/*     */     }
/*     */     public void setName(String name) {
/*  74 */       this.name = name;
/*     */     }
/*     */     public String getMno() {
/*  77 */       return this.mno;
/*     */     }
/*     */     public void setMno(String mno) {
/*  80 */       this.mno = mno;
/*     */     }
/*     */     public String getUname() {
/*  83 */       return this.uname;
/*     */     }
/*     */     public void setUname(String uname) {
/*  86 */       this.uname = uname;
/*     */     }
/*     */     public String getPwd() {
/*  89 */       return this.pwd;
/*     */     }
/*     */     public void setPwd(String pwd) {
/*  92 */       this.pwd = pwd;
/*     */     }
/*     */     public String getCdate() {
/*  95 */       return this.cdate;
/*     */     }
/*     */     public void setCdate(String cdate) {
/*  98 */       this.cdate = cdate;
/*     */     }
/*     */     public String getStatus() {
/* 101 */       return this.status;
/*     */     }
/*     */     public void setStatus(String status) {
/* 104 */       this.status = status;
/*     */     }
/*     */ 
/*     */     public String getCcelang() {
/* 108 */       return this.ccelang;
/*     */     }
/*     */     public void setCcelang(String ccelang) {
/* 111 */       this.ccelang = ccelang;
/*     */     }
/*     */     public String getEmail() {
/* 114 */       return this.email;
/*     */     }
/*     */     public void setEmail(String email) {
/* 117 */       this.email = email;
/*     */     }
/*     */     public String getMode() {
/* 120 */       return this.mode;
/*     */     }
/*     */     public void setMode(String mode) {
/* 123 */       this.mode = mode;
/*     */     }
/*     */     public String getRrespond() {
/* 126 */       return this.rrespond;
/*     */     }
/*     */     public void setRrespond(String rrespond) {
/* 129 */       this.rrespond = rrespond;
/*     */     }
/*     */     public String getChat() {
/* 132 */       return this.chat;
/*     */     }
/*     */     public void setChat(String chat) {
/* 135 */       this.chat = chat;
/*     */     }
/*     */     public String getQuery() {
/* 138 */       return this.query;
/*     */     }
/*     */     public void setQuery(String query) {
/* 141 */       this.query = query;
/*     */     }
/*     */     public String getCall() {
/* 144 */       return this.call;
/*     */     }
/*     */     public void setCall(String call) {
/* 147 */       this.call = call;
/*     */     }
/*     */     public String getQrmno() {
/* 150 */       return this.qrmno;
/*     */     }
/*     */     public void setQrmno(String qrmno) {
/* 153 */       this.qrmno = qrmno;
/*     */     }
/*     */     public String getSme() {
/* 156 */       return this.sme;
/*     */     }
/*     */     public void setSme(String sme) {
/* 159 */       this.sme = sme;
/*     */     }
/*     */     public String getViewrpt() {
/* 162 */       return this.viewrpt;
/*     */     }
/*     */     public void setViewrpt(String viewrpt) {
/* 165 */       this.viewrpt = viewrpt;
/*     */     }
/*     */     public String getUpdatepwdtime() {
/* 168 */       return this.updatepwdtime;
/*     */     }
/*     */     public void setUpdatepwdtime(String updatepwdtime) {
/* 171 */       this.updatepwdtime = updatepwdtime;
/*     */     }
/*     */     public String getType() {
/* 174 */       return this.type;
/*     */     }
/*     */     public void setType(String type) {
/* 177 */       this.type = type;
/*     */     }
/*     */     public String getRating() {
/* 180 */       return this.rating;
/*     */     }
/*     */     public void setRating(String rating) {
/* 183 */       this.rating = rating;
/*     */     }
/*     */     public String getTerminalid() {
/* 186 */       return this.terminalid;
/*     */     }
/*     */     public void setTerminalid(String terminalid) {
/* 189 */       this.terminalid = terminalid;
/*     */     }
/*     */   }
/*     */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.pojo.ResponsePojo.FetchCceidResponsePojo
 * JD-Core Version:    0.6.0
 */