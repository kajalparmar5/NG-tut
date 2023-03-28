import { Injectable } from '@angular/core';
import { HttpClient}from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

    onCity(city:any){
      return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=309772571b87e52169e47eb514b0e7a5&units=imperial')
    }
}
