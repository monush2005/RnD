package in.spicedigital.umang.dto.request;

import com.google.gson.GsonBuilder;

public class UpdateUserStatusReqPojo {
	private String userid;
	private String trkr;

	private String status;
	
	private String token;
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}


	public String getDept() {
		return dept;
	}

	public void setDept(String dept) {
		this.dept = dept;
	}

	public String getApp() {
		return app;
	}

	public void setApp(String app) {
		this.app = app;
	}
	private String dept;
	private String app;

	private String updatedby;

	private String udf2;
	private String lang;

	
	
	
	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	
	public String getTrkr() {
		return trkr;
	}

	public void setTrkr(String trkr) {
		this.trkr = trkr;
	}

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
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
		return "UpdateUserStatusReqPojo [userid=" + userid + ", trkr=" + trkr + ", status=" + status + ", dept=" + dept
				+ ", app=" + app + ", updatedby=" + updatedby + ", udf2=" + udf2 + ", lang=" + lang + "]";
	}

	public String getUpdatedby() {
		return updatedby;
	}

	public void setUpdatedby(String updatedby) {
		this.updatedby = updatedby;
	}
	public static void main(String[] args) {
		System.out.println(new GsonBuilder().serializeNulls().create().toJson(new UpdateUserStatusReqPojo()));
	}

}
