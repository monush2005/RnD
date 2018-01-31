package in.spicedigital.umang.dto.request;

public class OtpHandlerValidateRequestPojo {

	//Mobile Number
	 private String mno;
	 //OTP
	 private String otp;
	 //Device Id
	 private String did;
	 //Mode
	 private String mod;
	 // Unique Network Subscriber number
	 private String imsi;
	 //Language
	 private String lang;
	 //State
	 private String st;
	//Version
	 private String ver;
	 //HandSet Make
	 private String hmk;
    //HandSet Model
	 private String hmd;
	 //Mobile Country Code
	 private String mcc;
	 // Mobile Network Code
	 private String mnc;
	 //Cell Id
	 private String clid;
	 //ORT (OTP Request Type)
   private String ort;
   //Tracker
   private String trkr;
public String getMno() {
	return mno;
}
public void setMno(String mno) {
	this.mno = mno;
}
public String getOtp() {
	return otp;
}
public void setOtp(String otp) {
	this.otp = otp;
}
public String getDid() {
	return did;
}
public void setDid(String did) {
	this.did = did;
}
public String getMod() {
	return mod;
}
public void setMod(String mod) {
	this.mod = mod;
}
public String getImsi() {
	return imsi;
}
public void setImsi(String imsi) {
	this.imsi = imsi;
}
public String getLang() {
	return lang;
}
public void setLang(String lang) {
	this.lang = lang;
}
public String getSt() {
	return st;
}
public void setSt(String st) {
	this.st = st;
}
public String getVer() {
	return ver;
}
public void setVer(String ver) {
	this.ver = ver;
}
public String getHmk() {
	return hmk;
}
public void setHmk(String hmk) {
	this.hmk = hmk;
}
public String getHmd() {
	return hmd;
}
public void setHmd(String hmd) {
	this.hmd = hmd;
}
public String getMcc() {
	return mcc;
}
public void setMcc(String mcc) {
	this.mcc = mcc;
}
public String getMnc() {
	return mnc;
}
public void setMnc(String mnc) {
	this.mnc = mnc;
}
public String getClid() {
	return clid;
}
public void setClid(String clid) {
	this.clid = clid;
}
public String getOrt() {
	return ort;
}
public void setOrt(String ort) {
	this.ort = ort;
}
public String getTrkr() {
	return trkr;
}
public void setTrkr(String trkr) {
	this.trkr = trkr;
}
@Override
public String toString() {
	return "OtpHnadlerRequestPojo [mno=" + mno + ", otp=" + otp + ", did=" + did + ", mod=" + mod + ", imsi=" + imsi + ", lang=" + lang + ", st=" + st + ", ver=" + ver + ", hmk=" + hmk + ", hmd=" + hmd + ", mcc=" + mcc + ", mnc=" + mnc + ", clid=" + clid + ", ort=" + ort + ", trkr=" + trkr + "]";
}
   
   
   
   
}
