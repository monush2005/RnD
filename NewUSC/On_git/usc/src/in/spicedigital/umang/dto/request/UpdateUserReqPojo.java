package in.spicedigital.umang.dto.request;

 

public class UpdateUserReqPojo {
	private String userid;
	private String trkr;

	private String category;
	private String mno;
	private String signature;
	private String commemail;
	private String dept1;
	private String dept2;
	private String dept3;
	private String app;
	private String services;

	private String updatedby;

	private String udf2;
	private String lang;
	private String token;
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public String getDept1() {
		return dept1;
	}

	public void setDept1(String dept1) {
		this.dept1 = dept1;
	}

	public String getDept2() {
		return dept2;
	}

	public void setDept2(String dept2) {
		this.dept2 = dept2;
	}

	public String getDept3() {
		return dept3;
	}

	public void setDept3(String dept3) {
		this.dept3 = dept3;
	}

	public String getTrkr() {
		return trkr;
	}

	public void setTrkr(String trkr) {
		this.trkr = trkr;
	}

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getMno() {
		return mno;
	}

	public void setMno(String mno) {
		this.mno = mno;
	}

	public String getSignature() {
		return signature;
	}

	public void setSignature(String signature) {
		this.signature = signature;
	}

	public String getCommemail() {
		return commemail;
	}

	public void setCommemail(String commemail) {
		this.commemail = commemail;
	}

	public String getApp() {
		return app;
	}

	public void setApp(String app) {
		this.app = app;
	}

	public String getServices() {
		return services;
	}

	public void setServices(String services) {
		this.services = services;
	}

	public String getUdf2() {
		return udf2;
	}

	public void setUdf2(String udf2) {
		this.udf2 = udf2;
	}

	public String getLang() {
		return lang;
	}

	public void setLang(String lang) {
		this.lang = lang;
	}

	@Override
	public String toString() {
		return "UpdateUserReqPojo [userid=" + userid + ", trkr=" + trkr + ", category=" + category + ", mno=" + mno
				+ ", signature=" + signature + ", commemail=" + commemail + ", dept1=" + dept1 + ", dept2=" + dept2
				+ ", dept3=" + dept3 + ", app=" + app + ", services=" + services + ", updatedby=" + updatedby
				+ ", udf2=" + udf2 + ", lang=" + lang + "]";
	}

	public String getUpdatedby() {
		return updatedby;
	}

	public void setUpdatedby(String updatedby) {
		this.updatedby = updatedby;
	}

}
