package in.spicedigital.umang.dto.request;

import com.google.gson.GsonBuilder;

public class AssignCategoryReqPojo {
	private String cgid;
	private String appid;
	private String userid;
	private String lang;
	private String trkr;
	private String serviceid;
	private String updatedby;
	private String action;
	private String ministry;
	private String token;
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public String getMinistry() {
		return ministry;
	}

	public void setMinistry(String ministry) {
		this.ministry = ministry;
	}

	public String getCgid() {
		return cgid;
	}

	public void setCgid(String cgid) {
		this.cgid = cgid;
	}

	public String getAppid() {
		return appid;
	}

	public void setAppid(String appid) {
		this.appid = appid;
	}

	public String getLang() {
		return lang;
	}

	public void setLang(String lang) {
		this.lang = lang;
	}

	public String getServiceid() {
		return serviceid;
	}

	public void setServiceid(String serviceid) {
		this.serviceid = serviceid;
	}

	public String getUpdatedby() {
		return updatedby;
	}

	public void setUpdatedby(String updatedby) {
		this.updatedby = updatedby;
	}

	public String getAction() {
		return action;
	}

	public void setAction(String action) {
		this.action = action;
	}

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public String getTrkr() {
		return trkr;
	}

	public void setTrkr(String trkr) {
		this.trkr = trkr;
	}

	@Override
	public String toString() {
		return "AssignCategoryReqPojo [cgid=" + cgid + ", appid=" + appid + ", userid=" + userid + ", lang=" + lang
				+ ", trkr=" + trkr + ", serviceid=" + serviceid + ", updatedby=" + updatedby + ", action=" + action
				+ ", ministry=" + ministry + "]";
	}

	public static void main(String[] args) {
		System.out.println(new GsonBuilder().serializeNulls().create().toJson(new AssignCategoryReqPojo()));
	}
}
