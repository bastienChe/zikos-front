import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Instrument } from '../Instrument';
import { INSTRUMENT_LIST } from '../Instrument-list';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {

  constructor() { }

  getInstruments(): Observable<Instrument[]> {
    return of(INSTRUMENT_LIST);
  }
}
