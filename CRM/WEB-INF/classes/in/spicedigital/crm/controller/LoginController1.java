/*    */ package in.spicedigital.crm.controller;
/*    */ 
/*    */ import in.spicedigital.crm.contants.GetConfigurationValues;
/*    */ import in.spicedigital.crm.contants.RestServiceURIConstants;
/*    */ import in.spicedigital.crm.pojo.RequestPojo.LoginRequestPojo;
/*    */ import in.spicedigital.crm.pojo.ResponsePojo.LoginResPojo;
/*    */ import in.spicedigital.crm.pojo.ResponsePojo.LoginResPojo.Pd;
/*    */ import in.spicedigital.crm.utility.ReadProperties;
/*    */ import in.spicedigital.scommerce.utility.parser.json.unmarshaller.JsonUnmarshaller;
/*    */ import in.spicedigital.scommerce.utility.parser.pojo.UnmarshalledPojoData;
/*    */ import java.io.PrintStream;
/*    */ import java.util.HashMap;
/*    */ import java.util.Properties;
/*    */ import javax.servlet.http.HttpServletRequest;
/*    */ import javax.servlet.http.HttpServletResponse;
/*    */ import org.slf4j.Logger;
/*    */ import org.slf4j.LoggerFactory;
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
/*    */ public class LoginController1
/*    */ {
/* 37 */   private final Logger logger = LoggerFactory.getLogger(getClass());
/*    */   private static HashMap<String, String> loginDetails;
/* 39 */   private static Properties objProperties = null;
/*    */ 
/* 42 */   @RequestMapping(value={"/login1"}, method={org.springframework.web.bind.annotation.RequestMethod.POST}, consumes={"application/json"}, produces={"application/json"})
/*    */   @ResponseBody
/*    */   public ResponseEntity<LoginResPojo> getLogIn(@RequestBody String requestBody, HttpServletRequest request, HttpServletResponse responseObject) { //System.out.println("()*)****************" + ReadProperties.getBearerValue());
/* 43 */     String userIpAddress = request.getRemoteAddr();
/* 44 */     //System.out.println("userIpAddress" + userIpAddress);
/* 45 */     String responseString = null;
/* 46 */     ResponseEntity response = null;
/* 47 */     LoginResPojo objLoginResPojo = new LoginResPojo();
/* 48 */     LoginResPojo.Pd pd = new LoginResPojo.Pd();
/* 49 */     //System.out.println("login REQUEST ::: " + requestBody);
/*    */     try
/*    */     {
/* 52 */       UnmarshalledPojoData objUnmarshalledPojoData = new JsonUnmarshaller().unmarshal(new LoginRequestPojo().getClass(), requestBody);
/* 53 */       LoginRequestPojo objLoginRequestPojo = (LoginRequestPojo)objUnmarshalledPojoData.getObject();
/* 54 */       objLoginRequestPojo.setIp(userIpAddress);
/* 55 */       objLoginRequestPojo.toString();
/* 56 */       RestTemplate rest = new RestTemplate();
/* 57 */       HttpHeaders headers = new HttpHeaders();
/* 58 */       headers.setContentType(MediaType.APPLICATION_JSON);
/* 59 */       headers.set("Authorization", GetConfigurationValues.BearerValue);
/* 60 */       HttpEntity entity = new HttpEntity(
/* 61 */         objLoginRequestPojo, headers);
/* 62 */       //System.out.println("RestServiceURIConstants.REST_COMMON_GET_LOGIN1," + RestServiceURIConstants.REST_COMMON_GET_LOGIN1);
/*    */ 
/* 64 */       response = rest.postForEntity(RestServiceURIConstants.REST_COMMON_GET_LOGIN1, entity, 
/* 65 */         LoginResPojo.class, new Object[0]);
/* 66 */       objLoginResPojo.setRc(((LoginResPojo)response.getBody()).getRc());
/* 67 */       objLoginResPojo.setRd(((LoginResPojo)response.getBody()).getRd());
/* 68 */       objLoginResPojo.setRs(((LoginResPojo)response.getBody()).getRs());
/* 69 */       pd.setCceid(((LoginResPojo)response.getBody()).getPd().getCceid());
/* 70 */       pd.setUserType(((LoginResPojo)response.getBody()).getPd().getUserType());
/* 71 */       pd.setLastUpdateDays(((LoginResPojo)response.getBody()).getPd().getLastUpdateDays());
/* 72 */       pd.setCategory(((LoginResPojo)response.getBody()).getPd().getCategory());
/* 73 */       pd.setChannel(((LoginResPojo)response.getBody()).getPd().getChannel());
/* 74 */       pd.setLanguage(((LoginResPojo)response.getBody()).getPd().getLanguage());
/* 75 */       pd.setRequestID(((LoginResPojo)response.getBody()).getPd().getRequestID());
/* 76 */       pd.setSessionid(((LoginResPojo)response.getBody()).getPd().getSessionid());
/* 77 */       pd.setTerminalID(((LoginResPojo)response.getBody()).getPd().getUserType());
/* 78 */       pd.setUserType(((LoginResPojo)response.getBody()).getPd().getUserType());
/* 79 */       pd.setFlagExpiry(((LoginResPojo)response.getBody()).getPd().getFlagExpiry());
/* 80 */       pd.setFlagFirst(((LoginResPojo)response.getBody()).getPd().getFlagFirst());
/* 81 */       pd.setCaptcha(((LoginResPojo)response.getBody()).getPd().getCaptcha());
/* 82 */       pd.setPwdvalidity(((LoginResPojo)response.getBody()).getPd().getPwdvalidity());
/* 83 */       objLoginResPojo.setPd(pd);
/* 84 */       //System.out.println("************" + ((LoginResPojo)response.getBody()).getPd().getCceid());
/* 85 */       this.logger.info("Login request {}", objLoginResPojo.toString());
/*    */     }
/*    */     catch (Exception e)
/*    */     {
/* 89 */       this.logger.error("login error ", e);
/* 90 */       e.printStackTrace();
/* 91 */       responseString = "{\"rs\":\"F\",\"rc\":\"FC0001\",\"rd\":\"Sorry! Something went wrong\"}";
/*    */     }
/*    */ 
/* 94 */     //System.out.println("hello..java controller");
/* 95 */     this.logger.info("login response  {}" + response);
/* 96 */     return new ResponseEntity(objLoginResPojo, 
/* 97 */       new HttpHeaders(), HttpStatus.OK);
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.controller.LoginController1
 * JD-Core Version:    0.6.0
 */