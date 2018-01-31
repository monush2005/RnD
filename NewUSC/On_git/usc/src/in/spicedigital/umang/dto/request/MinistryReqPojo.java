package in.spicedigital.umang.dto.request;

import com.google.gson.GsonBuilder;

public class MinistryReqPojo {

	private String ministryId;
	private String action;
	private String status;
	private String app;
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

	public String getMinistryId() {
		return ministryId;
	}

	public void setMinistryId(String ministryId) {
		this.ministryId = ministryId;
	}

	public String getAction() {
		return action;
	}

	public void setAction(String action) {
		this.action = action;
	}

	public String getApp() {
		return app;
	}

	public void setApp(String app) {
		this.app = app;
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
		return "MinistryReqPojo [ministryId=" + ministryId + ", action=" + action + ", status=" + status + ", app="
				+ app + ", lang=" + lang + ", trkr=" + trkr + "]";
	}

	public static void main(String[] args) {
		System.out.println(new GsonBuilder().serializeNulls().create().toJson(new MinistryReqPojo()));
	}

}
