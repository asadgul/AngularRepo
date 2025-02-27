import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  
  /**
   *
   */
  constructor(private auth:AuthService,private route:Router) {
    
    
  }
  canActivate(
   
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      debugger;
      if(this.auth.IsLoggedIn()){
return true;
      }
      this.route.navigate(['/login']);
      return false;
  }
  
}
