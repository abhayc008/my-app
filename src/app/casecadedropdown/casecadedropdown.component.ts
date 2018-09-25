import { Component, OnInit } from '@angular/core';
import { CommonService } from '../_services/common.service';
import {map  } from 'rxjs/operators';
import { Country } from '../_models/country';
import { State } from '../_models/state';
import { City } from '../_models/city';

@Component({
  selector: 'app-casecadedropdown',
  templateUrl: './casecadedropdown.component.html',
  styleUrls: ['./casecadedropdown.component.css']
})
export class CasecadedropdownComponent implements OnInit {

  constructor(private commonService : CommonService) {
    
   }

  ngOnInit() {
    this.getCountries();
  }

  selectedCountry = 0;
  selectedState = 0;
 
  title = 'app';
  countries : Country[]=[];
  states : State[] = [];
  cities : City[] = [];
 
 
  onSelectCountry(country_id: number) {
    debugger;
    this.selectedCountry = country_id;
    this.selectedState = 0;
    this.cities = [];

      this.commonService.GetStates(country_id).subscribe(
        resp => {
          debugger;
          if(resp.STATUS)
          {
            this.states = resp as State[]
          }
          else
          {
            this.states = [];
          }            
        }
        ,error => {
          this.states = [];
        }
      );
    }
 
  onSelectState(state_id: number) {
    this.selectedState = state_id;
    this.commonService.GetCities(state_id).subscribe(
          resp => {
            if(resp.STATUS)
            {
              this.cities = resp as City[]
            }
            else
            {
              this.cities = [];
            }            
          }
          ,error => {
            this.cities = [];
          }
        );
  }

  getCountries() {
    this.commonService.GetCountries().subscribe(
          resp => { 
            if(resp.STATUS)
            {
              this.countries = resp.DATA as Country[];
            }
            else
            {
              this.countries = [];
            }
          },
          error => {
            this.countries = [];
          }
      );
  };
}
