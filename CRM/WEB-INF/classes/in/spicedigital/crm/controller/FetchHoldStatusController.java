/*    */ package in.spicedigital.crm.controller;
/*    */ 
/*    */ import in.spicedigital.crm.contants.GetConfigurationValues;
/*    */ import in.spicedigital.crm.contants.RestServiceURIConstants;
/*    */ import in.spicedigital.crm.pojo.RequestPojo.FetchHoldStatusRequestPojo;
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
/*    */ public class FetchHoldStatusController
/*    */ {
/* 25 */   private final Logger logger = LoggerFactory.getLogger(getClass());
/*    */ 
/* 29 */   @RequestMapping(value={"/fetchHoldStatus"}, method={org.springframework.web.bind.annotation.RequestMethod.POST}, consumes={"application/json"}, produces={"application/json"})
/*    */   @ResponseBody
/*    */   public String getFetchServices(@RequestBody String requestBody) { //System.out.println("Fetch Hold Status req REQUEST ::: " + requestBody);
/* 30 */     String responseString = null;
/* 31 */     ResponseEntity response = null;
/*    */     try {
/* 33 */       UnmarshalledPojoData objUnmarshalledPojoData = new JsonUnmarshaller().unmarshal(new FetchHoldStatusRequestPojo().getClass(), requestBody);
/* 34 */       FetchHoldStatusRequestPojo objFetchHoldStatusRequestPojo = (FetchHoldStatusRequestPojo)objUnmarshalledPojoData.getObject();
/* 35 */       //System.out.println("Fetch Hold status controller");
/* 36 */       RestTemplate rest = new RestTemplate();
/* 37 */       HttpHeaders headers = new HttpHeaders();
/* 38 */       headers.setContentType(MediaType.APPLICATION_JSON);
/* 39 */       headers.set("Authorization", GetConfigurationValues.BearerValue);
/* 40 */       HttpEntity entity = new HttpEntity(
/* 41 */         objFetchHoldStatusRequestPojo, headers);
/* 42 */       //System.out.println("objFetchHoldStatusRequestPojo" + objFetchHoldStatusRequestPojo.toString());
/* 43 */       //System.out.println("RestServiceURIConstants.REST_COMMON_FETCH_HOLD_STATUS ," + RestServiceURIConstants.REST_COMMON_FETCH_HOLD_STATUS);
/*    */ 
/* 45 */       this.logger.info("Fetch Hold status request {}", objFetchHoldStatusRequestPojo.toString());
/* 46 */       response = rest.postForEntity(RestServiceURIConstants.REST_COMMON_FETCH_HOLD_STATUS, entity, 
/* 47 */         String.class, new Object[0]);
/* 48 */       responseString = (String)response.getBody();
/*    */     }
/*    */     catch (Exception e) {
/* 51 */       this.logger.info("Fetch hold status error" + e.getMessage());
/* 52 */       e.printStackTrace();
/* 53 */       responseString = "{\"rs\":\"F\",\"rc\":\"FC0001\",\"rd\":\"Sorry! Something went wrong\"}";
/*    */     }
/* 55 */     this.logger.info("fetch hold status response {}" + ((String)response.getBody()).toString());
/* 56 */     return responseString;
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.controller.FetchHoldStatusController
 * JD-Core Version:    0.6.0
 */