import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { CountrysingleComponent } from './countrysingle/countrysingle.component';

const routes: Routes = [
  {
    path: 'countries', component: CountryComponent
  },
  {
    path: 'countries/:name', component: CountrysingleComponent
  },
  {
    path: '', redirectTo: 'countries', pathMatch: 'full'
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
