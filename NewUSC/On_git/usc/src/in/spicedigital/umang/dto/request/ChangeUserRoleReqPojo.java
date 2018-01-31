package in.spicedigital.umang.dto.request;

public class ChangeUserRoleReqPojo {

private String roleId;

private String userId;

private String lang;


public String getRoleId() {
return roleId;
}


public void setRoleId(String roleId) {
this.roleId = roleId;
}


public String getUserId() {
return userId;
}


public void setUserId(String userId) {
this.userId = userId;
}


public String getLang() {
return lang;
}


public void setLang(String lang) {
this.lang = lang;
}


public String getToken() {
return token;
}


public void setToken(String token) {
this.token = token;
}


private String token;
}