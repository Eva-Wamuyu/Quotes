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
 

   
    new Quoteclass ("Why didn’t Noah swat those two mosquitoes?","Anonymous","Wamuyu", new Date(2020,4,18), 0, 0),
    new Quoteclass ("I’m not good at the advice. Can I interest you in a sarcastic comment?","Chandler","Eva", new Date(2022,1,17), 0, 0),
    new Quoteclass ("People will forget what you said. People will forget what you did. But people will never forget how you made them feel.","Maya Angelou","Evex", new Date(2022,2,11), 0, 0),
    new Quoteclass ("The trouble with being punctual is that nobody’s there to appreciate it.","Franklin P. Jones","Barbie", new Date(2022,4,9), 0, 0),

  ]

  toggleDetails(index:number){
    this.buttonMsg[index] == "show more"? this.buttonMsg="show less": this.buttonMsg="show more";
   
    this.allQuotes[index].showDetails = !this.allQuotes[index].showDetails;

  }



 
  



  pushIntoQuotesArr = (quote:Quoteclass)=>{  
    this.allQuotes.push(quote);
    
  }

  pushVotes(upvotes: number, index:number){
    this.allQuotes[index].upvotes;
    console.log(this.allQuotes[index].upvotes);

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
