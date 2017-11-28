/*     */ package in.spicedigital.crm.listener;
/*     */ 
/*     */ import in.spicedigital.crm.contants.GetConfigurationValues;
/*     */ import in.spicedigital.crm.contants.RestServiceURIConstants;
/*     */ import in.spicedigital.crm.pojo.RequestPojo.LogoutRequestPojo;
/*     */ import in.spicedigital.crm.pojo.ResponsePojo.LoginResPojo;
/*     */ import in.spicedigital.crm.pojo.ResponsePojo.LoginResPojo.Pd;
/*     */ import in.spicedigital.crm.pojo.ResponsePojo.LogoutResponsePojo;
/*     */ import java.io.PrintStream;
/*     */ import java.util.Iterator;
/*     */ import java.util.Map;
/*     */ import java.util.Map.Entry;
/*     */ import java.util.Set;
/*     */ import java.util.concurrent.ConcurrentHashMap;
/*     */ import javax.servlet.http.HttpSession;
/*     */ import javax.servlet.http.HttpSessionAttributeListener;
/*     */ import javax.servlet.http.HttpSessionBindingEvent;
/*     */ import javax.servlet.http.HttpSessionEvent;
/*     */ import javax.servlet.http.HttpSessionListener;
/*     */ import org.slf4j.Logger;
/*     */ import org.slf4j.LoggerFactory;
/*     */ import org.springframework.http.HttpEntity;
/*     */ import org.springframework.http.HttpHeaders;
/*     */ import org.springframework.http.MediaType;
/*     */ import org.springframework.http.ResponseEntity;
/*     */ import org.springframework.web.client.RestTemplate;
/*     */ 
/*     */ public class SessionListener
/*     */   implements HttpSessionAttributeListener, HttpSessionListener
/*     */ {
/*  33 */   public static Map<String, HttpSession> hashMap = new ConcurrentHashMap();
/*  34 */   public static Map<String, HttpSession> adminHashMap = new ConcurrentHashMap();
/*  35 */   private static final Logger logger = LoggerFactory.getLogger(SessionListener.class);
/*     */ 
/*     */   public static void invaliDateAgent(String agentId)
/*     */   {
/*     */     try
/*     */     {
/*  43 */       if (adminHashMap.containsKey(agentId))
/*     */       {
/*  46 */         HttpSession session = (HttpSession)adminHashMap.get(agentId);
/*  47 */         adminHashMap.remove(agentId);
/*  48 */         session.removeAttribute("user");
/*  49 */         session.invalidate();
/*  50 */         logger.info("admin session in vallidate");
/*     */       }
/*  53 */       else if (hashMap.containsKey(agentId))
/*     */       {
/*  55 */         HttpSession session = (HttpSession)hashMap.get(agentId);
/*  56 */         hashMap.remove(agentId);
/*  57 */         session.removeAttribute("user");
/*  58 */         session.invalidate();
/*  59 */         logger.info("agent session in vallidate");
/*     */       }
/*     */     }
/*     */     catch (Exception ex)
/*     */     {
/*  64 */       logger.info("error in invalidate session created");
/*  65 */       ex.printStackTrace();
/*     */     }
/*     */   }
/*     */ 
/*     */   public static void invaliDateAllAgent()
/*     */   {
/*  72 */     if (hashMap.entrySet() != null)
/*     */     {
/*  75 */       Iterator it = hashMap.entrySet().iterator();
/*  76 */       while (it.hasNext())
/*     */       {
/*     */         try
/*     */         {
/*  80 */           Map.Entry entryMap = (Map.Entry)it.next();
/*  81 */           HttpSession session = (HttpSession)entryMap.getValue();
/*  82 */           session.removeAttribute("user");
/*  83 */           session.invalidate();
/*     */         }
/*     */         catch (Exception ex)
/*     */         {
/*  87 */           logger.info("error in invalidate session created");
/*  88 */           ex.printStackTrace();
/*     */         }
/*     */       }
/*     */ 
/*  92 */       hashMap.clear();
/*     */     }
/*     */   }
/*     */ 
/*     */   public void attributeAdded(HttpSessionBindingEvent arg0)
/*     */   {
/* 101 */     LoginResPojo loginResPojo = (LoginResPojo)arg0.getSession().getAttribute("user");
/* 102 */     logger.info("in update session created  {}" + loginResPojo);
/*     */     try
/*     */     {
/* 106 */       if (loginResPojo != null)
/*     */       {
/* 108 */         if ("admin".equalsIgnoreCase(loginResPojo.getPd().getUserType()))
/*     */         {
/* 110 */           logger.info("admin session added created  {}" + loginResPojo.getPd().getCceid());
/* 111 */           adminHashMap.put(loginResPojo.getPd().getCceid(), arg0.getSession());
/*     */         }
/*     */         else
/*     */         {
/* 115 */           logger.info("session created  {}" + loginResPojo.getPd().getCceid());
/* 116 */           hashMap.put(loginResPojo.getPd().getCceid(), arg0.getSession());
/*     */         }
/*     */ 
/*     */       }
/*     */ 
/*     */     }
/*     */     catch (Exception ex)
/*     */     {
/* 124 */       ex.printStackTrace();
/*     */     }
/*     */   }
/*     */ 
/*     */   public void attributeRemoved(HttpSessionBindingEvent arg0)
/*     */   {
/*     */   }
/*     */ 
/*     */   public void attributeReplaced(HttpSessionBindingEvent arg0)
/*     */   {
/* 136 */     LoginResPojo loginResPojo = (LoginResPojo)arg0.getSession().getAttribute("user");
/* 137 */     logger.info("in session created  {}" + loginResPojo);
/*     */     try
/*     */     {
/* 141 */       if (loginResPojo != null)
/*     */       {
/* 143 */         if ("admin".equalsIgnoreCase(loginResPojo.getPd().getUserType()))
/*     */         {
/* 145 */           logger.info("admin session added created  {}" + loginResPojo.getPd().getCceid());
/* 146 */           adminHashMap.put(loginResPojo.getPd().getCceid(), arg0.getSession());
/*     */         }
/*     */         else
/*     */         {
/* 150 */           logger.info("session created  {}" + loginResPojo.getPd().getCceid());
/* 151 */           hashMap.put(loginResPojo.getPd().getCceid(), arg0.getSession());
/*     */         }
/*     */ 
/*     */       }
/*     */ 
/*     */     }
/*     */     catch (Exception ex)
/*     */     {
/* 159 */       ex.printStackTrace();
/*     */     }
/*     */   }
/*     */ 
/*     */   public void sessionCreated(HttpSessionEvent arg0)
/*     */   {
/*     */   }
/*     */ 
/*     */   private void claerMap(String agentId)
/*     */   {
/* 171 */     if (hashMap.containsKey(agentId))
/*     */     {
/* 173 */       hashMap.remove(agentId);
/*     */     }
/* 177 */     else if (adminHashMap.containsKey(agentId))
/*     */     {
/* 179 */       adminHashMap.remove(agentId);
/*     */     }
/*     */   }
/*     */ 
/*     */   public void sessionDestroyed(HttpSessionEvent arg0)
/*     */   {
/*     */     try
/*     */     {
/* 189 */       LoginResPojo loginResPojo = (LoginResPojo)arg0.getSession().getAttribute("user");
/* 190 */       if (loginResPojo != null)
/*     */       {
/* 192 */         claerMap(loginResPojo.getPd().getCceid());
/* 193 */         logger.info("user session has expierd {}" + loginResPojo.getPd().getCceid());
/* 194 */         LogoutRequestPojo objLogoutRequestPojo = new LogoutRequestPojo();
/* 195 */         objLogoutRequestPojo.setCategory(loginResPojo.getPd().getCategory());
/* 196 */         objLogoutRequestPojo.setCceid(loginResPojo.getPd().getCceid());
/* 197 */         objLogoutRequestPojo.setChannel(loginResPojo.getPd().getChannel());
/* 198 */         objLogoutRequestPojo.setLanguage(loginResPojo.getPd().getLanguage());
/* 199 */         objLogoutRequestPojo.setRequestID(System.currentTimeMillis()+"");
/* 200 */         objLogoutRequestPojo.setTerminalID(loginResPojo.getPd().getTerminalID());
/* 201 */         objLogoutRequestPojo.setType("idle_logout");
/* 202 */         objLogoutRequestPojo.setIp("0,0,0,0");
/* 203 */         //System.out.println("in new logout controller");
/* 204 */         //System.out.println("new objLogoutRequestPojo" + objLogoutRequestPojo.toString());
/*     */ 
/* 206 */         RestTemplate rest = new RestTemplate();
/* 207 */         HttpHeaders headers = new HttpHeaders();
/* 208 */         headers.setContentType(MediaType.APPLICATION_JSON);
/* 209 */         headers.set("Authorization", GetConfigurationValues.BearerValue);
/* 210 */         HttpEntity entity = new HttpEntity(
/* 211 */           objLogoutRequestPojo, headers);
/* 212 */         logger.info("seesion expire new Logout request {} " + objLogoutRequestPojo.toString());
/* 213 */         ResponseEntity response = rest.postForEntity(RestServiceURIConstants.REST_COMMON_LOGOUT, entity, 
/* 214 */           LogoutResponsePojo.class, new Object[0]);
/* 215 */         logger.info("seesion expire new Logout response {} " + response);
/*     */       }
/*     */ 
/*     */     }
/*     */     catch (Exception ex)
/*     */     {
/* 222 */       ex.printStackTrace();
/*     */     }
/*     */   }
/*     */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.listener.SessionListener
 * JD-Core Version:    0.6.0
 */