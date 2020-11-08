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
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.email, Validators.required]),
    country: new FormControl('', [Validators.required]),
    instrument: new FormControl('', [Validators.required]),
    conditionsAgree: new FormControl('', [Validators.requiredTrue])
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
