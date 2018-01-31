package in.spicedigital.umang.dto.request;

public class FetchRoleCategoryReqPojo {

	private String lang;
	private String token;
	
	
	@Override
	public String toString() {
		return "FetchRoleCategoryReqPojo [lang=" + lang + ", token=" + token
				+ "]";
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public String getLang() {
		return lang;
	}
	public void setLang(String lang) {
		this.lang = lang;
	}
	
	
}
