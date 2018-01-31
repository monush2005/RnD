package in.spicedigital.umang.dto.request;

public class FetchCategoryReqPojo {

 
private String trkr;
private String lang;
private String deptId; 
private String token;
public String getToken() {
	return token;
}
public void setToken(String token) {
	this.token = token;
}
@Override
public String toString() {
	return "FetchDepartmentReqPojo [trkr=" + trkr + ", lang=" + lang + "]";
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
public String getDeptId() {
	return deptId;
}
public void setDeptId(String deptId) {
	this.deptId = deptId;
}
 



 



}
