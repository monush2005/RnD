/*    */ package in.spicedigital.crm.pojo.RequestPojo;
/*    */ 
/*    */ public class UserDisconnectedStatusRequestPojo
/*    */ {
/*    */   private String refID;
/*    */   private String jid;
/*    */ 
/*    */   public String getRefID()
/*    */   {
/*  7 */     return this.refID;
/*    */   }
/*    */ 
/*    */   public void setRefID(String refID) {
/* 11 */     this.refID = refID;
/*    */   }
/*    */   public String getJid() {
/* 14 */     return this.jid;
/*    */   }
/*    */ 
/*    */   public void setJid(String jid) {
/* 18 */     this.jid = jid;
/*    */   }
/*    */ 
/*    */   public String toString()
/*    */   {
/* 23 */     return "UserDisconnectedStatusRequestPojo [refID=" + this.refID + ", jid=" + 
/* 24 */       this.jid + "]";
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.pojo.RequestPojo.UserDisconnectedStatusRequestPojo
 * JD-Core Version:    0.6.0
 */