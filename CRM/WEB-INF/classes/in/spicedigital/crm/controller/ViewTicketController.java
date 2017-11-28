/*    */ package in.spicedigital.crm.controller;
/*    */ 
/*    */ import in.spicedigital.crm.contants.GetConfigurationValues;
/*    */ import in.spicedigital.crm.contants.RestServiceURIConstants;
/*    */ import in.spicedigital.crm.pojo.RequestPojo.ViewTicketRequestPojo;
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
/*    */ public class ViewTicketController
/*    */ {
/* 30 */   private final Logger logger = LoggerFactory.getLogger(getClass());
/*    */ 
/* 35 */   @RequestMapping(value={"/viewtickets"}, method={org.springframework.web.bind.annotation.RequestMethod.POST}, consumes={"application/json"}, produces={"application/json"})
/*    */   @ResponseBody
/*    */   public String viewTickets(@RequestBody String requestBody) { String responseString = null;
/* 36 */     ResponseEntity response = null;
/* 37 */     //System.out.println("view ticket request REQUEST ::: " + requestBody);
/*    */     try {
/* 39 */       UnmarshalledPojoData objUnmarshalledPojoData = new JsonUnmarshaller().unmarshal(new ViewTicketRequestPojo().getClass(), requestBody);
/* 40 */       ViewTicketRequestPojo objViewTicketRequestPojo = (ViewTicketRequestPojo)objUnmarshalledPojoData.getObject();
/* 41 */       //System.out.println("in view tickets controller");
/* 42 */       //System.out.println("RestServiceURIConstants.REST_COMMON_VIEW_TICKETS" + RestServiceURIConstants.REST_COMMON_VIEW_TICKETS);
/* 43 */       RestTemplate rest = new RestTemplate();
/* 44 */       HttpHeaders headers = new HttpHeaders();
/* 45 */       headers.setContentType(MediaType.APPLICATION_JSON);
/* 46 */       headers.set("Authorization", GetConfigurationValues.BearerValue);
/* 47 */       HttpEntity entity = new HttpEntity(
/* 48 */         objViewTicketRequestPojo, headers);
/* 49 */       //System.out.println(RestServiceURIConstants.REST_COMMON_VIEW_TICKETS);
/* 50 */       //System.out.println("view ticket request:" + objViewTicketRequestPojo.toString());
/* 51 */       this.logger.info("view ticket request {}", objViewTicketRequestPojo.toString());
/* 52 */       response = rest.postForEntity(RestServiceURIConstants.REST_COMMON_VIEW_TICKETS, entity, 
/* 53 */         String.class, new Object[0]);
/* 54 */       responseString = (String)response.getBody();
/* 55 */       //System.out.println("view ticket response:*****" + ((String)response.getBody()).toString());
/*    */     }
/*    */     catch (Exception e)
/*    */     {
/* 59 */       this.logger.error("view ticket error", e.getMessage());
/* 60 */       e.printStackTrace();
/* 61 */       responseString = "{\"rs\":\"F\",\"rc\":\"FC0001\",\"rd\":\"Sorry! Something went wrong\"}";
/*    */     }
/* 63 */     this.logger.info("view ticket response {}" + response);
/* 64 */     return responseString;
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.controller.ViewTicketController
 * JD-Core Version:    0.6.0
 */