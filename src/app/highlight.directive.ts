import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlightDirective {

  constructor(elem:ElementRef) {

    elem.nativeElement.style.backgroundColor = "#e7dada";
       
   }

}
