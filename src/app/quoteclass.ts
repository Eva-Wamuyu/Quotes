export class Quoteclass {

  // public publisher:string = '';
  // public quote:string = '';
  // public owner:string = '';
  showDetails!: boolean;
  // upvotes!: number;
  // downvotes!: number;
  
  

  constructor(public quote:string,public author:string,public publisher:string, public dateAdded:Date, public upvotes:number, public downvotes:number){

    this.showDetails = false;
   
   
    
  }

}
