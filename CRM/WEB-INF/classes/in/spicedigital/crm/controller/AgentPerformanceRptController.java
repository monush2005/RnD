/*    */ package in.spicedigital.crm.controller;
/*    */ 
/*    */ import in.spicedigital.crm.contants.GetConfigurationValues;
/*    */ import in.spicedigital.crm.contants.RestServiceURIConstants;
/*    */ import in.spicedigital.crm.pojo.RequestPojo.AgentPerformanceRptRequestPojo;
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
/*    */ public class AgentPerformanceRptController
/*    */ {
/* 28 */   private final Logger logger = LoggerFactory.getLogger(getClass());
/*    */ 
/* 31 */   @RequestMapping(value={"/agentPerformanceRpt"}, method={org.springframework.web.bind.annotation.RequestMethod.POST}, consumes={"application/json"}, produces={"application/json"})
/*    */   @ResponseBody
/*    */   public String getLogIn(@RequestBody String requestBody, HttpServletRequest request) { String userIpAddress = request.getRemoteAddr();
/* 32 */     //System.out.println("userIpAddress" + userIpAddress);
/* 33 */     String responseString = null;
/* 34 */     ResponseEntity response = null;
/* 35 */     //System.out.println("Agent performance report ::: " + requestBody);
/*    */     try {
/* 37 */       UnmarshalledPojoData objUnmarshalledPojoData = new JsonUnmarshaller().unmarshal(new AgentPerformanceRptRequestPojo().getClass(), requestBody);
/* 38 */       AgentPerformanceRptRequestPojo objAgentPerformanceRptRequestPojo = (AgentPerformanceRptRequestPojo)objUnmarshalledPojoData.getObject();
/* 39 */       //System.out.println("Agent performance report controller");
/* 40 */       //System.out.println("Agent performance report ::: " + requestBody);
/* 41 */       RestTemplate rest = new RestTemplate();
/* 42 */       HttpHeaders headers = new HttpHeaders();
/* 43 */       headers.setContentType(MediaType.APPLICATION_JSON);
/* 44 */       headers.set("Authorization", GetConfigurationValues.BearerValue);
/* 45 */       HttpEntity entity = new HttpEntity(
/* 46 */         objAgentPerformanceRptRequestPojo, headers);
/* 47 */       //System.out.println("objAgentPerformanceRptRequestPojo=" + objAgentPerformanceRptRequestPojo);
/* 48 */       //System.out.println("RestServiceURIConstants.REST_COMMOM_AGENT_PERFORMANCE_REPORT," + RestServiceURIConstants.REST_COMMOM_AGENT_PERFORMANCE_REPORT);
/* 49 */       this.logger.info("Agent performance report request {}", objAgentPerformanceRptRequestPojo.toString());
/* 50 */       response = rest.postForEntity(RestServiceURIConstants.REST_COMMOM_AGENT_PERFORMANCE_REPORT, entity, 
/* 51 */         String.class, new Object[0]);
/* 52 */       responseString = (String)response.getBody();
/*    */     }
/*    */     catch (Exception e) {
/* 55 */       this.logger.info("Agent performance report error " + e.getMessage());
/* 56 */       e.printStackTrace();
/* 57 */       responseString = "{\"rs\":\"F\",\"rc\":\"FC0001\",\"rd\":\"Sorry! Something went wrong\"}";
/*    */     }
/*    */ 
/* 60 */     this.logger.info("Agent performance report response {}", response);
/* 61 */     return responseString;
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.controller.AgentPerformanceRptController
 * JD-Core Version:    0.6.0
 */