package in.spicedigital.umang.usc.response;

import java.util.ArrayList;

public class LoginResponsePojo {

	// response_status
	private String rs;
	// response_code
	private String rc;
	// response_description
	private String rd;
	

	

	private LoginResponsePojo.Pd pd;

	public LoginResponsePojo.Pd getPd() {
		return pd;
	}

	public void setPd(LoginResponsePojo.Pd pd) {
		this.pd = pd;
	}

	public static class Pd {

		private ArrayList<Pd.Roles> roles;
		private ArrayList<Pd.Rights> rights;
		private ArrayList<Pd.App> apps;
		private ArrayList<Pd.Services> services;
		private ArrayList<Pd.Info> info;

		public ArrayList<Pd.Info> getInfo() {
			return info;
		}

		public void setInfo(ArrayList<Pd.Info> info) {
			this.info = info;
		}

		public static class Info {

			private String userId;
			private String pwd;
			private String puserId;
			private String status;
			private String mno;
			private String emailId;
			private String cdate;
			private String statecentral;
			private String signature;

			public String getSignature() {
				return signature;
			}

			public void setSignature(String signature) {
				this.signature = signature;
			}

			public String getUserId() {
				return userId;
			}

			public void setUserId(String userId) {
				this.userId = userId;
			}

			public String getPwd() {
				return pwd;
			}

			public void setPwd(String pwd) {
				this.pwd = pwd;
			}

			public String getPuserId() {
				return puserId;
			}

			public void setPuserId(String puserId) {
				this.puserId = puserId;
			}

			public String getStatus() {
				return status;
			}

			public void setStatus(String status) {
				this.status = status;
			}

			public String getMno() {
				return mno;
			}

			public void setMno(String mno) {
				this.mno = mno;
			}

			public String getEmailId() {
				return emailId;
			}

			public void setEmailId(String emailId) {
				this.emailId = emailId;
			}

			public String getCdate() {
				return cdate;
			}

			public void setCdate(String cdate) {
				this.cdate = cdate;
			}

			public String getStatecentral() {
				return statecentral;
			}

			public void setStatecentral(String statecentral) {
				this.statecentral = statecentral;
			}

			@Override
			public String toString() {
				return "Info [userId=" + userId + ", pwd=" + pwd + ", puserId=" + puserId + ", status=" + status
						+ ", mno=" + mno + ", emailId=" + emailId + ", cdate=" + cdate + ", statecentral="
						+ statecentral + ", signature=" + signature + "]";
			}

		}

		public ArrayList<Pd.Roles> getRoles() {
			return roles;
		}

		public void setRoles(ArrayList<Pd.Roles> roles) {
			this.roles = roles;
		}

		public ArrayList<Pd.Rights> getRights() {
			return rights;
		}

		public void setRights(ArrayList<Pd.Rights> rights) {
			this.rights = rights;
		}

		public ArrayList<Pd.App> getApps() {
			return apps;
		}

		public void setApps(ArrayList<Pd.App> apps) {
			this.apps = apps;
		}

		public ArrayList<Pd.Services> getServices() {
			return services;
		}

		public void setServices(ArrayList<Pd.Services> services) {
			this.services = services;
		}

		public static class App {
			private String appid;
			private String appname;
			private String cgid;
			private String cgname;
			private String lat;
			private String lon;
			private String umangUrl;

			public String getUmangUrl() {
				return umangUrl;
			}

			public void setUmangUrl(String umangUrl) {
				this.umangUrl = umangUrl;
			}

			public String getLat() {
				return lat;
			}

			public void setLat(String lat) {
				this.lat = lat;
			}

			public String getLon() {
				return lon;
			}

			public void setLon(String lon) {
				this.lon = lon;
			}

			private String description;
			private String shortdesc;
			private String url;
			private String image;
			private String workinghours;
			private String responsemsg;
			private String contact;
			private String email;
			private String address;
			private String state;
			private String creationdate;
			private String status;
			private String rating;

			public String getCgid() {
				return cgid;
			}

			public void setCgid(String cgid) {
				this.cgid = cgid;
			}

			public String getCgname() {
				return cgname;
			}

			public void setCgname(String cgname) {
				this.cgname = cgname;
			}

			public String getAppid() {
				return appid;
			}

			public void setAppid(String appid) {
				this.appid = appid;
			}

			public String getAppname() {
				return appname;
			}

			public void setAppname(String appname) {
				this.appname = appname;
			}

			public String getRating() {
				return rating;
			}

			public void setRating(String rating) {
				this.rating = rating;
			}

			public String getDescription() {
				return description;
			}

			public void setDescription(String description) {
				this.description = description;
			}

			public String getShortdesc() {
				return shortdesc;
			}

			public void setShortdesc(String shortdesc) {
				this.shortdesc = shortdesc;
			}

			public String getUrl() {
				return url;
			}

			public void setUrl(String url) {
				this.url = url;
			}

			public String getImage() {
				return image;
			}

			public void setImage(String image) {
				this.image = image;
			}

			public String getWorkinghours() {
				return workinghours;
			}

			public void setWorkinghours(String workinghours) {
				this.workinghours = workinghours;
			}

			public String getResponsemsg() {
				return responsemsg;
			}

			public void setResponsemsg(String responsemsg) {
				this.responsemsg = responsemsg;
			}

