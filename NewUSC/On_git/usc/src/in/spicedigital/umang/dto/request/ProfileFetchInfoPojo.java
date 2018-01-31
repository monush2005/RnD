package in.spicedigital.umang.dto.request;
public class ProfileFetchInfoPojo {
	
	    
	private String trkr;
    private String lang;
    private String mno;
    

	
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




	public String getMno() {
		return mno;
	}




	public void setMno(String mno) {
		this.mno = mno;
	}





	
  

	@Override
	public String toString() {
		return "FetchAppFeedbackPojo [mno=" + mno + ", lang=" + lang + "]";
	}

}
