import { Injectable } from '@angular/core';
import { fauna } from 'src/assets/data/data';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  getData(){
    return fauna
  }
}

