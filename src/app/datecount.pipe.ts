import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datecount'
})
export class DatecountPipe implements PipeTransform {

    transform(theDate: Date): number {

      let today:Date = new Date();
      let todayWithNoTime = new Date(today.getFullYear(), today.getMonth()+1, today.getDate());
      let theDateWithNoTime = new Date(theDate.getFullYear(), theDate.getMonth()+1, theDate.getDate());
      // let todayDate= today.getDate();
      
      

  
    return Math.round(Math.abs(todayWithNoTime.getTime()-theDateWithNoTime.getTime())/(24*60*60*1000));
    
     
  }

  

}
