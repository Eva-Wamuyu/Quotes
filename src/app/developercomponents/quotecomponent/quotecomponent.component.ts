import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Quoteclass } from 'src/app/quoteclass';



@Component({
  selector: 'app-quotecomponent',
  templateUrl: './quotecomponent.component.html',
  styleUrls: ['./quotecomponent.component.css']
})
export class QuotecomponentComponent implements OnInit {

  @Input() quote! : Quoteclass;
  @Output() toDelete = new EventEmitter<boolean>();
  buttonMsg = "Show more";
  showDetails = false;

 
  
  deleteQuote(del:boolean){
    this.toDelete.emit(del);
    
      
    
  }


 
  toggleDetails(){
    this.buttonMsg == "show less"? this.buttonMsg="show more": this.buttonMsg="Hide Details";
    this.showDetails = !this.showDetails; 
  }
  

  constructor() { }

  ngOnInit(): void {
  }
  
}
