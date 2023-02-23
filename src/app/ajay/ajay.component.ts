import { Component } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-ajay',
  templateUrl: './ajay.component.html',
  styleUrls: ['./ajay.component.css']
})
export class AjayComponent {


  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('',Validators.required),
    password: new FormControl(''),
  });



  submit() {
    console.log(this.profileForm);
    this.profileForm.setValue({
      name:"ajay",
      email: "ajaychandranps@gmail.com",
      password: "srt200ps"
    })
     
    // console.log("email", this.email)
    // console.log("password", this.password)

    // if (this.email.status == "VALID") {
    //   console.log("success");
    // } else {
    //   console.log("}{");
    // }
  }

}
