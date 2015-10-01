package com.bookshare.utility;

import java.security.*;

public class DataUtility {
	
	  public static String getHash(String email) {
   	   try {
   	        java.security.MessageDigest md = MessageDigest.getInstance("MD5");
   	        byte[] array = md.digest(email.concat(""+System.currentTimeMillis()).getBytes());
   	        StringBuffer sb = new StringBuffer();
   	        for (int i = 0; i < array.length; ++i) {
   	          sb.append(Integer.toHexString((array[i] & 0xFF) | 0x100).substring(1,3));
   	       }
   	        return sb.toString();
   	    } catch (java.security.NoSuchAlgorithmException e) {
   	    }
   	    return null;
   	}

}