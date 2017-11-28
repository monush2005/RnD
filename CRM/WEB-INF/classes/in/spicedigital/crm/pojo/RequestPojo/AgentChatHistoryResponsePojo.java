/*     */ package in.spicedigital.crm.pojo.RequestPojo;
/*     */ 
/*     */ import java.util.List;
/*     */ 
/*     */ public class AgentChatHistoryResponsePojo
/*     */ {
/*     */   private String msisdn;
/*     */   private String status;
/*     */   private String des;
/*     */   private String requestId;
/*     */   private List<History> history;
/*     */ 
/*     */   public String getMsisdn()
/*     */   {
/*  15 */     return this.msisdn;
/*     */   }
/*     */   public void setMsisdn(String msisdn) {
/*  18 */     this.msisdn = msisdn;
/*     */   }
/*     */   public String getStatus() {
/*  21 */     return this.status;
/*     */   }
/*     */   public void setStatus(String status) {
/*  24 */     this.status = status;
/*     */   }
/*     */   public String getDes() {
/*  27 */     return this.des;
/*     */   }
/*     */   public void setDes(String des) {
/*  30 */     this.des = des;
/*     */   }
/*     */   public String getRequestId() {
/*  33 */     return this.requestId;
/*     */   }
/*     */   public void setRequestId(String requestId) {
/*  36 */     this.requestId = requestId;
/*     */   }
/*     */   public List<History> getHistory() {
/*  39 */     return this.history;
/*     */   }
/*     */   public void setHistory(List<History> history) {
/*  42 */     this.history = history;
/*     */   }
/*     */ 
/*     */   public static class Agent
/*     */   {
/*     */     private String msg;
/*     */     private String time;
/*     */     private String agentId;
/*     */ 
/*     */     public String getMsg()
/*     */     {
/*  68 */       return this.msg;
/*     */     }
/*     */     public void setMsg(String msg) {
/*  71 */       this.msg = msg;
/*     */     }
/*     */     public String getTime() {
/*  74 */       return this.time;
/*     */     }
/*     */     public void setTime(String time) {
/*  77 */       this.time = time;
/*     */     }
/*     */     public String getAgentId() {
/*  80 */       return this.agentId;
/*     */     }
/*     */     public void setAgentId(String agentId) {
/*  83 */       this.agentId = agentId;
/*     */     }
/*     */   }
/*     */ 
/*     */   public static class History
/*     */   {
/*     */     private List<AgentChatHistoryResponsePojo.Agent> agent;
/*     */     private List<AgentChatHistoryResponsePojo.User> user;
/*     */ 
/*     */     public List<AgentChatHistoryResponsePojo.Agent> getAgent()
/*     */     {
/*  49 */       return this.agent;
/*     */     }
/*     */     public void setAgent(List<AgentChatHistoryResponsePojo.Agent> agent) {
/*  52 */       this.agent = agent;
/*     */     }
/*     */     public List<AgentChatHistoryResponsePojo.User> getUser() {
/*  55 */       return this.user;
/*     */     }
/*     */     public void setUser(List<AgentChatHistoryResponsePojo.User> user) {
/*  58 */       this.user = user;
/*     */     }
/*     */   }
/*     */ 
/*     */   public static class User
/*     */   {
/*     */     private String msg;
/*     */     private String time;
/*     */ 
/*     */     public String getMsg()
/*     */     {
/*  92 */       return this.msg;
/*     */     }
/*     */     public void setMsg(String msg) {
/*  95 */       this.msg = msg;
/*     */     }
/*     */     public String getTime() {
/*  98 */       return this.time;
/*     */     }
/*     */     public void setTime(String time) {
/* 101 */       this.time = time;
/*     */     }
/*     */   }
/*     */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.pojo.RequestPojo.AgentChatHistoryResponsePojo
 * JD-Core Version:    0.6.0
 */