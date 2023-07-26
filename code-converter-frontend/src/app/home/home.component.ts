import { Component, OnInit } from '@angular/core';
import { IConvert } from '../models/convert.model';
import { OpenAiService } from '../service/openai.service';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/markdown/markdown';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  languages = ['Java', 'Python', 'C', 'C++', 'C#', 'Golang', 'JavaScript',
               'R', 'Julia', 'Perl', 'Matlab', 'Kotlin', 'PHP', 'Ruby', 'Rust',
               'TypeScript', 'Lua', 'SAS', 'Fortran', 'Lisp', 'Scala', 'Assembly',
               'ActionScript', 'Clojure', 'Dart', 'Elixir', 'Erlang', 'Haskell',
               'HTML', 'OCaml', 'Pascal', 'PowerShell', 'Swift', 'Visual Basic',
               'Objective-C', 'F#', 'Groovy', 'Haxe', 'Racket', 'Scheme', 'SQL',
               'Tcl', 'VimL', 'Apex', 'Arduino', 'Crystal', 'D', 'Elm', 'Forth',
               'Julia', 'Nim', 'Puppet', 'PureScript', 'Raku', 'Rebol', 'Red',
               'Verilog', 'VHDL', 'Zig', 'ABAP', 'Ada', 'Agda', 'ATS', 'AutoHotkey'
              ];
  languageFrom: string = this.languages[0];
  languageTo: string = this.languages[1];
  code: string = '';
  outputCode: string = '';
  isLoading: boolean = false;

  constructor(private openAiService: OpenAiService) {  }

  ngOnInit(): void {}

  onConvert(convert: IConvert) {

    if (this.languageFrom === this.languageTo) {
      this.outputCode = 'Please select different languages';
      return;
    }

    this.isLoading = true;

    convert.prompt = `Convert the following ${this.languageFrom} code to ${this.languageTo}:\n\n${this.code}`;

    this.openAiService.convert(convert.prompt).subscribe({
      next: data => {
        this.isLoading = false;

        this.outputCode = data.body.choices[0].text;

        if (this.outputCode.substring(0, 2) == '\n\n') {
          this.outputCode = this.outputCode.substring(2);
        }

      },
      error: error => {
        this.outputCode = error.message;
      }
    });
    
  }



}
