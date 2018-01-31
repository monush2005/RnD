package in.spicedigital.umang.dto.request;


public class SearchServicesReqPojo {
	
	
	private String status;
	private String sdate;
	private String edate;
	private String statecentral;
	
	private String dept ;
	private String app ;
	private String services ;
	private String rating ;
	 
 
	private String lang;
	private String trkr;
	private String token;
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	
	
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getSdate() {
		return sdate;
	}
	public void setSdate(String sdate) {
		this.sdate = sdate;
	}
	public String getEdate() {
		return edate;
	}
	public void setEdate(String edate) {
		this.edate = edate;
	}
	public String getStatecentral() {
		return statecentral;
	}
	public void setStatecentral(String statecentral) {
		this.statecentral = statecentral;
	}
	public String getDept() {
		return dept;
	}
	public void setDept(String dept) {
		this.dept = dept;
	}
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
	public String getRating() {
		return rating;
	}
	public void setRating(String rating) {
		this.rating = rating;
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
		return "SearchServicesReqPojo [status=" + status + ", sdate=" + sdate + ", edate=" + edate + ", statecentral="
				+ statecentral + ", dept=" + dept + ", app=" + app + ", services=" + services + ", rating=" + rating
				+ ", lang=" + lang + ", trkr=" + trkr + "]";
	}
	 
 
	 
	
	

}
