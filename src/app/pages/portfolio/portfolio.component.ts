import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  constructor(private obj:HeroService,private router:Router){}
  fauna = this.obj.getData();
  gotoHere(id:string)
  {
    localStorage.setItem('id',id)
    this.router.navigate(['/single'])
  }
}
