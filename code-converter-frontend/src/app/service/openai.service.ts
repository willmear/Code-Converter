import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OpenAiService {

  private url = 'http://localhost:8080/ask-openai';

  constructor(private http: HttpClient) {  }

  convert(prompt: string): Observable<HttpResponse<any>> {
    return this.http.post<string>(this.url, prompt, {observe: 'response'});
  }

}
