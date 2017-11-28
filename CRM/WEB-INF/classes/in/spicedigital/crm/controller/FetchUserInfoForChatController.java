/*    */ package in.spicedigital.crm.controller;
/*    */ 
/*    */ import in.spicedigital.crm.contants.GetConfigurationValues;
/*    */ import in.spicedigital.crm.contants.RestServiceURIConstants;
/*    */ import in.spicedigital.crm.pojo.RequestPojo.UserInfoForChatRequestPojo;
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
/*    */ public class FetchUserInfoForChatController
/*    */ {
/* 32 */   private final Logger logger = LoggerFactory.getLogger(getClass());
/*    */ 
/* 35 */   @RequestMapping(value={"/fetchUsrInfo1"}, method={org.springframework.web.bind.annotation.RequestMethod.POST}, consumes={"application/json"}, produces={"application/json"})
/*    */   @ResponseBody
/*    */   public String getLogIn(@RequestBody String requestBody, HttpServletRequest request) { String userIpAddress = request.getRemoteAddr();
/* 36 */     //System.out.println("userIpAddress" + userIpAddress);
/* 37 */     String responseString = null;
/* 38 */     ResponseEntity response = null;
/* 39 */     //System.out.println("ADD AGENT ::: " + requestBody);
/*    */     try {
/* 41 */       UnmarshalledPojoData objUnmarshalledPojoData = new JsonUnmarshaller().unmarshal(new UserInfoForChatRequestPojo().getClass(), requestBody);
/* 42 */       UserInfoForChatRequestPojo objUserInfoForChatRequestPojo = (UserInfoForChatRequestPojo)objUnmarshalledPojoData.getObject();
/* 43 */       RestTemplate rest = new RestTemplate();
/* 44 */       HttpHeaders headers = new HttpHeaders();
/* 45 */       headers.setContentType(MediaType.APPLICATION_JSON);
/* 46 */       headers.set("Authorization", GetConfigurationValues.BearerValue);
/* 47 */       HttpEntity entity = new HttpEntity(
/* 48 */         objUserInfoForChatRequestPojo, headers);
/* 49 */       //System.out.println("objUserInfoForChatRequestPojo=" + objUserInfoForChatRequestPojo);
/* 50 */       //System.out.println("RestServiceURIConstants.REST_COMMON_USER_INFO_CHAT," + RestServiceURIConstants.REST_COMMON_USER_INFO_CHAT);
/* 51 */       this.logger.info("Fetch user info for chat request {}", objUserInfoForChatRequestPojo.toString());
/* 52 */       response = rest.postForEntity(RestServiceURIConstants.REST_COMMON_USER_INFO_CHAT, entity, 
/* 53 */         String.class, new Object[0]);
/* 54 */       responseString = (String)response.getBody();
/*    */     }
/*    */     catch (Exception e) {
/* 57 */       this.logger.info("Fetch user info for chat error" + e.getMessage());
/* 58 */       e.printStackTrace();
/* 59 */       responseString = "{\"rs\":\"F\",\"rc\":\"FC0001\",\"rd\":\"Sorry! Something went wrong\"}";
/*    */     }
/* 61 */     this.logger.info("Fetch user info for chat response {}", response);
/* 62 */     return responseString;
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.controller.FetchUserInfoForChatController
 * JD-Core Version:    0.6.0
 */