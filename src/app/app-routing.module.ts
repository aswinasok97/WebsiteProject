import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { SingleComponent } from './pages/single/single.component';




const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
  {
    path:'about',component: AboutComponent
  },
  {
    path:'portfolio',component: PortfolioComponent
  },
  {
    path:'contact',component:ContactComponent
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
