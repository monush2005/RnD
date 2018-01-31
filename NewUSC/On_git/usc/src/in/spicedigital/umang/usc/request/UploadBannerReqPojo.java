package in.spicedigital.umang.usc.request;

import java.util.List;

public class UploadBannerReqPojo {
	
	private String token;
	private String trkr;
	private String lang;
	private List<UploadBannerListReqPojo> banner;

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
	public List<UploadBannerListReqPojo> getBanner() {
		return banner;
	}
	public void setBanner(List<UploadBannerListReqPojo> banner) {
		this.banner = banner;
	}

}
