import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlightDirective {

  constructor(elem:ElementRef) {
    
    elem.nativeElement.style.boxshadow = '2px 2px black';
       
   }

}
