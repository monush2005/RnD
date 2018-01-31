package in.spicedigital.umang.dto.request;
import com.google.gson.GsonBuilder;

public class FetchDeptFaqReqPojo {

	private String deptId;
	private String trkr;
	private String lang;
    private String faqtype;
    private String token;
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
    
    
	public String getFaqtype() {
		return faqtype;
	}

	public void setFaqtype(String faqtype) {
		this.faqtype = faqtype;
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

	public String getDeptId() {
		return deptId;
	}

	public void setDeptId(String deptId) {
		this.deptId = deptId;
	}

	@Override
	public String toString() {
		return "FetchDeptFaqReqPojo [deptId=" + deptId + ", trkr=" + trkr + ", lang=" + lang + ", faqtype=" + faqtype
				+ "]";
	}
	public static void main(String[] args) {
		System.out.println(new GsonBuilder().serializeNulls().create().toJson(new FetchDeptFaqReqPojo()));
	}
}
