package in.spicedigital.umang.dto.request;

public class AnalyticsDemoPojo {
	private String toDate;
	private String fromDate;
	private String criteria;
	@Override
	public String toString() {
		return "AnalyticsDemoPojo [toDate=" + toDate + ", fromDate=" + fromDate + ", criteria=" + criteria
				+ ", getToDate()=" + getToDate() + ", getFromDate()=" + getFromDate() + ", getCriteria()="
				+ getCriteria() + ", getClass()=" + getClass() + ", hashCode()=" + hashCode() + ", toString()="
				+ super.toString() + "]";
	}
	public String getToDate() {
		return toDate;
	}
	public void setToDate(String toDate) {
		this.toDate = toDate;
	}
	public String getFromDate() {
		return fromDate;
	}
	public void setFromDate(String fromDate) {
		this.fromDate = fromDate;
	}
	public String getCriteria() {
		return criteria;
	}
	public void setCriteria(String criteria) {
		this.criteria = criteria;
	}
}
