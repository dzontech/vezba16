import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from './models/country';

@Injectable({
  providedIn: 'root'
})
export class CountrysingleService {

  private urlCi = 'https://restcountries.com/v2/name/';
  private urlCi2 = '?fields=name,capital,population,area,flag,region'

  constructor(private http: HttpClient) { }

  getCountryByName(name: string):Observable<Country[]> {
    return this.http.get<Country[]>(this.urlCi + name + this.urlCi2);
  }
}
