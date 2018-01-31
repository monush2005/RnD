package in.spicedigital.umang.dto.request;

import com.google.gson.GsonBuilder;

public class FetchRolesReqPojo {
	private String roleid;
	private String trkr;
	private String udf1;
	private String udf2;
	private String lang;
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

	public String getRoleid() {
		return roleid;
	}

	public void setRoleid(String roleid) {
		this.roleid = roleid;
	}

	public String getUdf1() {
		return udf1;
	}

	public void setUdf1(String udf1) {
		this.udf1 = udf1;
	}

	public String getUdf2() {
		return udf2;
	}

	public void setUdf2(String udf2) {
		this.udf2 = udf2;
	}

	public String getLang() {
		return lang;
	}

	public void setLang(String lang) {
		this.lang = lang;
	}

	@Override
	public String toString() {
		return "FetchRolesReqPojo [roleid=" + roleid + ", trkr=" + trkr + ", udf1=" + udf1 + ", udf2=" + udf2 + ", lang=" + lang + "]";
	}

	public static void main(String[] args) {
		System.out.println(new GsonBuilder().serializeNulls().create().toJson(new FetchRolesReqPojo()));
	}

}
