/*    */ package in.spicedigital.crm.controller;
/*    */ 
/*    */ import in.spicedigital.crm.contants.GetConfigurationValues;
/*    */ import in.spicedigital.crm.contants.RestServiceURIConstants;
/*    */ import in.spicedigital.crm.pojo.RequestPojo.FetchUserDetailsRequestPojo;
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
/*    */ public class FetchUserDetailsController
/*    */ {
/* 29 */   private final Logger logger = LoggerFactory.getLogger(getClass());
/*    */ 
/* 32 */   @RequestMapping(value={"/fetchUsrDtls"}, method={org.springframework.web.bind.annotation.RequestMethod.POST}, consumes={"application/json"}, produces={"application/json"})
/*    */   @ResponseBody
/*    */   public String getLogIn(@RequestBody String requestBody, HttpServletRequest request) { String userIpAddress = request.getRemoteAddr();
/* 33 */     //System.out.println("userIpAddress" + userIpAddress);
/* 34 */     String responseString = null;
/* 35 */     ResponseEntity response = null;
/* 36 */     //System.out.println("fetch user details REQUEST ::: " + requestBody);
/*    */     try {
/* 38 */       UnmarshalledPojoData objUnmarshalledPojoData = new JsonUnmarshaller().unmarshal(new FetchUserDetailsRequestPojo().getClass(), requestBody);
/* 39 */       FetchUserDetailsRequestPojo objFetchUserDetailsRequestPojo = (FetchUserDetailsRequestPojo)objUnmarshalledPojoData.getObject();
/* 40 */       //System.out.println("fetch user details controller");
/* 41 */       //System.out.println("fetch user details ::: " + requestBody);
/* 42 */       RestTemplate rest = new RestTemplate();
/* 43 */       HttpHeaders headers = new HttpHeaders();
/* 44 */       headers.setContentType(MediaType.APPLICATION_JSON);
/* 45 */       headers.set("Authorization", GetConfigurationValues.BearerValue);
/* 46 */       HttpEntity entity = new HttpEntity(
/* 47 */         objFetchUserDetailsRequestPojo, headers);
/* 48 */       //System.out.println("objFetchUserDetailsRequestPojo=" + objFetchUserDetailsRequestPojo);
/* 49 */       //System.out.println("RestServiceURIConstants.REST_COMMON_GET_LOGIN," + RestServiceURIConstants.REST_FETCH_USER_DETAILS);
/* 50 */       this.logger.info("fetch user details request {}", objFetchUserDetailsRequestPojo.toString());
/* 51 */       response = rest.postForEntity(RestServiceURIConstants.REST_FETCH_USER_DETAILS, entity, 
/* 52 */         String.class, new Object[0]);
/* 53 */       responseString = (String)response.getBody();
/*    */     }
/*    */     catch (Exception e) {
/* 56 */       this.logger.error("fetch user details error" + e.getMessage());
/* 57 */       e.printStackTrace();
/* 58 */       responseString = "{\"rs\":\"F\",\"rc\":\"FC0001\",\"rd\":\"Sorry! Something went wrong\"}";
/*    */     }
/*    */ 
/* 61 */     //System.out.println("hello..java controller");
/* 62 */     this.logger.info("fetch user details response{}", response);
/* 63 */     return responseString;
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.controller.FetchUserDetailsController
 * JD-Core Version:    0.6.0
 */