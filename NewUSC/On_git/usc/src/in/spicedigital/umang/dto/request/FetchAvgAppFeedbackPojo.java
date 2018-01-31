package in.spicedigital.umang.dto.request;
public class FetchAvgAppFeedbackPojo {
	
	private String edate;
	private String lang;
	private String sdate;
	private String token;
	private String os;
	
	public String getOs() {
		return os;
	}


	public void setOs(String os) {
		this.os = os;
	}


	public String getEdate() {
		return edate;
	}


	public void setEdate(String edate) {
		this.edate = edate;
	}


	public String getLang() {
		return lang;
	}


	public void setLang(String lang) {
		this.lang = lang;
	}


	public String getSdate() {
		return sdate;
	}


	public void setSdate(String sdate) {
		this.sdate = sdate;
	}


	public String getToken() {
		return token;
	}


	public void setToken(String token) {
		this.token = token;
	}


	@Override
	public String toString() {
		return "FetchAppFeedbackPojo [lang=" + lang + ", sdate=" + sdate + ", edate=" + edate + ", os=" + os +"]";
	}

}
