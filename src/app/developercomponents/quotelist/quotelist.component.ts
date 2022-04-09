import { Component, OnInit } from '@angular/core';
import { Quoteclass } from 'src/app/quoteclass';
@Component({
  selector: 'app-quotelist',
  templateUrl: './quotelist.component.html',
  styleUrls: ['./quotelist.component.css']
})
export class QuotelistComponent implements OnInit {
  showDetails = false;
  buttonMsg = "show more";

  allQuotes: Quoteclass[] = [
    new Quoteclass ("abcd","lllll","aaaaa"),
    new Quoteclass ("qqqq","aaaaa","bbbbbb"),
    new Quoteclass ("ppppp","yyyy","ccccc"),
    new Quoteclass ("00000","zzzz","xxxxx"),

  ]

  toggleDetails(index:number){
    this.buttonMsg[index] == "show less"? this.buttonMsg="show more": this.buttonMsg="show less";
   
    this.allQuotes[index].showDetails = !this.allQuotes[index].showDetails;

  }

 
  



  pushIntoQuotesArr = (quote:any)=>{
  
    this.allQuotes.push(quote);


  }



  deleteQuoteNow(toDelete:boolean, index:number){
    if(toDelete){
      let confirmDelete = confirm('Are you sure to delete this quote?')
      // console.log("2");
      if(confirmDelete){
        this.allQuotes.splice(index, 1);
      }
      

    }
  }

 

   



 
  constructor() { }

  ngOnInit(): void {
  }

}
