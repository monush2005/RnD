package in.spicedigital.umang.dto.request;
public class FetchDeptQueryReqPojo {
 

	private String appid;
	private String serviceid;
	private String type;
	private String trkr;
	private String token;
	private String lang;
	private String action;
	private String status;
	private String sdate;
	private String edate;
	private String page;
	private String size;
 
	
	
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
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
	public String getLang() {
		return lang;
	}
	public void setLang(String lang) {
		this.lang = lang;
	}
	@Override
	public String toString() {
		return "FetchDeptQueryReqPojo [appid=" + appid + ", serviceid=" + serviceid + ", type=" + type + ", trkr="
				+ trkr + ", token=" + token + ", lang=" + lang + ", action=" + action + ", sdate=" + sdate + ", edate="
				+ edate + ", page=" + page + ", size=" + size + "]";
	}
	private String getAction() {
		return action;
	}
	private void setAction(String action) {
		this.action = action;
	}
	public String getEdate() {
		return edate;
	}
	public void setEdate(String edate) {
		this.edate = edate;
	}
	public String getSdate() {
		return sdate;
	}
	public void setSdate(String sdate) {
		this.sdate = sdate;
	}
	public String getPage() {
		return page;
	}
	public void setPage(String page) {
		this.page = page;
	}
	public String getSize() {
		return size;
	}
	public void setSize(String size) {
		this.size = size;
	}
	public String getServiceid() {
		return serviceid;
	}
	public void setServiceid(String serviceid) {
		this.serviceid = serviceid;
	}
	public String getAppid() {
		return appid;
	}
	public void setAppid(String appid) {
		this.appid = appid;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
	
	
	
	 
	
	 

	
 
	 
}
