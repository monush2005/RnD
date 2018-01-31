package in.spicedigital.umang.dto.request;

import com.google.gson.GsonBuilder;

public class LoginReqPojo {
	private String userid;
	private String trkr;
	private String lang;
	private String password;
	private String token;

	public String getUserid() {
		return userid;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
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

	public String getLang() {
		return lang;
	}

	public void setLang(String lang) {
		this.lang = lang;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "LoginReqPojo [userid=" + userid + ", trkr=" + trkr + ", lang=" + lang + ", password=" + password + "]";
	}

	public static void main(String[] args) {
		System.out.println(new GsonBuilder().serializeNulls().create().toJson(new LoginReqPojo()));
	}

}
