package in.spicedigital.umang.config;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.Date;
import java.util.Properties;

import in.spicedigital.umang.dto.constants.BeansNameConstants;

public class ConfigurationReader {
	private static 	ConfigurationReader singletonInstance=new ConfigurationReader();
	private static Properties commonProperties;
	private static Properties messageProperties;
	private ConfigurationReader(){
	//Private Constructor so no other  class except this can access it
	}
	
	public static ConfigurationReader getInstance(){
		return singletonInstance;
	}
	
	public  Properties loadConfigurations() throws URISyntaxException{
		if(commonProperties==null){
			synchronized (ConfigurationReader.class) {
				if(commonProperties==null){
					commonProperties = new Properties();
					URL resourceUrl = ClassLoader.getSystemResource("/WEB-INF/classes/"+BeansNameConstants.WS_URL_PROPERTY_FILE+BeansNameConstants.WS_URL_PROPERTY_EXTENSION);
					System.out.println(resourceUrl.toURI()+"");
					try(InputStream inputStream = new FileInputStream(new File(resourceUrl.toURI()))){
						commonProperties.load(inputStream);
					}catch(Exception ex){
						System.out.print("Error while reading property file:"+ex.getMessage());
					}
				}
			}
		}
		return commonProperties;
	}
	
	public  Properties updateConfigurations(final String key,final String value){
		System.out.println("UPDATING PROPERTY:"+key+"'s value to "+value);
		URL resourceUrl = Thread.currentThread().getContextClassLoader().getResource(BeansNameConstants.WS_URL_PROPERTY_FILE+BeansNameConstants.WS_URL_PROPERTY_EXTENSION);
		try(OutputStream outputStream = new FileOutputStream(new File(resourceUrl.toURI()));){
			commonProperties.setProperty(key, value);
			commonProperties.store(outputStream, "Updated by Java program on "+new Date());
			reloadConfigurations();
		} catch (Exception e) {
			System.out.println("Error while updating Configuration Properties file");
		}
		
		return commonProperties;
	}
	
	
	public  Properties loadMessages(){
		if(messageProperties==null){
			synchronized (ConfigurationReader.class) {
				if(messageProperties==null){
					messageProperties= new Properties();
					try(InputStream inputStream =  Thread.currentThread().getContextClassLoader().getResourceAsStream(BeansNameConstants.WS_URL_PROPERTY_MESSAGE_SOURCE+BeansNameConstants.WS_URL_PROPERTY_EXTENSION);){
						messageProperties.load(inputStream);
					}catch(Exception ex){
						System.out.print("Error while reading property file:"+ex.getMessage());
					}
				}
			}
		}
		return messageProperties;
	}
	
	public  Properties updateMessages(final String key,final String value){
		System.out.println("UPDATING MESSAGE PROPERTY:"+key+"'s value to "+value);
		URL resourceUrl = Thread.currentThread().getContextClassLoader().getResource(BeansNameConstants.WS_URL_PROPERTY_MESSAGE_SOURCE+BeansNameConstants.WS_URL_PROPERTY_EXTENSION);
		try(OutputStream outputStream = new FileOutputStream(new File(resourceUrl.toURI()));){
			messageProperties.setProperty(key, value);
			messageProperties.store(outputStream, "Updated by Java program on "+new Date());
			reloadMessages();
		} catch (Exception e) {
			System.out.println("Error while updating Properties file");
		}
		
		return commonProperties;
	}
	
	
	public void reloadConfigurations(){
		commonProperties=null;
	}
	public void reloadMessages(){
		messageProperties=null;
	}
}
