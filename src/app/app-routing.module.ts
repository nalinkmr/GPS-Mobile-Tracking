import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent }  from './aboutus/aboutus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ReportComponent } from './report/report.component';
import { SettingsComponent } from './settings/settings.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch: 'full' },
  {path:'login',component: LoginComponent},
  {path:'dashboard',component:DashboardComponent, canActivate:[AuthGuardService]},
  {path:'aboutus',component:AboutusComponent,canActivate:[AuthGuardService]},
  {path:'footer',component:FooterComponent},
  {path:'header',component:HeaderComponent},
  {path:'report',component:ReportComponent,canActivate:[AuthGuardService]},
  {path:'settings',component:SettingsComponent,canActivate:[AuthGuardService]},
  {path:'signup',component:SignupComponent},
  {path:'**',redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
