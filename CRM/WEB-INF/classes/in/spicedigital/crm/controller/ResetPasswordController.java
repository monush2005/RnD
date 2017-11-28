/*    */ package in.spicedigital.crm.controller;
/*    */ 
/*    */ import in.spicedigital.crm.contants.GetConfigurationValues;
/*    */ import in.spicedigital.crm.contants.RestServiceURIConstants;
/*    */ import in.spicedigital.crm.pojo.RequestPojo.ResetPasswordRequestPojo;
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
/*    */ public class ResetPasswordController
/*    */ {
/* 30 */   private final Logger logger = LoggerFactory.getLogger(getClass());
/*    */ 
/* 33 */   @RequestMapping(value={"/resetPswd"}, method={org.springframework.web.bind.annotation.RequestMethod.POST}, consumes={"application/json"}, produces={"application/json"})
/*    */   @ResponseBody
/*    */   public String getLogIn(@RequestBody String requestBody, HttpServletRequest request) { String userIpAddress = request.getRemoteAddr();
/* 34 */     //System.out.println("userIpAddress" + userIpAddress);
/* 35 */     String responseString = null;
/* 36 */     ResponseEntity response = null;
/* 37 */     //System.out.println("Reset password requestbody ::: " + requestBody);
/*    */     try {
/* 39 */       UnmarshalledPojoData objUnmarshalledPojoData = new JsonUnmarshaller().unmarshal(new ResetPasswordRequestPojo().getClass(), requestBody);
/* 40 */       ResetPasswordRequestPojo objResetPasswordRequestPojo = (ResetPasswordRequestPojo)objUnmarshalledPojoData.getObject();
/* 41 */       //System.out.println("in reset password controller");
/* 42 */       RestTemplate rest = new RestTemplate();
/* 43 */       HttpHeaders headers = new HttpHeaders();
/* 44 */       headers.setContentType(MediaType.APPLICATION_JSON);
/* 45 */       headers.set("Authorization", GetConfigurationValues.BearerValue);
/* 46 */       HttpEntity entity = new HttpEntity(
/* 47 */         objResetPasswordRequestPojo, headers);
/* 48 */       //System.out.println("objResetPasswordRequestPojo=" + objResetPasswordRequestPojo);
/* 49 */       //System.out.println("RestServiceURIConstants.REST_COMMON_GET_LOGIN," + RestServiceURIConstants.REST_COMMON_RESET_PASSWORD);
/* 50 */       this.logger.info("Reset password request {}", objResetPasswordRequestPojo.toString());
/* 51 */       response = rest.postForEntity(RestServiceURIConstants.REST_COMMON_RESET_PASSWORD, entity, 
/* 52 */         String.class, new Object[0]);
/* 53 */       responseString = (String)response.getBody();
/*    */     }
/*    */     catch (Exception e) {
/* 56 */       this.logger.error("Reset password error" + e.getMessage());
/* 57 */       e.printStackTrace();
/* 58 */       responseString = "{\"rs\":\"F\",\"rc\":\"FC0001\",\"rd\":\"Sorry! Something went wrong\"}";
/*    */     }
/* 60 */     this.logger.info("Reset password response {}", response);
/* 61 */     return responseString;
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.controller.ResetPasswordController
 * JD-Core Version:    0.6.0
 */