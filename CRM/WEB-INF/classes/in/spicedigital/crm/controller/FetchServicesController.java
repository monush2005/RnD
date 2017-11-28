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
/*    */ public class FetchServicesController
/*    */ {
/* 30 */   private final Logger logger = LoggerFactory.getLogger(getClass());
/*    */ 
/* 33 */   @RequestMapping(value={"/fetchServicess"}, method={org.springframework.web.bind.annotation.RequestMethod.POST}, consumes={"application/json"}, produces={"application/json"})
/*    */   @ResponseBody
/*    */   public String getFetchServices(@RequestBody String requestBody) { ResponseEntity response = null;
/* 34 */     String responseString = null;
/* 35 */     //System.out.println("REQUEST ::: " + requestBody);
/*    */     try {
/* 37 */       UnmarshalledPojoData objUnmarshalledPojoData = new JsonUnmarshaller().unmarshal(new FetchServicesRequestPojo().getClass(), requestBody);
/* 38 */       FetchServicesRequestPojo objFetchServicesRequestPojo = (FetchServicesRequestPojo)objUnmarshalledPojoData.getObject();
/* 39 */       //System.out.println("In fetch services controller");
/* 40 */       RestTemplate rest = new RestTemplate();
/* 41 */       HttpHeaders headers = new HttpHeaders();
/* 42 */       headers.setContentType(MediaType.APPLICATION_JSON);
/* 43 */       headers.set("Authorization", GetConfigurationValues.BearerValue);
/* 44 */       //System.out.println("RestServiceURIConstants.REST_COMMON_FETCH_SERVICES" + RestServiceURIConstants.REST_COMMON_FETCH_SERVICES);
/* 45 */       HttpEntity entity = new HttpEntity(
/* 46 */         objFetchServicesRequestPojo, headers);
/* 47 */       this.logger.info("Fetch services request {}", objFetchServicesRequestPojo.toString());
/* 48 */       response = rest.postForEntity(RestServiceURIConstants.REST_COMMON_FETCH_SERVICES, entity, 
/* 49 */         String.class, new Object[0]);
/* 50 */       responseString = (String)response.getBody();
/* 51 */       //System.out.println("*************" + (String)response.getBody());
/*    */     } catch (Exception e) {
/* 53 */       this.logger.info("Fetch services error" + e.getMessage());
/* 54 */       e.printStackTrace();
/* 55 */       responseString = "{\"rs\":\"F\",\"rc\":\"FC0001\",\"rd\":\"Sorry! Something went wrong\"}";
/*    */     }
/* 57 */     this.logger.info("Fetch services response {}" + response);
/* 58 */     return responseString;
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.controller.FetchServicesController
 * JD-Core Version:    0.6.0
 */