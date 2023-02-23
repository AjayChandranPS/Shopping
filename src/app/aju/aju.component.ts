import { Component } from '@angular/core';

@Component({
  selector: 'app-aju',
  templateUrl: './aju.component.html',
  styleUrls: ['./aju.component.css']
})
export class AjuComponent {
public dataSource:any;
constructor(){
  this.dataSource=[
    {name:'Ajay',age:'6',email:'ajaychandranps@gmail.com'},
    {name:'Vijay',age:'26',email:'ajaychandranps@gmail.com'},
    {name:'Jay',age:'8',email:'ajaychandranps@gmail.com'},
    {name:'rajan',age:'28',email:'ajaychandranps@gmail.com'}
  ]
}

}






