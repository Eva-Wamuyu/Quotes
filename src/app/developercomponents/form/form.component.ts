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
    postedQuote.resetForm();   
  }

  // addedAuthor!: string;
  // addedQuote: string = '';
  // addedPublisher: string = '';

  addPostedQuote = (postedQuote:Quoteclass, form:any) => {
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
      form.reset();
    
       

      
    }
    // [(ngModel)]="postedQuote.quote"
  }



  constructor() { }

  ngOnInit(): void {
  }

}
