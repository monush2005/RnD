/*     */ package in.spicedigital.crm.controller;
/*     */ 
/*     */ import in.spicedigital.crm.contants.GetConfigurationValues;
/*     */ import in.spicedigital.crm.contants.RestServiceURIConstants;
/*     */ import in.spicedigital.crm.pojo.RequestPojo.LoginRequestPojo;
/*     */ import in.spicedigital.crm.pojo.ResponsePojo.LoginResPojo;
/*     */ import in.spicedigital.crm.pojo.ResponsePojo.LoginResPojo.Pd;
/*     */ import in.spicedigital.crm.utility.ReadProperties;
/*     */ import java.io.PrintStream;
/*     */ import java.util.HashMap;
/*     */ import javax.servlet.http.HttpServletRequest;
/*     */ import javax.servlet.http.HttpServletResponse;
/*     */ import javax.servlet.http.HttpSession;
/*     */ import org.slf4j.Logger;
/*     */ import org.slf4j.LoggerFactory;
/*     */ import org.springframework.http.HttpEntity;
/*     */ import org.springframework.http.HttpHeaders;
/*     */ import org.springframework.http.HttpStatus;
/*     */ import org.springframework.http.MediaType;
/*     */ import org.springframework.http.ResponseEntity;
/*     */ import org.springframework.stereotype.Controller;
/*     */ import org.springframework.web.bind.annotation.RequestMapping;
/*     */ import org.springframework.web.bind.annotation.RequestParam;
/*     */ import org.springframework.web.bind.annotation.ResponseBody;
/*     */ import org.springframework.web.client.RestTemplate;
/*     */ import org.springframework.web.servlet.ModelAndView;
/*     */ 
/*     */ @Controller
/*     */ public class NewLoginController
/*     */ {
/*  40 */   private final Logger logger = LoggerFactory.getLogger(getClass());
/*     */   public static HashMap<String, String> loginDetails;
/*     */ 
/*     */   @RequestMapping(value={"/isLogin"}, method={org.springframework.web.bind.annotation.RequestMethod.GET})
/*     */   @ResponseBody
/*     */   public boolean isLogin(HttpSession session)
/*     */   {
/*  59 */     //System.out.println("testing......");
/*     */ 
/*  62 */     return session.getAttribute("user") != null;
/*     */   }
/*     */ 
/*     */   @RequestMapping(value={"/", "/home", "/newLogin"}, method={org.springframework.web.bind.annotation.RequestMethod.GET})
/*     */   public ModelAndView home(HttpSession session)
/*     */   {
/*  69 */     if (session.getAttribute("user") == null)
/*     */     {
/*  71 */       return new ModelAndView("login.jsp");
/*     */     }
/*  73 */     return new ModelAndView("index.jsp"); } 
/*  78 */   @RequestMapping(value={"/getData"}, method={org.springframework.web.bind.annotation.RequestMethod.GET}, produces={"application/json"})
/*     */   @ResponseBody
/*     */   public ResponseEntity<LoginResPojo> getLoginData(HttpSession session) { //System.out.println("get dattttttttttttttttttttttt");
/*  79 */     LoginResPojo objLoginResPojo = (LoginResPojo)session.getAttribute("user");
/*     */ 
/*  82 */     if (objLoginResPojo == null)
/*     */     {
/*  84 */       return new ResponseEntity(objLoginResPojo, 
/*  85 */         new HttpHeaders(), HttpStatus.FORBIDDEN);
/*     */     }
/*  87 */     return new ResponseEntity(objLoginResPojo, 
/*  88 */       new HttpHeaders(), HttpStatus.OK);
/*     */   }
/*     */ 
/*     */   @RequestMapping(value={"/newLogin"}, method={org.springframework.web.bind.annotation.RequestMethod.POST})
/*     */   public ModelAndView postLogIn(@RequestParam(value="userName", required=true) String userName, @RequestParam(value="password", required=true) String password, HttpServletRequest request, HttpServletResponse responseObject, HttpSession session)
/*     */   {
/*  99 */     //System.out.println("()*)****************" + ReadProperties.getBearerValue());
/* 100 */     String userIpAddress = request.getRemoteAddr();
/* 101 */     //System.out.println("userIpAddress" + userIpAddress);
/* 102 */     String responseString = null;
/* 103 */     ResponseEntity response = null;
/* 104 */     LoginResPojo objLoginResPojo = new LoginResPojo();
/* 105 */     LoginResPojo.Pd pd = new LoginResPojo.Pd();
/*     */     try
/*     */     {
/* 110 */       LoginRequestPojo objLoginRequestPojo = new LoginRequestPojo();
/* 111 */       objLoginRequestPojo.setIp(userIpAddress);
/* 112 */       objLoginRequestPojo.setUname(userName);
/* 113 */       objLoginRequestPojo.setPwd(password);
/*     */ 
/* 115 */       RestTemplate rest = new RestTemplate();
/* 116 */       HttpHeaders headers = new HttpHeaders();
/* 117 */       headers.setContentType(MediaType.APPLICATION_JSON);
/* 118 */       headers.set("Authorization", GetConfigurationValues.BearerValue);
/* 119 */       HttpEntity entity = new HttpEntity(
/* 120 */         objLoginRequestPojo, headers);
/* 121 */       //System.out.println("RestServiceURIConstants.REST_COMMON_GET_LOGIN1," + RestServiceURIConstants.REST_COMMON_GET_LOGIN1);
/* 122 */       response = rest.postForEntity(RestServiceURIConstants.REST_COMMON_GET_LOGIN1, entity, 
/* 123 */         LoginResPojo.class, new Object[0]);
/* 124 */       //System.out.println(response);
/*     */ 
/* 126 */       if (((LoginResPojo)response.getBody()).getRs().equalsIgnoreCase("S"))
/*     */       {
/* 128 */         objLoginResPojo.setRc(((LoginResPojo)response.getBody()).getRc());
/* 129 */         objLoginResPojo.setRd(((LoginResPojo)response.getBody()).getRd());
/* 130 */         objLoginResPojo.setRs(((LoginResPojo)response.getBody()).getRs());
/* 131 */         pd.setCceid(((LoginResPojo)response.getBody()).getPd().getCceid());
/* 132 */         pd.setUserType(((LoginResPojo)response.getBody()).getPd().getUserType());
/* 133 */         pd.setLastUpdateDays(((LoginResPojo)response.getBody()).getPd().getLastUpdateDays());
/* 134 */         pd.setCategory(((LoginResPojo)response.getBody()).getPd().getCategory());
/* 135 */         pd.setChannel(((LoginResPojo)response.getBody()).getPd().getChannel());
/* 136 */         pd.setLanguage(((LoginResPojo)response.getBody()).getPd().getLanguage());
/* 137 */         pd.setRequestID(((LoginResPojo)response.getBody()).getPd().getRequestID());
/* 138 */         pd.setSessionid(((LoginResPojo)response.getBody()).getPd().getSessionid());
/* 139 */         pd.setTerminalID(((LoginResPojo)response.getBody()).getPd().getTerminalID());
/* 140 */         pd.setUserType(((LoginResPojo)response.getBody()).getPd().getUserType());
/* 141 */         pd.setFlagExpiry(((LoginResPojo)response.getBody()).getPd().getFlagExpiry());
/* 142 */         pd.setFlagFirst(((LoginResPojo)response.getBody()).getPd().getFlagFirst());
/* 143 */         pd.setCaptcha(((LoginResPojo)response.getBody()).getPd().getCaptcha());
/* 144 */         pd.setPwdvalidity(((LoginResPojo)response.getBody()).getPd().getPwdvalidity());
/* 145 */         pd.setAdminEmail(((LoginResPojo)response.getBody()).getPd().getAdminEmail());
/* 146 */         pd.setJid(userName);
/* 147 */         pd.setAccessId(password);
/* 148 */         objLoginResPojo.setPd(pd);
/* 149 */         session.setAttribute("user", objLoginResPojo);
/* 150 */         return new ModelAndView("redirect:/home");
/*     */       }
/*     */ 
/*     */     }
/*     */     catch (Exception e)
/*     */     {
/* 158 */       this.logger.error("login error ", e);
/* 159 */       e.printStackTrace();
/* 160 */       responseString = "{\"rs\":\"F\",\"rc\":\"FC0001\",\"rd\":\"Sorry! Something went wrong\"}";
/*     */ 
/* 163 */       this.logger.info("login response  {}" + response);
/* 164 */       if (response != null)
/*     */       {
/* 166 */         request.setAttribute("status", ((LoginResPojo)response.getBody()).getRs());
/* 167 */         request.setAttribute("desc", ((LoginResPojo)response.getBody()).getRd());
/*     */       }
/*     */     }
/* 169 */     return new ModelAndView("login.jsp");
/*     */   }
/*     */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.controller.NewLoginController
 * JD-Core Version:    0.6.0
 */