package in.spicedigital.umang.usc.request;

public class ChangePasswordReqPojo {

	private String uname;
	private String trkr;
	private String oldpwd;
	private String newpwd;	
	private String token;
	private String lang;

	public String getUname() {
		return uname;
	}
	public void setUname(String uname) {
		this.uname = uname;
	}
	public String getTrkr() {
		return trkr;
	}
	public void setTrkr(String trkr) {
		this.trkr = trkr;
	}
	public String getOldpwd() {
		return oldpwd;
	}
	public void setOldpwd(String oldpwd) {
		this.oldpwd = oldpwd;
	}
	public String getNewpwd() {
		return newpwd;
	}
	public void setNewpwd(String newpwd) {
		this.newpwd = newpwd;
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
