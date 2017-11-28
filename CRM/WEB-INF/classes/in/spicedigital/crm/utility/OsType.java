/*    */ package in.spicedigital.crm.utility;
/*    */ 
/*    */ public class OsType
/*    */ {
/*  4 */   private static String osName = System.getProperty("os.name").toLowerCase();
/*    */ 
/*    */   public static boolean isWindows() {
/*  7 */     return osName.indexOf("win") >= 0;
/*    */   }
/*    */ 
/*    */   public static boolean isMac() {
/* 11 */     return osName.indexOf("mac") >= 0;
/*    */   }
/*    */ 
/*    */   public static boolean isUnix() {
/* 15 */     return (osName.indexOf("nix") >= 0) || (osName.indexOf("nux") >= 0) || (osName.indexOf("aix") > 0);
/*    */   }
/*    */ 
/*    */   public static boolean isSolaris() {
/* 19 */     return osName.indexOf("sunos") >= 0;
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.utility.OsType
 * JD-Core Version:    0.6.0
 */