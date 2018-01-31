package in.spicedigital.umang.dto.request;

import com.google.gson.GsonBuilder;

public class FetchChildUserTreeReqPojo {
	private String userId;
	private String lang;
	private String trkr;
	private String token;
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

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

	@Override
	public String toString() {
		return "FetchChildUserTreeReqPojo [userId=" + userId + ", lang=" + lang + ", trkr=" + trkr + "]";
	}

	public static void main(String[] args) {
		System.out.println(new GsonBuilder().serializeNulls().create().toJson(new FetchChildUserTreeReqPojo()));
	}

}
