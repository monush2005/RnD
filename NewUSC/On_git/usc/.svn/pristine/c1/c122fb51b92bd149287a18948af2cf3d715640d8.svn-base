package in.spicedigital.umang.test;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;

import org.apache.http.HttpException;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.DefaultHttpClient;
import org.slf4j.LoggerFactory;
import org.springframework.security.crypto.codec.Base64;

public class Signature {
		 
		private final static String USERNAME = "jos";
		private static final org.slf4j.Logger LOG = LoggerFactory.getLogger(Signature.class);
	 
		public static void main(String[] args) throws HttpException, IOException, NoSuchAlgorithmException {
			Signature client = new Signature();
			client.makeHTTPCallUsingHMAC(USERNAME);
		}
	 
		public void makeHTTPCallUsingHMAC(String TOKEN) throws HttpException, IOException, NoSuchAlgorithmException {
			String contentToEncode = "{\"comment\" : {\"message\":\"blaat\" , \"from\":\"blaat\" , \"commentFor\":123}}";
			String contentType = "application/vnd.umang.web+json";
			//String contentType = "text/plain";
			String currentDate = new SimpleDateFormat("EEE, d MMM yyyy HH:mm:ss z").format(new Date());
	 
			HttpPost post = new HttpPost("http://umang.spicesafar.com/Umang/api/deptt/aicte/");
			StringEntity data = new StringEntity(contentToEncode,contentType,"UTF-8");
			post.setEntity(data);
	 
			String verb = post.getMethod();
			String contentMd5 = calculateMD5(contentToEncode);
			String toSign = verb + "\n" + contentMd5 + "\n"
					+ data.getContentType().getValue() + "\n" + currentDate + "\n"
					+ post.getURI().getPath();
			
			String hmac = calculateHMAC(toSign);
			System.out.println("toSign :"+toSign);
			System.out.println("hmac :"+hmac);
			post.addHeader("X-App-Authorization", TOKEN+ ":" + hmac);
			post.addHeader("X-App-Date", currentDate);
			post.addHeader("X-App-Content", contentMd5);
	 
			HttpClient client = new DefaultHttpClient();
			HttpResponse response = client.execute(post);
	 
			System.out.println("client response:" + response.getStatusLine().getStatusCode());
		}
	 
		private String calculateHMAC(String data) {
			try {
				SecretKeySpec signingKey = new SecretKeySpec("$P!(3UM4NG".getBytes(),	"HmacSHA1");
				Mac mac = Mac.getInstance("HmacSHA1");
				mac.init(signingKey);
				byte[] rawHmac = mac.doFinal(data.getBytes());
				String result = new String(Base64.encode(rawHmac));
				return result;
			} catch (GeneralSecurityException e) {
				LOG.warn("Unexpected error while creating hash: " + e.getMessage(),	e);
				throw new IllegalArgumentException();
			}
		}
	 
		private String calculateMD5(String contentToEncode) throws NoSuchAlgorithmException {
			MessageDigest digest = MessageDigest.getInstance("MD5");
			digest.update(contentToEncode.getBytes());
			String result = new String(Base64.encode(digest.digest()));
			return result;
		}
	}