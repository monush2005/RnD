/*    */ package in.spicedigital.crm.controller;
/*    */ 
/*    */ import in.spicedigital.crm.contants.GetConfigurationValues;
/*    */ import in.spicedigital.crm.contants.RestServiceURIConstants;
/*    */ import in.spicedigital.crm.pojo.RequestPojo.BreakRequestPojo;
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
/*    */ public class BreakController
/*    */ {
/* 32 */   private final Logger logger = LoggerFactory.getLogger(getClass());
/*    */ 
/* 35 */   @RequestMapping(value={"/breakReq"}, method={org.springframework.web.bind.annotation.RequestMethod.POST}, consumes={"application/json"}, produces={"application/json"})
/*    */   @ResponseBody
/*    */   public String getLogIn(@RequestBody String requestBody, HttpServletRequest request) { String userIpAddress = request.getRemoteAddr();
/* 36 */     //System.out.println("userIpAddress" + userIpAddress);
/* 37 */     String responseString = null;
/* 38 */     ResponseEntity response = null;
/* 39 */     //System.out.println("Break controller ::: " + requestBody);
/*    */     try {
/* 41 */       UnmarshalledPojoData objUnmarshalledPojoData = new JsonUnmarshaller().unmarshal(new BreakRequestPojo().getClass(), requestBody);
/* 42 */       BreakRequestPojo objBreakRequestPojo = (BreakRequestPojo)objUnmarshalledPojoData.getObject();
/* 43 */       //System.out.println("in break  controller");
/* 44 */       //System.out.println("Break controller ::: " + requestBody);
/* 45 */       RestTemplate rest = new RestTemplate();
/* 46 */       HttpHeaders headers = new HttpHeaders();
/* 47 */       headers.setContentType(MediaType.APPLICATION_JSON);
/* 48 */       headers.set("Authorization", GetConfigurationValues.BearerValue);
/* 49 */       HttpEntity entity = new HttpEntity(
/* 50 */         objBreakRequestPojo, headers);
/* 51 */       //System.out.println("objBreakRequestPojo=" + objBreakRequestPojo);
/* 52 */       //System.out.println("RestServiceURIConstants.REST_COMMON_BREAK_REQUEST," + RestServiceURIConstants.REST_COMMON_BREAK_REQUEST);
/* 53 */       this.logger.info("Break controller request {}", objBreakRequestPojo.toString());
/* 54 */       response = rest.postForEntity(RestServiceURIConstants.REST_COMMON_BREAK_REQUEST, entity, 
/* 55 */         String.class, new Object[0]);
/* 56 */       responseString = (String)response.getBody();
/*    */     }
/*    */     catch (Exception e) {
/* 59 */       this.logger.info("Break controller error" + e.getMessage());
/* 60 */       e.printStackTrace();
/* 61 */       responseString = "{\"rs\":\"F\",\"rc\":\"FC0001\",\"rd\":\"Sorry! Something went wrong\"}";
/*    */     }
/*    */ 
/* 64 */     //System.out.println("hello..java controller");
/* 65 */     this.logger.info("Break controller response {}", response);
/* 66 */     return responseString;
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.controller.BreakController
 * JD-Core Version:    0.6.0
 */