/*    */ package in.spicedigital.crm.controller;
/*    */ 
/*    */ import in.spicedigital.crm.contants.RestServiceURIConstants;
/*    */ import in.spicedigital.crm.pojo.RequestPojo.EmailHandlerIntegrationReqPojo;
/*    */ import in.spicedigital.crm.pojo.RequestPojo.EmailHandlerIntegrationReqPojo.Body;
/*    */ import java.io.PrintStream;
/*    */ import javax.servlet.http.HttpServletRequest;
/*    */ import org.slf4j.Logger;
/*    */ import org.slf4j.LoggerFactory;
/*    */ import org.springframework.http.HttpEntity;
/*    */ import org.springframework.http.HttpHeaders;
/*    */ import org.springframework.http.MediaType;
/*    */ import org.springframework.http.ResponseEntity;
/*    */ import org.springframework.stereotype.Controller;
/*    */ import org.springframework.web.bind.annotation.RequestBody;
/*    */ import org.springframework.web.bind.annotation.RequestMapping;
/*    */ import org.springframework.web.bind.annotation.ResponseBody;
/*    */ import org.springframework.web.client.RestTemplate;
/*    */ 
/*    */ @Controller
/*    */ public class EmailHandlerIntegrationController
/*    */ {
/* 31 */   private final Logger logger = LoggerFactory.getLogger(getClass());
/*    */ 
/* 34 */   @RequestMapping(value={"/emailHandling"}, method={org.springframework.web.bind.annotation.RequestMethod.POST}, consumes={"application/json"}, produces={"application/json"})
/*    */   @ResponseBody
/*    */   public String getLogIn(@RequestBody EmailHandlerIntegrationReqPojo requestBody, HttpServletRequest request) { String userIpAddress = request.getRemoteAddr();
/* 35 */     //System.out.println("userIpAddress" + userIpAddress);
/* 36 */     String responseString = null;
/* 37 */     ResponseEntity response = null;
/* 38 */     //System.out.println("Email handler ::: " + requestBody);
/*    */     try {
/* 40 */       EmailHandlerIntegrationReqPojo objEmailHandlerIntegrationReqPojo = new EmailHandlerIntegrationReqPojo();
/* 41 */       objEmailHandlerIntegrationReqPojo.setTo(requestBody.getTo());
/* 42 */       objEmailHandlerIntegrationReqPojo.setCc(requestBody.getCc());
/* 43 */       objEmailHandlerIntegrationReqPojo.setBcc(requestBody.getBcc());
/* 44 */       objEmailHandlerIntegrationReqPojo.setSenderid(requestBody.getSenderid());
/* 45 */       objEmailHandlerIntegrationReqPojo.setSubject(requestBody.getSubject());
/* 46 */       objEmailHandlerIntegrationReqPojo.setLang(requestBody.getLang());
/* 47 */       objEmailHandlerIntegrationReqPojo.setTag(requestBody.getTag());
/* 48 */       objEmailHandlerIntegrationReqPojo.setTag(requestBody.getTag());
/* 49 */       objEmailHandlerIntegrationReqPojo.setVmtype(requestBody.getVmtype());
/* 50 */       objEmailHandlerIntegrationReqPojo.setVmname(requestBody.getVmname());
/* 51 */       objEmailHandlerIntegrationReqPojo.setAppname(requestBody.getAppname());
/* 52 */       objEmailHandlerIntegrationReqPojo.setTrkr(requestBody.getTrkr());
/* 53 */       EmailHandlerIntegrationReqPojo.Body objBody = new EmailHandlerIntegrationReqPojo.Body();
/* 54 */       objBody.setUname(requestBody.getBody().getUname());
/* 55 */       objBody.setAgentMno(requestBody.getBody().getAgentMno());
/* 56 */       objBody.setAgentId(requestBody.getBody().getAgentId());
/* 57 */       objBody.setAgentName(requestBody.getBody().getAgentName());
/* 58 */       objBody.setPasswd(requestBody.getBody().getPasswd());
/* 59 */       //System.out.println("Email Parameters ::: " + requestBody);
/* 60 */       objEmailHandlerIntegrationReqPojo.setBody(objBody);
/* 61 */       RestTemplate rest = new RestTemplate();
/* 62 */       HttpHeaders headers = new HttpHeaders();
/* 63 */       headers.setContentType(MediaType.APPLICATION_JSON);
/* 64 */       HttpEntity entity = new HttpEntity(
/* 65 */         objEmailHandlerIntegrationReqPojo, headers);
/* 66 */       //System.out.println("objEmailHandlerIntegrationReqPojo=" + objEmailHandlerIntegrationReqPojo);
/* 67 */       //System.out.println("RestServiceURIConstants.REST_COMMON_EMAIL_HANDLER," + RestServiceURIConstants.REST_COMMON_EMAIL_HANDLER);
/* 68 */       this.logger.info("Email handler request {}", objEmailHandlerIntegrationReqPojo.toString());
/* 69 */       response = rest.postForEntity(RestServiceURIConstants.REST_COMMON_EMAIL_HANDLER, entity, 
/* 70 */         String.class, new Object[0]);
/* 71 */       responseString = (String)response.getBody();
/*    */     }
/*    */     catch (Exception e) {
/* 74 */       this.logger.info("Email handler error" + e.getMessage());
/* 75 */       e.printStackTrace();
/* 76 */       responseString = "{\"rs\":\"F\",\"rc\":\"FC0001\",\"rd\":\"Sorry! Something went wrong\"}";
/*    */     }
/*    */ 
/* 79 */     this.logger.info("Email handler response {}", response);
/* 80 */     return responseString;
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.controller.EmailHandlerIntegrationController
 * JD-Core Version:    0.6.0
 */