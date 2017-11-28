/*    */ package in.spicedigital.crm.pojo.ResponsePojo;
/*    */ 
/*    */ public class GenerateTicketResponsePojo
/*    */ {
/*    */   private String rc;
/*    */   private String rd;
/*    */   private String rs;
/*    */   private Pd pd;
/*    */ 
/*    */   public String getRc()
/*    */   {
/*  9 */     return this.rc;
/*    */   }
/*    */   public void setRc(String rc) {
/* 12 */     this.rc = rc;
/*    */   }
/*    */   public String getRd() {
/* 15 */     return this.rd;
/*    */   }
/*    */   public void setRd(String rd) {
/* 18 */     this.rd = rd;
/*    */   }
/*    */   public Pd getPd() {
/* 21 */     return this.pd;
/*    */   }
/*    */   public void setPd(Pd pd) {
/* 24 */     this.pd = pd;
/*    */   }
/*    */   public String getRs() {
/* 27 */     return this.rs;
/*    */   }
/*    */   public void setRs(String rs) {
/* 30 */     this.rs = rs;
/*    */   }
/*    */   public static class Pd {
/*    */     private String ticketID;
/*    */ 
/*    */     public String getTicketID() {
/* 37 */       return this.ticketID;
/*    */     }
/*    */ 
/*    */     public void setTicketID(String ticketID) {
/* 41 */       this.ticketID = ticketID;
/*    */     }
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.pojo.ResponsePojo.GenerateTicketResponsePojo
 * JD-Core Version:    0.6.0
 */