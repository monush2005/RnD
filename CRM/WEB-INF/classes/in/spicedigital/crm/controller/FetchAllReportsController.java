/*    */ package in.spicedigital.crm.controller;
/*    */ 
/*    */ import in.spicedigital.crm.contants.GetConfigurationValues;
/*    */ import in.spicedigital.crm.contants.RestServiceURIConstants;
/*    */ import in.spicedigital.crm.pojo.RequestPojo.FetchAllReportRequestPojo;
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
/*    */ public class FetchAllReportsController
/*    */ {
/* 25 */   private final Logger logger = LoggerFactory.getLogger(getClass());
/*    */ 
/* 29 */   @RequestMapping(value={"/fetchAllRpt"}, method={org.springframework.web.bind.annotation.RequestMethod.POST}, consumes={"application/json"}, produces={"application/json"})
/*    */   @ResponseBody
/*    */   public String getLogIn(@RequestBody String requestBody, HttpServletRequest request) { String userIpAddress = request.getRemoteAddr();
/* 30 */     //System.out.println("userIpAddress" + userIpAddress);
/* 31 */     String responseString = null;
/* 32 */     ResponseEntity response = null;
/* 33 */     //System.out.println("Fetch all report request body ::: " + requestBody);
/*    */     try {
/* 35 */       UnmarshalledPojoData objUnmarshalledPojoData = new JsonUnmarshaller().unmarshal(new FetchAllReportRequestPojo().getClass(), requestBody);
/* 36 */       FetchAllReportRequestPojo objFetchAllReportRequestPojo = (FetchAllReportRequestPojo)objUnmarshalledPojoData.getObject();
/* 37 */       //System.out.println("fetch all reprot controller");
/* 38 */       RestTemplate rest = new RestTemplate();
/* 39 */       HttpHeaders headers = new HttpHeaders();
/* 40 */       headers.setContentType(MediaType.APPLICATION_JSON);
/* 41 */       headers.set("Authorization", GetConfigurationValues.BearerValue);
/* 42 */       HttpEntity entity = new HttpEntity(
/* 43 */         objFetchAllReportRequestPojo, headers);
/* 44 */       //System.out.println("objFetchAllReportRequestPojo=" + objFetchAllReportRequestPojo);
/* 45 */       //System.out.println("RestServiceURIConstants.REST_COMMON_FETCH_ALL_REPORT," + RestServiceURIConstants.REST_COMMON_FETCH_ALL_REPORT);
/* 46 */       this.logger.info("Fetch all report request {}", objFetchAllReportRequestPojo.toString());
/* 47 */       response = rest.postForEntity(RestServiceURIConstants.REST_COMMON_FETCH_ALL_REPORT, entity, 
/* 48 */         String.class, new Object[0]);
/* 49 */       responseString = (String)response.getBody();
/*    */     }
/*    */     catch (Exception e) {
/* 52 */       this.logger.info("Fetch all report  error" + e.getMessage());
/* 53 */       e.printStackTrace();
/* 54 */       responseString = "{\"rs\":\"F\",\"rc\":\"FC0001\",\"rd\":\"Sorry! Something went wrong\"}";
/*    */     }
/* 56 */     this.logger.info("Fetch all report response {}", response);
/* 57 */     return responseString;
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.controller.FetchAllReportsController
 * JD-Core Version:    0.6.0
 */