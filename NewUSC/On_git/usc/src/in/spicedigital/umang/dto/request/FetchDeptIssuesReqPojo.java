package in.spicedigital.umang.dto.request;

public class FetchDeptIssuesReqPojo {
 

	private String app;
	private String services;
	private String type;
	private String trkr;
	private String token;
	private String lang;
 
	
	
	public String getApp() {
		return app;
	}
	public void setApp(String app) {
		this.app = app;
	}
	public String getServices() {
		return services;
	}
	public void setServices(String services) {
		this.services = services;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
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
		return "FetchDeptIssuesReqPojo [app=" + app + ", services=" + services + ", type=" + type + ", trkr=" + trkr
				+ ", token=" + token + ", lang=" + lang + "]";
	}
	
	
	
	
	 
	
	 

	
 
	 
}
