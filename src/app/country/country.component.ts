import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../models/country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  countries:Country[] = [];

  constructor(private service: CountryService) { }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.service.getCountries().subscribe(data=>this.countries = data);
  }

}
