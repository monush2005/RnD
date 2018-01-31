package in.spicedigital.umang.services;

import java.io.BufferedReader;
import java.security.NoSuchAlgorithmException;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import in.spicedigital.umang.utility.Utility;
public class AuthenticationService {
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	public boolean authenticate(Utility encryptionUtility,HttpServletRequest httpServletRequest,String authHeader,String dateHeader,String contentHeader,String requestBody,String contentType) throws NoSuchAlgorithmException {
		boolean isValid=false;
		if (!(null == authHeader || null ==dateHeader ||null == contentHeader)){
		String toSignOur=null;
		String encryptedContent=encryptionUtility.appEncryptcalculateMD5(requestBody);
		try {
			toSignOur = httpServletRequest.getMethod() + "\n" + encryptedContent + "\n" + contentType+ "\n" + dateHeader
					+ "\n" + httpServletRequest.getRequestURI();
			logger.debug("Signaure : {}",toSignOur);
			String hmacOur ="";// encryptionUtility.appEncrypteHMAC(toSignOur);			
			if(authHeader.split(":")[1].equalsIgnoreCase(hmacOur)&&contentHeader.equalsIgnoreCase(encryptedContent)){
				logger.debug("Authorization:Checksum validated successfully");
				if("UM4NG".equalsIgnoreCase(authHeader.split(":")[0])){
					logger.debug("Authorization:User validated successfully");
					isValid=true;
				}else{
					logger.debug("Authorization:Invalid user");
				}
			}else{
				logger.debug("Authorization:Invalid checksum");
			}
		} catch (Exception e1) {
			e1.printStackTrace();
		}
		}
		return isValid;
	}
	
	public String getJsonResponse(HttpServletRequest httpServletRequest){
		  StringBuffer sb = new StringBuffer();
		  String line = null;
		  BufferedReader reader=null;
		  try {
		    reader = httpServletRequest.getReader();
		    while ((line = reader.readLine()) != null)
		      sb.append(line);
		  } catch (Exception e) {
			e.printStackTrace();  
		  }finally{
			  if(reader!=null){
				  try {
					reader.close();
					  reader=null;
				} catch (Exception e) {
					e.printStackTrace();
				}
			  }
		  }
		return sb.toString();
	}
}
