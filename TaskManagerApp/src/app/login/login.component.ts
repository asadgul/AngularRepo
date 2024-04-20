import { Component, OnInit } from '@angular/core';
import { LoginSerService } from '../login-ser.service';
import { LoginViewModel } from '../login-view-model';
import { Router } from '@angular/router';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  [x: string]: any;

public  loginViewModel = new LoginViewModel("asad","asad1122");
  loginError: string = "";
  
  constructor(private loginService:LoginSerService,private router:Router,private taskser:TasksService) { 
    console.log('call login');
   this.loginViewModel.userName='asd';
  }

  ngOnInit(): void {
  }
    onLoginClick(event: any)
  {

     this.loginService.Login(this.loginViewModel).subscribe((x)=>{
      console.log('going to call dashboard');

      this.router.navigateByUrl('/dashboard');

    
         

     });
  }


}
