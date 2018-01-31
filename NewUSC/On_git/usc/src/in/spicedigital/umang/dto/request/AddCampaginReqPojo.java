package in.spicedigital.umang.dto.request;

public class AddCampaginReqPojo {
	private String deptid;
	private String userid;
	private String userrole;
	private String type;
	private String os;
	private String extracttype;
	private String title;
	private String message;
	private String sound;
	private String longdesc;
	@Override
	public String toString() {
		return "AddCampaginReqPojo [deptid=" + deptid + ", userid=" + userid + ", userrole=" + userrole + ", type="
				+ type + ", os=" + os + ", extracttype=" + extracttype + ", title=" + title + ", message=" + message
				+ ", sound=" + sound + ", longdesc=" + longdesc + ", redirecturl=" + redirecturl + ", image=" + image
				+ ", icon=" + icon + ", tabname=" + tabname + ", deptstate=" + deptstate + ", packagename="
				+ packagename + ", scheduletime=" + scheduletime + ", filepath=" + filepath + ", age=" + age
				+ ", gender=" + gender + ", deptusage=" + deptusage + ", state=" + state + ", lastlogin=" + lastlogin
				+ "]";
	}
	private String redirecturl;
	private String image;
	private String icon;
	private String tabname;
	private String deptstate;
	private String packagename;
	private String scheduletime;
	private String filepath;
	private String age;
	private String gender;
	private String deptusage;
	private String state;
	private String lastlogin;
	public String getDeptid() {
		return deptid;
	}
	public void setDeptid(String deptid) {
		this.deptid = deptid;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getUserrole() {
		return userrole;
	}
	public void setUserrole(String userrole) {
		this.userrole = userrole;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getOs() {
		return os;
	}
	public void setOs(String os) {
		this.os = os;
	}
	public String getExtracttype() {
		return extracttype;
	}
	public void setExtracttype(String extracttype) {
		this.extracttype = extracttype;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getSound() {
		return sound;
	}
	public void setSound(String sound) {
		this.sound = sound;
	}
	public String getLongdesc() {
		return longdesc;
	}
	public void setLongdesc(String longdesc) {
		this.longdesc = longdesc;
	}
	public String getRedirecturl() {
		return redirecturl;
	}
	public void setRedirecturl(String redirecturl) {
		this.redirecturl = redirecturl;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getIcon() {
		return icon;
	}
	public void setIcon(String icon) {
		this.icon = icon;
	}
	public String getTabname() {
		return tabname;
	}
	public void setTabname(String tabname) {
		this.tabname = tabname;
	}
	public String getDeptstate() {
		return deptstate;
	}
	public void setDeptstate(String deptstate) {
		this.deptstate = deptstate;
	}
	public String getPackagename() {
		return packagename;
	}
	public void setPackagename(String packagename) {
		this.packagename = packagename;
	}
	public String getScheduletime() {
		return scheduletime;
	}
	public void setScheduletime(String scheduletime) {
		this.scheduletime = scheduletime;
	}
	public String getFilepath() {
		return filepath;
	}
	public void setFilepath(String filepath) {
		this.filepath = filepath;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getDeptusage() {
		return deptusage;
	}
	public void setDeptusage(String deptusage) {
		this.deptusage = deptusage;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getLastlogin() {
		return lastlogin;
	}
	public void setLastlogin(String lastlogin) {
		this.lastlogin = lastlogin;
	}
}
