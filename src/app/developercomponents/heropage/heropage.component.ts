import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heropage',
  templateUrl: './heropage.component.html',
  styleUrls: ['./heropage.component.css']
})
export class HeropageComponent implements OnInit {

  title: string = "Ev Quotes";
  mainQuote: string = `The greatest gift I ever had came from God; I call her Mom!
  `;

  author:string = "Anonymous";
  subTopic:string = "Quotes";


  constructor() { }

  ngOnInit(): void {
  }

}
