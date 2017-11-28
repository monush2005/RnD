/*    */ package in.spicedigital.crm.pojo.RequestPojo;
/*    */ 
/*    */ import java.util.List;
/*    */ 
/*    */ public class AllocateAgentArrRequestPojo
/*    */ {
/*    */   private List<AllocateAgentList> allocateAgentList;
/*    */ 
/*    */   public List<AllocateAgentList> getAllocateAgentList()
/*    */   {
/* 11 */     return this.allocateAgentList;
/*    */   }
/*    */ 
/*    */   public void setAllocateAgentList(List<AllocateAgentList> allocateAgentList) {
/* 15 */     this.allocateAgentList = allocateAgentList; } 
/*    */   public static class AllocateAgentList { private String requestId;
/*    */     private String action;
/*    */     private String msisdn;
/*    */     private String cceid;
/*    */     private String category;
/*    */     private String deptid;
/*    */     private String lang;
/*    */     private String channel;
/*    */ 
/* 31 */     public String getRequestId() { return this.requestId; }
/*    */ 
/*    */     public void setRequestId(String requestId) {
/* 34 */       this.requestId = requestId;
/*    */     }
/*    */     public String getAction() {
/* 37 */       return this.action;
/*    */     }
/*    */     public void setAction(String action) {
/* 40 */       this.action = action;
/*    */     }
/*    */     public String getMsisdn() {
/* 43 */       return this.msisdn;
/*    */     }
/*    */     public void setMsisdn(String msisdn) {
/* 46 */       this.msisdn = msisdn;
/*    */     }
/*    */     public String getCceid() {
/* 49 */       return this.cceid;
/*    */     }
/*    */     public void setCceid(String cceid) {
/* 52 */       this.cceid = cceid;
/*    */     }
/*    */     public String getCategory() {
/* 55 */       return this.category;
/*    */     }
/*    */     public void setCategory(String category) {
/* 58 */       this.category = category;
/*    */     }
/*    */     public String getDeptid() {
/* 61 */       return this.deptid;
/*    */     }
/*    */     public void setDeptid(String deptid) {
/* 64 */       this.deptid = deptid;
/*    */     }
/*    */     public String getLang() {
/* 67 */       return this.lang;
/*    */     }
/*    */     public void setLang(String lang) {
/* 70 */       this.lang = lang;
/*    */     }
/*    */     public String getChannel() {
/* 73 */       return this.channel;
/*    */     }
/*    */     public void setChannel(String channel) {
/* 76 */       this.channel = channel;
/*    */     }
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.pojo.RequestPojo.AllocateAgentArrRequestPojo
 * JD-Core Version:    0.6.0
 */