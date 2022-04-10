import { Component, OnInit, Output, EventEmitter } from '@angular/core';


import { Quoteclass } from 'src/app/quoteclass';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  datePosted = new Date();
  alertErrorShow = "d-none";
  alertSuccess = "d-none"
  @Output() postingQuote = new EventEmitter<Quoteclass>();

  postedQuote! : Quoteclass;

  clearForm = (postedQuote:any)=> {
    postedQuote.reset();   
  }

  // addedAuthor!: string;
  // addedQuote: string = '';
  // addedPublisher: string = '';

  addPostedQuote = (postedQuote:any) => {
    if(postedQuote.author === "" ||  postedQuote.quote ==="" ||postedQuote.publisher === ""){ 
      this.alertErrorShow = "d-block";
      return;
    }
    else{
      this.alertErrorShow = "d-none";
      postedQuote.upvotes = 0;
      postedQuote.downvotes = 0;
      postedQuote.dateAdded = this.datePosted;
      this.postingQuote.emit(postedQuote);
      this.alertSuccess = "d-block";
      
      
      
      
      
    
    }
    // [(ngModel)]="postedQuote.quote"
  }

  hideForm = () => {
      
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
