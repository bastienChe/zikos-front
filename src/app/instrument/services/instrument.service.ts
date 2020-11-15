import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Instrument } from '../model/Instrument';
import { INSTRUMENT_LIST } from '../data/InstrumentList';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {

  constructor() { }

  getInstruments(): Observable<Instrument[]> {
    return of(INSTRUMENT_LIST);
  }
}
