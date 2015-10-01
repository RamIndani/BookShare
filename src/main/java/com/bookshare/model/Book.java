package com.bookshare.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "books")
public class Book {
	@Id
	int bookId;
	String seller;
	String name;
	String author;
	String isbn;
	int yearOfPublication;
	String bookPicture;
	String condition;
	int price;


	//Hitesh Basantani
	String purchaser;
	String bookStatus;
	Date date;
	int offerPrice;
	String offerFrom;

	public Book(){
		offerPrice = 0;
	}

	public String getOfferFrom() {
		return offerFrom;
	}

	public void setOfferFrom(String offerFrom) {
		this.offerFrom = offerFrom;
	}

	public int getOfferPrice() {
		return offerPrice;
	}

	public void setOfferPrice(int offerPrice) {
		this.offerPrice = offerPrice;
	}

	public String getPurchaser() {
		return purchaser;
	}
	public void setPurchaser(String emailid) {
		this.purchaser = emailid;
	}
	public String getBookStatus() {
		return bookStatus;
	}
	public void setBookStatus(String bookStatus) {
		this.bookStatus = bookStatus;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}

	//Hitesh Basantani
	
	
	public int getBookId() {
		return bookId;
	}
	public void setBookId(int bookId) {
		this.bookId = bookId;
	}
	public String getSeller() {
		return seller;
	}
	public void setSeller(String seller) {
		this.seller = seller;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getIsbn() {
		return isbn;
	}
	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}
	public int getYearOfPublication() {
		return yearOfPublication;
	}
	public void setYearOfPublication(int yearOfPublication) {
		this.yearOfPublication = yearOfPublication;
	}
	public String getBookPicture() {
		return bookPicture;
	}
	public void setBookPicture(String bookPicture) {
		this.bookPicture = bookPicture;
	}


	public String getCondition() {
		return condition;
	}
	public void setCondition(String condition) {
		this.condition = condition;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	@Override
	public String toString() {
		return "\"bookId\":"+bookId+", \"seller\":\""+seller+"\", \"book\":\""+name+"\"";
	}
}
