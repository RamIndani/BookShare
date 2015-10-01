package com.bookshare.model;

import java.io.Serializable;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class User implements Serializable 
{	
@Autowired
	/**
	 * Generated serial version UID
	 */
	private static final long serialVersionUID = -1299234524292338425L;

	public String password;

	@Id
	public String email;

	public String firstName;
	public String lastName;
	public String major;
	ArrayList<String> ratedBy=new ArrayList<String>();
	ArrayList<String> rating=new ArrayList<String>();
	ArrayList<String> comments=new ArrayList<String>();
	boolean isEnabled;
	
	
	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getMajor() {
		return major;
	}

	public void setMajor(String major) {
		this.major = major;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getEmail() {
		return this.email;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPassword() {
		return this.password;
	}

	public ArrayList<String> getRatedBy() {
		return ratedBy;
	}

	public void setRatedBy(ArrayList<String> ratedBy) {
		this.ratedBy = ratedBy;
	}

	public ArrayList<String> getRating() {
		return rating;
	}

	public void setRating(ArrayList<String> rating) {
		this.rating = rating;
	}

	public ArrayList<String> getComments() {
		return comments;
	}

	public void setComments(ArrayList<String> comments) {
		this.comments = comments;
	}

	public boolean isEnabled() {
		return isEnabled;
	}

	public void setEnabled(boolean isEnabled) {
		this.isEnabled = isEnabled;
	}

	@Override
	public String toString() {
		return "\"username\":\"" + email;
	}

}