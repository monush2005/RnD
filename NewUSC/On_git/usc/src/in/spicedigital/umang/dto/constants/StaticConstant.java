package in.spicedigital.umang.dto.constants;

import java.util.HashMap;

public class StaticConstant {
	
	public static HashMap<String,HashMap<String, String>> userList= new  HashMap<String, HashMap<String, String>>();
	public static HashMap<String, String> userListDetails;
	
	public static HashMap<String,HashMap<String, String>> getPopulatedUsers(){
		if(userListDetails==null){
			userListDetails= new  HashMap<String,String>();
			userListDetails.put("username", "admin");
			userListDetails.put("role", "ROLE_ADMIN");
			userList.put("admin", userListDetails);
			
			userListDetails= new  HashMap<String,String>();
			userListDetails.put("username", "user");
			userListDetails.put("role", "ROLE_USER");
			userList.put("user", userListDetails);
			
			userListDetails= new  HashMap<String,String>();
			userListDetails.put("username", "db");
			userListDetails.put("role", "ROLE_DB");
			userList.put("db", userListDetails);
		}
		return userList;
	}
}
