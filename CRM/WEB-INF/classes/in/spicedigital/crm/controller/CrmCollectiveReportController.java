/*    */ package in.spicedigital.crm.controller;
/*    */ 
/*    */ import in.spicedigital.crm.contants.GetConfigurationValues;
/*    */ import in.spicedigital.crm.contants.RestServiceURIConstants;
/*    */ import in.spicedigital.crm.pojo.RequestPojo.CrmCollectiveRptRequestPojo;
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
/*    */ public class CrmCollectiveReportController
/*    */ {
/* 33 */   private final Logger logger = LoggerFactory.getLogger(getClass());
/*    */ 
/* 36 */   @RequestMapping(value={"/colRpt"}, method={org.springframework.web.bind.annotation.RequestMethod.POST}, consumes={"application/json"}, produces={"application/json"})
/*    */   @ResponseBody
/*    */   public String getLogIn(@RequestBody String requestBody, HttpServletRequest request) { String userIpAddress = request.getRemoteAddr();
/* 37 */     //System.out.println("userIpAddress" + userIpAddress);
/* 38 */     String responseString = null;
/* 39 */     ResponseEntity response = null;
/* 40 */     //System.out.println("crm collective report request ::: " + requestBody);
/*    */     try {
/* 42 */       UnmarshalledPojoData objUnmarshalledPojoData = new JsonUnmarshaller().unmarshal(new CrmCollectiveRptRequestPojo().getClass(), requestBody);
/* 43 */       CrmCollectiveRptRequestPojo objCrmCollectiveRptRequestPojo = (CrmCollectiveRptRequestPojo)objUnmarshalledPojoData.getObject();
/* 44 */       //System.out.println("In crm collective report controller");
/* 45 */       //System.out.println("Crm collective report requestbody ::: " + requestBody);
/* 46 */       RestTemplate rest = new RestTemplate();
/* 47 */       HttpHeaders headers = new HttpHeaders();
/* 48 */       headers.setContentType(MediaType.APPLICATION_JSON);
/* 49 */       headers.set("Authorization", GetConfigurationValues.BearerValue);
/* 50 */       HttpEntity entity = new HttpEntity(
/* 51 */         objCrmCollectiveRptRequestPojo, headers);
/* 52 */       //System.out.println("objCrmCollectiveRptRequestPojo=" + objCrmCollectiveRptRequestPojo);
/* 53 */       //System.out.println("RestServiceURIConstants.REST_COMMON_CRM_COLLECTIVE_RPT," + RestServiceURIConstants.REST_COMMON_CRM_COLLECTIVE_RPT);
/* 54 */       this.logger.info("Crm collective report request {}", objCrmCollectiveRptRequestPojo.toString());
/* 55 */       response = rest.postForEntity(RestServiceURIConstants.REST_COMMON_CRM_COLLECTIVE_RPT, entity, 
/* 56 */         String.class, new Object[0]);
/* 57 */       responseString = (String)response.getBody();
/*    */     }
/*    */     catch (Exception e) {
/* 60 */       this.logger.info("Crm collective report error" + e.getMessage());
/* 61 */       e.printStackTrace();
/* 62 */       responseString = "{\"rs\":\"F\",\"rc\":\"FC0001\",\"rd\":\"Sorry! Something went wrong\"}";
/*    */     }
/*    */ 
/* 65 */     //System.out.println("hello..java controller");
/* 66 */     this.logger.info("Crm collective report response {}", response);
/* 67 */     return responseString;
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.controller.CrmCollectiveReportController
 * JD-Core Version:    0.6.0
 */