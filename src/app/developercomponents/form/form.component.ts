import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quoteclass } from 'src/app/quoteclass';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  postedQuote = new Quoteclass ("", "", "");
  alertErrorShow = "d-none";

  @Output() postingQuote = new EventEmitter<Quoteclass>();




 

  clearForm = ()=> {
    this.postedQuote.author = '';
    this.postedQuote.quote = ''
    this.postedQuote.publisher = '';
  }
  // addedAuthor!: string;
  // addedQuote: string = '';
  // addedPublisher: string = '';

  addPostedQuote = () => {
    if(this.postedQuote.author === "" || this.postedQuote.quote === ""|| this.postedQuote.publisher === ""){ 
      this.alertErrorShow = "d-block";
      return;
    }
    else{
      this.alertErrorShow = "d-none";
      this.postingQuote.emit(this.postedQuote);
      console.log(this.postedQuote);
      this.clearForm();
     

    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
