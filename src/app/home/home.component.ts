import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  languages = ['Java', 'Python', 'C', 'C++', 'C#']
  convertFrom: string;
  convertTo: string;

  constructor() {
    this.convertFrom = '';
    this.convertTo = '';
  }

  ngOnInit(): void {}
  

}
