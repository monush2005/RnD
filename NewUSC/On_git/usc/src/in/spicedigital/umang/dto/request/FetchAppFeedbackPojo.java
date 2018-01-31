package in.spicedigital.umang.dto.request;
public class FetchAppFeedbackPojo {
	
	
	private String lang;
    private String trkr;
    private String token;
    private String sdate;
    private String edate;
    private String rating;
    private String os;
    private String userLanguage;
    private String page;
    private String pageSize;

	
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




	public String getRating() {
		return rating;
	}




	public void setRating(String rating) {
		this.rating = rating;
	}




	public String getOs() {
		return os;
	}




	public void setOs(String os) {
		this.os = os;
	}




	public String getUserLanguage() {
		return userLanguage;
	}




	public void setUserLanguage(String userLanguage) {
		this.userLanguage = userLanguage;
	}




	public String getPage() {
		return page;
	}




	public void setPage(String page) {
		this.page = page;
	}




	public String getPageSize() {
		return pageSize;
	}




	public void setPageSize(String pageSize) {
		this.pageSize = pageSize;
	}


	@Override
	public String toString() {
		return "FetchAppFeedbackPojo [lang=" + lang + ", sdate=" + sdate + ", edate=" + edate +", os=" + os + ", lang=" + userLanguage +  ", rating=" + rating + "]";
	}

}
