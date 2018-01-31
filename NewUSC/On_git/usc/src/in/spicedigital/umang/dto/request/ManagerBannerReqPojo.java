package in.spicedigital.umang.dto.request;

import com.google.gson.GsonBuilder;

public class ManagerBannerReqPojo {

	private String trkr;
	private String lang;
	private String state;
	private String sdate;
	private String edate;
	private String status;
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

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
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

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "ManagerBannerReqPojo [trkr=" + trkr + ", lang=" + lang + ", state=" + state + ", sdate=" + sdate
				+ ", edate=" + edate + ", status=" + status + "]";
	}

	public static void main(String[] args) {
		System.out.println(new GsonBuilder().serializeNulls().create().toJson(new ManagerBannerReqPojo()));
	}

}
