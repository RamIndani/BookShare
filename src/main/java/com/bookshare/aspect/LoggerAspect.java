package com.bookshare.aspect;


import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.bookshare.controller.HomeController;
import com.bookshare.model.Book;
import com.bookshare.model.User;


@Aspect
public aspect LoggerAspect {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);

	@Before("allFileService() && @annotation(com.bookshare.aspect.BookShareLogger)")
	public void logger(JoinPoint point) 
	{
		  Object[] args=point.getArgs();
		    logger.info(
		      "*************Log**********");
		    logger.info(
		    "Method name: "+point.getSignature().getName()
		    );
		   
		  for(Object o:args){
			  if(o instanceof User){
				  User u=(User)o;
				  logger.info(u.getEmail() + " "+u.getPassword());
			  }
			  if(o instanceof String){
				  logger.info(o.toString());
			  }
			  if(o instanceof Book){
				  Book b=(Book)o;
				  logger.info(b.getBookId()+ " "+b.getAuthor()+" "+b.getName());
			  }
			  
		  }
		   
	}

	@Pointcut("within(com.bookshare.controller.HomeController)")
	public void allFileService() 
	{
		
	}

}
