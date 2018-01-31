package in.spicedigital.umang.dto.request;

 

public class RegisterNewUserReqPojo {
	private String name;
	private String trkr;

	private String emailid;
	private String mno;

	private String commemail;
	private String deptdescription;
	private String deptname;
	private String appnature;
	private String service1;
	private String service2;
	private String service3;
	private String service4;
	private String service5;
	private String existingapp;
	private String exappname;
	private String explatform;
	private String upload;
	private String disclaimer;
	private String statecentral;
	private String udf2;
	private String lang;

	public String getDeptdescription() {
		return deptdescription;
	}

	public void setDeptdescription(String deptdescription) {
		this.deptdescription = deptdescription;
	}

	public String getDeptname() {
		return deptname;
	}

	public void setDeptname(String deptname) {
		this.deptname = deptname;
	}

	public String getAppnature() {
		return appnature;
	}

	public void setAppnature(String appnature) {
		this.appnature = appnature;
	}

	public String getService1() {
		return service1;
	}

	public void setService1(String service1) {
		this.service1 = service1;
	}

	public String getService2() {
		return service2;
	}

	public void setService2(String service2) {
		this.service2 = service2;
	}

	public String getService3() {
		return service3;
	}

	public void setService3(String service3) {
		this.service3 = service3;
	}

	public String getService4() {
		return service4;
	}

	public void setService4(String service4) {
		this.service4 = service4;
	}

	public String getService5() {
		return service5;
	}

	public void setService5(String service5) {
		this.service5 = service5;
	}

	public String getExistingapp() {
		return existingapp;
	}

	public void setExistingapp(String existingapp) {
		this.existingapp = existingapp;
	}

	public String getExappname() {
		return exappname;
	}

	public void setExappname(String exappname) {
		this.exappname = exappname;
	}

	public String getExplatform() {
		return explatform;
	}

	public void setExplatform(String explatform) {
		this.explatform = explatform;
	}

	public String getTrkr() {
		return trkr;
	}

	public void setTrkr(String trkr) {
		this.trkr = trkr;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	public String getMno() {
		return mno;
	}

	public void setMno(String mno) {
		this.mno = mno;
	}

	public String getCommemail() {
		return commemail;
	}

	public void setCommemail(String commemail) {
		this.commemail = commemail;
	}

	public String getUpload() {
		return upload;
	}

	public void setUpload(String upload) {
		this.upload = upload;
	}

	public String getDisclaimer() {
		return disclaimer;
	}

	public void setDisclaimer(String disclaimer) {
		this.disclaimer = disclaimer;
	}

	public String getStatecentral() {
		return statecentral;
	}

	public void setStatecentral(String statecentral) {
		this.statecentral = statecentral;
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
		return "RegisterNewUserReqPojo [name=" + name + ", trkr=" + trkr + ", emailid=" + emailid + ", mno=" + mno
				+ ", commemail=" + commemail + ", deptdescription=" + deptdescription + ", deptname=" + deptname
				+ ", appnature=" + appnature + ", service1=" + service1 + ", service2=" + service2 + ", service3="
				+ service3 + ", service4=" + service4 + ", service5=" + service5 + ", existingapp=" + existingapp
				+ ", exappname=" + exappname + ", explatform=" + explatform + ", upload=" + upload + ", disclaimer="
				+ disclaimer + ", statecentral=" + statecentral + ", udf2=" + udf2 + ", lang=" + lang + "]";
	}

}
