import { Injectable } from '@angular/core';
import { fauna } from 'src/assets/data/data';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

 
 
  constructor(private http:HttpClient) { }

  getLoc(lt:any,ln:any)
  {
    return this.http.get('http://api.openweathermap.org/geo/1.0/reverse?lat='+lt+'&lon='+ln+'&limit=1&appid=dec7bb2d34146481c822673e7106cb92');
  }

  getData()
  {
    return fauna
  }
  
}

