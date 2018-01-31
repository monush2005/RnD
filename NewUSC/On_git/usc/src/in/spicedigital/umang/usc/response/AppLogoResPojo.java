package in.spicedigital.umang.usc.response;

public class AppLogoResPojo {
	
	private String rs;
	private String rc;
	private String rd;
	private Pd pd;
	
	public String getRs() {
		return rs;
	}
	public void setRs(String rs) {
		this.rs = rs;
	}
	public String getRc() {
		return rc;
	}
	public void setRc(String rc) {
		this.rc = rc;
	}
	public String getRd() {
		return rd;
	}
	public void setRd(String rd) {
		this.rd = rd;
	}
	public Pd getPd() {
		return pd;
	}
	public void setPd(Pd pd) {
		this.pd = pd;
	}

	public static class Pd{
		
		private String logoUrl;		
		
		public String getLogoUrl() {
			return logoUrl;
		}
		public void setLogoUrl(String logoUrl) {
			this.logoUrl = logoUrl;
		}
	}
}
