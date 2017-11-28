/*    */ package in.spicedigital.crm.controller;
/*    */ 
/*    */ import in.spicedigital.crm.contants.GetConfigurationValues;
/*    */ import in.spicedigital.crm.contants.RestServiceURIConstants;
/*    */ import in.spicedigital.crm.pojo.RequestPojo.FetchBreaksRequestPojo;
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
/*    */ public class FetchBreaksController
/*    */ {
/* 33 */   private final Logger logger = LoggerFactory.getLogger(getClass());
/*    */ 
/* 36 */   @RequestMapping(value={"/fetchBrks"}, method={org.springframework.web.bind.annotation.RequestMethod.POST}, consumes={"application/json"}, produces={"application/json"})
/*    */   @ResponseBody
/*    */   public String getLogIn(@RequestBody String requestBody, HttpServletRequest request) { String userIpAddress = request.getRemoteAddr();
/* 37 */     //System.out.println("userIpAddress" + userIpAddress);
/* 38 */     String responseString = null;
/* 39 */     ResponseEntity response = null;
/* 40 */     //System.out.println("Edit agent ::: " + requestBody);
/*    */     try {
/* 42 */       UnmarshalledPojoData objUnmarshalledPojoData = new JsonUnmarshaller().unmarshal(new FetchBreaksRequestPojo().getClass(), requestBody);
/* 43 */       FetchBreaksRequestPojo objFetchBreaksRequestPojo = (FetchBreaksRequestPojo)objUnmarshalledPojoData.getObject();
/* 44 */       //System.out.println("fetch breaks controller");
/* 45 */       RestTemplate rest = new RestTemplate();
/* 46 */       HttpHeaders headers = new HttpHeaders();
/* 47 */       headers.setContentType(MediaType.APPLICATION_JSON);
/* 48 */       headers.set("Authorization", GetConfigurationValues.BearerValue);
/* 49 */       HttpEntity entity = new HttpEntity(objFetchBreaksRequestPojo, headers);
/* 50 */       //System.out.println("objFetchBreaksRequestPojo=" + objFetchBreaksRequestPojo);
/* 51 */       //System.out.println("RestServiceURIConstants.REST_COMMON_FETCH_BREAKS," + RestServiceURIConstants.REST_COMMON_FETCH_BREAKS);
/* 52 */       this.logger.info("Fetch breaks request {}", objFetchBreaksRequestPojo.toString());
/* 53 */       response = rest.postForEntity(RestServiceURIConstants.REST_COMMON_FETCH_BREAKS, entity, 
/* 54 */         String.class, new Object[0]);
/* 55 */       responseString = (String)response.getBody();
/*    */     }
/*    */     catch (Exception e) {
/* 58 */       this.logger.info("Fetch breaks error" + e.getMessage());
/* 59 */       e.printStackTrace();
/* 60 */       responseString = "{\"rs\":\"F\",\"rc\":\"FC0001\",\"rd\":\"Sorry! Something went wrong\"}";
/*    */     }
/* 62 */     this.logger.info("Fetch breaks response {}", response);
/* 63 */     return responseString;
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.controller.FetchBreaksController
 * JD-Core Version:    0.6.0
 */