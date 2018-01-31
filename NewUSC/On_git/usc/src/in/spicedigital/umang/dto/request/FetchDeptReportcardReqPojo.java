package in.spicedigital.umang.dto.request;

public class FetchDeptReportcardReqPojo {

private String dept;
private String udf1;
private String udf2;
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
public String getDept() {
	return dept;
}
public void setDept(String dept) {
	this.dept = dept;
}
public String getUdf1() {
	return udf1;
}
public void setUdf1(String udf1) {
	this.udf1 = udf1;
}
public String getUdf2() {
	return udf2;
}
public void setUdf2(String udf2) {
	this.udf2 = udf2;
}
@Override
public String toString() {
	return "FetchDeptReportcardReqPojo [dept=" + dept + ", udf1=" + udf1 + ", udf2=" + udf2 + ", trkr=" + trkr + ", lang=" + lang + "]";
}
 



 



}
