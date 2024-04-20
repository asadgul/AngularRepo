import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterCeptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var currentUser:any={token:''};
    if (sessionStorage.currentUser!=null) {
      currentUser = JSON.parse(sessionStorage.currentUser);
      }
 if(currentUser.token){
   console.log('token found is ' +currentUser.token);
    req=req.clone({
      setHeaders:{
            Authorization: `Bearer ${currentUser.token}`
      }
    });
return next.handle(req);
  }
  return next.handle(req);
  
  }
}