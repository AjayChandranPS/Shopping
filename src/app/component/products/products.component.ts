import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  public cardMaster: any = [
    {
      prodId:1,
      img: './../../../assets/image/aaaa1.jpg',
      name: 'HP Laptop',
      price: '80000',
      qty: 1
    },
    {
      prodId:2,
      img: './../../assets/image/aaaa2.png',
      name: 'DELL Laptop',
      price: '90000',
      qty: 1
    },
    {
      prodId:3,
      img: './../../assets/image/aaaa3.jpg',
      name: ' macbook',
      price: '170000',
      qty: 1
    },
    {
      prodId:4,
      img: './../../assets/image/aaaa4.jpg',
      name: 'samsung mobile',
      price: '40000',
      qty: 1
    },
    {
      prodId:5,
      img: './../../assets/image/aaaa5.jpg',
      name: 'vivo s1',
      price: '14000',
      qty: 1
    },
    {
      prodId:6,
      img: './../../assets/image/aaaa6.jpg',
      name: ' I watch',
      price: '40000',
      qty: 1
    },
    {
      prodId:7,
      img: './../../assets/image/aaaa7.jfif',
      name: 'Iphone',
      price: '90000',
      qty: 1
    },
  ]
  constructor(public apiService: ApiService, public router: Router) {

  }
  goToDetails(data: any) {
    console.log(data, "data");

    this.apiService.setCart(data);
    this.router.navigate(['/detailpage',data])
  }
}
