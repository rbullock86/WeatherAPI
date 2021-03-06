import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  weatherData: any;
  easyData: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService) { 
      
    this.getWeatherData();
    }

  ngOnInit() {
  }
  goHome() {
    this._router.navigate(['/']);
  }

  getWeatherData(){
    let observable = this._httpService.getWeatherData("Seattle");
    observable.subscribe(data => {
      console.log("Data", data);
      this.weatherData = data;
      this.easyData = {
        humidity: this.weatherData.main.humidity,
        tNow: this.kToF(this.weatherData.main.temp),
        tHigh: this.kToF(this.weatherData.main.temp_max),
        tLow: this.kToF(this.weatherData.main.temp_min),
        status: this.weatherData.weather[0].main
      }
    })
  }
  kToF(kelvin){
    return (kelvin*9/5 -459.67).toFixed(2);
  }

}
