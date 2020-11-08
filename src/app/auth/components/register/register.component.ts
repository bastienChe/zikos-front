import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CountryService } from 'src/app/core/country/services/country.service';
import { Country } from 'src/app/core/country/County';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  countryList : Country[];

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.email, Validators.required]),
    country: new FormControl('', [Validators.required, Validators.pattern('^((?!--).)*$')]),
    instrument: new FormControl('', [Validators.required]),
    conditionsAgree: new FormControl('', [Validators.requiredTrue])
  });

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(): void {
    this.countryService.getCountries()
    .subscribe(countryList => this.countryList = countryList);
  }

  onSubmit() {
    if(this.userForm.valid){
      console.log(this.userForm);
    }
  }

}
