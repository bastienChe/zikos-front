import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    country: new FormControl('', [Validators.required]),
    instrument: new FormControl('', [Validators.required]),
    conditionsAgree: new FormControl('', [Validators.requiredTrue])
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("hello");
  }

  // isEmailValid(){
  //   return this.userForm.value.email.length == 0 || /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.userForm.value.email);
  // }

  /*isFormValid(){
    // return this.userForm.value.conditionsAgree && this.isEmailValid() && this.userForm.value.email.length > 0;
    return this.userForm.valid;
  }*/
  
  test(){
    console.log(this.userForm);
  }

}
