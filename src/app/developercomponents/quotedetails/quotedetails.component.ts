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
  

  deleteQuote(del:boolean){
    this.toDelete.emit(del);
  
  }

  constructor() { }

  ngOnInit(): void {
  }

}
