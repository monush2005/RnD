/*    */ package in.spicedigital.crm.controller;
/*    */ 
/*    */ import in.spicedigital.crm.contants.GetConfigurationValues;
/*    */ import in.spicedigital.crm.contants.RestServiceURIConstants;
/*    */ import in.spicedigital.crm.pojo.RequestPojo.GenerateTicketRequestPojo;
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
/*    */ public class GenerateTicketController
/*    */ {
/* 29 */   private final Logger logger = LoggerFactory.getLogger(getClass());
/*    */ 
/* 34 */   @RequestMapping(value={"/generateTicket"}, method={org.springframework.web.bind.annotation.RequestMethod.POST}, consumes={"application/json"}, produces={"application/json"})
/*    */   @ResponseBody
/*    */   public String getLogIn(@RequestBody String requestBody) { String responseString = null;
/* 35 */     ResponseEntity response = null;
/* 36 */     //System.out.println("REQUEST ::: " + requestBody);
/*    */     try {
/* 38 */       UnmarshalledPojoData objUnmarshalledPojoData = new JsonUnmarshaller().unmarshal(new GenerateTicketRequestPojo().getClass(), requestBody);
/* 39 */       GenerateTicketRequestPojo objGenerateTicketRequestPojo = (GenerateTicketRequestPojo)objUnmarshalledPojoData.getObject();
/* 40 */       //System.out.println("in Generate Ticket controller");
/* 41 */       RestTemplate rest = new RestTemplate();
/* 42 */       HttpHeaders headers = new HttpHeaders();
/* 43 */       headers.setContentType(MediaType.APPLICATION_JSON);
/* 44 */       headers.set("Authorization", GetConfigurationValues.BearerValue);
/* 45 */       HttpEntity entity = new HttpEntity(
/* 46 */         objGenerateTicketRequestPojo, headers);
/* 47 */       this.logger.info("generate ticket request {}", objGenerateTicketRequestPojo.toString());
/*    */ 
/* 49 */       response = rest.postForEntity(RestServiceURIConstants.REST_COMMON_GENERATE_TICKET, entity, 
/* 50 */         String.class, new Object[0]);
/* 51 */       //System.out.println("Generate Ticket response" + (String)response.getBody());
/* 52 */       responseString = (String)response.getBody();
/*    */     }
/*    */     catch (Exception e) {
/* 55 */       this.logger.error("generate ticket error ", e.getMessage());
/* 56 */       e.printStackTrace();
/* 57 */       responseString = "{\"rs\":\"F\",\"rc\":\"FC0001\",\"rd\":\"Sorry! Something went wrong\"}";
/*    */     }
/*    */ 
/* 60 */     this.logger.info("generate ticket response  {}" + response);
/* 61 */     return responseString;
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.controller.GenerateTicketController
 * JD-Core Version:    0.6.0
 */