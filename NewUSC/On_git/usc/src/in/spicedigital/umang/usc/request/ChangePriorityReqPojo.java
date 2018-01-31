package in.spicedigital.umang.usc.request;

public class ChangePriorityReqPojo {

	private String token;
	private String bannerId1;
	private String bannerId2;
	private String lang;
	private String trkr;

	public String getLang() {
		return lang;
	}
	public void setLang(String lang) {
		this.lang = lang;
	}
	public String getTrkr() {
		return trkr;
	}
	public void setTrkr(String trkr) {
		this.trkr = trkr;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public String getBannerId1() {
		return bannerId1;
	}
	public void setBannerId1(String bannerId1) {
		this.bannerId1 = bannerId1;
	}
	public String getBannerId2() {
		return bannerId2;
	}
	public void setBannerId2(String bannerId2) {
		this.bannerId2 = bannerId2;
	}
	
}
