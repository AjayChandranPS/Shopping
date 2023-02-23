import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-formval',
  templateUrl: './formval.component.html',
  styleUrls: ['./formval.component.css']
})
export class FormvalComponent {
  name = new FormControl('');
  email=new FormControl('');
  number=new FormControl('');
  password=new FormControl('');
  checkbox=new FormControl('');
  constructor(public router:Router){

  }
  goToLogin(){
    console.log();
    
    this.router.navigate(['/aju'])
  }

}
