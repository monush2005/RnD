package in.spicedigital.umang.dto.request;

import com.google.gson.GsonBuilder;

public class ActivateDeactivateAppReqPojo {
	private String userid;
	private String app;
	private String service;
	private String status;
	private String type;
	private String lang;
	private String trkr;
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
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getApp() {
		return app;
	}
	public void setApp(String app) {
		this.app = app;
	}
	public String getService() {
		return service;
	}
	public void setService(String service) {
		this.service = service;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getLang() {
		return lang;
	}
	public void setLang(String lang) {
		this.lang = lang;
	}
	@Override
	public String toString() {
		return "ActivateDeactivateAppReqPojo [userid=" + userid + ", app=" + app + ", service=" + service + ", status=" + status + ", type=" + type + ", lang=" + lang + ", trkr=" + trkr + "]";
	}
	
	public static void main(String[] args) {
		System.out.println(new GsonBuilder().serializeNulls().create().toJson(new ActivateDeactivateAppReqPojo()));
	}
	

}
