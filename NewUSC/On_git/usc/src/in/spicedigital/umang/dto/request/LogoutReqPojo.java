package in.spicedigital.umang.dto.request;

 

public class LogoutReqPojo {
private String userid;
private String trkr;
private String token;
 
 
public String getToken() {
	return token;
}


public void setToken(String token) {
	this.token = token;
}


private String lang;


public String getUserid() {
	return userid;
}


public void setUserid(String userid) {
	this.userid = userid;
}


public String getTrkr() {
	return trkr;
}


public void setTrkr(String trkr) {
	this.trkr = trkr;
}


public String getLang() {
	return lang;
}


public void setLang(String lang) {
	this.lang = lang;
}


@Override
public String toString() {
	return "LogoutReqPojo [userid=" + userid + ", trkr=" + trkr + ", lang=" + lang + "]";
}
 



 

 


}
