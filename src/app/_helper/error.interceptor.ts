import { Injectable } from '@angular/core';
import {HttpRequest,HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthenticationService } from '../_services/authentication.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor( private authenticationService : AuthenticationService,private spinnerService :Ng4LoadingSpinnerService){}

    intercept(request : HttpRequest<any> , next :HttpHandler) : Observable<HttpEvent<any>>{
        
        return next.handle(request).pipe(catchError(err => {
            debugger;
            if(err.status === 401)
            {
                    this.authenticationService.logout();
                    location.reload(true);
            }
            
            this.spinnerService.hide();

            const error = err.error.message || err.statusText;
            return throwError(error);
        }

        ));
    }
}
