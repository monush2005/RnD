/*    */ package in.spicedigital.crm.controller;
/*    */ 
/*    */ import in.spicedigital.crm.contants.GetConfigurationValues;
/*    */ import in.spicedigital.crm.contants.RestServiceURIConstants;
/*    */ import in.spicedigital.crm.pojo.RequestPojo.EmailHistoryRequestPojo;
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
/*    */ public class EmailHistoryController
/*    */ {
/* 31 */   private final Logger logger = LoggerFactory.getLogger(getClass());
/*    */ 
/* 35 */   @RequestMapping(value={"/emailHis"}, method={org.springframework.web.bind.annotation.RequestMethod.POST}, consumes={"application/json"}, produces={"application/json"})
/*    */   @ResponseBody
/*    */   public String getFetchServices(@RequestBody String requestBody) { ResponseEntity response = null;
/* 36 */     String responseString = null;
/* 37 */     //System.out.println("REQUEST ::: " + requestBody);
/*    */     try {
/* 39 */       UnmarshalledPojoData objUnmarshalledPojoData = new JsonUnmarshaller().unmarshal(new EmailHistoryRequestPojo().getClass(), requestBody);
/* 40 */       EmailHistoryRequestPojo objEmailHistoryRequestPojo = (EmailHistoryRequestPojo)objUnmarshalledPojoData.getObject();
/* 41 */       //System.out.println("Email history controller");
/* 42 */       RestTemplate rest = new RestTemplate();
/* 43 */       HttpHeaders headers = new HttpHeaders();
/* 44 */       headers.setContentType(MediaType.APPLICATION_JSON);
/* 45 */       headers.set("Authorization", GetConfigurationValues.BearerValue);
/* 46 */       //System.out.println("RestServiceURIConstants.REST_COMMON_FETCH_SERVICES" + RestServiceURIConstants.REST_COMMON_EMAIL_HISTORY);
/* 47 */       HttpEntity entity = new HttpEntity(
/* 48 */         objEmailHistoryRequestPojo, headers);
/* 49 */       this.logger.info("Email history  request {}", objEmailHistoryRequestPojo.toString());
/* 50 */       response = rest.postForEntity(RestServiceURIConstants.REST_COMMON_EMAIL_HISTORY, entity, 
/* 51 */         String.class, new Object[0]);
/* 52 */       responseString = (String)response.getBody();
/* 53 */       //System.out.println("*************" + (String)response.getBody());
/*    */     } catch (Exception e) {
/* 55 */       this.logger.info("EMail History error" + e.getMessage());
/* 56 */       e.printStackTrace();
/* 57 */       responseString = "{\"rs\":\"F\",\"rc\":\"FC0001\",\"rd\":\"Sorry! Something went wrong\"}";
/*    */     }
/* 59 */     this.logger.info("Email history response {}", response);
/* 60 */     return responseString;
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.controller.EmailHistoryController
 * JD-Core Version:    0.6.0
 */