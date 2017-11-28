/*    */ package in.spicedigital.crm.controller;
/*    */ 
/*    */ import in.spicedigital.crm.contants.GetConfigurationValues;
/*    */ import in.spicedigital.crm.contants.RestServiceURIConstants;
/*    */ import in.spicedigital.crm.pojo.RequestPojo.FetchCallDetailsRequestPojo;
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
/*    */ public class FetchCallDetailsController
/*    */ {
/* 25 */   private final Logger logger = LoggerFactory.getLogger(getClass());
/*    */ 
/* 28 */   @RequestMapping(value={"/fetchCallDtl"}, method={org.springframework.web.bind.annotation.RequestMethod.POST}, consumes={"application/json"}, produces={"application/json"})
/*    */   @ResponseBody
/*    */   public String getFetchServices(@RequestBody String requestBody) { ResponseEntity response = null;
/* 29 */     String responseString = null;
/* 30 */     //System.out.println("REQUEST ::: =" + requestBody);
/*    */     try {
/* 32 */       UnmarshalledPojoData objUnmarshalledPojoData = new JsonUnmarshaller().unmarshal(new FetchCallDetailsRequestPojo().getClass(), requestBody);
/* 33 */       FetchCallDetailsRequestPojo objFetchCallDetailsRequestPojo = (FetchCallDetailsRequestPojo)objUnmarshalledPojoData.getObject();
/* 34 */       //System.out.println("in FetchCallDetailsController ");
/* 35 */       RestTemplate rest = new RestTemplate();
/* 36 */       HttpHeaders headers = new HttpHeaders();
/* 37 */       headers.setContentType(MediaType.APPLICATION_JSON);
/* 38 */       headers.set("Authorization", GetConfigurationValues.BearerValue);
/* 39 */       //System.out.println("RestServiceURIConstants.REST_COMMON_FETCH_SERVICES" + RestServiceURIConstants.REST_COMMON_FETCH_CALL_DETAILS);
/* 40 */       HttpEntity entity = new HttpEntity(
/* 41 */         objFetchCallDetailsRequestPojo, headers);
/* 42 */       this.logger.info("fetch call details request {}", objFetchCallDetailsRequestPojo.toString());
/* 43 */       response = rest.postForEntity(RestServiceURIConstants.REST_COMMON_FETCH_CALL_DETAILS, entity, 
/* 44 */         String.class, new Object[0]);
/* 45 */       responseString = (String)response.getBody();
/* 46 */       //System.out.println("*************" + (String)response.getBody());
/*    */     } catch (Exception e) {
/* 48 */       this.logger.info("fetch call details error" + e.getMessage());
/* 49 */       e.printStackTrace();
/* 50 */       responseString = "{\"rs\":\"F\",\"rc\":\"FC0001\",\"rd\":\"Sorry! Something went wrong\"}";
/*    */     }
/* 52 */     this.logger.info("fetch call details response {}" + response);
/* 53 */     return responseString;
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.controller.FetchCallDetailsController
 * JD-Core Version:    0.6.0
 */