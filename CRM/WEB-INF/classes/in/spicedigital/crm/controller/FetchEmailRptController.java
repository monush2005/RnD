/*    */ package in.spicedigital.crm.controller;
/*    */ 
/*    */ import in.spicedigital.crm.contants.GetConfigurationValues;
/*    */ import in.spicedigital.crm.contants.RestServiceURIConstants;
/*    */ import in.spicedigital.crm.pojo.RequestPojo.FetchEmailRptRequestPojo;
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
/*    */ public class FetchEmailRptController
/*    */ {
/* 30 */   private final Logger logger = LoggerFactory.getLogger(getClass());
/*    */ 
/* 32 */   @RequestMapping(value={"/fetchEmailRpt"}, method={org.springframework.web.bind.annotation.RequestMethod.POST}, consumes={"application/json"}, produces={"application/json"})
/*    */   @ResponseBody
/*    */   public String getFetchServices(@RequestBody String requestBody) { ResponseEntity response = null;
/* 33 */     String responseString = null;
/* 34 */     //System.out.println("REQUEST ::: " + requestBody);
/*    */     try {
/* 36 */       UnmarshalledPojoData objUnmarshalledPojoData = new JsonUnmarshaller().unmarshal(new FetchEmailRptRequestPojo().getClass(), requestBody);
/* 37 */       FetchEmailRptRequestPojo objFetchEmailRptRequestPojo = (FetchEmailRptRequestPojo)objUnmarshalledPojoData.getObject();
/* 38 */       //System.out.println("Fetch email report controller");
/* 39 */       RestTemplate rest = new RestTemplate();
/* 40 */       HttpHeaders headers = new HttpHeaders();
/* 41 */       headers.setContentType(MediaType.APPLICATION_JSON);
/* 42 */       headers.set("Authorization", GetConfigurationValues.BearerValue);
/* 43 */       //System.out.println("RestServiceURIConstants.REST_COMMON_FETCH_EMAIL_REPORT" + RestServiceURIConstants.REST_COMMON_FETCH_EMAIL_REPORT);
/* 44 */       HttpEntity entity = new HttpEntity(
/* 45 */         objFetchEmailRptRequestPojo, headers);
/* 46 */       this.logger.info("Fetch email report request {}", objFetchEmailRptRequestPojo.toString());
/* 47 */       response = rest.postForEntity(RestServiceURIConstants.REST_COMMON_FETCH_EMAIL_REPORT, entity, 
/* 48 */         String.class, new Object[0]);
/* 49 */       responseString = (String)response.getBody();
/* 50 */       //System.out.println("*************" + (String)response.getBody());
/*    */     } catch (Exception e) {
/* 52 */       this.logger.info("Fetch email report error" + e.getMessage());
/* 53 */       e.printStackTrace();
/* 54 */       responseString = "{\"rs\":\"F\",\"rc\":\"FC0001\",\"rd\":\"Sorry! Something went wrong\"}";
/*    */     }
/* 56 */     this.logger.info("Fetch email report response {}" + response);
/* 57 */     return responseString;
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.controller.FetchEmailRptController
 * JD-Core Version:    0.6.0
 */