package in.spicedigital.umang.dto.request;

public class FetchSummaryReqPojo {

 
private String trkr;
private String lang;
private String token;
public String getToken() {
	return token;
}
public void setToken(String token) {
	this.token = token;
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
	return "FetchSummaryReqPojo [trkr=" + trkr + ", lang=" + lang + "]";
}



 



}
