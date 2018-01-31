package in.spicedigital.umang.dto.request;

import com.google.gson.GsonBuilder;

public class AddReportCardReqPojo {
	private String dept_id ;
	private String app_id ;
	private String service ;
	private String uptimeservice ;
	private String reponse_time_pages ;
	private String negd_rating; 
	private String services_offered; 
	private String complaint_resolution;
	private String negative_closed; 
	private String positive_closed;
	private String overallrating;
	private String lang;
	private String trkr;
	private String token;
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	

	public String getDept_id() {
		return dept_id;
	}


	public void setDept_id(String dept_id) {
		this.dept_id = dept_id;
	}


	public String getApp_id() {
		return app_id;
	}


	public void setApp_id(String app_id) {
		this.app_id = app_id;
	}


	public String getService() {
		return service;
	}


	public void setService(String service) {
		this.service = service;
	}


	public String getUptimeservice() {
		return uptimeservice;
	}


	public void setUptimeservice(String uptimeservice) {
		this.uptimeservice = uptimeservice;
	}


	public String getReponse_time_pages() {
		return reponse_time_pages;
	}


	public void setReponse_time_pages(String reponse_time_pages) {
		this.reponse_time_pages = reponse_time_pages;
	}


	public String getNegd_rating() {
		return negd_rating;
	}


	public void setNegd_rating(String negd_rating) {
		this.negd_rating = negd_rating;
	}


	public String getServices_offered() {
		return services_offered;
	}


	public void setServices_offered(String services_offered) {
		this.services_offered = services_offered;
	}


	public String getComplaint_resolution() {
		return complaint_resolution;
	}


	public void setComplaint_resolution(String complaint_resolution) {
		this.complaint_resolution = complaint_resolution;
	}


	public String getNegative_closed() {
		return negative_closed;
	}


	public void setNegative_closed(String negative_closed) {
		this.negative_closed = negative_closed;
	}


	public String getPositive_closed() {
		return positive_closed;
	}


	public void setPositive_closed(String positive_closed) {
		this.positive_closed = positive_closed;
	}


	public String getOverallrating() {
		return overallrating;
	}


	public void setOverallrating(String overallrating) {
		this.overallrating = overallrating;
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
		return "AddReportCardReqPojo [dept_id=" + dept_id + ", app_id=" + app_id + ", service=" + service + ", uptimeservice=" + uptimeservice + ", reponse_time_pages=" + reponse_time_pages + ", negd_rating=" + negd_rating + ", services_offered=" + services_offered + ", complaint_resolution=" + complaint_resolution + ", negative_closed=" + negative_closed + ", positive_closed=" + positive_closed
				+ ", overallrating=" + overallrating + ", lang=" + lang + ", trkr=" + trkr + "]";
	}


	public static void main(String[] args) {
		System.out.println(new GsonBuilder().serializeNulls().create().toJson(new AddReportCardReqPojo()));
	}

}
