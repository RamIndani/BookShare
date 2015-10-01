package com.bookshare.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value=HttpStatus.UNAUTHORIZED, reason="Invalid username or password!")
public class UnAuthorizedException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 7141841692546955122L;

	public UnAuthorizedException(String message){
		super(message);
	}
}
