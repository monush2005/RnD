package in.spicedigital.umang.dto.response;

public class MasterResponsePojo {
	// Response Status
	private String rs;
	// Response Code
	private String rc;
	// Message(Response Description)
	private String rd;
	// Payload
	private Object pd;

	 
	 

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

	public Object getPd() {
		return pd;
	}

	public void setPd(Object pd) {
		this.pd = pd;
	}

	@Override
	public String toString() {
		return "MasterResponsePojo [rs=" + rs + ", rc=" + rc + ", rd=" + rd + ", pd=" + pd + "]";
	}

}
