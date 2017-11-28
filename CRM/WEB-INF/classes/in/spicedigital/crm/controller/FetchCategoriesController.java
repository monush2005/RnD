/*    */ package in.spicedigital.crm.controller;
/*    */ 
/*    */ import in.spicedigital.crm.contants.GetConfigurationValues;
/*    */ import in.spicedigital.crm.contants.RestServiceURIConstants;
/*    */ import in.spicedigital.crm.pojo.RequestPojo.FetchCategoriesRequestPojo;
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
/*    */ public class FetchCategoriesController
/*    */ {
/* 25 */   private final Logger logger = LoggerFactory.getLogger(getClass());
/*    */ 
/* 29 */   @RequestMapping(value={"/fetchCategoriess"}, method={org.springframework.web.bind.annotation.RequestMethod.POST}, consumes={"application/json"}, produces={"application/json"})
/*    */   @ResponseBody
/*    */   public String getFetchServices(@RequestBody String requestBody) { //System.out.println("fetch categories REQUEST ::: " + requestBody);
/* 30 */     String responseString = null;
/* 31 */     ResponseEntity response = null;
/*    */     try {
/* 33 */       UnmarshalledPojoData objUnmarshalledPojoData = new JsonUnmarshaller().unmarshal(new FetchCategoriesRequestPojo().getClass(), requestBody);
/* 34 */       FetchCategoriesRequestPojo objFetchCategoriesRequestPojo = (FetchCategoriesRequestPojo)objUnmarshalledPojoData.getObject();
/* 35 */       //System.out.println("in fetch categories controller");
/* 36 */       RestTemplate rest = new RestTemplate();
/* 37 */       HttpHeaders headers = new HttpHeaders();
/* 38 */       headers.setContentType(MediaType.APPLICATION_JSON);
/* 39 */       headers.set("Authorization", GetConfigurationValues.BearerValue);
/* 40 */       HttpEntity entity = new HttpEntity(
/* 41 */         objFetchCategoriesRequestPojo, headers);
/* 42 */       //System.out.println("objFetchCategoriesRequestPojo" + objFetchCategoriesRequestPojo.toString());
/* 43 */       this.logger.info("fetch categories request {}", objFetchCategoriesRequestPojo.toString());
/* 44 */       response = rest.postForEntity(RestServiceURIConstants.REST_COMMON_FETCH_CATEGORIES, entity, 
/* 45 */         String.class, new Object[0]);
/* 46 */       responseString = (String)response.getBody();
/* 47 */       //System.out.println("Fetch categories response" + (String)response.getBody());
/*    */     }
/*    */     catch (Exception e)
/*    */     {
/* 51 */       this.logger.info("fetch categories error" + e.getMessage());
/* 52 */       e.printStackTrace();
/* 53 */       responseString = "{\"rs\":\"F\",\"rc\":\"FC0001\",\"rd\":\"Sorry! Something went wrong\"}";
/*    */     }
/* 55 */     this.logger.info("fetch categories response {}" + ((String)response.getBody()).toString());
/* 56 */     return responseString;
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.controller.FetchCategoriesController
 * JD-Core Version:    0.6.0
 */