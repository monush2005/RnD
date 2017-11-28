/*    */ package in.spicedigital.crm.controller;
/*    */ 
/*    */ import in.spicedigital.crm.contants.GetConfigurationValues;
/*    */ import in.spicedigital.crm.contants.RestServiceURIConstants;
/*    */ import in.spicedigital.crm.pojo.RequestPojo.EmailReportRequestPojo;
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
/*    */ public class EmailDetailReportController
/*    */ {
/* 35 */   private final Logger logger = LoggerFactory.getLogger(getClass());
/*    */ 
/* 38 */   @RequestMapping(value={"/emailDtlReport"}, method={org.springframework.web.bind.annotation.RequestMethod.POST}, consumes={"application/json"}, produces={"application/json"})
/*    */   @ResponseBody
/*    */   public String getLogIn(@RequestBody String requestBody, HttpServletRequest request) { String userIpAddress = request.getRemoteAddr();
/* 39 */     //System.out.println("userIpAddress" + userIpAddress);
/* 40 */     String responseString = null;
/* 41 */     ResponseEntity response = null;
/* 42 */     //System.out.println("Email detail report::: " + requestBody);
/*    */     try {
/* 44 */       UnmarshalledPojoData objUnmarshalledPojoData = new JsonUnmarshaller().unmarshal(new EmailReportRequestPojo().getClass(), requestBody);
/* 45 */       EmailReportRequestPojo objEmailReportRequestPojo = (EmailReportRequestPojo)objUnmarshalledPojoData.getObject();
/* 46 */       //System.out.println("in email detail controller");
/* 47 */       RestTemplate rest = new RestTemplate();
/* 48 */       HttpHeaders headers = new HttpHeaders();
/* 49 */       headers.setContentType(MediaType.APPLICATION_JSON);
/* 50 */       headers.set("Authorization", GetConfigurationValues.BearerValue);
/* 51 */       HttpEntity entity = new HttpEntity(objEmailReportRequestPojo, headers);
/* 52 */       //System.out.println("objEmailReportRequestPojo=" + objEmailReportRequestPojo);
/* 53 */       //System.out.println("RestServiceURIConstants.REST_COMMON_EMAIL_DETAIL_REPORT," + RestServiceURIConstants.REST_COMMON_EMAIL_DETAIL_REPORT);
/* 54 */       this.logger.info("email detail  request {}", objEmailReportRequestPojo.toString());
/* 55 */       response = rest.postForEntity(RestServiceURIConstants.REST_COMMON_EMAIL_DETAIL_REPORT, entity, 
/* 56 */         String.class, new Object[0]);
/* 57 */       responseString = (String)response.getBody();
/*    */     }
/*    */     catch (Exception e) {
/* 60 */       this.logger.info("email detail error" + e.getMessage());
/* 61 */       e.printStackTrace();
/* 62 */       responseString = "{\"rs\":\"F\",\"rc\":\"FC0001\",\"rd\":\"Sorry! Something went wrong\"}";
/*    */     }
/* 64 */     this.logger.info("email detail response {}", response);
/* 65 */     return responseString;
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.controller.EmailDetailReportController
 * JD-Core Version:    0.6.0
 */