/*    */ package in.spicedigital.crm.utility;
/*    */ 
/*    */ import java.io.FileInputStream;
/*    */ import java.util.Properties;
/*    */ 
/*    */ public class ReadProperties
/*    */ {
/*  7 */   private static Properties objProperties = null;
/*    */ 
/*    */   private static synchronized String getPropFile(String propertyName) {
/* 10 */     if (objProperties == null) {
/* 11 */       FileInputStream propsFile = null;
/*    */       try {
/* 13 */         objProperties = new Properties();
/* 14 */         if (OsType.isWindows())
/* 15 */           propsFile = new FileInputStream("D:/crm.properties");
/*    */         else {
/* 17 */           propsFile = new FileInputStream("/home/application/conf/ucrm/crm.properties");
/*    */         }
/* 19 */         objProperties.load(propsFile);
/*    */       } catch (Exception e) {
/* 21 */         e.printStackTrace();
/*    */         try
/*    */         {
/* 24 */           propsFile.close();
/*    */         } catch (Exception e2) {
/* 26 */           e2.printStackTrace();
/*    */         }
/*    */       }
/*    */       finally
/*    */       {
/*    */         try
/*    */         {
/* 24 */           propsFile.close();
/*    */         } catch (Exception e2) {
/* 26 */           e2.printStackTrace();
/*    */         }
/*    */       }
/*    */     }
/* 30 */     return objProperties.getProperty(propertyName);
/*    */   }
/*    */   public static String getRootURL() {
/* 33 */     return getPropFile("Root_URL");
/*    */   }
/*    */   public static String getDocumentFolder() {
/* 36 */     return getPropFile("Folder_Path");
/*    */   }
/*    */   public static String getBearerValue() {
/* 39 */     return getPropFile("Bearer_Value");
/*    */   }
/*    */   public static String getChatHistory() {
/* 42 */     return getPropFile("Chat_history");
/*    */   }
/*    */   public static String getAgentHistory() {
/* 45 */     return getPropFile("Agent_history");
/*    */   }
/*    */   public static String EmailHandler() {
/* 48 */     return getPropFile("EmailHandlerURL");
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.utility.ReadProperties
 * JD-Core Version:    0.6.0
 */