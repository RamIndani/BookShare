package com.bookshare.model;

import org.springframework.data.annotation.Id;

public class LoggedUser {
	@Id
	private String email;
	private String token;
	
	public LoggedUser(){
		
	}
	
	public LoggedUser(String email, String token){
		this.email = email;
		this.token = token;
	}
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	
	
	@Override
	public String toString() {
		return "\"token\":\""+token+"\", \"email\":\""+email+"\"";
	}
}
