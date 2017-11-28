/*    */ package in.spicedigital.crm.controller;
/*    */ 
/*    */ import in.spicedigital.crm.contants.GetConfigurationValues;
/*    */ import in.spicedigital.crm.contants.RestServiceURIConstants;
/*    */ import in.spicedigital.crm.pojo.RequestPojo.FetchEmailCcePerformanceRequestPojo;
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
/*    */ public class FetchEmailCcePerformanceController
/*    */ {
/* 30 */   private final Logger logger = LoggerFactory.getLogger(getClass());
/*    */ 
/* 33 */   @RequestMapping(value={"/fetchEmailCcePerformance"}, method={org.springframework.web.bind.annotation.RequestMethod.POST}, consumes={"application/json"}, produces={"application/json"})
/*    */   @ResponseBody
/*    */   public String getFetchServices(@RequestBody String requestBody) { ResponseEntity response = null;
/* 34 */     String responseString = null;
/* 35 */     //System.out.println("REQUEST ::: =" + requestBody);
/*    */     try {
/* 37 */       UnmarshalledPojoData objUnmarshalledPojoData = new JsonUnmarshaller().unmarshal(new FetchEmailCcePerformanceRequestPojo().getClass(), requestBody);
/* 38 */       FetchEmailCcePerformanceRequestPojo objFetchEmailCcePerformanceRequestPojo = (FetchEmailCcePerformanceRequestPojo)objUnmarshalledPojoData.getObject();
/* 39 */       //System.out.println("in FetchEmailCcePerformanceController ");
/* 40 */       RestTemplate rest = new RestTemplate();
/* 41 */       HttpHeaders headers = new HttpHeaders();
/* 42 */       headers.setContentType(MediaType.APPLICATION_JSON);
/* 43 */       headers.set("Authorization", GetConfigurationValues.BearerValue);
/* 44 */       //System.out.println("RestServiceURIConstants.REST_COMMON_EMAIL_CCE_PERFORMANCE" + RestServiceURIConstants.REST_COMMON_EMAIL_CCE_PERFORMANCE);
/* 45 */       HttpEntity entity = new HttpEntity(objFetchEmailCcePerformanceRequestPojo, headers);
/* 46 */       this.logger.info("Email cce performance request {}", objFetchEmailCcePerformanceRequestPojo.toString());
/* 47 */       response = rest.postForEntity(RestServiceURIConstants.REST_COMMON_EMAIL_CCE_PERFORMANCE, entity, 
/* 48 */         String.class, new Object[0]);
/* 49 */       responseString = (String)response.getBody();
/* 50 */       //System.out.println("*************" + (String)response.getBody());
/*    */     } catch (Exception e) {
/* 52 */       this.logger.info("Email cce performance error" + e.getMessage());
/* 53 */       e.printStackTrace();
/* 54 */       responseString = "{\"rs\":\"F\",\"rc\":\"FC0001\",\"rd\":\"Sorry! Something went wrong\"}";
/*    */     }
/* 56 */     this.logger.info("Email cce performance response {}" + response);
/* 57 */     return responseString;
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.controller.FetchEmailCcePerformanceController
 * JD-Core Version:    0.6.0
 */