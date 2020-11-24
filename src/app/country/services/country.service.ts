import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { Country } from '../model/Country';
import { COUNTRY_LIST } from '../data/CountryList';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() { }

  getCountries(): Observable<Country[]> {
    return of(COUNTRY_LIST);
  }
}
