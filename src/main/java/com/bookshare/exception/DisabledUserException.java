
package com.bookshare.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value=HttpStatus.BAD_REQUEST, reason="User Disabled contact admin")
public class DisabledUserException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 7131841692546955122L;

	public DisabledUserException(String message){
		super(message);
	}
}
