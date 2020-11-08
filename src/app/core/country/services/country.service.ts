import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { Country } from '../County';
import { COUNTRY_LIST } from '../country-list';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() { }

  getCountries(): Observable<Country[]> {
    return of(COUNTRY_LIST);
  }
}
