/*    */ package in.spicedigital.crm.controller;
/*    */ 
/*    */ import in.spicedigital.crm.contants.GetConfigurationValues;
/*    */ import in.spicedigital.crm.contants.RestServiceURIConstants;
/*    */ import in.spicedigital.crm.pojo.RequestPojo.FetchSubCategoriesRequestPojo;
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
/*    */ public class FetchSubCategoriesController
/*    */ {
/* 30 */   private final Logger logger = LoggerFactory.getLogger(getClass());
/*    */ 
/* 35 */   @RequestMapping(value={"/fetchSubCategoriess"}, method={org.springframework.web.bind.annotation.RequestMethod.POST}, consumes={"application/json"}, produces={"application/json"})
/*    */   @ResponseBody
/*    */   public String getSubCategories(@RequestBody String requestBody) { //System.out.println("REQUEST ::: " + requestBody);
/* 36 */     ResponseEntity response = null;
/* 37 */     String responseString = null;
/*    */     try {
/* 39 */       UnmarshalledPojoData objUnmarshalledPojoData = new JsonUnmarshaller().unmarshal(new FetchSubCategoriesRequestPojo().getClass(), requestBody);
/* 40 */       FetchSubCategoriesRequestPojo objFetchSubCategoriesRequestPojo = (FetchSubCategoriesRequestPojo)objUnmarshalledPojoData.getObject();
/* 41 */       //System.out.println("FetchSubCategoriesController ");
/* 42 */       RestTemplate rest = new RestTemplate();
/* 43 */       HttpHeaders headers = new HttpHeaders();
/* 44 */       headers.setContentType(MediaType.APPLICATION_JSON);
/* 45 */       headers.set("Authorization", GetConfigurationValues.BearerValue);
/* 46 */       HttpEntity entity = new HttpEntity(
/* 47 */         objFetchSubCategoriesRequestPojo, headers);
/* 48 */       //System.out.println("objFetchSubCategoriesRequestPojo" + objFetchSubCategoriesRequestPojo);
/* 49 */       this.logger.info("fetch sub categires request {}", objFetchSubCategoriesRequestPojo.toString());
/* 50 */       response = rest.postForEntity(RestServiceURIConstants.REST_COMMON_FETCH_SUB_CATEGORIES, entity, 
/* 51 */         String.class, new Object[0]);
/* 52 */       //System.out.println((String)response.getBody());
/* 53 */       responseString = (String)response.getBody();
/*    */     }
/*    */     catch (Exception e) {
/* 56 */       this.logger.error("fetch sub categires error ", e.getMessage());
/* 57 */       e.printStackTrace();
/* 58 */       responseString = "{\"rs\":\"F\",\"rc\":\"FC0001\",\"rd\":\"Sorry! Something went wrong\"}";
/*    */     }
/* 60 */     this.logger.info("fetch sub categires response {}" + response);
/* 61 */     return responseString;
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.controller.FetchSubCategoriesController
 * JD-Core Version:    0.6.0
 */