package com.spice.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tbl_bc_login")
public class User {
	@Id
	  @GeneratedValue(strategy = GenerationType.AUTO)
private int id;
String username, password,circle,date_time;
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getUsername() {
	return username;
}
public void setUsername(String username) {
	this.username = username;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public String getCircle() {
	return circle;
}
public void setCircle(String circle) {
	this.circle = circle;
}
public String getDate_time() {
	return date_time;
}
public void setDate_time(String date_time) {
	this.date_time = date_time;
}
	
}