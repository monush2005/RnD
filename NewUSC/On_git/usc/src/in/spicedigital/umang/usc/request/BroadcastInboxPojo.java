package in.spicedigital.umang.usc.request;

public class BroadcastInboxPojo {
	private String lang;
	private String trkr;
	private String token;
	private String page;
	private String size;
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
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public String getPage() {
		return page;
	}
	public void setPage(String page) {
		this.page = page;
	}
	public String getSize() {
		return size;
	}
	public void setSize(String size) {
		this.size = size;
	}
	@Override
	public String toString() {
		return "BroadcastInboxPojo [lang=" + lang + ", trkr=" + trkr + ", token=" + token + ", page=" + page + ", size="
				+ size + ", getLang()=" + getLang() + ", getTrkr()=" + getTrkr() + ", getToken()=" + getToken()
				+ ", getPage()=" + getPage() + ", getSize()=" + getSize() + ", getClass()=" + getClass()
				+ ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
	}

}
