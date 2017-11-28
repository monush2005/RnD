/*    */ package in.spicedigital.crm.controller;
/*    */ 
/*    */ import com.google.gson.Gson;
/*    */ import com.google.gson.reflect.TypeToken;
/*    */ import in.spicedigital.crm.contants.GetConfigurationValues;
/*    */ import in.spicedigital.crm.contants.RestServiceURIConstants;
/*    */ import in.spicedigital.crm.pojo.RequestPojo.UpdateTicketRequestPojo;
/*    */ import in.spicedigital.crm.pojo.RequestPojo.UpdateTicketRequestPojo.UpdateTicketList;
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
/*    */ public class UpdateTicketController
/*    */ {
/* 30 */   private final Logger logger = LoggerFactory.getLogger(getClass());
/*    */ 
/* 33 */   @RequestMapping(value={"/updateTicket"}, method={org.springframework.web.bind.annotation.RequestMethod.POST}, consumes={"application/json"}, produces={"application/json"})
/*    */   @ResponseBody
/*    */   public String getUpdateTicket(@RequestBody String requestBody) { //System.out.println("REQUEST ::: " + requestBody);
/* 34 */     ResponseEntity response = null;
/* 35 */     String responseString = null;
/* 36 */     Type collectionType = new TypeToken() {  }
/* 36 */     .getType();
/* 37 */     List objAllocateAgentArrRequestPojo = (List)new Gson().fromJson(requestBody, collectionType);
/* 38 */     UpdateTicketRequestPojo.UpdateTicketList allocateAgentList = null;
/* 39 */     //System.out.println("***********************************TEMP REQUEST::: " + new Gson().toJson(objAllocateAgentArrRequestPojo));
/* 40 */     UpdateTicketRequestPojo objParentClass = new UpdateTicketRequestPojo();
/*    */     try {
/* 42 */       objParentClass.setUpdateTicketList(objAllocateAgentArrRequestPojo);
/* 43 */       //System.out.println("********************" + allocateAgentList);
/*    */     } catch (Exception e) {
/* 45 */       //System.out.println("in error");
/* 46 */       //System.out.println(e);
/*    */     }
/* 48 */     //System.out.println("in update ticket  controller");
/* 49 */     RestTemplate rest = new RestTemplate();
/* 50 */     HttpHeaders headers = new HttpHeaders();
/* 51 */     headers.setContentType(MediaType.APPLICATION_JSON);
/* 52 */     headers.set("Authorization", GetConfigurationValues.BearerValue);
/* 53 */     //System.out.println("FINAL REQUEST::: " + new Gson().toJson(objParentClass));
/*    */     try {
/* 55 */       HttpEntity entity = new HttpEntity(objParentClass, headers);
/* 56 */       this.logger.info("Update ticket request {}", requestBody);
/* 57 */       response = rest.postForEntity(RestServiceURIConstants.REST_COMMON_UPDATE_TICKET, entity, 
/* 58 */         String.class, new Object[0]);
/* 59 */       responseString = (String)response.getBody();
/*    */     } catch (Exception e) {
/* 61 */       this.logger.error("Update ticket error ", e.getMessage());
/* 62 */       e.printStackTrace();
/* 63 */       responseString = "{\"rs\":\"F\",\"rc\":\"FC0001\",\"rd\":\"Sorry! Something went wrong\"}";
/*    */     }
/* 65 */     this.logger.error("Update ticket response{}", response);
/* 66 */     return responseString;
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.controller.UpdateTicketController
 * JD-Core Version:    0.6.0
 */