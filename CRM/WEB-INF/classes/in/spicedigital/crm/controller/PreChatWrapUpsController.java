/*    */ package in.spicedigital.crm.controller;
/*    */ 
/*    */ import in.spicedigital.crm.contants.GetConfigurationValues;
/*    */ import in.spicedigital.crm.contants.RestServiceURIConstants;
/*    */ import in.spicedigital.crm.pojo.RequestPojo.PreChatWrapUpsRequestPojo;
/*    */ import in.spicedigital.scommerce.utility.parser.json.unmarshaller.JsonUnmarshaller;
/*    */ import in.spicedigital.scommerce.utility.parser.pojo.UnmarshalledPojoData;
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
/*    */ public class PreChatWrapUpsController
/*    */ {
/* 32 */   private final Logger logger = LoggerFactory.getLogger(getClass());
/*    */ 
/* 37 */   @RequestMapping(value={"/preChatWrapUps"}, method={org.springframework.web.bind.annotation.RequestMethod.POST}, consumes={"application/json"}, produces={"application/json"})
/*    */   @ResponseBody
/*    */   public String getLogIn(@RequestBody String requestBody, HttpServletRequest request) { String userIpAddress = request.getRemoteAddr();
/* 38 */     //System.out.println("userIpAddress" + userIpAddress);
/* 39 */     String responseString = null;
/* 40 */     ResponseEntity response = null;
/* 41 */     //System.out.println("previous wrapups request ::: " + requestBody);
/*    */     try {
/* 43 */       UnmarshalledPojoData objUnmarshalledPojoData = new JsonUnmarshaller().unmarshal(new PreChatWrapUpsRequestPojo().getClass(), requestBody);
/* 44 */       PreChatWrapUpsRequestPojo objPreChatWrapUpsRequestPojo = (PreChatWrapUpsRequestPojo)objUnmarshalledPojoData.getObject();
/* 45 */       //System.out.println("in previous wrapup controller");
/* 46 */       //System.out.println("previous wrapup REQUEST ::: " + requestBody);
/* 47 */       RestTemplate rest = new RestTemplate();
/* 48 */       HttpHeaders headers = new HttpHeaders();
/* 49 */       headers.setContentType(MediaType.APPLICATION_JSON);
/* 50 */       headers.set("Authorization", GetConfigurationValues.BearerValue);
/* 51 */       HttpEntity entity = new HttpEntity(objPreChatWrapUpsRequestPojo, headers);
/* 52 */       //System.out.println("objPreChatWrapUpsRequestPojo=" + objPreChatWrapUpsRequestPojo);
/* 53 */       //System.out.println("RestServiceURIConstants.REST_COMMON_PRE_CHAT_WRAPUP," + RestServiceURIConstants.REST_COMMON_PRE_CHAT_WRAPUP);
/* 54 */       this.logger.info("Previous chat wrapups request {}", objPreChatWrapUpsRequestPojo.toString());
/* 55 */       response = rest.postForEntity(RestServiceURIConstants.REST_COMMON_PRE_CHAT_WRAPUP, entity, 
/* 56 */         String.class, new Object[0]);
/* 57 */       responseString = (String)response.getBody();
/*    */     }
/*    */     catch (Exception e) {
/* 60 */       this.logger.info("Previous chat wrapups error {}", e.getMessage());
/* 61 */       e.printStackTrace();
/* 62 */       responseString = "{\"rs\":\"F\",\"rc\":\"FC0001\",\"rd\":\"Sorry! Something went wrong\"}";
/*    */     }
/* 64 */     this.logger.info("Previous chat wrapups response {}", response);
/* 65 */     return responseString;
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.controller.PreChatWrapUpsController
 * JD-Core Version:    0.6.0
 */