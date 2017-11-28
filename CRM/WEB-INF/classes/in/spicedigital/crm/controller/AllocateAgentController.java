/*    */ package in.spicedigital.crm.controller;
/*    */ 
/*    */ import com.google.gson.Gson;
/*    */ import com.google.gson.reflect.TypeToken;
/*    */ import in.spicedigital.crm.contants.GetConfigurationValues;
/*    */ import in.spicedigital.crm.contants.RestServiceURIConstants;
/*    */ import in.spicedigital.crm.pojo.RequestPojo.AllocateAgentArrRequestPojo;
/*    */ import in.spicedigital.crm.pojo.RequestPojo.AllocateAgentArrRequestPojo.AllocateAgentList;
/*    */ import java.io.PrintStream;
/*    */ import java.lang.reflect.Type;
/*    */ import java.util.List;
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
/*    */ public class AllocateAgentController
/*    */ {
/* 31 */   private final Logger logger = LoggerFactory.getLogger(getClass());
/*    */ 
/* 34 */   @RequestMapping(value={"/allocateAgent"}, method={org.springframework.web.bind.annotation.RequestMethod.POST}, consumes={"application/json"}, produces={"application/json"})
/*    */   @ResponseBody
/*    */   public String getLogIn(@RequestBody String requestBody) { //System.out.println("REQUEST ::: " + requestBody);
/* 35 */     ResponseEntity response = null;
/* 36 */     String responseString = null;
/*    */ 
/* 39 */     Type collectionType = new TypeToken() {  }
/* 39 */     .getType();
/* 40 */     List objAllocateAgentArrRequestPojo = (List)new Gson().fromJson(requestBody, collectionType);
/* 41 */     AllocateAgentArrRequestPojo.AllocateAgentList allocateAgentList = null;
/* 42 */     //System.out.println("***********************************TEMP REQUEST::: " + new Gson().toJson(objAllocateAgentArrRequestPojo));
/* 43 */     AllocateAgentArrRequestPojo objParentClass = new AllocateAgentArrRequestPojo();
/*    */     try {
/* 45 */       objParentClass.setAllocateAgentList(objAllocateAgentArrRequestPojo);
/* 46 */       //System.out.println("********************" + allocateAgentList);
/*    */     } catch (Exception e) {
/* 48 */       //System.out.println("in erroor");
/* 49 */       //System.out.println(e);
/*    */     }
/* 51 */     //System.out.println("in AllocateAgentController ");
/* 52 */     RestTemplate rest = new RestTemplate();
/* 53 */     HttpHeaders headers = new HttpHeaders();
/* 54 */     headers.setContentType(MediaType.APPLICATION_JSON);
/* 55 */     headers.set("Authorization", GetConfigurationValues.BearerValue);
/*    */ 
/* 57 */     //System.out.println("FINAL REQUEST::: " + new Gson().toJson(objParentClass));
/*    */     try {
/* 59 */       HttpEntity entity = new HttpEntity(objParentClass, headers);
/* 60 */       this.logger.info("Allocate agent request {}", objParentClass.toString());
/* 61 */       response = rest.postForEntity(RestServiceURIConstants.REST_COMMON_ALLOCATE_AGENT, entity, 
/* 62 */         String.class, new Object[0]);
/* 63 */       responseString = (String)response.getBody();
/*    */     }
/*    */     catch (Exception e) {
/* 66 */       this.logger.error("Allocate agent error" + e.getMessage());
/* 67 */       e.printStackTrace();
/* 68 */       responseString = "{\"rs\":\"F\",\"rc\":\"FC0001\",\"rd\":\"Sorry! Something went wrong\"}";
/*    */     }
/* 70 */     this.logger.info("Allocate agent response{}", response);
/* 71 */     return responseString;
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.controller.AllocateAgentController
 * JD-Core Version:    0.6.0
 */