package com.bookshare.configbean;

/**
 * Spring MongoDB configuration file
 * 
 */

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.SimpleMongoDbFactory;

import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;



@Configuration
@PropertySource("bookshare.properties")
public class SpringMongoConfig {
	@Autowired
	Environment env;
	
	@Bean
	public MongoTemplate mongoTemplate() throws IOException {
		String uri =  env.getProperty("MongoDBConnectionString");
		MongoClientURI mongoClientUri = new MongoClientURI(uri);
		SimpleMongoDbFactory mongoDbFactory = new SimpleMongoDbFactory(new MongoClient(mongoClientUri), env.getProperty("DatabaseName"));
		MongoTemplate mongoTemplate = new MongoTemplate(mongoDbFactory);
		return mongoTemplate;
	}
}
 