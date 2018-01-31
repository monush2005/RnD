package in.spicedigital.umang.dto.request;

import com.google.gson.GsonBuilder;

public class UpdateDeptFaqReqPojo {
private String dept_id;
private String ques_no;
private String lang;
private String ques;
private String ans;
private String trkr;
private String type;
private String faqtype;
private String token;
public String getToken() {
	return token;
}
public void setToken(String token) {
	this.token = token;
}


public String getType() {
	return type;
}
public void setType(String type) {
	this.type = type;
}
public String getTrkr() {
	return trkr;
}
public void setTrkr(String trkr) {
	this.trkr = trkr;
}
public String getDept_id() {
	return dept_id;
}
public void setDept_id(String dept_id) {
	this.dept_id = dept_id;
}
public String getQues_no() {
	return ques_no;
}
public void setQues_no(String ques_no) {
	this.ques_no = ques_no;
}
public String getLang() {
	return lang;
}
public void setLang(String lang) {
	this.lang = lang;
}
public String getQues() {
	return ques;
}
public void setQues(String ques) {
	this.ques = ques;
}
public String getAns() {
	return ans;
}
public void setAns(String ans) {
	this.ans = ans;
}
@Override
public String toString() {
	return "SLFUpdateDeptFaqReqPojo [dept_id=" + dept_id + ", ques_no=" + ques_no + ", lang=" + lang + ", ques=" + ques + ", ans=" + ans + ", trkr=" + trkr + ", type=" + type + "]";
}

public static void main(String[] args) {
	System.out.println(new GsonBuilder().serializeNulls().create().toJson(new UpdateDeptFaqReqPojo()));
}
public String getFaqtype() {
	return faqtype;
}
public void setFaqtype(String faqtype) {
	this.faqtype = faqtype;
}
}
