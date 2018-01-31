package in.spicedigital.umang.dto.request;

public class ReportingTpsPojo {
	private String department;
	private String toDate;
	private String fromDate;
	private String type;
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
	@Override
	public String toString() {
		return "ReportingTpsPojo [department=" + department + ", toDate=" + toDate + ", fromDate=" + fromDate
				+ ", type=" + type + "]";
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
}
