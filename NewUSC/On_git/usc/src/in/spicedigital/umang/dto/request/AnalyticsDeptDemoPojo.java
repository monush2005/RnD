package in.spicedigital.umang.dto.request;

public class AnalyticsDeptDemoPojo {
	private String toDate;
	private String fromDate;
	private String type;
	private String id;
	private String criteria;
	@Override
	public String toString() {
		return "AnalyticsDeptDemoPojo [toDate=" + toDate + ", fromDate=" + fromDate + ", type=" + type + ", id=" + id
				+ ", criteria=" + criteria + ", getToDate()=" + getToDate() + ", getFromDate()=" + getFromDate()
				+ ", getType()=" + getType() + ", getId()=" + getId() + ", getCriteria()=" + getCriteria()
				+ ", getClass()=" + getClass() + ", hashCode()=" + hashCode() + ", toString()=" + super.toString()
				+ "]";
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
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getCriteria() {
		return criteria;
	}
	public void setCriteria(String criteria) {
		this.criteria = criteria;
	}
}
