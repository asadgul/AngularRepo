import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import{HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component'
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpInterCeptorService } from './http-inter-ceptor.service';
import { InterceptorErrorService } from './interceptor-error.service';
import { TemplateProjectComponent } from './template-project/template-project.component';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    AboutComponent,
    LoginComponent,
    TemplateProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
   ],
  providers: [
    {
    provide:HTTP_INTERCEPTORS,
    useClass:HttpInterCeptorService,
    multi:true
  }, {
    provide:HTTP_INTERCEPTORS,
    useClass:InterceptorErrorService,
    multi:true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
