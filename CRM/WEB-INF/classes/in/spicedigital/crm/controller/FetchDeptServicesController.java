/*    */ package in.spicedigital.crm.controller;
/*    */ 
/*    */ import in.spicedigital.crm.contants.GetConfigurationValues;
/*    */ import in.spicedigital.crm.contants.RestServiceURIConstants;
/*    */ import in.spicedigital.crm.pojo.RequestPojo.FetchServicesRequestPojo;
/*    */ import in.spicedigital.scommerce.utility.parser.json.unmarshaller.JsonUnmarshaller;
/*    */ import in.spicedigital.scommerce.utility.parser.pojo.UnmarshalledPojoData;
/*    */ import java.io.PrintStream;
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
/*    */ public class FetchDeptServicesController
/*    */ {
/* 30 */   private final Logger logger = LoggerFactory.getLogger(getClass());
/*    */ 
/* 34 */   @RequestMapping(value={"/fetchDeptService"}, method={org.springframework.web.bind.annotation.RequestMethod.POST}, consumes={"application/json"}, produces={"application/json"})
/*    */   @ResponseBody
/*    */   public String getFetchServices(@RequestBody String requestBody) { ResponseEntity response = null;
/* 35 */     String responseString = null;
/* 36 */     //System.out.println("REQUEST ::: " + requestBody);
/*    */     try {
/* 38 */       UnmarshalledPojoData objUnmarshalledPojoData = new JsonUnmarshaller().unmarshal(new FetchServicesRequestPojo().getClass(), requestBody);
/* 39 */       FetchServicesRequestPojo objFetchServicesRequestPojo = (FetchServicesRequestPojo)objUnmarshalledPojoData.getObject();
/* 40 */       //System.out.println("fetch dept services controller");
/* 41 */       RestTemplate rest = new RestTemplate();
/* 42 */       HttpHeaders headers = new HttpHeaders();
/* 43 */       headers.setContentType(MediaType.APPLICATION_JSON);
/* 44 */       headers.set("Authorization", GetConfigurationValues.BearerValue);
/* 45 */       //System.out.println("RestServiceURIConstants.REST_COMMON_FETCH_SERVICES" + RestServiceURIConstants.REST_COMMON_FETCH_DEPT_SERVICES);
/* 46 */       HttpEntity entity = new HttpEntity(
/* 47 */         objFetchServicesRequestPojo, headers);
/* 48 */       this.logger.info("Fetch department service request {}", objFetchServicesRequestPojo.toString());
/* 49 */       response = rest.postForEntity(RestServiceURIConstants.REST_COMMON_FETCH_DEPT_SERVICES, entity, 
/* 50 */         String.class, new Object[0]);
/* 51 */       responseString = (String)response.getBody();
/* 52 */       //System.out.println("*************" + (String)response.getBody());
/*    */     } catch (Exception e) {
/* 54 */       this.logger.info("Fetch department service error" + e.getMessage());
/* 55 */       e.printStackTrace();
/* 56 */       responseString = "{\"rs\":\"F\",\"rc\":\"FC0001\",\"rd\":\"Sorry! Something went wrong\"}";
/*    */     }
/* 58 */     this.logger.info("Fetch department service response {}", response);
/* 59 */     return responseString;
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.controller.FetchDeptServicesController
 * JD-Core Version:    0.6.0
 */