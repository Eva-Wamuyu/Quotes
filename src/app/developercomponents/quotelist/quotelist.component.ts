import { Component, Input, OnInit } from '@angular/core';
import { Quoteclass } from 'src/app/quoteclass';
@Component({
  selector: 'app-quotelist',
  templateUrl: './quotelist.component.html',
  styleUrls: ['./quotelist.component.css']
})
export class QuotelistComponent implements OnInit {
  showDetails = false;
  buttonMsg = "show less";

  allQuotes: Quoteclass[] = [
    new Quoteclass ("abcd","aaaaa","aaaaa"),
    new Quoteclass ("abcd","aaaaa","aaaaa"),
    new Quoteclass ("abcd","aaaaa","aaaaa"),
    new Quoteclass ("abcd","aaaaa","xxxxx"),

  ]

  toggleDetails(){
    this.buttonMsg == "show less"? this.buttonMsg="show more": this.buttonMsg="Hide Details";
    this.showDetails = !this.showDetails; 
  }

  @Input() allQuotez = Quoteclass;
  @Input() allQuots = this.allQuotes;

  postingQuote(){
    this.allQuotes.push()
  }

  addQuote(){

  }

  deleteQuoteNow(toDelete:boolean, index:number){
    if(toDelete){
      console.log("2");
      this.allQuotes.splice(index, 1);

    }
  }

 

   



 
  constructor() { }

  ngOnInit(): void {
  }

}
