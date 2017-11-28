/*     */ package in.spicedigital.crm.controller;
/*     */ 
/*     */ import in.spicedigital.crm.contants.GetConfigurationValues;
/*     */ import in.spicedigital.crm.contants.RestServiceURIConstants;
/*     */ import in.spicedigital.crm.listener.SessionListener;
/*     */ import in.spicedigital.crm.pojo.RequestPojo.LogoutRequestPojo;
/*     */ import in.spicedigital.crm.pojo.ResponsePojo.LogoutResponsePojo;
/*     */ import in.spicedigital.crm.pojo.ResponsePojo.LogoutResponsePojo.Pd;
/*     */ import in.spicedigital.scommerce.utility.parser.json.unmarshaller.JsonUnmarshaller;
/*     */ import in.spicedigital.scommerce.utility.parser.pojo.UnmarshalledPojoData;
/*     */ import java.io.IOException;
/*     */ import java.io.PrintStream;
/*     */ import javax.servlet.http.HttpServletRequest;
/*     */ import org.slf4j.Logger;
/*     */ import org.slf4j.LoggerFactory;
/*     */ import org.springframework.http.HttpEntity;
/*     */ import org.springframework.http.HttpHeaders;
/*     */ import org.springframework.http.HttpStatus;
/*     */ import org.springframework.http.MediaType;
/*     */ import org.springframework.http.ResponseEntity;
/*     */ import org.springframework.stereotype.Controller;
/*     */ import org.springframework.web.bind.annotation.RequestBody;
/*     */ import org.springframework.web.bind.annotation.RequestMapping;
/*     */ import org.springframework.web.bind.annotation.ResponseBody;
/*     */ import org.springframework.web.client.RestTemplate;
/*     */ 
/*     */ @Controller
/*     */ public class LogoutController
/*     */ {
/*  32 */   private final Logger logger = LoggerFactory.getLogger(getClass());
/*     */ 
/*  36 */   @RequestMapping(value={"/logout"}, method={org.springframework.web.bind.annotation.RequestMethod.POST}, consumes={"application/json"}, produces={"application/json"})
/*     */   @ResponseBody
/*     */   public ResponseEntity<LogoutResponsePojo> getLogIn(@RequestBody String requestBody, HttpServletRequest request) throws IOException { //System.out.println("REQUEST ::: " + requestBody);
/*  37 */     String userIpAddress = request.getRemoteAddr();
/*  38 */     if (userIpAddress == null)
/*     */     {
/*  40 */       userIpAddress = "0.0.0.0";
/*     */     }
/*  42 */     UnmarshalledPojoData objUnmarshalledPojoData = new JsonUnmarshaller().unmarshal(new LogoutRequestPojo().getClass(), requestBody);
/*  43 */     LogoutRequestPojo objLogoutRequestPojo = (LogoutRequestPojo)objUnmarshalledPojoData.getObject();
/*  44 */     objLogoutRequestPojo.setIp(userIpAddress);
/*  45 */     objLogoutRequestPojo.setRequestID(System.currentTimeMillis()+"");
/*  46 */     //System.out.println("in logout controller");
/*  47 */     //System.out.println("objLogoutRequestPojo" + objLogoutRequestPojo.toString());
/*  48 */     LogoutResponsePojo objLogoutResponsePojo = new LogoutResponsePojo();
/*  49 */     RestTemplate rest = new RestTemplate();
/*  50 */     HttpHeaders headers = new HttpHeaders();
/*  51 */     headers.setContentType(MediaType.APPLICATION_JSON);
/*  52 */     headers.set("Authorization", GetConfigurationValues.BearerValue);
/*  53 */     HttpEntity entity = new HttpEntity(
/*  54 */       objLogoutRequestPojo, headers);
/*  55 */     this.logger.info("Logout request {} " + objLogoutRequestPojo.toString());
/*  56 */     ResponseEntity response = rest.postForEntity(RestServiceURIConstants.REST_COMMON_LOGOUT, entity, 
/*  57 */       LogoutResponsePojo.class, new Object[0]);
/*  58 */     LogoutResponsePojo.Pd objPd = new LogoutResponsePojo.Pd();
/*  59 */     this.logger.info("LOGOUT REQUEST FOUND::: {} " + objLogoutRequestPojo.toString());
/*     */     try
/*     */     {
/*  62 */       objLogoutResponsePojo.setRc(((LogoutResponsePojo)response.getBody()).getRc());
/*  63 */       objLogoutResponsePojo.setRd(((LogoutResponsePojo)response.getBody()).getRd());
/*  64 */       objLogoutResponsePojo.setRs(((LogoutResponsePojo)response.getBody()).getRs());
/*  65 */       //System.out.println("response.getBody().getRs()" + ((LogoutResponsePojo)response.getBody()).getRs());
/*  66 */       if ("S".equalsIgnoreCase(((LogoutResponsePojo)response.getBody()).getRs()))
/*     */       {
/*  68 */         objPd.setCategory(((LogoutResponsePojo)response.getBody()).getPd().getCategory());
/*  69 */         objPd.setCceid(((LogoutResponsePojo)response.getBody()).getPd().getCceid());
/*  70 */         objPd.setLanguage(((LogoutResponsePojo)response.getBody()).getPd().getLanguage());
/*  71 */         objPd.setRequestID(((LogoutResponsePojo)response.getBody()).getPd().getRequestID());
/*  72 */         objPd.setChannel(((LogoutResponsePojo)response.getBody()).getPd().getChannel());
/*  73 */         objPd.setTerminalID(((LogoutResponsePojo)response.getBody()).getPd().getTerminalID());
/*  74 */         if ((objLogoutRequestPojo.getCceid() != null) && (!objLogoutRequestPojo.equals("")))
/*     */         {
/*  76 */           if ("all".equalsIgnoreCase(objLogoutRequestPojo.getType()))
/*     */           {
/*  78 */             SessionListener.invaliDateAllAgent();
/*     */           }
/*     */           else
/*     */           {
/*  82 */             SessionListener.invaliDateAgent(objLogoutRequestPojo.getCceid());
/*     */           }
/*     */         }
/*     */         else
/*     */         {
/*  87 */           this.logger.info("unable to invalidate session");
/*     */         }
/*     */ 
/*     */       }
/*     */ 
/*  92 */       //System.out.println("agent logged out");
/*  93 */       objLogoutResponsePojo.setPd(objPd);
/*  94 */       this.logger.info("Logout response {} " + response);
/*     */     }
/*     */     catch (Exception e)
/*     */     {
/*  98 */       //System.out.print(e);
/*     */     }
/* 100 */     return new ResponseEntity(objLogoutResponsePojo, 
/* 101 */       new HttpHeaders(), HttpStatus.OK);
/*     */   }
/*     */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.controller.LogoutController
 * JD-Core Version:    0.6.0
 */