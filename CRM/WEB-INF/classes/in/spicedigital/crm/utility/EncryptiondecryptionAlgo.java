/*    */ package in.spicedigital.crm.utility;
/*    */ 
/*    */ import java.io.PrintStream;
/*    */ import java.security.MessageDigest;
/*    */ import java.security.NoSuchAlgorithmException;
/*    */ 
/*    */ public class EncryptiondecryptionAlgo
/*    */ {
/*    */   private static String bytesToHexString(byte[] bytes)
/*    */   {
/*  9 */     StringBuffer sb = new StringBuffer();
/* 10 */     for (int i = 0; i < bytes.length; i++) {
/* 11 */       String hex = Integer.toHexString(0xFF & bytes[i]);
/* 12 */       if (hex.length() == 1) {
/* 13 */         sb.append('0');
/*    */       }
/* 15 */       sb.append(hex);
/*    */     }
/* 17 */     return sb.toString();
/*    */   }
/*    */ 
/*    */   private static String shaOfString(String s)
/*    */   {
/* 24 */     MessageDigest digest = null;
/* 25 */     String hash = null;
/*    */     try
/*    */     {
/* 28 */       digest = MessageDigest.getInstance("SHA-256");
/* 29 */       digest.update(s.getBytes());
/*    */ 
/* 31 */       hash = bytesToHexString(digest.digest());
/*    */     }
/*    */     catch (NoSuchAlgorithmException e1)
/*    */     {
/* 35 */       e1.printStackTrace();
/*    */     }
/*    */ 
/* 38 */     return hash;
/*    */   }
/*    */ 
/*    */   public static void main(String[] args) {
/* 42 */    // String str = shaOfString("manpreet");
/* 43 */    // System.out.println("str=" + str);
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.utility.EncryptiondecryptionAlgo
 * JD-Core Version:    0.6.0
 */