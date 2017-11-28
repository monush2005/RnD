/*    */ package in.spicedigital.crm.controller;
/*    */ 
/*    */ import in.spicedigital.crm.contants.GetConfigurationValues;
/*    */ import in.spicedigital.crm.contants.RestServiceURIConstants;
/*    */ import in.spicedigital.crm.pojo.RequestPojo.FetchTerminalIdRequestPojo;
/*    */ import in.spicedigital.crm.pojo.ResponsePojo.FetchTerminalIdResPojo;
/*    */ import in.spicedigital.crm.pojo.ResponsePojo.FetchTerminalIdResPojo.PD;
/*    */ import in.spicedigital.scommerce.utility.parser.json.unmarshaller.JsonUnmarshaller;
/*    */ import in.spicedigital.scommerce.utility.parser.pojo.UnmarshalledPojoData;
/*    */ import java.io.PrintStream;
/*    */ import java.util.ArrayList;
/*    */ import java.util.List;
/*    */ import org.springframework.http.HttpEntity;
/*    */ import org.springframework.http.HttpHeaders;
/*    */ import org.springframework.http.HttpStatus;
/*    */ import org.springframework.http.MediaType;
/*    */ import org.springframework.http.ResponseEntity;
/*    */ import org.springframework.stereotype.Controller;
/*    */ import org.springframework.web.bind.annotation.RequestBody;
/*    */ import org.springframework.web.bind.annotation.RequestMapping;
/*    */ import org.springframework.web.bind.annotation.ResponseBody;
/*    */ import org.springframework.web.client.RestTemplate;
/*    */ 
/*    */ @Controller
/*    */ public class FetchTerminalIdController
/*    */ {
/*    */   @RequestMapping(value={"/fetchTerminalId"}, method={org.springframework.web.bind.annotation.RequestMethod.POST}, consumes={"application/json"}, produces={"application/json"})
/*    */   @ResponseBody
/*    */   public ResponseEntity<FetchTerminalIdResPojo> getLogIn(@RequestBody String requestBody)
/*    */   {
/* 32 */     //System.out.println("REQUEST ::: " + requestBody);
/* 33 */     UnmarshalledPojoData objUnmarshalledPojoData = new JsonUnmarshaller().unmarshal(new FetchTerminalIdRequestPojo().getClass(), requestBody);
/* 34 */     FetchTerminalIdRequestPojo objFetchTerminalIdRequestPojo = (FetchTerminalIdRequestPojo)objUnmarshalledPojoData.getObject();
/* 35 */     //System.out.println("in fetch terminal  controller");
/* 36 */     FetchTerminalIdResPojo objFetchTerminalIdResPojo = new FetchTerminalIdResPojo();
/* 37 */     RestTemplate rest = new RestTemplate();
/* 38 */     HttpHeaders headers = new HttpHeaders();
/* 39 */     headers.setContentType(MediaType.APPLICATION_JSON);
/* 40 */     headers.set("Authorization", GetConfigurationValues.BearerValue);
/* 41 */     HttpEntity entity = new HttpEntity(
/* 42 */       objFetchTerminalIdRequestPojo, headers);
/* 43 */     ResponseEntity response = rest.postForEntity(RestServiceURIConstants.REST_COMMON_FETCH_TERMINAL_ID, entity, 
/* 44 */       FetchTerminalIdResPojo.class, new Object[0]);
/*    */ 
/* 46 */     objFetchTerminalIdResPojo.setRc(((FetchTerminalIdResPojo)response.getBody()).getRc());
/* 47 */     //System.out.println("(response.getBody().getRc()***************" + ((FetchTerminalIdResPojo)response.getBody()).getPd().size());
/* 48 */     objFetchTerminalIdResPojo.setRd(((FetchTerminalIdResPojo)response.getBody()).getRd());
/* 49 */     //System.out.println("**********************************" + ((FetchTerminalIdResPojo)response.getBody()).getRd());
/* 50 */     objFetchTerminalIdResPojo.setRs(((FetchTerminalIdResPojo)response.getBody()).getRs());
/*    */ 
/* 52 */     List obj = new ArrayList();
/* 53 */     for (int i = 0; i < ((FetchTerminalIdResPojo)response.getBody()).getPd().size(); i++) {
/* 54 */       FetchTerminalIdResPojo.PD objTerminalId = new FetchTerminalIdResPojo.PD();
/* 55 */       objTerminalId.setId(((FetchTerminalIdResPojo.PD)((FetchTerminalIdResPojo)response.getBody()).getPd().get(i)).getId());
/* 56 */       //System.out.println("response.getBody().getTerminalId().get(i).getId()" + ((FetchTerminalIdResPojo.PD)((FetchTerminalIdResPojo)response.getBody()).getPd().get(i)).getId());
/* 57 */       obj.add(objTerminalId);
/*    */     }
/*    */ 
/* 60 */     objFetchTerminalIdResPojo.setPd(obj);
/* 61 */     return new ResponseEntity(objFetchTerminalIdResPojo, 
/* 62 */       new HttpHeaders(), HttpStatus.OK);
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.controller.FetchTerminalIdController
 * JD-Core Version:    0.6.0
 */