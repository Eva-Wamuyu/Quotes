import { Component, OnInit } from '@angular/core';
import { Quoteclass } from 'src/app/quoteclass';
@Component({
  selector: 'app-quotelist',
  templateUrl: './quotelist.component.html',
  styleUrls: ['./quotelist.component.css']
})
export class QuotelistComponent implements OnInit {

  allQuotes: Quoteclass[] = [

    new Quoteclass ("abcd","aaaaa","aaaaa"),
    new Quoteclass ("abcd","aaaaa","aaaaa"),
    new Quoteclass ("abcd","aaaaa","aaaaa"),
    new Quoteclass ("abcd","aaaaa","xxxxx"),

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
