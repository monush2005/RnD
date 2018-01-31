
package in.spicedigital.umang.dto.request;

public class FetchDeptBasedonStateRequestPojo {
	private String states;
	private String token;
	private String lang;
	private String category;
	

	

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
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

	public void setStates(String states) {
		this.states = states;
	}

	public String getStates() {
		return states;
	}


	

}
