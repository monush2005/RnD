/*    */ package in.spicedigital.crm.controller;
/*    */ 
/*    */ import in.spicedigital.crm.contants.RestServiceURIConstants;
/*    */ import in.spicedigital.crm.pojo.RequestPojo.AgentChatHistoryRequestPojo;
/*    */ import in.spicedigital.crm.utility.ChatUtility;
/*    */ import in.spicedigital.scommerce.utility.parser.json.unmarshaller.JsonUnmarshaller;
/*    */ import in.spicedigital.scommerce.utility.parser.pojo.UnmarshalledPojoData;
/*    */ import java.io.PrintStream;
/*    */ import java.net.URLEncoder;
/*    */ import javax.servlet.http.HttpServletRequest;
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
/*    */ public class AgentChatHistoryController
/*    */ {
/* 32 */   private final Logger logger = LoggerFactory.getLogger(getClass());
/*    */ 
/* 35 */   @RequestMapping(value={"/agentChatHis"}, method={org.springframework.web.bind.annotation.RequestMethod.POST}, consumes={"application/json"}, produces={"text/plain"})
/*    */   @ResponseBody
/*    */   public String getLogIn(@RequestBody String requestBody, HttpServletRequest request) { String userIpAddress = request.getRemoteAddr();
/* 36 */     //System.out.println("userIpAddress" + userIpAddress);
/* 37 */     String responseString = null;
/* 38 */     ResponseEntity response = null;
/* 39 */     //System.out.println("Agent chat history ::: " + requestBody);
/*    */     try {
/* 41 */       UnmarshalledPojoData objUnmarshalledPojoData = new JsonUnmarshaller().unmarshal(new AgentChatHistoryRequestPojo().getClass(), requestBody);
/* 42 */       AgentChatHistoryRequestPojo objAgentChatHistoryRequestPojo = (AgentChatHistoryRequestPojo)objUnmarshalledPojoData.getObject();
/* 43 */       //System.out.println("in agent chat history controller");
/* 44 */       //System.out.println("Agent chat history request body ::: " + requestBody);
/* 45 */       RestTemplate rest = new RestTemplate();
/* 46 */       HttpHeaders headers = new HttpHeaders();
/* 47 */       headers.setContentType(MediaType.APPLICATION_JSON);
/* 48 */       String encryptedValue = ChatUtility.encrypt(requestBody, "this");
/*    */ 
/* 50 */       HttpEntity entity = new HttpEntity(encryptedValue, headers);
/* 51 */       //System.out.println("RestServiceURIConstants.REST_COMMON_ADD_AGENT," + RestServiceURIConstants.REST_COMMON_AGENT_CHAT_HISTORY);
/* 52 */       this.logger.info("Agent chat history request {}", objAgentChatHistoryRequestPojo.toString());
/* 53 */       response = rest.postForEntity(RestServiceURIConstants.REST_COMMON_AGENT_CHAT_HISTORY, entity, 
/* 54 */         String.class, new Object[0]);
/* 55 */       responseString = ChatUtility.decrypt((String)response.getBody(), "this");
/* 56 */       //System.out.println(" chat history responseString" + responseString);
/*    */     }
/*    */     catch (Exception e) {
/* 59 */       this.logger.info("Agent chat history error" + e.getMessage());
/* 60 */       e.printStackTrace();
/* 61 */       responseString = "{\"rs\":\"F\",\"rc\":\"FC0001\",\"rd\":\"Sorry! Something went wrong\"}";
/*    */     }
/*    */ 
/* 64 */     //System.out.println("hello..java controller");
/* 65 */     this.logger.info("Agent chat history response {}", response);
/*    */ 
/* 67 */     return URLEncoder.encode(responseString);
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.controller.AgentChatHistoryController
 * JD-Core Version:    0.6.0
 */