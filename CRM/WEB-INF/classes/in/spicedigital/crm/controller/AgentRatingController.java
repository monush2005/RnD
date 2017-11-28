/*    */ package in.spicedigital.crm.controller;
/*    */ 
/*    */ import in.spicedigital.crm.contants.GetConfigurationValues;
/*    */ import in.spicedigital.crm.contants.RestServiceURIConstants;
/*    */ import in.spicedigital.crm.pojo.RequestPojo.AgentRatingRequestPojo;
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
/*    */ public class AgentRatingController
/*    */ {
/* 30 */   private final Logger logger = LoggerFactory.getLogger(getClass());
/*    */ 
/* 33 */   @RequestMapping(value={"/agentRating"}, method={org.springframework.web.bind.annotation.RequestMethod.POST}, consumes={"application/json"}, produces={"application/json"})
/*    */   @ResponseBody
/*    */   public String getLogIn(@RequestBody String requestBody, HttpServletRequest request) { String userIpAddress = request.getRemoteAddr();
/* 34 */     //System.out.println("userIpAddress" + userIpAddress);
/* 35 */     String responseString = null;
/* 36 */     ResponseEntity response = null;
/* 37 */     //System.out.println("ADD AGENT ::: " + requestBody);
/*    */     try {
/* 39 */       UnmarshalledPojoData objUnmarshalledPojoData = new JsonUnmarshaller().unmarshal(new AgentRatingRequestPojo().getClass(), requestBody);
/* 40 */       AgentRatingRequestPojo objAgentRatingRequestPojo = (AgentRatingRequestPojo)objUnmarshalledPojoData.getObject();
/* 41 */       //System.out.println("In agent rating controller");
/* 42 */       //System.out.println("Agent rating request body " + requestBody);
/* 43 */       RestTemplate rest = new RestTemplate();
/* 44 */       HttpHeaders headers = new HttpHeaders();
/* 45 */       headers.setContentType(MediaType.APPLICATION_JSON);
/* 46 */       headers.set("Authorization", GetConfigurationValues.BearerValue);
/* 47 */       HttpEntity entity = new HttpEntity(
/* 48 */         objAgentRatingRequestPojo, headers);
/* 49 */       //System.out.println("objAddAgentRequestPojo=" + objAgentRatingRequestPojo);
/* 50 */       //System.out.println("RestServiceURIConstants.REST_COMMON_ADD_AGENT," + RestServiceURIConstants.REST_COMMON_AGENT_RATING);
/* 51 */       this.logger.info("Agent rating request {}", objAgentRatingRequestPojo.toString());
/* 52 */       response = rest.postForEntity(RestServiceURIConstants.REST_COMMON_AGENT_RATING, entity, 
/* 53 */         String.class, new Object[0]);
/* 54 */       responseString = (String)response.getBody();
/*    */     }
/*    */     catch (Exception e) {
/* 57 */       this.logger.info("agent rating error" + e.getMessage());
/* 58 */       e.printStackTrace();
/* 59 */       responseString = "{\"rs\":\"F\",\"rc\":\"FC0001\",\"rd\":\"Sorry! Something went wrong\"}";
/*    */     }
/*    */ 
/* 62 */     //System.out.println("hello..java controller");
/* 63 */     this.logger.info("Agent rating response {}", response);
/* 64 */     return responseString;
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.controller.AgentRatingController
 * JD-Core Version:    0.6.0
 */