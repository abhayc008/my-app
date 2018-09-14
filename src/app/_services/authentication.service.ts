import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { RequestOptions, Headers} from '@angular/http';
import {map} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token',
    'Access-Control-Allow-Origin':'*'
  })
};


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  login(username: string, password: string) {

    return this.http.post<any>('http://localhost:57249/api/User/authenticate?UserName=test&Password=test',null)
        .pipe(map(user => {

            debugger;
            // login successful if there's a jwt token in the response
            if (user && user.DATA.TOKEN) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
              
            return user;
        }));
  }

logout(){ 
    localStorage.removeItem('currentUser');
  }
}
