import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from './models/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private urlCo = 'https://restcountries.com/v2/all?fields=name,capital,population,area,flag,region';

  constructor(private http: HttpClient) { }

  getCountries():Observable<Country[]> {
    return this.http.get<Country[]>(this.urlCo);
  }
}
