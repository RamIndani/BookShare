package com.bookshare.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "offers")
public class Offer {
	
	@Id
	int offerId;
	String offerFrom;
	String offerTo;
	int bookId;
	String bookName;
	int actualPrice;
	int offerPrice;
	
	
	
	
	public String getBookName() {
		return bookName;
	}
	public void setBookName(String bookName) {
		this.bookName = bookName;
	}
	public int getOfferId() {
		return offerId;
	}
	public void setOfferId(int offerId) {
		this.offerId = offerId;
	}
	public String getOfferFrom() {
		return offerFrom;
	}
	public void setOfferFrom(String offerFrom) {
		this.offerFrom = offerFrom;
	}
	public String getOfferTo() {
		return offerTo;
	}
	public void setOfferTo(String offerTo) {
		this.offerTo = offerTo;
	}
	public int getBookId() {
		return bookId;
	}
	public void setBookId(int bookId) {
		this.bookId = bookId;
	}
	public int getActualPrice() {
		return actualPrice;
	}
	public void setActualPrice(int actualPrice) {
		this.actualPrice = actualPrice;
	}
	public int getOfferPrice() {
		return offerPrice;
	}
	public void setOfferPrice(int offerPrice) {
		this.offerPrice = offerPrice;
	}
	
	
} 
	
