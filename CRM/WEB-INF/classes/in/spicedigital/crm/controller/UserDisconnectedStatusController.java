/*    */ package in.spicedigital.crm.controller;
/*    */ 
/*    */ import in.spicedigital.crm.pojo.RequestPojo.UserDisconnectedStatusRequestPojo;
/*    */ import in.spicedigital.scommerce.utility.parser.json.unmarshaller.JsonUnmarshaller;
/*    */ import in.spicedigital.scommerce.utility.parser.pojo.UnmarshalledPojoData;
/*    */ import java.io.PrintStream;
/*    */ import javax.servlet.http.HttpServletRequest;
/*    */ import org.slf4j.Logger;
/*    */ import org.slf4j.LoggerFactory;
/*    */ import org.springframework.stereotype.Controller;
/*    */ import org.springframework.web.bind.annotation.RequestBody;
/*    */ import org.springframework.web.bind.annotation.RequestMapping;
/*    */ 
/*    */ @Controller
/*    */ public class UserDisconnectedStatusController
/*    */ {
/* 21 */   private final Logger logger = LoggerFactory.getLogger(getClass());
/*    */ 
/*    */   @RequestMapping(value={"/userDis"}, method={org.springframework.web.bind.annotation.RequestMethod.POST}, consumes={"application/json"}, produces={"application/json"})
/*    */   public void getLogIn(@RequestBody String requestBody, HttpServletRequest request) { try { UnmarshalledPojoData objUnmarshalledPojoData = new JsonUnmarshaller().unmarshal(new UserDisconnectedStatusRequestPojo().getClass(), requestBody);
/* 26 */       UserDisconnectedStatusRequestPojo objUserDisconnectedStatusRequestPojo = (UserDisconnectedStatusRequestPojo)objUnmarshalledPojoData.getObject();
/*    */ 
/* 28 */       //System.out.println("***" + objUserDisconnectedStatusRequestPojo.getRefID());
/* 29 */       this.logger.info("UserDisconnectedStatusRequestPojo request {}", objUserDisconnectedStatusRequestPojo.toString());
/*    */     } catch (Exception e)
/*    */     {
/* 32 */       this.logger.info("wrapup error" + e.getMessage());
/* 33 */       e.printStackTrace();
/*    */     }
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.controller.UserDisconnectedStatusController
 * JD-Core Version:    0.6.0
 */