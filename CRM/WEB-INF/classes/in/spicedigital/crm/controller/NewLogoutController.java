/*     */ package in.spicedigital.crm.controller;
/*     */ 
/*     */ import in.spicedigital.crm.contants.GetConfigurationValues;
/*     */ import in.spicedigital.crm.contants.RestServiceURIConstants;
/*     */ import in.spicedigital.crm.listener.SessionListener;
/*     */ import in.spicedigital.crm.pojo.RequestPojo.LogoutRequestPojo;
/*     */ import in.spicedigital.crm.pojo.ResponsePojo.LoginResPojo;
/*     */ import in.spicedigital.crm.pojo.ResponsePojo.LoginResPojo.Pd;
/*     */ import in.spicedigital.crm.pojo.ResponsePojo.LogoutResponsePojo;
/*     */ import in.spicedigital.crm.pojo.ResponsePojo.LogoutResponsePojo;
/*     */ import java.io.IOException;
/*     */ import java.io.PrintStream;
/*     */ import javax.servlet.http.HttpServletRequest;
/*     */ import javax.servlet.http.HttpSession;
/*     */ import org.slf4j.Logger;
/*     */ import org.slf4j.LoggerFactory;
/*     */ import org.springframework.http.HttpEntity;
/*     */ import org.springframework.http.HttpHeaders;
/*     */ import org.springframework.http.HttpStatus;
/*     */ import org.springframework.http.MediaType;
/*     */ import org.springframework.http.ResponseEntity;
/*     */ import org.springframework.stereotype.Controller;
/*     */ import org.springframework.web.bind.annotation.RequestMapping;
/*     */ import org.springframework.web.bind.annotation.ResponseBody;
/*     */ import org.springframework.web.client.RestTemplate;
/*     */ 
/*     */ @Controller
/*     */ public class NewLogoutController
/*     */ {
/*  34 */   private final Logger logger = LoggerFactory.getLogger(getClass());
/*     */ 
/*  38 */   @RequestMapping(value={"/newLogout"}, method={org.springframework.web.bind.annotation.RequestMethod.GET}, produces={"application/json"})
/*     */   @ResponseBody
/*     */   public ResponseEntity<LogoutResponsePojo> getLogIn(HttpServletRequest request, HttpSession session) throws IOException { String userIpAddress = request.getRemoteAddr();
/*  39 */     LogoutResponsePojo objLogoutResponsePojo = new LogoutResponsePojo();
/*     */ 
/*  41 */     LoginResPojo loginResPojo = (LoginResPojo)session.getAttribute("user");
/*  42 */     if (loginResPojo != null)
/*     */     {
/*  44 */       LogoutRequestPojo objLogoutRequestPojo = new LogoutRequestPojo();
/*  45 */       objLogoutRequestPojo.setCategory(loginResPojo.getPd().getCategory());
/*  46 */       objLogoutRequestPojo.setCceid(loginResPojo.getPd().getCceid());
/*  47 */       objLogoutRequestPojo.setChannel(loginResPojo.getPd().getChannel());
/*  48 */       objLogoutRequestPojo.setLanguage(loginResPojo.getPd().getLanguage());
/*  49 */       objLogoutRequestPojo.setRequestID(System.currentTimeMillis()+"");
/*  50 */       objLogoutRequestPojo.setTerminalID(loginResPojo.getPd().getTerminalID());
/*  51 */       objLogoutRequestPojo.setType("user_logout");
/*  52 */       objLogoutRequestPojo.setIp(userIpAddress);
/*  53 */       //System.out.println("in new logout controller");
/*  54 */       //System.out.println("new objLogoutRequestPojo" + objLogoutRequestPojo.toString());
/*     */ 
/*  56 */       RestTemplate rest = new RestTemplate();
/*  57 */       HttpHeaders headers = new HttpHeaders();
/*  58 */       headers.setContentType(MediaType.APPLICATION_JSON);
/*  59 */       headers.set("Authorization", GetConfigurationValues.BearerValue);
/*  60 */       HttpEntity entity = new HttpEntity(
/*  61 */         objLogoutRequestPojo, headers);
/*  62 */       this.logger.info("new Logout request {} " + objLogoutRequestPojo.toString());
/*  63 */       ResponseEntity response = rest.postForEntity(RestServiceURIConstants.REST_COMMON_LOGOUT, entity, 
/*  64 */         LogoutResponsePojo.class, new Object[0]);
/*  65 */       LogoutResponsePojo.Pd objPd = new LogoutResponsePojo.Pd();
/*  66 */       this.logger.info("new LOGOUT REQUEST FOUND::: {} " + objLogoutRequestPojo.toString());
/*     */       try
/*     */       {
/*  69 */         objLogoutResponsePojo.setRc(((LogoutResponsePojo)response.getBody()).getRc());
/*  70 */         objLogoutResponsePojo.setRd(((LogoutResponsePojo)response.getBody()).getRd());
/*  71 */         objLogoutResponsePojo.setRs(((LogoutResponsePojo)response.getBody()).getRs());
/*  72 */         //System.out.println("response.getBody().getRs()" + ((LogoutResponsePojo)response.getBody()).getRs());
/*  73 */         if ("S".equalsIgnoreCase(((LogoutResponsePojo)response.getBody()).getRs()))
/*     */         {
/*  75 */           objPd.setCategory(((LogoutResponsePojo)response.getBody()).getPd().getCategory());
/*  76 */           objPd.setCceid(((LogoutResponsePojo)response.getBody()).getPd().getCceid());
/*  77 */           objPd.setLanguage(((LogoutResponsePojo)response.getBody()).getPd().getLanguage());
/*  78 */           objPd.setRequestID(((LogoutResponsePojo)response.getBody()).getPd().getRequestID());
/*  79 */           objPd.setChannel(((LogoutResponsePojo)response.getBody()).getPd().getChannel());
/*  80 */           objPd.setTerminalID(((LogoutResponsePojo)response.getBody()).getPd().getTerminalID());
/*  81 */           if ((objLogoutRequestPojo.getCceid() != null) && (!objLogoutRequestPojo.equals("")))
/*     */           {
/*  83 */             if ("all".equalsIgnoreCase(objLogoutRequestPojo.getType()))
/*     */             {
/*  85 */               SessionListener.invaliDateAllAgent();
/*     */             }
/*     */             else
/*     */             {
/*  89 */               SessionListener.invaliDateAgent(objLogoutRequestPojo.getCceid());
/*     */             }
/*     */           }
/*     */           else
/*     */           {
/*  94 */             this.logger.info("unable to invalidate session");
/*     */           }
/*     */ 
/*     */         }
/*     */ 
/*  99 */         //System.out.println("agent logged out");
/* 100 */         objLogoutResponsePojo.setPd(objPd);
/* 101 */         this.logger.info("Logout response {} " + response);
/*     */       }
/*     */       catch (Exception e)
/*     */       {
/* 105 */         //System.out.print(e);
/*     */       }
/* 107 */       return new ResponseEntity(objLogoutResponsePojo, 
/* 108 */         new HttpHeaders(), HttpStatus.OK);
/*     */     }
/*     */ 
/* 112 */     objLogoutResponsePojo.setRs("S");
/* 113 */     objLogoutResponsePojo.setRd("User alerady log out");
/* 114 */     return new ResponseEntity(objLogoutResponsePojo, 
/* 115 */       new HttpHeaders(), HttpStatus.OK);
/*     */   }
/*     */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.controller.NewLogoutController
 * JD-Core Version:    0.6.0
 */