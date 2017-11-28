/*    */ package in.spicedigital.crm.utility;
/*    */ 
/*    */ public class UnicodeLibrary
/*    */ {
/*    */   public static String getUnicode(String strMessage)
/*    */   {
/*  6 */     int intMessageLength = strMessage.length(); int intCounter = 0;
/*  7 */     String strReturnValue = "";
/*  8 */     while (intMessageLength > intCounter) {
/*  9 */       strReturnValue = strReturnValue + getProperUnicode(new StringBuilder(String.valueOf(Integer.toHexString(strMessage.charAt(intCounter++)))).toString());
/*    */     }
/* 11 */     return strReturnValue;
/*    */   }
/*    */ 
/*    */   public static String getProperUnicode(String strUnicode)
/*    */   {
/* 16 */     if ((strUnicode != null) && (strUnicode.length() == 1)) {
/* 17 */       return "000" + strUnicode;
/*    */     }
/*    */ 
/* 20 */     if ((strUnicode != null) && (strUnicode.length() == 2)) {
/* 21 */       return "00" + strUnicode;
/*    */     }
/* 23 */     if ((strUnicode != null) && (strUnicode.length() == 3)) {
/* 24 */       return "0" + strUnicode;
/*    */     }
/* 26 */     return strUnicode;
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.utility.UnicodeLibrary
 * JD-Core Version:    0.6.0
 */