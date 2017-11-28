/*    */ package in.spicedigital.crm.controller;
/*    */ 
/*    */ import in.spicedigital.crm.contants.GetConfigurationValues;
/*    */ import in.spicedigital.crm.contants.RestServiceURIConstants;
/*    */ import in.spicedigital.crm.pojo.RequestPojo.SlaReportRequestPojo;
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
/*    */ public class SlaReportController
/*    */ {
/* 35 */   private final Logger logger = LoggerFactory.getLogger(getClass());
/*    */ 
/* 38 */   @RequestMapping(value={"/slaRpt"}, method={org.springframework.web.bind.annotation.RequestMethod.POST}, consumes={"application/json"}, produces={"application/json"})
/*    */   @ResponseBody
/*    */   public String getLogIn(@RequestBody String requestBody, HttpServletRequest request) { String userIpAddress = request.getRemoteAddr();
/* 39 */     //System.out.println("userIpAddress" + userIpAddress);
/* 40 */     String responseString = null;
/* 41 */     ResponseEntity response = null;
/* 42 */     //System.out.println("Sla report requestbody ::: " + requestBody);
/*    */     try {
/* 44 */       UnmarshalledPojoData objUnmarshalledPojoData = new JsonUnmarshaller().unmarshal(new SlaReportRequestPojo().getClass(), requestBody);
/* 45 */       SlaReportRequestPojo objSlaReportRequestPojo = (SlaReportRequestPojo)objUnmarshalledPojoData.getObject();
/* 46 */       //System.out.println("In sla report controller");
/* 47 */       RestTemplate rest = new RestTemplate();
/* 48 */       HttpHeaders headers = new HttpHeaders();
/* 49 */       headers.setContentType(MediaType.APPLICATION_JSON);
/* 50 */       headers.set("Authorization", GetConfigurationValues.BearerValue);
/* 51 */       HttpEntity entity = new HttpEntity(
/* 52 */         objSlaReportRequestPojo, headers);
/* 53 */       //System.out.println("objFetchEmailsRequestPojo=" + objSlaReportRequestPojo);
/* 54 */       //System.out.println("RestServiceURIConstants.REST_COMMON_SLA_REPORT," + RestServiceURIConstants.REST_COMMON_SLA_REPORT);
/* 55 */       this.logger.info("sla report request {}", objSlaReportRequestPojo.toString());
/* 56 */       response = rest.postForEntity(RestServiceURIConstants.REST_COMMON_SLA_REPORT, entity, 
/* 57 */         String.class, new Object[0]);
/* 58 */       responseString = (String)response.getBody();
/*    */     }
/*    */     catch (Exception e) {
/* 61 */       this.logger.info("sla report error" + e.getMessage());
/* 62 */       e.printStackTrace();
/* 63 */       responseString = "{\"rs\":\"F\",\"rc\":\"FC0001\",\"rd\":\"Sorry! Something went wrong\"}";
/*    */     }
/*    */ 
/* 66 */     //System.out.println("hello..java controller");
/* 67 */     this.logger.info("sla report response {}", response);
/* 68 */     return responseString;
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.controller.SlaReportController
 * JD-Core Version:    0.6.0
 */