import { Component, Input, OnInit } from '@angular/core';
import { Quoteclass } from 'src/app/quoteclass';
@Component({
  selector: 'app-quotelist',
  templateUrl: './quotelist.component.html',
  styleUrls: ['./quotelist.component.css']
})
export class QuotelistComponent implements OnInit {

  allQuotes: Quoteclass[] = [
    new Quoteclass ("abcd","aaaaa","aaaaa"),
    new Quoteclass ("abcd","aaaaa","aaaaa"),
    new Quoteclass ("abcd","aaaaa","aaaaa"),
    new Quoteclass ("abcd","aaaaa","xxxxx"),

  ]

  @Input() allQuotez = Quoteclass;

  postingQuote(){
    this.allQuotes.push()
  }

  addQuote(){

  }

  deleteQuote(){
    this.allQuotes.splice(0,1);
    console.log("2");
  }



 
  constructor() { }

  ngOnInit(): void {
  }

}
