export class Quoteclass {

  // public publisher:string = '';
  // public quote:string = '';
  // public owner:string = '';
  showDetails!: boolean;
  upvotes!: number;
  downvotes!: number;
  

  constructor(public quote:string,public author:string,public publisher:string){

    this.showDetails = false;
    this.upvotes = 0;
    this.downvotes = 0;
    

  }

}
