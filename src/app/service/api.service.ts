import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  public selectedPrd = new BehaviorSubject<any>([]);
  

  constructor() {}
    setCart(prd: any) {
      this.selectedPrd.next(prd)
    }
    getCartPrd(){
      return this.selectedPrd.asObservable();
    }
   
}
