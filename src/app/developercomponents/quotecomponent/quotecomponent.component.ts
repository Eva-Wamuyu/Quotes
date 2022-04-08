import { Component, Input, OnInit, Output } from '@angular/core';
import { Quoteclass } from 'src/app/quoteclass';


@Component({
  selector: 'app-quotecomponent',
  templateUrl: './quotecomponent.component.html',
  styleUrls: ['./quotecomponent.component.css']
})
export class QuotecomponentComponent implements OnInit {

  @Input() quote! : Quoteclass;
  buttonMsg = "Show more";
  showDetails = false;
 
  
  deleteQuote(){


  }

  toggleDetails(){
    this.buttonMsg == "show less"? this.buttonMsg="show more": this.buttonMsg="Hide Details";
    this.showDetails = !this.showDetails; 
  }
  

  constructor() { }

  ngOnInit(): void {
  }
  
}
