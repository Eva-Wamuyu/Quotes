import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heropage',
  templateUrl: './heropage.component.html',
  styleUrls: ['./heropage.component.css']
})
export class HeropageComponent implements OnInit {

  title: string = "Quote App";
  mainQuote: string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
  numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium`;

  subTopic:string = "Quotes";
  constructor() { }

  ngOnInit(): void {
  }

}
