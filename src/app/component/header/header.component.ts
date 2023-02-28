import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartData: any;
  cartDataParsed = {
    qty: 0
  };

  constructor() { }

  ngOnInit(): void {
    this.cartItemFunc();
  }

  cartItemFunc() {
    if (localStorage.getItem('localCart') != null) {
      this.cartData = localStorage.getItem('localCart');
      this.cartDataParsed = JSON.parse(this.cartData)
    }
  }

}
