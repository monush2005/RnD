package in.spicedigital.umang.dto.request;

public class LinkUnlinkReqPojo {
	private String srid ;
	private String cgid ;
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	private String lang ;
	private String type ;
	private String trkr;
	private String token;
	
	public String getTrkr() {
		return trkr;
	}
	public void setTrkr(String trkr) {
		this.trkr = trkr;
	}
	public String getSrid() {
		return srid;
	}
	public void setSrid(String srid) {
		this.srid = srid;
	}
	public String getCgid() {
		return cgid;
	}
	public void setCgid(String cgid) {
		this.cgid = cgid;
	}
	public String getLang() {
		return lang;
	}
	public void setLang(String lang) {
		this.lang = lang;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	@Override
	public String toString() {
		return "LinkUnlinkReqPojo [srid=" + srid + ", cgid=" + cgid + ", lang=" + lang + ", type=" + type + ", trkr=" + trkr + "]";
	}
}
