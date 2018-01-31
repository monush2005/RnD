package in.spicedigital.umang.dto.request;

public class ReportingRequestPojo {
private String department;
private String service;
private String type;

public String getDepartment() {
	return department;
}

public void setDepartment(String department) {
	this.department = department;
}

@Override
public String toString() {
	return "ReportingRequestPojo [department=" + department + ", type=" + type + "]";
}

public String getType() {
	return type;
}

public void setType(String type) {
	this.type = type;
}

public String getService() {
	return service;
}

public void setService(String service) {
	this.service = service;
}

}
