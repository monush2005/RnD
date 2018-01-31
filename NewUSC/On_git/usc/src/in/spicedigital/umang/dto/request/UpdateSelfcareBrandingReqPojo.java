package in.spicedigital.umang.dto.request;

import com.google.gson.GsonBuilder;

public class UpdateSelfcareBrandingReqPojo {

	private String trkr;
	private String lang;
	private String logo;
	private String deptid;
	private String deptname;
	private String theme;
	private String token;
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
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

	public String getLogo() {
		return logo;
	}

	public void setLogo(String logo) {
		this.logo = logo;
	}

	public String getDeptid() {
		return deptid;
	}

	public void setDeptid(String deptid) {
		this.deptid = deptid;
	}

	public String getDeptname() {
		return deptname;
	}

	public void setDeptname(String deptname) {
		this.deptname = deptname;
	}

	public String getTheme() {
		return theme;
	}

	public void setTheme(String theme) {
		this.theme = theme;
	}

	@Override
	public String toString() {
		return "UpdateSelfcareBrandingReqPojo [trkr=" + trkr + ", lang=" + lang + ", logo=" + logo + ", deptid="
				+ deptid + ", deptname=" + deptname + ", theme=" + theme + "]";
	}

	public static void main(String[] args) {
		System.out.println(new GsonBuilder().serializeNulls().create().toJson(new UpdateSelfcareBrandingReqPojo()));
	}

}
