package in.spicedigital.umang.dto.request;



public class FetchCceMnoResPojo
{
 
	//response_status
	private String rs;
	//response_code
	private String rc;
	//response_description
	private String rd;
	
	private FetchCceMnoResPojo.CceMnoDetails cceDetails;
	
public static class CceMnoDetails{
 
	private String mno;
	private String email;
	 
	
	 
	public String getMno() {
		return mno;
	}



	public void setMno(String mno) {
		this.mno = mno;
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	@Override
	public String toString() {
		return "CceMnoDetails [mno=" + mno + ", email=" + email + "]";
	}


	
	
}

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

	public FetchCceMnoResPojo.CceMnoDetails getCceDetails() {
		return cceDetails;
	}

	public void setCceDetails(FetchCceMnoResPojo.CceMnoDetails cceDetails) {
		this.cceDetails = cceDetails;
	}

	@Override
	public String toString() {
		return "FetchCceMnoResPojo [rs=" + rs + ", rc=" + rc + ", rd=" + rd + ", cceDetails=" + cceDetails + "]";
	}

	
}
