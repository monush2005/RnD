/*    */ package in.spicedigital.crm.controller;
/*    */ 
/*    */ import in.spicedigital.crm.contants.GetConfigurationValues;
/*    */ import in.spicedigital.crm.contants.RestServiceURIConstants;
/*    */ import in.spicedigital.crm.pojo.RequestPojo.ForwardToAgentRequestPojo;
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
/*    */ public class ForwardToAgentController
/*    */ {
/* 31 */   private final Logger logger = LoggerFactory.getLogger(getClass());
/*    */ 
/* 34 */   @RequestMapping(value={"/forwardToAgent"}, method={org.springframework.web.bind.annotation.RequestMethod.POST}, consumes={"application/json"}, produces={"application/json"})
/*    */   @ResponseBody
/*    */   public String getLogIn(@RequestBody String requestBody, HttpServletRequest request) { String userIpAddress = request.getRemoteAddr();
/* 35 */     //System.out.println("userIpAddress" + userIpAddress);
/* 36 */     String responseString = null;
/* 37 */     ResponseEntity response = null;
/* 38 */     //System.out.println("Forward to agent ::: " + requestBody);
/*    */     try {
/* 40 */       UnmarshalledPojoData objUnmarshalledPojoData = new JsonUnmarshaller().unmarshal(new ForwardToAgentRequestPojo().getClass(), requestBody);
/* 41 */       ForwardToAgentRequestPojo objForwardToAgentRequestPojo = (ForwardToAgentRequestPojo)objUnmarshalledPojoData.getObject();
/* 42 */       //System.out.println("forward to agent controller");
/* 43 */       //System.out.println("Forward to agent requestbody ::: " + requestBody);
/* 44 */       RestTemplate rest = new RestTemplate();
/* 45 */       HttpHeaders headers = new HttpHeaders();
/* 46 */       headers.setContentType(MediaType.APPLICATION_JSON);
/* 47 */       headers.set("Authorization", GetConfigurationValues.BearerValue);
/* 48 */       HttpEntity entity = new HttpEntity(
/* 49 */         objForwardToAgentRequestPojo, headers);
/* 50 */       //System.out.println("objForwardToAgentRequestPojo=" + objForwardToAgentRequestPojo);
/* 51 */       //System.out.println("RestServiceURIConstants.REST_COMMON_ADD_AGENT," + RestServiceURIConstants.REST_COMMON_FORWARD_TO_AGENT);
/* 52 */       this.logger.info("Forward to agent request {}", objForwardToAgentRequestPojo.toString());
/* 53 */       response = rest.postForEntity(RestServiceURIConstants.REST_COMMON_FORWARD_TO_AGENT, entity, 
/* 54 */         String.class, new Object[0]);
/* 55 */       responseString = (String)response.getBody();
/*    */     }
/*    */     catch (Exception e) {
/* 58 */       this.logger.error("Forward to agent error", e.getMessage());
/* 59 */       e.printStackTrace();
/* 60 */       responseString = "{\"rs\":\"F\",\"rc\":\"FC0001\",\"rd\":\"Sorry! Something went wrong\"}";
/*    */     }
/* 62 */     this.logger.info("Forward to agent response{}", response);
/* 63 */     return responseString;
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.controller.ForwardToAgentController
 * JD-Core Version:    0.6.0
 */