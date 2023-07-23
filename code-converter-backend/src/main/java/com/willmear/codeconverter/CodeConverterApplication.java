package com.willmear.codeconverter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.PropertySource;


@SpringBootApplication
@PropertySource("classpath:application-dev.properties")
public class CodeConverterApplication {

	public static void main(String[] args) {

		SpringApplication.run(CodeConverterApplication.class, args);
	}

}
