/*     */ package in.spicedigital.crm.pojo.RequestPojo;
/*     */ 
/*     */ import java.util.List;
/*     */ 
/*     */ public class UpdateTicketRequestPojo
/*     */ {
/*     */   private List<UpdateTicketList> updateTicketList;
/*     */ 
/*     */   public List<UpdateTicketList> getUpdateTicketList()
/*     */   {
/*   9 */     return this.updateTicketList;
/*     */   }
/*     */ 
/*     */   public void setUpdateTicketList(List<UpdateTicketList> updateTicketList)
/*     */   {
/*  14 */     this.updateTicketList = updateTicketList; } 
/*     */   public static class UpdateTicketList { private String ticketId;
/*     */     private String trkr;
/*     */     private String status;
/*     */     private String lang;
/*     */     private String remarks;
/*     */     private String cceid;
/*     */     private String departmentid;
/*     */     private String serviceid;
/*     */     private String user_mno;
/*     */     private String ufathers_name;
/*     */     private String category;
/*     */     private String sub_category;
/*     */     private String query;
/*     */     private String assign_cce;
/*     */     private String severity_level;
/*     */     private String debug;
/*     */     private String attachment;
/*     */     private String lmode;
/*     */     private String department;
/*     */     private String service;
/*     */ 
/*  44 */     public String getCceid() { return this.cceid; }
/*     */ 
/*     */     public void setCceid(String cceid) {
/*  47 */       this.cceid = cceid;
/*     */     }
/*     */     public String getTicketId() {
/*  50 */       return this.ticketId;
/*     */     }
/*     */     public void setTicketId(String ticketId) {
/*  53 */       this.ticketId = ticketId;
/*     */     }
/*     */     public String getTrkr() {
/*  56 */       return this.trkr;
/*     */     }
/*     */     public void setTrkr(String trkr) {
/*  59 */       this.trkr = trkr;
/*     */     }
/*     */     public String getStatus() {
/*  62 */       return this.status;
/*     */     }
/*     */     public void setStatus(String status) {
/*  65 */       this.status = status;
/*     */     }
/*     */     public String getLang() {
/*  68 */       return this.lang;
/*     */     }
/*     */     public void setLang(String lang) {
/*  71 */       this.lang = lang;
/*     */     }
/*     */     public String getRemarks() {
/*  74 */       return this.remarks;
/*     */     }
/*     */     public void setRemarks(String remarks) {
/*  77 */       this.remarks = remarks;
/*     */     }
/*     */     public String getDepartmentid() {
/*  80 */       return this.departmentid;
/*     */     }
/*     */     public void setDepartmentid(String departmentid) {
/*  83 */       this.departmentid = departmentid;
/*     */     }
/*     */     public String getServiceid() {
/*  86 */       return this.serviceid;
/*     */     }
/*     */     public void setServiceid(String serviceid) {
/*  89 */       this.serviceid = serviceid;
/*     */     }
/*     */     public String getUser_mno() {
/*  92 */       return this.user_mno;
/*     */     }
/*     */     public void setUser_mno(String user_mno) {
/*  95 */       this.user_mno = user_mno;
/*     */     }
/*     */     public String getUfathers_name() {
/*  98 */       return this.ufathers_name;
/*     */     }
/*     */     public void setUfathers_name(String ufathers_name) {
/* 101 */       this.ufathers_name = ufathers_name;
/*     */     }
/*     */     public String getCategory() {
/* 104 */       return this.category;
/*     */     }
/*     */     public void setCategory(String category) {
/* 107 */       this.category = category;
/*     */     }
/*     */     public String getSub_category() {
/* 110 */       return this.sub_category;
/*     */     }
/*     */     public void setSub_category(String sub_category) {
/* 113 */       this.sub_category = sub_category;
/*     */     }
/*     */     public String getQuery() {
/* 116 */       return this.query;
/*     */     }
/*     */     public void setQuery(String query) {
/* 119 */       this.query = query;
/*     */     }
/*     */     public String getAssign_cce() {
/* 122 */       return this.assign_cce;
/*     */     }
/*     */     public void setAssign_cce(String assign_cce) {
/* 125 */       this.assign_cce = assign_cce;
/*     */     }
/*     */     public String getSeverity_level() {
/* 128 */       return this.severity_level;
/*     */     }
/*     */     public void setSeverity_level(String severity_level) {
/* 131 */       this.severity_level = severity_level;
/*     */     }
/*     */     public String getDebug() {
/* 134 */       return this.debug;
/*     */     }
/*     */     public void setDebug(String debug) {
/* 137 */       this.debug = debug;
/*     */     }
/*     */     public String getAttachment() {
/* 140 */       return this.attachment;
/*     */     }
/*     */     public void setAttachment(String attachment) {
/* 143 */       this.attachment = attachment;
/*     */     }
/*     */     public String getLmode() {
/* 146 */       return this.lmode;
/*     */     }
/*     */     public void setLmode(String lmode) {
/* 149 */       this.lmode = lmode;
/*     */     }
/*     */     public String getDepartment() {
/* 152 */       return this.department;
/*     */     }
/*     */     public void setDepartment(String department) {
/* 155 */       this.department = department;
/*     */     }
/*     */     public String getService() {
/* 158 */       return this.service;
/*     */     }
/*     */     public void setService(String service) {
/* 161 */       this.service = service;
/*     */     }
/*     */ 
/*     */     public String toString() {
/* 165 */       return "UpdateTicketList [ticketId=" + this.ticketId + ", trkr=" + this.trkr + 
/* 166 */         ", status=" + this.status + ", lang=" + this.lang + ", remarks=" + 
/* 167 */         this.remarks + ", cceid=" + this.cceid + ", departmentid=" + 
/* 168 */         this.departmentid + ", serviceid=" + this.serviceid + ", user_mno=" + 
/* 169 */         this.user_mno + ", ufathers_name=" + this.ufathers_name + ", category=" + 
/* 170 */         this.category + ", sub_category=" + this.sub_category + ", query=" + 
/* 171 */         this.query + ", assign_cce=" + this.assign_cce + ", severity_level=" + 
/* 172 */         this.severity_level + ", debug=" + this.debug + ", attachment=" + 
/* 173 */         this.attachment + ", lmode=" + this.lmode + ", department=" + 
/* 174 */         this.department + ", service=" + this.service + "]";
/*     */     }
/*     */   }
/*     */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.pojo.RequestPojo.UpdateTicketRequestPojo
 * JD-Core Version:    0.6.0
 */