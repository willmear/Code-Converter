package com.willmear.codeconverter.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@Service
public class OpenAiService {

  private final RestTemplate restTemplate;
  private final String apiKey;

  public OpenAiService(RestTemplate restTemplate, @Value("${openai.api.key}") String apiKey) {
    this.restTemplate = restTemplate;
    this.apiKey = apiKey;
  }

  public String callOpenAiApi(String inputText) {
    HttpHeaders headers = new HttpHeaders();
    headers.set("Authorization", "Bearer " + apiKey);
    headers.set("Content-Type", "application/json");

    Map<String, Object> requestBody = new HashMap<>();
    requestBody.put("prompt", inputText);
    requestBody.put("model", "text-davinci-003");
    requestBody.put("max_tokens", 256);
    requestBody.put("temperature", 0.2);

    HttpEntity<Map<String, Object>> requestEntity = new HttpEntity<>(requestBody, headers);
    ResponseEntity<String> responseEntity = restTemplate.exchange(
      "https://api.openai.com/v1/completions",
      HttpMethod.POST,
      requestEntity,
      String.class
    );

    if (responseEntity.getStatusCode().is2xxSuccessful()) {
      return responseEntity.getBody();
    } else {
      throw new RuntimeException("OpenAI API request failed with status: " + responseEntity.getStatusCode());
    }
  }
}
