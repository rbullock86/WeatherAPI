import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getWeatherData(city: string){
    return this._http.get('//api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=db041031e38885278e9f3721cf5dcc71');
  }
}
