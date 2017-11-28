/*     */ package in.spicedigital.crm.controller;
/*     */ 
/*     */ import in.spicedigital.crm.contants.GetConfigurationValues;
/*     */ import in.spicedigital.crm.contants.RestServiceURIConstants;
/*     */ import in.spicedigital.crm.pojo.RequestPojo.LoginRequestPojo;
/*     */ import in.spicedigital.crm.pojo.ResponsePojo.LoginResPojo;
/*     */ import in.spicedigital.crm.pojo.ResponsePojo.LoginResPojo.Pd;
/*     */ import in.spicedigital.crm.utility.ReadProperties;
/*     */ import in.spicedigital.scommerce.utility.parser.json.unmarshaller.JsonUnmarshaller;
/*     */ import in.spicedigital.scommerce.utility.parser.pojo.UnmarshalledPojoData;
/*     */ import java.io.PrintStream;
/*     */ import java.util.HashMap;
/*     */ import java.util.Properties;
/*     */ import javax.servlet.http.HttpServletRequest;
/*     */ import javax.servlet.http.HttpServletResponse;
/*     */ import org.slf4j.Logger;
/*     */ import org.slf4j.LoggerFactory;
/*     */ import org.springframework.http.HttpEntity;
/*     */ import org.springframework.http.HttpHeaders;
/*     */ import org.springframework.http.HttpStatus;
/*     */ import org.springframework.http.MediaType;
/*     */ import org.springframework.http.ResponseEntity;
/*     */ import org.springframework.stereotype.Controller;
/*     */ import org.springframework.web.bind.annotation.RequestBody;
/*     */ import org.springframework.web.bind.annotation.RequestMapping;
/*     */ import org.springframework.web.bind.annotation.ResponseBody;
/*     */ import org.springframework.web.client.RestTemplate;
/*     */ 
/*     */ @Controller
/*     */ public class LoginController
/*     */ {
/*  39 */   private final Logger logger = LoggerFactory.getLogger(getClass());
/*     */   public static HashMap<String, String> loginDetails;
/*  41 */   private static Properties objProperties = null;
/*     */ 
/*     */   @RequestMapping(value={"/test"}, method={org.springframework.web.bind.annotation.RequestMethod.GET})
/*     */   public String test(HttpServletResponse response) {
/*  46 */     response.setStatus(403);
/*  47 */     return null;
/*     */   }
/*     */ 
/*     */   @RequestMapping(value={"/login"}, method={org.springframework.web.bind.annotation.RequestMethod.POST}, consumes={"application/json"}, produces={"application/json"})
/*     */   @ResponseBody
/*     */   public ResponseEntity<LoginResPojo> getLogIn(@RequestBody String requestBody, HttpServletRequest request, HttpServletResponse responseObject) {
/*  55 */     //System.out.println("()*)****************" + ReadProperties.getBearerValue());
/*  56 */     String userIpAddress = request.getRemoteAddr();
/*  57 */     if (userIpAddress == null)
/*     */     {
/*  59 */       userIpAddress = "0.0.0.0";
/*     */     }
/*  61 */     //System.out.println("userIpAddress" + userIpAddress);
/*  62 */     String responseString = null;
/*  63 */     ResponseEntity response = null;
/*  64 */     LoginResPojo objLoginResPojo = new LoginResPojo();
/*  65 */     LoginResPojo.Pd pd = new LoginResPojo.Pd();
/*  66 */     //System.out.println("login REQUEST ::: " + requestBody);
/*     */     try
/*     */     {
/*  69 */       UnmarshalledPojoData objUnmarshalledPojoData = new JsonUnmarshaller().unmarshal(new LoginRequestPojo().getClass(), requestBody);
/*  70 */       LoginRequestPojo objLoginRequestPojo = (LoginRequestPojo)objUnmarshalledPojoData.getObject();
/*  71 */       objLoginRequestPojo.setIp(userIpAddress);
/*  72 */       objLoginRequestPojo.toString();
/*  73 */       RestTemplate rest = new RestTemplate();
/*  74 */       HttpHeaders headers = new HttpHeaders();
/*  75 */       headers.setContentType(MediaType.APPLICATION_JSON);
/*  76 */       headers.set("Authorization", GetConfigurationValues.BearerValue);
/*  77 */       HttpEntity entity = new HttpEntity(
/*  78 */         objLoginRequestPojo, headers);
/*  79 */       //System.out.println("RestServiceURIConstants.REST_COMMON_GET_LOGIN1," + RestServiceURIConstants.REST_COMMON_GET_LOGIN1);
/*  80 */       this.logger.info("login request {}", objLoginRequestPojo.toString());
/*  81 */       response = rest.postForEntity(RestServiceURIConstants.REST_COMMON_GET_LOGIN1, entity, 
/*  82 */         LoginResPojo.class, new Object[0]);
/*     */       try
/*     */       {
/*  85 */         objLoginResPojo.setRc(((LoginResPojo)response.getBody()).getRc());
/*  86 */         objLoginResPojo.setRd(((LoginResPojo)response.getBody()).getRd());
/*  87 */         objLoginResPojo.setRs(((LoginResPojo)response.getBody()).getRs());
/*  88 */         pd.setCceid(((LoginResPojo)response.getBody()).getPd().getCceid());
/*  89 */         pd.setUserType(((LoginResPojo)response.getBody()).getPd().getUserType());
/*  90 */         pd.setLastUpdateDays(((LoginResPojo)response.getBody()).getPd().getLastUpdateDays());
/*  91 */         pd.setCategory(((LoginResPojo)response.getBody()).getPd().getCategory());
/*  92 */         pd.setChannel(((LoginResPojo)response.getBody()).getPd().getChannel());
/*  93 */         pd.setLanguage(((LoginResPojo)response.getBody()).getPd().getLanguage());
/*  94 */         pd.setRequestID(((LoginResPojo)response.getBody()).getPd().getRequestID());
/*  95 */         pd.setSessionid(((LoginResPojo)response.getBody()).getPd().getSessionid());
/*  96 */         pd.setTerminalID(((LoginResPojo)response.getBody()).getPd().getTerminalID());
/*  97 */         pd.setUserType(((LoginResPojo)response.getBody()).getPd().getUserType());
/*  98 */         pd.setFlagExpiry(((LoginResPojo)response.getBody()).getPd().getFlagExpiry());
/*  99 */         pd.setFlagFirst(((LoginResPojo)response.getBody()).getPd().getFlagFirst());
/* 100 */         pd.setCaptcha(((LoginResPojo)response.getBody()).getPd().getCaptcha());
/* 101 */         pd.setPwdvalidity(((LoginResPojo)response.getBody()).getPd().getPwdvalidity());
/* 102 */         pd.setAdminEmail(((LoginResPojo)response.getBody()).getPd().getAdminEmail());
/* 103 */         objLoginResPojo.setPd(pd);
/* 104 */         //System.out.println("************" + ((LoginResPojo)response.getBody()).getPd().getCceid());
/*     */       }
/*     */       catch (Exception localException1)
/*     */       {
/*     */       }
/*     */ 
/*     */     }
/*     */     catch (Exception e)
/*     */     {
/* 113 */       this.logger.error("login error ", e.getMessage());
/* 114 */       e.printStackTrace();
/* 115 */       responseString = "{\"rs\":\"F\",\"rc\":\"FC0001\",\"rd\":\"Sorry! Something went wrong\"}";
/*     */     }
/* 117 */     //System.out.println("hello..java controller");
/* 118 */     this.logger.info("login response  {}" + response);
/* 119 */     return new ResponseEntity(objLoginResPojo, 
/* 120 */       new HttpHeaders(), HttpStatus.OK);
/*     */   }
/*     */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.controller.LoginController
 * JD-Core Version:    0.6.0
 */