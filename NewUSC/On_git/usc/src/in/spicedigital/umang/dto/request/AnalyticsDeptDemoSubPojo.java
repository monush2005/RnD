package in.spicedigital.umang.dto.request;
public class AnalyticsDeptDemoSubPojo {
	private String toDate;
	private String fromDate;
	private String type;
	private String id;
	private String criteria;
	private String subCriteria;
	@Override
	public String toString() {
		return "AnalyticsDeptDemoSubPojo [toDate=" + toDate + ", fromDate=" + fromDate + ", type=" + type + ", id=" + id
				+ ", criteria=" + criteria + ", subCriteria=" + subCriteria + ", getToDate()=" + getToDate()
				+ ", getFromDate()=" + getFromDate() + ", getType()=" + getType() + ", getId()=" + getId()
				+ ", getCriteria()=" + getCriteria() + ", getSubCriteria()=" + getSubCriteria() + ", getClass()="
				+ getClass() + ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
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
	public String getSubCriteria() {
		return subCriteria;
	}
	public void setSubCriteria(String subCriteria) {
		this.subCriteria = subCriteria;
	}
}
