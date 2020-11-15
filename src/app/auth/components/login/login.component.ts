import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  largeLogo: any = "assets/images/brand/brand-logo-450-250.jpg";

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.userForm.valid){
      console.log(this.userForm);
    }
  }
}
