/*    */ package in.spicedigital.crm.pojo.RequestPojo;
/*    */ 
/*    */ public class FetchEmailsRequestPojo
/*    */ {
/*    */   private String trkr;
/*    */   private String lang;
/*    */   private String cceid;
/*    */   private String efrom;
/*    */   private String page;
/*    */   private String referenceId;
/*    */   private String subject;
/*    */   private String body;
/*    */ 
/*    */   public String getTrkr()
/*    */   {
/* 13 */     return this.trkr;
/*    */   }
/*    */   public void setTrkr(String trkr) {
/* 16 */     this.trkr = trkr;
/*    */   }
/*    */   public String getLang() {
/* 19 */     return this.lang;
/*    */   }
/*    */   public void setLang(String lang) {
/* 22 */     this.lang = lang;
/*    */   }
/*    */   public String getCceid() {
/* 25 */     return this.cceid;
/*    */   }
/*    */   public void setCceid(String cceid) {
/* 28 */     this.cceid = cceid;
/*    */   }
/*    */   public String getEfrom() {
/* 31 */     return this.efrom;
/*    */   }
/*    */   public void setEfrom(String efrom) {
/* 34 */     this.efrom = efrom;
/*    */   }
/*    */   public String getPage() {
/* 37 */     return this.page;
/*    */   }
/*    */   public void setPage(String page) {
/* 40 */     this.page = page;
/*    */   }
/*    */   public String getReferenceId() {
/* 43 */     return this.referenceId;
/*    */   }
/*    */   public void setReferenceId(String referenceId) {
/* 46 */     this.referenceId = referenceId;
/*    */   }
/*    */   public String getSubject() {
/* 49 */     return this.subject;
/*    */   }
/*    */   public void setSubject(String subject) {
/* 52 */     this.subject = subject;
/*    */   }
/*    */   public String getBody() {
/* 55 */     return this.body;
/*    */   }
/*    */   public void setBody(String body) {
/* 58 */     this.body = body;
/*    */   }
/*    */ 
/*    */   public String toString() {
/* 62 */     return "FetchEmailsRequestPojo [trkr=" + this.trkr + ", lang=" + this.lang + 
/* 63 */       ", cceid=" + this.cceid + ", efrom=" + this.efrom + ", page=" + this.page + 
/* 64 */       ", referenceId=" + this.referenceId + ", subject=" + this.subject + 
/* 65 */       ", body=" + this.body + "]";
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.pojo.RequestPojo.FetchEmailsRequestPojo
 * JD-Core Version:    0.6.0
 */