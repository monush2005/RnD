package in.spicedigital.umang.dto.request;

public class AddCategoryReqPojo {
	private String category ;
	private String alises ;
 
	private String lang;
	private String trkr;
	private String userid;
	private String token;
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getAlises() {
		return alises;
	}
	public void setAlises(String alises) {
		this.alises = alises;
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
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return String.format("AddCategoryReqPojo [category=%s, alises=%s, lang=%s, trkr=%s, userid=%s]", category,
				alises, lang, trkr, userid);
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	

	 
 
	 
	

}
