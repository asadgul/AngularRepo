import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { AuthguardGuard } from './shared/authguard.guard';
import { TemplateProjectComponent } from './template-project/template-project.component';
const routes:Routes=[
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashBoardComponent,canActivate:[AuthguardGuard]},
  {path:'about',component:AboutComponent},
  {path:'Projects',component:TemplateProjectComponent}

]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]})
export class AppRoutingModule { }
