import { Injectable } from '@angular/core';
import { LoginSerService } from '../login-ser.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private loginser:LoginSerService) {

   }
   IsLoggedIn():Boolean{
   return this.loginser.UserExist();
   }
}
