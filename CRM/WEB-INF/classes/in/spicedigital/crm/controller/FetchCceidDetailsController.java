/*    */ package in.spicedigital.crm.controller;
/*    */ 
/*    */ import in.spicedigital.crm.contants.GetConfigurationValues;
/*    */ import in.spicedigital.crm.contants.RestServiceURIConstants;
/*    */ import in.spicedigital.crm.pojo.RequestPojo.FetchCceidRequestPojo;
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
/*    */ public class FetchCceidDetailsController
/*    */ {
/* 31 */   private final Logger logger = LoggerFactory.getLogger(getClass());
/*    */ 
/* 35 */   @RequestMapping(value={"/fetchCceidDetails"}, method={org.springframework.web.bind.annotation.RequestMethod.POST}, consumes={"application/json"}, produces={"application/json"})
/*    */   @ResponseBody
/*    */   public String getFetchServices(@RequestBody String requestBody) { //System.out.println("Ceid details  ::: " + requestBody);
/* 36 */     String responseString = null;
/* 37 */     ResponseEntity response = null;
/*    */     try
/*    */     {
/* 41 */       UnmarshalledPojoData objUnmarshalledPojoData = new JsonUnmarshaller().unmarshal(new FetchCceidRequestPojo().getClass(), requestBody);
/* 42 */       FetchCceidRequestPojo objFetchCceidRequestPojo = (FetchCceidRequestPojo)objUnmarshalledPojoData.getObject();
/* 43 */       //System.out.println("in Ceid details controller");
/* 44 */       RestTemplate rest = new RestTemplate();
/* 45 */       HttpHeaders headers = new HttpHeaders();
/* 46 */       headers.setContentType(MediaType.APPLICATION_JSON);
/* 47 */       headers.set("Authorization", GetConfigurationValues.BearerValue);
/* 48 */       HttpEntity entity = new HttpEntity(
/* 49 */         objFetchCceidRequestPojo, headers);
/* 50 */       this.logger.info("fetch cceid detaiils request {}", objFetchCceidRequestPojo.toString());
/* 51 */       response = rest.postForEntity(RestServiceURIConstants.REST_COMMON_CCEID_DETAILS, entity, 
/* 52 */         String.class, new Object[0]);
/* 53 */       //System.out.println("response" + ((String)response.getBody()).toString());
/*    */     }
/*    */     catch (Exception e) {
/* 56 */       this.logger.error("fetch cceid detials error", e.getMessage());
/* 57 */       e.printStackTrace();
/* 58 */       responseString = "{\"rs\":\"F\",\"rc\":\"FC0001\",\"rd\":\"Sorry! Something went wrong\"}";
/*    */     }
/* 60 */     this.logger.info("fetch cceid details response {}" + response);
/* 61 */     return ((String)response.getBody()).toString();
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.controller.FetchCceidDetailsController
 * JD-Core Version:    0.6.0
 */