/*    */ package in.spicedigital.crm.controller;
/*    */ 
/*    */ import in.spicedigital.crm.contants.GetConfigurationValues;
/*    */ import in.spicedigital.crm.contants.RestServiceURIConstants;
/*    */ import in.spicedigital.crm.pojo.RequestPojo.ViewFeedbackRequestPojo;
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
/*    */ public class ViewFeedbackController
/*    */ {
/* 32 */   private final Logger logger = LoggerFactory.getLogger(getClass());
/*    */ 
/* 35 */   @RequestMapping(value={"/viewFeedbacks"}, method={org.springframework.web.bind.annotation.RequestMethod.POST}, consumes={"application/json"}, produces={"application/json"})
/*    */   @ResponseBody
/*    */   public String getLogIn(@RequestBody String requestBody, HttpServletRequest request) { String userIpAddress = request.getRemoteAddr();
/* 36 */     //System.out.println("userIpAddress" + userIpAddress);
/* 37 */     String responseString = null;
/* 38 */     ResponseEntity response = null;
/* 39 */     //System.out.println("view feedback ::: " + requestBody);
/*    */     try {
/* 41 */       UnmarshalledPojoData objUnmarshalledPojoData = new JsonUnmarshaller().unmarshal(new ViewFeedbackRequestPojo().getClass(), requestBody);
/* 42 */       ViewFeedbackRequestPojo objViewFeedbackRequestPojo = (ViewFeedbackRequestPojo)objUnmarshalledPojoData.getObject();
/* 43 */       //System.out.println("view feedback controller");
/* 44 */       RestTemplate rest = new RestTemplate();
/* 45 */       HttpHeaders headers = new HttpHeaders();
/* 46 */       headers.setContentType(MediaType.APPLICATION_JSON);
/* 47 */       headers.set("Authorization", GetConfigurationValues.BearerValue);
/* 48 */       HttpEntity entity = new HttpEntity(
/* 49 */         objViewFeedbackRequestPojo, headers);
/* 50 */       //System.out.println("objViewFeedbackRequestPojo=" + objViewFeedbackRequestPojo);
/* 51 */       //System.out.println("RestServiceURIConstants.REST_COMMON_VIEW_FEEDBACK," + RestServiceURIConstants.REST_COMMON_VIEW_FEEDBACK);
/* 52 */       this.logger.info("view feedback request {}", objViewFeedbackRequestPojo.toString());
/* 53 */       response = rest.postForEntity(RestServiceURIConstants.REST_COMMON_VIEW_FEEDBACK, entity, 
/* 54 */         String.class, new Object[0]);
/* 55 */       responseString = (String)response.getBody();
/*    */     }
/*    */     catch (Exception e) {
/* 58 */       this.logger.info("View feedback error" + e.getMessage());
/* 59 */       e.printStackTrace();
/* 60 */       responseString = "{\"rs\":\"F\",\"rc\":\"FC0001\",\"rd\":\"Sorry! Something went wrong\"}";
/*    */     }
/* 62 */     this.logger.info("View Feedback response {}", response);
/* 63 */     return responseString;
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.controller.ViewFeedbackController
 * JD-Core Version:    0.6.0
 */