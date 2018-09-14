import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor  {
    intercept(request : HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>{
        
        
    //     request = request.clone({
    //         setHeaders :{ Access-Control-Allow-Origin : '*' }   
    //    });
    //      }
    
    //const clonedReq = request.clone({headers: request.headers.set('Access-Control-Allow-Origin', '*')});
        
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
