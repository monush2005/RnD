/*    */ package in.spicedigital.crm.controller;
/*    */ 
/*    */ import in.spicedigital.crm.contants.GetConfigurationValues;
/*    */ import in.spicedigital.crm.contants.RestServiceURIConstants;
/*    */ import in.spicedigital.crm.pojo.RequestPojo.FetchQueryRptRequestPojo;
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
/*    */ public class FetchQueryRptController
/*    */ {
/* 32 */   private final Logger logger = LoggerFactory.getLogger(getClass());
/*    */ 
/* 34 */   @RequestMapping(value={"/fetchQueryRpt"}, method={org.springframework.web.bind.annotation.RequestMethod.POST}, consumes={"application/json"}, produces={"application/json"})
/*    */   @ResponseBody
/*    */   public String getLogIn(@RequestBody String requestBody, HttpServletRequest request) { String userIpAddress = request.getRemoteAddr();
/* 35 */     //System.out.println("userIpAddress" + userIpAddress);
/* 36 */     String responseString = null;
/* 37 */     ResponseEntity response = null;
/* 38 */     //System.out.println("fetch query report ::: " + requestBody);
/*    */     try {
/* 40 */       UnmarshalledPojoData objUnmarshalledPojoData = new JsonUnmarshaller().unmarshal(new FetchQueryRptRequestPojo().getClass(), requestBody);
/* 41 */       FetchQueryRptRequestPojo objFetchQueryRptRequestPojo = (FetchQueryRptRequestPojo)objUnmarshalledPojoData.getObject();
/* 42 */       //System.out.println("Fetch query report controller");
/* 43 */       RestTemplate rest = new RestTemplate();
/* 44 */       HttpHeaders headers = new HttpHeaders();
/* 45 */       headers.setContentType(MediaType.APPLICATION_JSON);
/* 46 */       headers.set("Authorization", GetConfigurationValues.BearerValue);
/* 47 */       HttpEntity entity = new HttpEntity(objFetchQueryRptRequestPojo, headers);
/* 48 */       //System.out.println("objFetchQueryRptRequestPojo=" + objFetchQueryRptRequestPojo);
/* 49 */       //System.out.println("RestServiceURIConstants.REST_COMMON_FETCH_QUERY_REPORT," + RestServiceURIConstants.REST_COMMON_FETCH_QUERY_REPORT);
/* 50 */       this.logger.info("Fetch query report request {}", objFetchQueryRptRequestPojo.toString());
/* 51 */       response = rest.postForEntity(RestServiceURIConstants.REST_COMMON_FETCH_QUERY_REPORT, entity, 
/* 52 */         String.class, new Object[0]);
/* 53 */       responseString = (String)response.getBody();
/*    */     }
/*    */     catch (Exception e) {
/* 56 */       this.logger.info("Fetch query report error" + e.getMessage());
/* 57 */       e.printStackTrace();
/* 58 */       responseString = "{\"rs\":\"F\",\"rc\":\"FC0001\",\"rd\":\"Sorry! Something went wrong\"}";
/*    */     }
/*    */ 
/* 61 */     //System.out.println("hello..java controller");
/* 62 */     this.logger.info("Fetch query report response {}", response);
/* 63 */     return responseString;
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.controller.FetchQueryRptController
 * JD-Core Version:    0.6.0
 */