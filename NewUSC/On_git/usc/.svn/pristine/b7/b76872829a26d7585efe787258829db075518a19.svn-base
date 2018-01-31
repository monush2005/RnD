package in.spicedigital.umang.dto.request;

import com.google.gson.GsonBuilder;

public class ViewBannerReqPojo {

	private String trkr;
	private String lang;
	private String bannername;
	private String token;
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

	public String getBannername() {
		return bannername;
	}

	public void setBannername(String bannername) {
		this.bannername = bannername;
	}

	@Override
	public String toString() {
		return "ViewBannerReqPojo [trkr=" + trkr + ", lang=" + lang + ", bannername=" + bannername + "]";
	}

	public static void main(String[] args) {
		System.out.println(new GsonBuilder().serializeNulls().create().toJson(new ViewBannerReqPojo()));
	}

}
