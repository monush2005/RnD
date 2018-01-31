package in.spicedigital.umang.dto.request;

public class DeptCategoryReqPojo {
 

	private String ministry;
	private String trkr;
	private String category;
	private String action;
	private String token;
	private String lang;
	public String getMinistry() {
		return ministry;
	}
	public void setMinistry(String ministry) {
		this.ministry = ministry;
	}
	public String getTrkr() {
		return trkr;
	}
	public void setTrkr(String trkr) {
		this.trkr = trkr;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getAction() {
		return action;
	}
	public void setAction(String action) {
		this.action = action;
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
	@Override
	public String toString() {
		return "DeptCategoryReqPojo [ministry=" + ministry + ", trkr=" + trkr + ", category=" + category + ", action="
				+ action + ", token=" + token + ", lang=" + lang + "]";
	}

	 

	
 
	 
}
