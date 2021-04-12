export class IncrementService {
  // property
     count:number = 0;

  constructor() { 
     console.log('Service component instantiated');
  }

  // user-defined function
  
  public incrementValue(){
    this.count = this.count + 1;
    return this.count;
  }
}
