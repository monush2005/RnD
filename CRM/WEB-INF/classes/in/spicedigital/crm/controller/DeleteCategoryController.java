/*    */ package in.spicedigital.crm.controller;
/*    */ 
/*    */ import in.spicedigital.crm.contants.GetConfigurationValues;
/*    */ import in.spicedigital.crm.contants.RestServiceURIConstants;
/*    */ import in.spicedigital.crm.pojo.RequestPojo.DeleteCategoryRequestPojo;
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
/*    */ public class DeleteCategoryController
/*    */ {
/* 26 */   private final Logger logger = LoggerFactory.getLogger(getClass());
/*    */ 
/* 30 */   @RequestMapping(value={"/delCat"}, method={org.springframework.web.bind.annotation.RequestMethod.POST}, consumes={"application/json"}, produces={"application/json"})
/*    */   @ResponseBody
/*    */   public String getFetchServices(@RequestBody String requestBody) { //System.out.println("DEL CATEGORY REQUEST ::: " + requestBody);
/* 31 */     String responseString = null;
/* 32 */     ResponseEntity response = null;
/*    */     try {
/* 34 */       UnmarshalledPojoData objUnmarshalledPojoData = new JsonUnmarshaller().unmarshal(new DeleteCategoryRequestPojo().getClass(), requestBody);
/* 35 */       DeleteCategoryRequestPojo objDeleteCategoryRequestPojo = (DeleteCategoryRequestPojo)objUnmarshalledPojoData.getObject();
/* 36 */       //System.out.println("in del category controller");
/* 37 */       RestTemplate rest = new RestTemplate();
/* 38 */       HttpHeaders headers = new HttpHeaders();
/* 39 */       headers.setContentType(MediaType.APPLICATION_JSON);
/* 40 */       headers.set("Authorization", GetConfigurationValues.BearerValue);
/* 41 */       HttpEntity entity = new HttpEntity(
/* 42 */         objDeleteCategoryRequestPojo, headers);
/* 43 */       //System.out.println("objFetchCategoriesRequestPojo" + objDeleteCategoryRequestPojo.toString());
/* 44 */       this.logger.info("delete category request {}", objDeleteCategoryRequestPojo.toString());
/* 45 */       response = rest.postForEntity(RestServiceURIConstants.REST_COMMON_DELETE_CATEGORY, entity, 
/* 46 */         String.class, new Object[0]);
/* 47 */       responseString = (String)response.getBody();
/* 48 */       //System.out.println("del category response" + (String)response.getBody());
/*    */     }
/*    */     catch (Exception e)
/*    */     {
/* 52 */       this.logger.info("delete category error" + e.getMessage());
/* 53 */       e.printStackTrace();
/* 54 */       responseString = "{\"rs\":\"F\",\"rc\":\"FC0001\",\"rd\":\"Sorry! Something went wrong\"}";
/*    */     }
/* 56 */     this.logger.info("delete category response {}" + ((String)response.getBody()).toString());
/* 57 */     return responseString;
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.controller.DeleteCategoryController
 * JD-Core Version:    0.6.0
 */