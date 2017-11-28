/*    */ package in.spicedigital.crm.controller;
/*    */ 
/*    */ import in.spicedigital.crm.contants.RestServiceURIConstants;
/*    */ import in.spicedigital.crm.pojo.RequestPojo.PreAgentHistoryRequestPojo;
/*    */ import in.spicedigital.scommerce.utility.parser.json.unmarshaller.JsonUnmarshaller;
/*    */ import in.spicedigital.scommerce.utility.parser.pojo.UnmarshalledPojoData;
/*    */ import java.io.PrintStream;
/*    */ import javax.servlet.http.HttpServletRequest;
/*    */ import org.slf4j.Logger;
/*    */ import org.slf4j.LoggerFactory;
/*    */ import org.springframework.http.HttpEntity;
/*    */ import org.springframework.http.HttpHeaders;
/*    */ import org.springframework.http.MediaType;
/*    */ import org.springframework.http.ResponseEntity;
/*    */ import org.springframework.stereotype.Controller;
/*    */ import org.springframework.util.LinkedMultiValueMap;
/*    */ import org.springframework.util.MultiValueMap;
/*    */ import org.springframework.web.bind.annotation.RequestBody;
/*    */ import org.springframework.web.bind.annotation.RequestMapping;
/*    */ import org.springframework.web.bind.annotation.ResponseBody;
/*    */ import org.springframework.web.client.RestTemplate;
/*    */ 
/*    */ @Controller
/*    */ public class PreAgentHistoryController
/*    */ {
/* 36 */   private final Logger logger = LoggerFactory.getLogger(getClass());
/*    */ 
/* 39 */   @RequestMapping(value={"/agtHistory"}, method={org.springframework.web.bind.annotation.RequestMethod.POST}, consumes={"application/json"}, produces={"application/json"})
/*    */   @ResponseBody
/*    */   public String getLogIn(@RequestBody String requestBody, HttpServletRequest request) { String userIpAddress = request.getRemoteAddr();
/* 40 */     //System.out.println("userIpAddress" + userIpAddress);
/* 41 */     String responseString = null;
/* 42 */     ResponseEntity response = null;
/* 43 */     //System.out.println("Pre agent history ::: " + requestBody);
/*    */     try {
/* 45 */       UnmarshalledPojoData objUnmarshalledPojoData = new JsonUnmarshaller().unmarshal(new PreAgentHistoryRequestPojo().getClass(), requestBody);
/* 46 */       PreAgentHistoryRequestPojo objPreAgentHistoryRequestPojo = (PreAgentHistoryRequestPojo)objUnmarshalledPojoData.getObject();
/* 47 */       //System.out.println("Pre agent history controller");
/* 48 */       RestTemplate rest = new RestTemplate();
/* 49 */       HttpHeaders headers = new HttpHeaders();
/*    */ 
/* 51 */       headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
/* 52 */       HttpEntity entity = new HttpEntity(
/* 53 */         objPreAgentHistoryRequestPojo, headers);
/* 54 */       MultiValueMap form = new LinkedMultiValueMap();
/* 55 */       form.add("startDate", objPreAgentHistoryRequestPojo.getStartDate());
/* 56 */       form.add("endDate", objPreAgentHistoryRequestPojo.getEndDate());
/* 57 */       form.add("agentId", objPreAgentHistoryRequestPojo.getAgentId());
/* 58 */       form.add("mobileNum", objPreAgentHistoryRequestPojo.getMobileNum());
/* 59 */       //System.out.println("objViewLiveAgentsRequestPojo=" + objPreAgentHistoryRequestPojo);
/* 60 */       //System.out.println("RestServiceURIConstants.REST_COMMON_PRE_AGENT_HISTORY," + RestServiceURIConstants.REST_COMMON_PRE_AGENT_HISTORY);
/* 61 */       this.logger.info("Pre agent history request {}", objPreAgentHistoryRequestPojo.toString());
/* 62 */       responseString = (String)rest.postForObject(RestServiceURIConstants.REST_COMMON_PRE_AGENT_HISTORY, form, 
/* 63 */         String.class, new Object[0]);
/*    */     }
/*    */     catch (Exception e)
/*    */     {
/* 67 */       this.logger.info("Pre agent history error" + e.getMessage());
/* 68 */       e.printStackTrace();
/* 69 */       responseString = "{\"rs\":\"F\",\"rc\":\"FC0001\",\"rd\":\"Sorry! Something went wrong\"}";
/*    */     }
/*    */ 
/* 72 */     //System.out.println("hello..java controller");
/* 73 */     this.logger.info("Pre agent history request response {}", response);
/* 74 */     return responseString;
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.controller.PreAgentHistoryController
 * JD-Core Version:    0.6.0
 */