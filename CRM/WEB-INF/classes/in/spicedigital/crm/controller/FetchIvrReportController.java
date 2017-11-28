/*    */ package in.spicedigital.crm.controller;
/*    */ 
/*    */ import in.spicedigital.crm.contants.GetConfigurationValues;
/*    */ import in.spicedigital.crm.contants.RestServiceURIConstants;
/*    */ import in.spicedigital.crm.pojo.RequestPojo.FetchIvrReportRequestPojo;
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
/*    */ public class FetchIvrReportController
/*    */ {
/* 32 */   private final Logger logger = LoggerFactory.getLogger(getClass());
/*    */ 
/* 34 */   @RequestMapping(value={"/fetchIvrRpt"}, method={org.springframework.web.bind.annotation.RequestMethod.POST}, consumes={"application/json"}, produces={"application/json"})
/*    */   @ResponseBody
/*    */   public String getLogIn(@RequestBody String requestBody, HttpServletRequest request) { String userIpAddress = request.getRemoteAddr();
/* 35 */     //System.out.println("userIpAddress" + userIpAddress);
/* 36 */     String responseString = null;
/* 37 */     ResponseEntity response = null;
/* 38 */     //System.out.println("fetch IVR report ::: " + requestBody);
/*    */     try {
/* 40 */       UnmarshalledPojoData objUnmarshalledPojoData = new JsonUnmarshaller().unmarshal(new FetchIvrReportRequestPojo().getClass(), requestBody);
/* 41 */       FetchIvrReportRequestPojo objFetchIvrReportRequestPojo = (FetchIvrReportRequestPojo)objUnmarshalledPojoData.getObject();
/* 42 */       //System.out.println("in IVR report controller");
/* 43 */       //System.out.println("IVR report request ::: " + requestBody);
/* 44 */       RestTemplate rest = new RestTemplate();
/* 45 */       HttpHeaders headers = new HttpHeaders();
/* 46 */       headers.setContentType(MediaType.APPLICATION_JSON);
/* 47 */       headers.set("Authorization", GetConfigurationValues.BearerValue);
/* 48 */       HttpEntity entity = new HttpEntity(objFetchIvrReportRequestPojo, headers);
/* 49 */       //System.out.println("objFetchIvrReportRequestPojo=" + objFetchIvrReportRequestPojo);
/* 50 */       //System.out.println("RestServiceURIConstants.REST_COMMON_FETCH_IVR_REPORT," + RestServiceURIConstants.REST_COMMON_FETCH_IVR_REPORT);
/* 51 */       this.logger.info("fetch Ivr report request {}", objFetchIvrReportRequestPojo.toString());
/* 52 */       response = rest.postForEntity(RestServiceURIConstants.REST_COMMON_FETCH_IVR_REPORT, entity, 
/* 53 */         String.class, new Object[0]);
/* 54 */       responseString = (String)response.getBody();
/*    */     }
/*    */     catch (Exception e) {
/* 57 */       this.logger.info("fetch Ivr report error" + e);
/* 58 */       e.printStackTrace();
/* 59 */       responseString = "{\"rs\":\"F\",\"rc\":\"FC0001\",\"rd\":\"Sorry! Something went wrong\"}";
/*    */     }
/* 61 */     this.logger.info("fetch Ivr report response {}", response);
/* 62 */     return responseString;
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.controller.FetchIvrReportController
 * JD-Core Version:    0.6.0
 */