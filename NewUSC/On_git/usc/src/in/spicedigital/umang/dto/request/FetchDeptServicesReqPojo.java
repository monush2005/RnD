package in.spicedigital.umang.dto.request;

public class FetchDeptServicesReqPojo {

private String srid;
private String trkr;
private String lang;
public String getSrid() {
	return srid;
}
public void setSrid(String srid) {
	this.srid = srid;
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
	return "FetchDeptServicesReqPojo [srid=" + srid + ", trkr=" + trkr + ", lang=" + lang + "]";
}



 



}
