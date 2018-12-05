import { Injectable } from '@angular/core';

@Injectable()
export class QuantityService {

  constructor() { }

  quan(qty)
  {
      console.log(qty, "bags of popcorn cooked!");
  }

}
