package in.spicedigital.umang.dto.request;

import com.google.gson.GsonBuilder;

public class FetchStatesReqPojo {
	 
	private String trkr;
 
	private String lang;

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
		return "FetchStatesReqPojo [trkr=" + trkr + ", lang=" + lang + "]";
	}

	public static void main(String[] args) {
		System.out.println(new GsonBuilder().serializeNulls().create().toJson(new FetchStatesReqPojo()));
	}

}
