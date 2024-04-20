import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginViewModel } from './login-view-model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';  
@Injectable({
  providedIn: 'root'
})
export class LoginSerService {
  constructor(private httpClient: HttpClient)
  {
  }

  currentUserName: any = null;

  public Login(loginViewModel: LoginViewModel):Observable<any>
  {
    return this.httpClient.post<any>("https://localhost:7212/api/TaskManager/Authenticate", loginViewModel, { responseType: "json" })
    .pipe(map(user=>{
      if(user){
        this.currentUserName=user.user;
        sessionStorage.currentUser=JSON.stringify(user);
        console.log('user is'+user)
      }
      return user;
   
    }));
 
  }

  public Logout()
  {
    sessionStorage.currentUser='';
    this.currentUserName = null;
  }
  public UserExist():Boolean{

    if(sessionStorage.currentUser!=undefined){
      return true;
    }
    return false;
  }


}
