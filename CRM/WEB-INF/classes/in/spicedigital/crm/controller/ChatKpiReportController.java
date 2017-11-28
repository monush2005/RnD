/*    */ package in.spicedigital.crm.controller;
/*    */ 
/*    */ import in.spicedigital.crm.contants.GetConfigurationValues;
/*    */ import in.spicedigital.crm.contants.RestServiceURIConstants;
/*    */ import in.spicedigital.crm.pojo.RequestPojo.ChatKpiRequestPojo;
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
/*    */ public class ChatKpiReportController
/*    */ {
/* 35 */   private final Logger logger = LoggerFactory.getLogger(getClass());
/*    */ 
/* 38 */   @RequestMapping(value={"/chatKpiRpt"}, method={org.springframework.web.bind.annotation.RequestMethod.POST}, consumes={"application/json"}, produces={"application/json"})
/*    */   @ResponseBody
/*    */   public String getLogIn(@RequestBody String requestBody, HttpServletRequest request) { String userIpAddress = request.getRemoteAddr();
/* 39 */     //System.out.println("userIpAddress" + userIpAddress);
/* 40 */     String responseString = null;
/* 41 */     ResponseEntity response = null;
/* 42 */     //System.out.println("chat kpi report request ::: " + requestBody);
/*    */     try {
/* 44 */       UnmarshalledPojoData objUnmarshalledPojoData = new JsonUnmarshaller().unmarshal(new ChatKpiRequestPojo().getClass(), requestBody);
/* 45 */       ChatKpiRequestPojo objChatKpiRequestPojo = (ChatKpiRequestPojo)objUnmarshalledPojoData.getObject();
/* 46 */       //System.out.println("in ChatKPIReport controller");
/* 47 */       //System.out.println("ChatKpiReport Request ::: " + requestBody);
/* 48 */       RestTemplate rest = new RestTemplate();
/* 49 */       HttpHeaders headers = new HttpHeaders();
/* 50 */       headers.setContentType(MediaType.APPLICATION_JSON);
/* 51 */       headers.set("Authorization", GetConfigurationValues.BearerValue);
/* 52 */       HttpEntity entity = new HttpEntity(
/* 53 */         objChatKpiRequestPojo, headers);
/* 54 */       //System.out.println("objChatKpiRequestPojo=" + objChatKpiRequestPojo);
/* 55 */       //System.out.println("RestServiceURIConstants.REST_COMMON_CHAT_KPI_REPORT ," + RestServiceURIConstants.REST_COMMON_CHAT_DETAIL_REPORT);
/* 56 */       this.logger.info("Chat kpi report request {}", objChatKpiRequestPojo.toString());
/* 57 */       response = rest.postForEntity(RestServiceURIConstants.REST_COMMON_CHAT_KPI_REPORT, entity, 
/* 58 */         String.class, new Object[0]);
/* 59 */       responseString = (String)response.getBody();
/*    */     }
/*    */     catch (Exception e) {
/* 62 */       this.logger.info("Chat kpi report error" + e.getMessage());
/* 63 */       e.printStackTrace();
/* 64 */       responseString = "{\"rs\":\"F\",\"rc\":\"FC0001\",\"rd\":\"Sorry! Something went wrong\"}";
/*    */     }
/* 66 */     this.logger.info("Chat kpi report response {}", response);
/* 67 */     return responseString;
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.controller.ChatKpiReportController
 * JD-Core Version:    0.6.0
 */