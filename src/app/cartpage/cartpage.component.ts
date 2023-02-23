import { Component } from '@angular/core';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent {



  productArray = [
    {
      prodId: 1,
      img: "./../../assets/image/tsh1.jpg",
      amt: 400,
      qnt: 1
    },
    {
      prodId: 2,
      img: "./../../assets/image/tsh2.jpg",
      amt: 300,
      qnt: 1
    },
    {
      prodId: 3,
      img: "./../../assets/image/tsh3.webp",
      amt: 600,
      qnt: 1
    },
    {
      prodId: 4,
      img: "./../../assets/image/tsh4.jpeg",
      amt: 300,
      qnt: 1
    }
  ];

  inc(prod) {
    //console.log(prod.qnt);
    if(prod.qnt !=6){
      prod.qnt += 1;

    }
    

  }

  dec(prod){

    if(prod.qnt !=1){
      prod.qnt -= 1;

    }

  }

}