			public String getContact() {
				return contact;
			}

			public void setContact(String contact) {
				this.contact = contact;
			}

			public String getEmail() {
				return email;
			}

			public void setEmail(String email) {
				this.email = email;
			}

			public String getAddress() {
				return address;
			}

			public void setAddress(String address) {
				this.address = address;
			}

			public String getState() {
				return state;
			}

			public void setState(String state) {
				this.state = state;
			}

			public String getCreationdate() {
				return creationdate;
			}

			public void setCreationdate(String creationdate) {
				this.creationdate = creationdate;
			}

			public String getStatus() {
				return status;
			}

			public void setStatus(String status) {
				this.status = status;
			}

			@Override
			public String toString() {
				return "App [appid=" + appid + ", appname=" + appname + ", cgid=" + cgid + ", cgname=" + cgname
						+ ", description=" + description + ", shortdesc=" + shortdesc + ", url=" + url + ", image="
						+ image + ", workinghours=" + workinghours + ", responsemsg=" + responsemsg + ", contact="
						+ contact + ", email=" + email + ", address=" + address + ", state=" + state + ", creationdate="
						+ creationdate + ", status=" + status + ", rating=" + rating + "]";
			}

		}

		public static class Services {
			private String appid;

			private String serviceid;
			private String servicename;
			private String description;
			private String shortdesc;
			private String url;
			private String image;
			private String contact;
			private String email;
			private String cdate;
			private String rating;
			private String status;

			public String getAppid() {
				return appid;
			}

			public void setAppid(String appid) {
				this.appid = appid;
			}

			public String getServiceid() {
				return serviceid;
			}

			public void setServiceid(String serviceid) {
				this.serviceid = serviceid;
			}

			public String getServicename() {
				return servicename;
			}

			public void setServicename(String servicename) {
				this.servicename = servicename;
			}

			public String getDescription() {
				return description;
			}

			public void setDescription(String description) {
				this.description = description;
			}

			public String getShortdesc() {
				return shortdesc;
			}

			public void setShortdesc(String shortdesc) {
				this.shortdesc = shortdesc;
			}

			public String getUrl() {
				return url;
			}

			public void setUrl(String url) {
				this.url = url;
			}

			public String getImage() {
				return image;
			}

			public void setImage(String image) {
				this.image = image;
			}

			public String getContact() {
				return contact;
			}

			public void setContact(String contact) {
				this.contact = contact;
			}

			public String getEmail() {
				return email;
			}

			public void setEmail(String email) {
				this.email = email;
			}

			public String getCdate() {
				return cdate;
			}

			public void setCdate(String cdate) {
				this.cdate = cdate;
			}

			public String getRating() {
				return rating;
			}

			public void setRating(String rating) {
				this.rating = rating;
			}

			public String getStatus() {
				return status;
			}

			public void setStatus(String status) {
				this.status = status;
			}

		}

		public static class Roles {
			

			private String roleid;
			private String rolename;
			private String logicalName;

			public String getRoleid() {
				return roleid;
			}

			public void setRoleid(String roleid) {
				this.roleid = roleid;
			}

			public String getRolename() {
				return rolename;
			}

			public void setRolename(String rolename) {
				this.rolename = rolename;
			}

			public String getLogicalName() {
				return logicalName;
			}

			public void setLogicalName(String logicalName) {
				this.logicalName = logicalName;
			}

		}

		public static class Rights {

			private String rightid;
			private String rightname;
			private String displayRightName;

			public String getRightid() {
				return rightid;
			}

			public void setRightid(String rightid) {
				this.rightid = rightid;
			}

			public String getRightname() {
				return rightname;
			}

			public void setRightname(String rightname) {
				this.rightname = rightname;
			}

			public String getDisplayRightName() {
				return displayRightName;
			}

			public void setDisplayRightName(String displayRightName) {
				this.displayRightName = displayRightName;
			}

			@Override
			public String toString() {
				return "Rights [rightid=" + rightid + ", rightname=" + rightname + ", displayRightName="
						+ displayRightName + "]";
			}

		}

		private String pwdExpiry;
		private String firstLogin;
		private String mno;
		private String roleFlag;

		public String getRoleFlag() {
			return roleFlag;
		}

		public void setRoleFlag(String roleFlag) {
			this.roleFlag = roleFlag;
		}

		public String getPwdExpiry() {
			return pwdExpiry;
		}

		public void setPwdExpiry(String pwdExpiry) {
			this.pwdExpiry = pwdExpiry;
		}

		public String getFirstLogin() {
			return firstLogin;
		}

		public void setFirstLogin(String firstLogin) {
			this.firstLogin = firstLogin;
		}

		@Override
		public String toString() {
			return "Pd [roles=" + roles + ", rights=" + rights + ", apps=" + apps + ", services=" + services + ", info="
					+ info + ", pwdExpiry=" + pwdExpiry + ", firstLogin=" + firstLogin + ", mno=" + mno +" , roleFlag" + roleFlag +"]";
		}

		public String getMno() {
			return mno;
		}

		public void setMno(String mno) {
			this.mno = mno;
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

	@Override
	public String toString() {
		return "LoginResPojo [rs=" + rs + ", rc=" + rc + ", rd=" + rd + ", pd=" + pd + "]";
	}

}
