import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Quoteclass } from 'src/app/quoteclass';



@Component({
  selector: 'app-quotecomponent',
  templateUrl: './quotecomponent.component.html',
  styleUrls: ['./quotecomponent.component.css']
})
export class QuotecomponentComponent implements OnInit {


  ///To make this component determine the major quote
  @Input() quotez! : Quoteclass; 
 
  allQuotes :any = this.quotez;
  buttonMsg = "Show more";
  
 
  instructions = `Add a quote. New quote goes at the end of the list.
  ` 

  constructor() { }

  ngOnInit(): void {
  }
  
}
