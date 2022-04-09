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
    new Quoteclass ("abcd","lllll","aaaaa", new Date(2020,4,18), 0, 0),
    new Quoteclass ("qqqq","aaaaa","bbbbbb", new Date(2022,1,17), 0, 0),
    new Quoteclass ("ppppp","yyyy","ccccc", new Date(2022,2,11), 0, 0),
    new Quoteclass ("00000","zzzz","xxxxx", new Date(2022,4,9), 0, 0),

  ]

  toggleDetails(index:number){
    this.buttonMsg[index] == "show more"? this.buttonMsg="show less": this.buttonMsg="show more";
   
    this.allQuotes[index].showDetails = !this.allQuotes[index].showDetails;

  }



 
  



  pushIntoQuotesArr = (quote:Quoteclass)=>{  
    quote.author = 'k'
    quote.publisher = 'l'
    quote.dateAdded = new Date();
    quote.quote = 'm'
    quote.upvotes = 2;
    quote.downvotes = 2;
    this.allQuotes.push(quote);

    console.log(this.allQuotes)
  }

  pushVotes(upvotes: number, index:number){
    this.allQuotes[index].upvotes;

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
