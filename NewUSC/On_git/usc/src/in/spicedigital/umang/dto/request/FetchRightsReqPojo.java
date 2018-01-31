package in.spicedigital.umang.dto.request;

public class FetchRightsReqPojo {

	private String trkr;
	private String lang;
	private String right;
	private String token;
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public String getRight() {
		return right;
	}

	public void setRight(String right) {
		this.right = right;
	}

	@Override
	public String toString() {
		return "FetchRightsReqPojo [trkr=" + trkr + ", lang=" + lang + ", right=" + right + "]";
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

}
