import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  languages = ['Java', 'Python', 'C', 'C++', 'C#'];
  selectedLanguage: string = this.languages[0];

  constructor() {  }

  ngOnInit(): void {}

  onConvert(convert: any) {
    console.log(convert);
  }
  

}
