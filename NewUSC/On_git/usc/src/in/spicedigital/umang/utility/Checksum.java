package in.spicedigital.umang.utility;

import java.lang.reflect.Field;
import java.nio.charset.Charset;
import java.security.MessageDigest;
import java.security.SecureRandom;
import java.util.Random;
import java.util.UUID;

public class Checksum {
    
     public String generateOTP() {
        String chars = "0123456789";

        final int PW_LENGTH = 6;
        Random rnd = new SecureRandom();
        StringBuilder pass = new StringBuilder();
        for (int i = 0; i < PW_LENGTH; i++)
            pass.append(chars.charAt(rnd.nextInt(chars.length())));
        return pass.toString();
    }


    public int randInteger(int min, int max) {
        int randomNum = 0;
        try {
            Random rand = new Random();
            randomNum = rand.nextInt((max - min) + 1) + min;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return randomNum;
    }

    public String getRandomSeed() {
        String strSalt = "";
        try {
            UUID idOne = UUID.randomUUID();
            strSalt = idOne.toString().replaceAll("-", "");
        } catch (Exception e) {
            e.printStackTrace();
        }
        return strSalt;
    }

    public String getMasterHash(String salt, String hashedString, int hashCount) {
        String hashedSalt = getHashedString(salt);
        String masterHash = hashedString, newHash = "";
        for (int i = hashCount; i > 0; i--) {
            System.out.println("-------------------Randomness (" + i + ")------------------");
            newHash = getHashedString(masterHash);
            try {
                masterHash = getHashedString(newHash.substring(0, i) + getHashedString(hashedSalt) + newHash.substring(i));
                System.out.println(getHashedString(newHash.substring(0, i) + "," + getHashedString(hashedSalt) + "," + newHash.substring(i)));
            } catch (Exception e) {
                e.printStackTrace();
            }
            System.out.println("-------------------Randomness (" + i + ")------------------");
        }
        return masterHash;
    }

    private String getHashedString(String stringTobeHashed) {
        String encryptedValue = "";
        StringBuffer sb = new StringBuffer();
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            md.update(stringTobeHashed.getBytes(Charset.forName("UTF-8")));
            byte byteData[] = md.digest();
            // convert the byte to hex format method 1
            for (int i = 0; i < byteData.length; i++) {
                sb.append(Integer.toString((byteData[i] & 0xff) + 0x100, 16)
                        .substring(1));
            }
            encryptedValue = sb.toString();
        } catch (Exception e) {
            e.printStackTrace();
            encryptedValue = "";
        }
        return encryptedValue;
    }
    @SuppressWarnings({ "rawtypes", "unused" })
	public  String getValues(Object obj) {
        try {
            StringBuilder sb = new StringBuilder();
            if (obj != null) {
                Class objClass = obj.getClass();
                Field[] fields = objClass.getDeclaredFields();
                Field.setAccessible(fields, true);
                for (Field field : fields) {
                    String name = field.getName();
                    Object value = field.get(obj);
                    System.out.println("value="+value);
                    sb.append(getStrValue(value)).append("$");
                }
            }
            return sb.toString();
        } catch (Exception excp) {
            excp.printStackTrace();
        }
        return "";
    }

    private  String getStrValue(Object obj) {
        String strVal = "null";
        try {
            if (obj != null) {
                strVal = obj.toString().trim();
            }
        } catch (Exception e) {
            strVal = "null";
            e.printStackTrace();
        }
        return strVal;
    }


    public static void main(String[] args) {
        System.out.println(new Checksum().getMasterHash("46a2761a51d14c99ad26", new Checksum().getHashedString("Mahaveer"), 2));
    }
}
