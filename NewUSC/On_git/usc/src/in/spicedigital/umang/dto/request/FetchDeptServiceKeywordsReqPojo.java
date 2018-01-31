package in.spicedigital.umang.dto.request;

import com.google.gson.GsonBuilder;

public class FetchDeptServiceKeywordsReqPojo {

	private String deptId;
	private String trkr;
	private String lang;
	private String searchType;
	private String token;
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public String getSearchType() {
		return searchType;
	}

	public void setSearchType(String searchType) {
		this.searchType = searchType;
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
		return "FetchDeptServiceKeywordsReqPojo [deptId=" + deptId + ", trkr=" + trkr + ", lang=" + lang + ", searchType=" + searchType + "]";
	}

	public static void main(String[] args) {
		System.out.println(new GsonBuilder().serializeNulls().create().toJson(new FetchDeptServiceKeywordsReqPojo()));
	}
}
