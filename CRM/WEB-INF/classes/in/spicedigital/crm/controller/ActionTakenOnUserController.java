/*    */ package in.spicedigital.crm.controller;
/*    */ 
/*    */ import in.spicedigital.crm.contants.GetConfigurationValues;
/*    */ import in.spicedigital.crm.contants.RestServiceURIConstants;
/*    */ import in.spicedigital.crm.pojo.RequestPojo.ActionTakenOnUserRequestPojo;
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
/*    */ public class ActionTakenOnUserController
/*    */ {
/* 32 */   private final Logger logger = LoggerFactory.getLogger(getClass());
/*    */ 
/* 35 */   @RequestMapping(value={"/actionTaken"}, method={org.springframework.web.bind.annotation.RequestMethod.POST}, consumes={"application/json"}, produces={"application/json"})
/*    */   @ResponseBody
/*    */   public String getLogIn(@RequestBody String requestBody, HttpServletRequest request) { String userIpAddress = request.getRemoteAddr();
/* 36 */     String responseString = null;
/* 37 */     ResponseEntity response = null;
/*    */     try {
/* 39 */       UnmarshalledPojoData objUnmarshalledPojoData = new JsonUnmarshaller().unmarshal(new ActionTakenOnUserRequestPojo().getClass(), requestBody);
/* 40 */       ActionTakenOnUserRequestPojo objActionTakenOnUserRequestPojo = (ActionTakenOnUserRequestPojo)objUnmarshalledPojoData.getObject();
/* 41 */       //System.out.println("Action taken on user ::: " + requestBody);
/* 42 */       RestTemplate rest = new RestTemplate();
/* 43 */       HttpHeaders headers = new HttpHeaders();
/* 44 */       headers.setContentType(MediaType.APPLICATION_JSON);
/* 45 */       headers.set("Authorization", GetConfigurationValues.BearerValue);
/* 46 */       HttpEntity entity = new HttpEntity(
/* 47 */         objActionTakenOnUserRequestPojo, headers);
/* 48 */       //System.out.println("objAddAgentRequestPojo=" + objActionTakenOnUserRequestPojo);
/* 49 */       this.logger.info("Action taken on user request  {}" + objActionTakenOnUserRequestPojo);
/* 50 */       //System.out.println("RestServiceURIConstants.REST_COMMON_ACTION_TAKEN_ON_USER," + RestServiceURIConstants.REST_COMMON_ACTION_TAKEN_ON_USER);
/* 51 */       response = rest.postForEntity(RestServiceURIConstants.REST_COMMON_ACTION_TAKEN_ON_USER, entity, 
/* 52 */         String.class, new Object[0]);
/* 53 */       responseString = (String)response.getBody();
/*    */     }
/*    */     catch (Exception e) {
/* 56 */       this.logger.info("Action taken on user error" + e.getMessage());
/* 57 */       e.printStackTrace();
/* 58 */       responseString = "{\"rs\":\"F\",\"rc\":\"FC0001\",\"rd\":\"Sorry! Something went wrong\"}";
/*    */     }
/*    */ 
/* 61 */     //System.out.println("hello..java controller");
/* 62 */     this.logger.info("Action taken on user response  {}" + response);
/* 63 */     return responseString;
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.controller.ActionTakenOnUserController
 * JD-Core Version:    0.6.0
 */