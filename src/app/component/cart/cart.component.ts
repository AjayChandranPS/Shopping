import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {

    this.CartDetails();

  }

  getCartDetails: any = [];
  CartDetails() {
    if (localStorage.getItem('localCart')) {
      let tmp: any = localStorage.getItem('localCart');
      this.getCartDetails = JSON.parse(tmp);

      console.log(tmp);

    }
  }

  singleDelete(getCartDetail) {
    console.log(getCartDetail);
    if (localStorage.getItem('localCart')) {
      let tmp:any= localStorage.getItem('localCart');
      this.getCartDetails = JSON.parse(tmp);
      for (let i = 0; i < this.getCartDetails.length; i++) {
        if (this.getCartDetails[i].prodId === getCartDetail) {
          console.log(getCartDetail);
          this.getCartDetails.splice(i, 1);
          localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
        }
      }
    }
  }
}
