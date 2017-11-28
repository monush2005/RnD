/*    */ package in.spicedigital.crm.controller;
/*    */ 
/*    */ import in.spicedigital.crm.contants.GetConfigurationValues;
/*    */ import in.spicedigital.crm.contants.RestServiceURIConstants;
/*    */ import in.spicedigital.crm.pojo.RequestPojo.WrapUpRequestPojo;
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
/*    */ public class WrapUpController
/*    */ {
/* 33 */   private final Logger logger = LoggerFactory.getLogger(getClass());
/*    */ 
/* 36 */   @RequestMapping(value={"/wrapUp"}, method={org.springframework.web.bind.annotation.RequestMethod.POST}, consumes={"application/json"}, produces={"application/json"})
/*    */   @ResponseBody
/*    */   public String getLogIn(@RequestBody String requestBody, HttpServletRequest request) { String userIpAddress = request.getRemoteAddr();
/* 37 */     //System.out.println("userIpAddress" + userIpAddress);
/* 38 */     String responseString = null;
/* 39 */     ResponseEntity response = null;
/* 40 */     //System.out.println("in wrap up ::: " + requestBody);
/*    */     try {
/* 42 */       UnmarshalledPojoData objUnmarshalledPojoData = new JsonUnmarshaller().unmarshal(new WrapUpRequestPojo().getClass(), requestBody);
/* 43 */       WrapUpRequestPojo objWrapUpRequestPojo = (WrapUpRequestPojo)objUnmarshalledPojoData.getObject();
/* 44 */       //System.out.println("Wrapup  controller");
/* 45 */       RestTemplate rest = new RestTemplate();
/* 46 */       HttpHeaders headers = new HttpHeaders();
/* 47 */       headers.setContentType(MediaType.APPLICATION_JSON);
/* 48 */       headers.set("Authorization", GetConfigurationValues.BearerValue);
/* 49 */       HttpEntity entity = new HttpEntity(
/* 50 */         objWrapUpRequestPojo, headers);
/* 51 */       //System.out.println("objWrapUpRequestPojo=" + objWrapUpRequestPojo);
/* 52 */       //System.out.println("RestServiceURIConstants.REST_COMMON_WRAP_UP," + RestServiceURIConstants.REST_COMMON_WRAP_UP);
/* 53 */       this.logger.info("wrapup request{}", objWrapUpRequestPojo.toString());
/* 54 */       response = rest.postForEntity(RestServiceURIConstants.REST_COMMON_WRAP_UP, entity, 
/* 55 */         String.class, new Object[0]);
/* 56 */       responseString = (String)response.getBody();
/*    */     }
/*    */     catch (Exception e) {
/* 59 */       this.logger.info("wrapup error" + e.getMessage());
/* 60 */       e.printStackTrace();
/* 61 */       responseString = "{\"rs\":\"F\",\"rc\":\"FC0001\",\"rd\":\"Sorry! Something went wrong\"}";
/*    */     }
/*    */ 
/* 64 */     this.logger.info("wrapup response {}", response);
/* 65 */     return responseString;
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.controller.WrapUpController
 * JD-Core Version:    0.6.0
 */