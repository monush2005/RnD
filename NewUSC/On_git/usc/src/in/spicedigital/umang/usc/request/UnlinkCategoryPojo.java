package in.spicedigital.umang.usc.request;

public class UnlinkCategoryPojo {
	private String token;
	private String trkr;
	private String lang;
	private String cgid;
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
	public String getCgid() {
		return cgid;
	}
	public void setCgid(String cgid) {
		this.cgid = cgid;
	}
	public String getAppId() {
		return appId;
	}
	public void setAppId(String appId) {
		this.appId = appId;
	}
	private String appId;
}
