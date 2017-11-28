/*    */ package in.spicedigital.crm.pojo.ResponsePojo;
/*    */ 
/*    */ import java.util.List;
/*    */ 
/*    */ public class FetchTerminalIdResPojo
/*    */ {
/*    */   private String rs;
/*    */   private String rc;
/*    */   private String rd;
/*    */   private List<PD> pd;
/*    */ 
/*    */   public String getRs()
/*    */   {
/* 32 */     return this.rs;
/*    */   }
/*    */   public void setRs(String rs) {
/* 35 */     this.rs = rs;
/*    */   }
/*    */   public String getRc() {
/* 38 */     return this.rc;
/*    */   }
/*    */   public void setRc(String rc) {
/* 41 */     this.rc = rc;
/*    */   }
/*    */   public String getRd() {
/* 44 */     return this.rd;
/*    */   }
/*    */   public void setRd(String rd) {
/* 47 */     this.rd = rd;
/*    */   }
/*    */   public List<PD> getPd() {
/* 50 */     return this.pd;
/*    */   }
/*    */   public void setPd(List<PD> pd) {
/* 53 */     this.pd = pd;
/*    */   }
/*    */ 
/*    */   public static class PD
/*    */   {
/*    */     private String id;
/*    */ 
/*    */     public String getId()
/*    */     {
/* 18 */       return this.id;
/*    */     }
/*    */ 
/*    */     public void setId(String id) {
/* 22 */       this.id = id;
/*    */     }
/*    */ 
/*    */     public String toString()
/*    */     {
/* 27 */       return "TerminalId [id=" + this.id + "]";
/*    */     }
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.pojo.ResponsePojo.FetchTerminalIdResPojo
 * JD-Core Version:    0.6.0
 */