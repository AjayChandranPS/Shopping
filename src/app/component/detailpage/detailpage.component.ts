import { Component, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.css']
})
export class DetailpageComponent {

  localItem: any;

  @Output() newItemEvent = new EventEmitter<string>();
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
  public producList: any;




  constructor(public apiService: ApiService, public activeRouter: ActivatedRoute) {
    this.getPrd();
  }
  public product: any;


  getPrd() {
    console.log("calling");
    this.activeRouter.params.subscribe((params: any) => {
      console.log(params, "{}");
      this.product = params;
      console.log("product", this.product)
    })
  }

  itemsCart: any;
  addCart(product) {
    console.log(product);
    let cartDataNull = localStorage.getItem('localCart');
    if (cartDataNull == null) {
      localStorage.setItem('localCart', JSON.stringify(product));
    }
    else {
      const id = product.prodId;
      this.localItem = localStorage.getItem('localCart');
      this.itemsCart = JSON.parse(this.localItem);
      console.log( product,"this.itemsCart", this.itemsCart)

      if(id == this.itemsCart.prodId) {
        this.itemsCart.qty = parseInt(this.itemsCart.qty) + 1;
      }
      localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
    }


   
  }

}


