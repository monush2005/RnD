package in.spicedigital.umang.dto.request;

import com.google.gson.GsonBuilder;

public class ModerateBannerReqPojo {
	private String bannerid;
	private String sdate;
	private String comments;
	private String trkr;
	private String lang;
	private String edate;
	private String cdate;
	private String token;
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

	public String getCdate() {
		return cdate;
	}

	public void setCdate(String cdate) {
		this.cdate = cdate;
	}

	 

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	 

	public String getBannerid() {
		return bannerid;
	}

	public void setBannerid(String bannerid) {
		this.bannerid = bannerid;
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

	@Override
	public String toString() {
		return "ModerateBannerReqPojo [bannerid=" + bannerid + ", sdate=" + sdate + ", comments=" + comments + ", trkr="
				+ trkr + ", lang=" + lang + ", edate=" + edate + ", cdate=" + cdate + "]";
	}

	public static void main(String[] args) {
		System.out.println(new GsonBuilder().serializeNulls().create().toJson(new ModerateBannerReqPojo()));
	}

}
