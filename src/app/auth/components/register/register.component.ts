import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CountryService } from 'src/app/core/country/services/country.service';
import { Country } from 'src/app/core/country/County';
import { InstrumentService } from 'src/app/core/instrument/services/instrument.service';
import { Instrument } from 'src/app/core/instrument/Instrument';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  countryList : Country[];
  instrumentList : Instrument[];
  faCoffee = faCoffee;
  largeLogo: any = "assets/images/brand/brand-logo-450-250.jpg";  

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.email, Validators.required]),
    country: new FormControl('', [Validators.required, Validators.pattern('^((?!--).)*$')]),
    instrument: new FormControl('', [Validators.required]),
    conditionsAgree: new FormControl('', [Validators.requiredTrue])
  });

  constructor(private countryService: CountryService, private instrumentService : InstrumentService) { }

  ngOnInit(): void {
    this.getCountries();
    this.getInstruments();
  }

  getCountries(): void {
    this.countryService.getCountries()
    .subscribe(countryList => this.countryList = countryList);
  }

  getInstruments(): void {
    this.instrumentService.getInstruments()
    .subscribe(instrumentList => this.instrumentList = instrumentList);
  }

  onSubmit() {
    if(this.userForm.valid){
      console.log(this.userForm);
    }
  }

}
