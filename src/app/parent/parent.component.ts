import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
data='Angular 13 Tutorial'
updatedata(name:string){
  this.title = name;
 
}
title='Bootstrap 5 tutorial';
updateTitle(name:string){

  this.data=name;
}
currentItem = 'JavaScript';

items=['Angular','Bootstrap','Javascript','Html'];

addItem(newItem:string){
  this.items.push(newItem);
}
}
