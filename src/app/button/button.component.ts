import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
public init:Boolean=true;
strArrray: string[];
constructor(){
  this.strArrray=['A','B','C','D'];
}

getChar() : String{
  return this.strArrray[5];
}

}

