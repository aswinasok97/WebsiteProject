import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { RegisterComponent } from './pages/register/register.component';
import { SingleComponent } from './pages/single/single.component';
import { VerifyEmailComponent } from './pages/verify-email/verify-email.component';
import { AuthGuard } from './shared/auth.guard';




const routes: Routes = [
  {
    path:'',redirectTo:'login',pathMatch:'full'
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'dashboard',component:DashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'verify-email',component:VerifyEmailComponent
  },
  
  {
    path:'forgot-password', component:ForgotPasswordComponent
  },

  {
    path:'home',component:HomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'about',component: AboutComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'portfolio',component: PortfolioComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'contact',component:ContactComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'single',component:SingleComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
