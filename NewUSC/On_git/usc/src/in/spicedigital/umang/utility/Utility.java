package in.spicedigital.umang.utility;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.crypto.codec.Base64;

import com.sdl.umang.main.EncryptionDecryption;

import in.spicedigital.umang.config.PropertyConfiguration;
import in.spicedigital.umang.dto.constants.WsConstants;

public class Utility {
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	private EncryptionDecryption objEncryptionDecryption;
	private static int connection_timeout=0;
	private static int read_timeout=0;
	public Utility(EncryptionDecryption objEncryptionDecryption) {
		this.objEncryptionDecryption = objEncryptionDecryption;
	}

	public String decryptRequest(String encryptedString) throws Exception {
		logger.debug("Decrypting String:{}", encryptedString);
		return this.objEncryptionDecryption.decrypt(encryptedString);
	}

	public String encryptRequest(String decryptedString) throws Exception {
		logger.debug("Encrypting String:{}", decryptedString);
		return this.objEncryptionDecryption.encrypt(decryptedString);
	}

	public String getSHA256Hash(String input) {
		byte byteHash[] = null;
		StringBuffer sb = null;
		StringBuffer buffer = null;
		MessageDigest md = null;
		try {
			 md = MessageDigest.getInstance("SHA-256");
			md.update(input.getBytes());
			byteHash = md.digest();
			sb = new StringBuffer();
			for (int i = 0; i < byteHash.length; i++) {
				sb.append(Integer.toString((byteHash[i] & 0xff) + 0x100, 16).substring(1));
			}
			buffer = new StringBuffer();
			for (int i = 0; i < byteHash.length; i++) {
				String hex = Integer.toHexString(0xff & byteHash[i]);
				if (hex.length() == 1)
					buffer.append('0');
				buffer.append(hex);
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			byteHash = null;
		}
		return buffer.toString();
	}

	
	public int getReadTimeout(){
		try {
			read_timeout=Integer.parseInt(PropertyConfiguration.getConfiguration(WsConstants.WS_READ_TIMEOUT)) * 1000;
		} catch (Exception e) {
			read_timeout=Integer.parseInt(PropertyConfiguration.getConfiguration(WsConstants.WS_DEFAULT_TIMEOUT))* 1000;
		}
		return read_timeout;
	}
	
	public int getConnectionTimeout(){
		try {
			connection_timeout=Integer.parseInt(PropertyConfiguration.getConfiguration(WsConstants.WS_CONNECTION_TIMEOUT)) * 1000;
		} catch (Exception e) {
			connection_timeout=Integer.parseInt(PropertyConfiguration.getConfiguration(WsConstants.WS_DEFAULT_TIMEOUT))* 1000;
		}
		return connection_timeout;
	}
	
	public String getRequestTimestamp(){
			SimpleDateFormat sdf= new SimpleDateFormat("yyyyMMddHHmmss");
			return sdf.format(new Date(System.currentTimeMillis()));
	}
	
	
	public String appEncryptcalculateMD5(String contentToEncode) throws NoSuchAlgorithmException {
		MessageDigest digest = MessageDigest.getInstance("MD5");
		digest.update(contentToEncode.getBytes());
		String result = new String(Base64.encode(digest.digest()));
		return result;
	}
	
	public String getLoggingString(HttpServletRequest request){
		return request.getSession().getAttribute("TRACKER")+"";
	}
	

    public static String char2hex(byte x) {
        char arr[] = {
            '0', '1', '2', '3',
            '4', '5', '6', '7',
            '8', '9', 'A', 'B',
            'C', 'D', 'E', 'F'
        };

        char c[] = {arr[(x & 0xF0) >> 4], arr[x & 0x0F]};
        return (new String(c));
    }

	
}
