package in.spicedigital.umang.dto.request;

public class FetchFeedbackPojo {
 

	private String appid;
	private String serviceid;
	private String page;
	private String trkr;
	private String token;
	private String lang;
	public String size;
 
	
	
	public String getSize() {
		return size;
	}
	public void setSize(String size) {
		this.size = size;
	}
	public String getAppid() {
		return appid;
	}
	public void setAppid(String appid) {
		this.appid = appid;
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
	public String getLang() {
		return lang;
	}
	public void setLang(String lang) {
		this.lang = lang;
	}
	@Override
	public String toString() {
		return "FetchFeedbackPojo [appid=" + appid + ", serviceid=" + serviceid + ", page=" + page + ", trkr=" + trkr
				+ ", token=" + token + ", lang=" + lang + ", size=" + size + "]";
	}
	public String getServiceid() {
		return serviceid;
	}
	public void setServiceid(String serviceid) {
		this.serviceid = serviceid;
	}
	public String getPage() {
		return page;
	}
	public void setPage(String page) {
		this.page = page;
	}
	
	
	
	
	 
	
	 

	
 
	 
}
