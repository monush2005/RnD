/*    */ package in.spicedigital.crm.controller;
/*    */ 
/*    */ import in.spicedigital.crm.contants.RestServiceURIConstants;
/*    */ import in.spicedigital.crm.pojo.RequestPojo.ViewLiveAgentsRequestPojo;
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
/*    */ public class ViewLiveAgentsController
/*    */ {
/* 35 */   private final Logger logger = LoggerFactory.getLogger(getClass());
/*    */ 
/* 38 */   @RequestMapping(value={"/viewLiveAgents"}, method={org.springframework.web.bind.annotation.RequestMethod.POST}, consumes={"application/json"}, produces={"application/json"})
/*    */   @ResponseBody
/*    */   public String getLogIn(@RequestBody String requestBody, HttpServletRequest request) { String userIpAddress = request.getRemoteAddr();
/* 39 */     //System.out.println("userIpAddress" + userIpAddress);
/* 40 */     String responseString = null;
/* 41 */     ResponseEntity response = null;
/* 42 */     //System.out.println("view live history ::: " + requestBody);
/*    */     try {
/* 44 */       UnmarshalledPojoData objUnmarshalledPojoData = new JsonUnmarshaller().unmarshal(new ViewLiveAgentsRequestPojo().getClass(), requestBody);
/* 45 */       ViewLiveAgentsRequestPojo objViewLiveAgentsRequestPojo = (ViewLiveAgentsRequestPojo)objUnmarshalledPojoData.getObject();
/* 46 */       //System.out.println("view live histoty controller");
/* 47 */       RestTemplate rest = new RestTemplate();
/* 48 */       HttpHeaders headers = new HttpHeaders();
/*    */ 
/* 50 */       headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
/* 51 */       HttpEntity entity = new HttpEntity(
/* 52 */         objViewLiveAgentsRequestPojo, headers);
/* 53 */       MultiValueMap form = new LinkedMultiValueMap();
/* 54 */       form.add("startDate", objViewLiveAgentsRequestPojo.getStartDate());
/* 55 */       form.add("endDate", objViewLiveAgentsRequestPojo.getEndDate());
/* 56 */       form.add("agentId", objViewLiveAgentsRequestPojo.getAgentId());
/* 57 */       form.add("mobileNum", objViewLiveAgentsRequestPojo.getMobileNum());
/* 58 */       //System.out.println("objViewLiveAgentsRequestPojo=" + objViewLiveAgentsRequestPojo);
/* 59 */       //System.out.println("RestServiceURIConstants.REST_COMMON_VIEW_FEEDBACK," + RestServiceURIConstants.REST_COMMON_VIEW_LIVE_AGENTS);
/* 60 */       this.logger.info("view live history request {}", objViewLiveAgentsRequestPojo.toString());
/*    */ 
/* 63 */       responseString = (String)rest.postForObject(RestServiceURIConstants.REST_COMMON_VIEW_LIVE_AGENTS, form, 
/* 64 */         String.class, new Object[0]);
/*    */     }
/*    */     catch (Exception e)
/*    */     {
/* 68 */       this.logger.info("view live history error" + e.getMessage());
/* 69 */       e.printStackTrace();
/* 70 */       responseString = "{\"rs\":\"F\",\"rc\":\"FC0001\",\"rd\":\"Sorry! Something went wrong\"}";
/*    */     }
/* 72 */     this.logger.info("view live history response{}", response);
/* 73 */     return responseString;
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.controller.ViewLiveAgentsController
 * JD-Core Version:    0.6.0
 */