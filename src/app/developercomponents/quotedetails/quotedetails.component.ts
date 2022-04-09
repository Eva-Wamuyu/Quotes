import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-quotedetails',
  templateUrl: './quotedetails.component.html',
  styleUrls: ['./quotedetails.component.css']
})
export class QuotedetailsComponent implements OnInit {

  @Output() toDelete = new EventEmitter<boolean>();

  deleteQuote(del:boolean){
    this.toDelete.emit(del);
  
  }

  constructor() { }

  ngOnInit(): void {
  }

}
