package in.spicedigital.umang.dto.request;

import com.google.gson.GsonBuilder;

public class SearchQuestionnaireReqPojo {

	private String state;
	private String trkr;
	private String sdate;
	private String edate;
	private String deptid;
	private String app;
	private String lang;
	private String token;
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getTrkr() {
		return trkr;
	}

	public void setTrkr(String trkr) {
		this.trkr = trkr;
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

	public String getDeptid() {
		return deptid;
	}

	public void setDeptid(String deptid) {
		this.deptid = deptid;
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

	@Override
	public String toString() {
		return "SearchQuestionnaireReqPojo [state=" + state + ", trkr=" + trkr + ", sdate=" + sdate + ", edate=" + edate
				+ ", deptid=" + deptid + ", app=" + app + ", lang=" + lang + "]";
	}

	public static void main(String[] args) {
		System.out.println(new GsonBuilder().serializeNulls().create().toJson(new SearchQuestionnaireReqPojo()));
	}
}
