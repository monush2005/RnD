package in.spicedigital.umang.dto.request;
import com.google.gson.GsonBuilder;

public class ResponseBannerReqPojo {
	private String bannerid;
	private String status;
	private String comments;
	private String trkr;
	private String lang;
	private String token;
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}

	
	
	
	
	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
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
		return "ResponseBannerReqPojo [bannerid=" + bannerid + ", status=" + status + ", comments=" + comments
				+ ", trkr=" + trkr + ", lang=" + lang + "]";
	}

	public static void main(String[] args) {
		System.out.println(new GsonBuilder().serializeNulls().create().toJson(new ResponseBannerReqPojo()));
	}

}
