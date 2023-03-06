import { Injectable } from '@angular/core';
import { fauna } from 'src/assets/data/data';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

 
  httpClient: any;
  constructor(public http: HttpClient) {}
  getData(){
    return fauna
  }
  getLocation():Observable<any>
  {
    return this.http.get('http://api.openweathermap.org/geo/1.0/reverse?lat={lat}&lon={lon}&limit={limit}&appid={API key}');
  }
}

