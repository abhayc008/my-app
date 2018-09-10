import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor1 implements HttpInterceptor  {
    intercept(request : HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>{

        let currentUser = JSON.parse(localStorage.getItem('currentuser'));
        if(currentUser && currentUser.token)
        {
            request = request.clone({
                 setHeaders :{ Authorization : `Bearer ${currentUser.token}` }   
            });
        }

        return next.handle(request);
    }
}
