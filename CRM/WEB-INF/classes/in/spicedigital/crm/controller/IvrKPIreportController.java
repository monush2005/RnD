/*    */ package in.spicedigital.crm.controller;
/*    */ 
/*    */ import in.spicedigital.crm.contants.GetConfigurationValues;
/*    */ import in.spicedigital.crm.contants.RestServiceURIConstants;
/*    */ import in.spicedigital.crm.pojo.RequestPojo.IvrKPIrequestPojo;
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
/*    */ public class IvrKPIreportController
/*    */ {
/* 29 */   private final Logger logger = LoggerFactory.getLogger(getClass());
/*    */ 
/* 32 */   @RequestMapping(value={"/ivrKpiRpt"}, method={org.springframework.web.bind.annotation.RequestMethod.POST}, consumes={"application/json"}, produces={"application/json"})
/*    */   @ResponseBody
/*    */   public String getLogIn(@RequestBody String requestBody, HttpServletRequest request) { String userIpAddress = request.getRemoteAddr();
/* 33 */     //System.out.println("userIpAddress" + userIpAddress);
/* 34 */     String responseString = null;
/* 35 */     ResponseEntity response = null;
/* 36 */     //System.out.println("ivr kpi report requestbody ::: " + requestBody);
/*    */     try {
/* 38 */       UnmarshalledPojoData objUnmarshalledPojoData = new JsonUnmarshaller().unmarshal(new IvrKPIrequestPojo().getClass(), requestBody);
/* 39 */       IvrKPIrequestPojo objIvrKPIrequestPojo = (IvrKPIrequestPojo)objUnmarshalledPojoData.getObject();
/* 40 */       //System.out.println("Ivr kpi report");
/* 41 */       RestTemplate rest = new RestTemplate();
/* 42 */       HttpHeaders headers = new HttpHeaders();
/* 43 */       headers.setContentType(MediaType.APPLICATION_JSON);
/* 44 */       headers.set("Authorization", GetConfigurationValues.BearerValue);
/* 45 */       HttpEntity entity = new HttpEntity(
/* 46 */         objIvrKPIrequestPojo, headers);
/* 47 */       //System.out.println("objIvrKPIrequestPojo=" + objIvrKPIrequestPojo);
/* 48 */       //System.out.println("RestServiceURIConstants.REST_COMMON_IVR_KPI_REPORT ," + RestServiceURIConstants.REST_COMMON_IVR_KPI_REPORT);
/* 49 */       this.logger.info("Ivr kpi report request {}", objIvrKPIrequestPojo.toString());
/* 50 */       response = rest.postForEntity(RestServiceURIConstants.REST_COMMON_IVR_KPI_REPORT, entity, 
/* 51 */         String.class, new Object[0]);
/* 52 */       responseString = (String)response.getBody();
/*    */     }
/*    */     catch (Exception e) {
/* 55 */       this.logger.info("Ivr kpi report error" + e.getMessage());
/* 56 */       e.printStackTrace();
/* 57 */       responseString = "{\"rs\":\"F\",\"rc\":\"FC0001\",\"rd\":\"Sorry! Something went wrong\"}";
/*    */     }
/* 59 */     this.logger.info("Ivr kpi report response {}", response);
/* 60 */     return responseString;
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.controller.IvrKPIreportController
 * JD-Core Version:    0.6.0
 */