package in.spicedigital.umang.dto.request;

import com.google.gson.GsonBuilder;

public class RemoveBannerReqPojo {
	private String bannerid;
	private String trkr;
	private String lang;
	private String action;
	private String token;
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}

	public String getAction() {
		return action;
	}

	public void setAction(String action) {
		this.action = action;
	}

	public String getBannerid() {
		return bannerid;
	}

	public void setBannerid(String bannerid) {
		this.bannerid = bannerid;
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
		return "RemoveBannerReqPojo [bannerid=" + bannerid + ", trkr=" + trkr + ", lang=" + lang + ", action=" + action
				+ "]";
	}

	public static void main(String[] args) {
		System.out.println(new GsonBuilder().serializeNulls().create().toJson(new RemoveBannerReqPojo()));
	}

}
