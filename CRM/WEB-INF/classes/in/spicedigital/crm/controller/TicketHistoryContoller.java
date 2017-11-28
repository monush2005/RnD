/*    */ package in.spicedigital.crm.controller;
/*    */ 
/*    */ import in.spicedigital.crm.contants.GetConfigurationValues;
/*    */ import in.spicedigital.crm.contants.RestServiceURIConstants;
/*    */ import in.spicedigital.crm.pojo.RequestPojo.TicketHistoryRequestPojo;
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
/*    */ public class TicketHistoryContoller
/*    */ {
/* 29 */   private final Logger logger = LoggerFactory.getLogger(getClass());
/*    */ 
/* 32 */   @RequestMapping(value={"/ticketHistory"}, method={org.springframework.web.bind.annotation.RequestMethod.POST}, consumes={"application/json"}, produces={"application/json"})
/*    */   @ResponseBody
/*    */   public String ticketHistory(@RequestBody String requestBody) { String responseString = null;
/* 33 */     ResponseEntity response = null;
/* 34 */     //System.out.println("REQUEST ::: " + requestBody);
/*    */     try {
/* 36 */       UnmarshalledPojoData objUnmarshalledPojoData = new JsonUnmarshaller().unmarshal(new TicketHistoryRequestPojo().getClass(), requestBody);
/* 37 */       TicketHistoryRequestPojo objViewTicketRequestPojo = (TicketHistoryRequestPojo)objUnmarshalledPojoData.getObject();
/* 38 */       //System.out.println("Ticket Historycontroller");
/* 39 */       RestTemplate rest = new RestTemplate();
/* 40 */       HttpHeaders headers = new HttpHeaders();
/* 41 */       headers.setContentType(MediaType.APPLICATION_JSON);
/* 42 */       headers.set("Authorization", GetConfigurationValues.BearerValue);
/* 43 */       HttpEntity entity = new HttpEntity(
/* 44 */         objViewTicketRequestPojo, headers);
/* 45 */       this.logger.info("Ticket history request {}", objViewTicketRequestPojo.toString());
/* 46 */       response = rest.postForEntity(RestServiceURIConstants.REST_COMMON_TICKET_HISTORY, entity, 
/* 47 */         String.class, new Object[0]);
/* 48 */       responseString = (String)response.getBody();
/*    */     }
/*    */     catch (Exception e) {
/* 51 */       this.logger.info("Ticket history error" + e.getMessage());
/* 52 */       responseString = "{\"rs\":\"F\",\"rc\":\"FC0001\",\"rd\":\"Sorry! Something went wrong\"}";
/*    */     }
/* 54 */     this.logger.info("Ticket history response {}", response);
/* 55 */     return responseString;
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.controller.TicketHistoryContoller
 * JD-Core Version:    0.6.0
 */