import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Quoteclass } from 'src/app/quoteclass';

@Component({
  selector: 'app-quotedetails',
  templateUrl: './quotedetails.component.html',
  styleUrls: ['./quotedetails.component.css']
})
export class QuotedetailsComponent implements OnInit {

  @Input() quotes! : Quoteclass;

  @Output() toDelete = new EventEmitter<boolean>();

  @Output() sendupvotes = new EventEmitter<number>();
  @Output() senddownvotes = new EventEmitter<number>();
  

  deleteQuote(del:boolean){
    this.toDelete.emit(del);
  
  }

  addUpvotes = (upvotes:number)=>{
    this.quotes.upvotes += 1;
    this.sendupvotes.emit(upvotes);
    
  }

  addDownvotes = ()=>{
    this.quotes.downvotes += 1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
