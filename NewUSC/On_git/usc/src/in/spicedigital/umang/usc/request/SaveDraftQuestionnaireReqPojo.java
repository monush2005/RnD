package in.spicedigital.umang.usc.request;

public class SaveDraftQuestionnaireReqPojo {

	private String token;
	private String masterJson;
	private String responseJson;
	private boolean isSubmitted;

	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public String getMasterJson() {
		return masterJson;
	}
	public void setMasterJson(String masterJson) {
		this.masterJson = masterJson;
	}
	public String getResponseJson() {
		return responseJson;
	}
	public void setResponseJson(String responseJson) {
		this.responseJson = responseJson;
	}
	public boolean getIsSubmitted() {
		return isSubmitted;
	}
	public void setIsSubmitted(boolean isSubmitted) {
		this.isSubmitted = isSubmitted;
	}
	
}
