/*    */ package in.spicedigital.crm.utility;
/*    */ 
/*    */ import java.io.PrintStream;
/*    */ import java.security.Key;
/*    */ import javax.crypto.Cipher;
/*    */ import javax.crypto.spec.SecretKeySpec;
/*    */ import sun.misc.BASE64Decoder;
/*    */ import sun.misc.BASE64Encoder;
/*    */ 
/*    */ public class ChatUtility
/*    */ {
/*    */   private static final String ALGORITHM = "AES";
/*    */   private static final int ITERATIONS = 2;
/* 12 */   private static final byte[] keyValue = { 117, 77, 97, 78, 103, 99, 72, 97, 116, 64, 83, 112, 105, 67, 101, 121 };
/*    */ 
/*    */   public static String encrypt(String value, String salt) throws Exception {
/* 15 */     Key key = generateKey();
/* 16 */     Cipher c = Cipher.getInstance("AES");
/* 17 */     c.init(1, key);
/*    */ 
/* 19 */     String valueToEnc = null;
/* 20 */     String eValue = value;
/* 21 */     for (int i = 0; i < 2; i++) {
/* 22 */       valueToEnc = salt + eValue;
/* 23 */       byte[] encValue = c.doFinal(valueToEnc.getBytes());
/* 24 */       eValue = new BASE64Encoder().encode(encValue);
/*    */     }
/* 26 */     //System.out.println("ecrn Text : " + eValue);
/* 27 */     return eValue;
/*    */   }
/*    */ 
/*    */   public static String decrypt(String value, String salt) throws Exception
/*    */   {
/* 32 */     salt = "this";
/* 33 */     Key key = generateKey();
/* 34 */     Cipher c = Cipher.getInstance("AES");
/* 35 */     c.init(2, key);
/*    */ 
/* 37 */     String dValue = null;
/* 38 */     String valueToDecrypt = value;
/* 39 */     for (int i = 0; i < 2; i++) {
/* 40 */       byte[] decordedValue = new BASE64Decoder().decodeBuffer(valueToDecrypt);
/* 41 */       byte[] decValue = c.doFinal(decordedValue);
/* 42 */       dValue = new String(decValue).substring(salt.length());
/* 43 */       valueToDecrypt = dValue;
/*    */     }
/* 45 */     return dValue;
/*    */   }
/*    */ 
/*    */   private static Key generateKey() throws Exception {
/* 49 */     Key key = new SecretKeySpec(keyValue, "AES");
/*    */ 
/* 52 */     return key;
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.utility.ChatUtility
 * JD-Core Version:    0.6.0
 */