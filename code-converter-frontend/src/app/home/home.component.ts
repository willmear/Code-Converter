import { Component, OnInit } from '@angular/core';
import { IConvert } from '../models/convert.model';
import { OpenAiService } from '../service/openai.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  languages = ['Java', 'Python', 'C', 'C++', 'C#'];
  languageFrom: string = this.languages[0];
  languageTo: string = this.languages[0];

  constructor(private openAiService: OpenAiService) {  }

  ngOnInit(): void {}

  onConvert(convert: IConvert) {
    convert.prompt = `Convert the following ${this.languageFrom} code to ${this.languageTo}:\n\n${convert.code}`;
    console.log(convert);
    this.openAiService.convert(convert.prompt).subscribe({
      next: data => {
        convert.response = data.body;
      },
      error: error => {
        convert.response = error.message;
      }
    });
    
  }
  

}
