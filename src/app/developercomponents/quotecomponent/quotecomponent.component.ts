import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Quoteclass } from 'src/app/quoteclass';



@Component({
  selector: 'app-quotecomponent',
  templateUrl: './quotecomponent.component.html',
  styleUrls: ['./quotecomponent.component.css']
})
export class QuotecomponentComponent implements OnInit {

  @Input() quotez! : Quoteclass; 
 
  allQuotes :any = this.quotez;
  buttonMsg = "Show more";
  
 
  

 
  

  constructor() { }

  ngOnInit(): void {
  }
  
}
