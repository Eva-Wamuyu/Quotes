import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datecount'
})
export class DatecountPipe implements PipeTransform {

    transform(theDate: Date): number {

      let today:Date = new Date();
      let todayWithNoTime = new Date(today.getFullYear(), today.getMonth(), today.getDate());
      let theDateWithNoTime = new Date(theDate.getFullYear(), theDate.getMonth(), theDate.getDate());
      // let todayDate= today.getDate();

     

      let timeDifference = todayWithNoTime.getTime() - theDateWithNoTime.getTime();
      
      let timeDiffInMs = timeDifference/(1000*60*60*24);
      let DayDiff = timeDifference/(1000*3600*24)

      if(DayDiff >=1 &&  theDateWithNoTime < todayWithNoTime){
        return DayDiff;
      }
      else{
        return 0;
      }
      


      

     
  }

  

}
