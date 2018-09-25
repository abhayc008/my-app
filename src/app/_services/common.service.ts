import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {map  } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  GetCountries(){
    return this.http.get<any>( environment.BASE_API_URL +'api/Common/GetCountries')
       
  };

  GetStates(COUNTRY_ID:number){
    return this.http.get<any>( environment.BASE_API_URL +'api/Common/GetStates?COUNTRY_ID='+ COUNTRY_ID )
    .pipe(map(countries => {
          debugger;
      return countries;
         
      })) ;
  };

  GetCities(STATE_ID:number){
    return this.http.get<any>( environment.BASE_API_URL +'api/Common/GetCities?=STATE_ID='+STATE_ID );
  };



}
