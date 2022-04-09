import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datecount'
})
export class DatecountPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let timePosted:Date = new Date();


    return null;
  }

  

}
