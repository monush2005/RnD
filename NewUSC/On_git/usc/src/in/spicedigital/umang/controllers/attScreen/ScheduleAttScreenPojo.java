package in.spicedigital.umang.controllers.attScreen;

public class ScheduleAttScreenPojo {
	private String id;
	private String sdate;
	private String edate;
	private String trkr;
	private String lang;
	private String token;
	@Override
	public String toString() {
		return "ScheduleAttScreenPojo [id=" + id + ", sdate=" + sdate + ", edate=" + edate + ", trkr=" + trkr
				+ ", lang=" + lang + ", token=" + token + ", getId()=" + getId() + ", getSdate()=" + getSdate()
				+ ", getEdate()=" + getEdate() + ", getTrkr()=" + getTrkr() + ", getLang()=" + getLang()
				+ ", getToken()=" + getToken() + ", getClass()=" + getClass() + ", hashCode()=" + hashCode()
				+ ", toString()=" + super.toString() + "]";
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
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
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
}
