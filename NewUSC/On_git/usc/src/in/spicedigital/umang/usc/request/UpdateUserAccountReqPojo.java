package in.spicedigital.umang.usc.request;

public class UpdateUserAccountReqPojo {
	
	private String userid;
	private String trkr;
	private String app;
	private String token;
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
	public String getApp() {
		return app;
	}
	public void setApp(String app) {
		this.app = app;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public String getLang() {
		return lang;
	}
	public void setLang(String lang) {
		this.lang = lang;
	}
	
}
