/*    */ package in.spicedigital.crm.controller;
/*    */ 
/*    */ import in.spicedigital.crm.contants.GetConfigurationValues;
/*    */ import in.spicedigital.crm.contants.RestServiceURIConstants;
/*    */ import in.spicedigital.crm.pojo.RequestPojo.SendSmsRequestPojo;
/*    */ import in.spicedigital.scommerce.utility.parser.json.unmarshaller.JsonUnmarshaller;
/*    */ import in.spicedigital.scommerce.utility.parser.pojo.UnmarshalledPojoData;
/*    */ import java.io.PrintStream;
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
/*    */ public class SendSmsController
/*    */ {
/* 30 */   private final Logger logger = LoggerFactory.getLogger(getClass());
/*    */ 
/* 33 */   @RequestMapping(value={"/sendSms"}, method={org.springframework.web.bind.annotation.RequestMethod.POST}, consumes={"application/json"}, produces={"application/json"})
/*    */   @ResponseBody
/*    */   public String getLogIn(@RequestBody String requestBody) { String responseString = null;
/* 34 */     ResponseEntity response = null;
/*    */     try {
/* 36 */       //System.out.println("REQUEST ::: " + requestBody);
/* 37 */       UnmarshalledPojoData objUnmarshalledPojoData = new JsonUnmarshaller().unmarshal(new SendSmsRequestPojo().getClass(), requestBody);
/* 38 */       SendSmsRequestPojo objSendSmsRequestPojo = (SendSmsRequestPojo)objUnmarshalledPojoData.getObject();
/* 39 */       //System.out.println("Send SMS controller");
/* 40 */       RestTemplate rest = new RestTemplate();
/* 41 */       HttpHeaders headers = new HttpHeaders();
/* 42 */       headers.setContentType(MediaType.APPLICATION_JSON);
/* 43 */       headers.set("Authorization", GetConfigurationValues.BearerValue);
/* 44 */       HttpEntity entity = new HttpEntity(
/* 45 */         objSendSmsRequestPojo, headers);
/* 46 */       this.logger.info("Send SMS request {}", objSendSmsRequestPojo.toString());
/* 47 */       response = rest.postForEntity(RestServiceURIConstants.REST_COMMON_SEND_SMS, entity, 
/* 48 */         String.class, new Object[0]);
/* 49 */       responseString = (String)response.getBody();
/* 50 */       //System.out.println("send sms response" + (String)response.getBody());
/*    */     }
/*    */     catch (Exception e) {
/* 53 */       this.logger.error("Send SMS error {}", e.getMessage());
/* 54 */       e.printStackTrace();
/* 55 */       responseString = "{\"rs\":\"F\",\"rc\":\"FC0001\",\"rd\":\"Sorry! Something went wrong\"}";
/*    */     }
/* 57 */     //System.out.println();
/* 58 */     this.logger.info("Send SMS response {}", response);
/* 59 */     return responseString;
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.controller.SendSmsController
 * JD-Core Version:    0.6.0
 */