package com.willmear.codeconverter.resource;

import com.willmear.codeconverter.service.OpenAiService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class OpenAiController {

  private final OpenAiService openAiService;

  @PostMapping("/ask-openai")
  public ResponseEntity<String> askOpenAi(@RequestBody String inputText) {
    try {
      String response = openAiService.callOpenAiApi(inputText);
      return ResponseEntity.ok(response);
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
    }
  }

}
