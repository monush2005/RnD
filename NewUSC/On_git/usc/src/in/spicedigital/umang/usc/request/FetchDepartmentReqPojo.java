package in.spicedigital.umang.usc.request;

public class FetchDepartmentReqPojo {
	
	public String service;
	public String department;
	public String toDate;
	public String fromDate;

	public String getService() {
		return service;
	}
	public void setService(String service) {
		this.service = service;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
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
	
}
