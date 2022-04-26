import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../country.service';
import { CountrysingleService } from '../countrysingle.service';
import { Country } from '../models/country';

@Component({
  selector: 'app-countrysingle',
  templateUrl: './countrysingle.component.html',
  styleUrls: ['./countrysingle.component.css']
})
export class CountrysingleComponent implements OnInit {

  country: Country[] = [];

  constructor(private service: CountrysingleService, private route: ActivatedRoute) { }

  ngOnInit(): void {
   const name = String(this.route.snapshot.paramMap.get('name'));
   this.getCountryByName(name);
    
  }

  getCountryByName(name: string) {
    this.service.getCountryByName(name).subscribe(data=>this.country=data);
  }

}
