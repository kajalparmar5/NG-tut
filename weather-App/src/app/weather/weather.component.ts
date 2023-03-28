import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  myWeather:any
  temp:number=0
  feel:number=0
  humidity:number=0
  pressure:number=0
 summary:string=''
 imgUrl:string=''
 city:string='Ahmedabad'
  constructor(private service: WeatherService) {}

  onSearch(data:any){
      this.city=data
      console.log(data);
      this.service.onCity(this.city).subscribe((res) =>{
        console.log('from response', res)
        this.myWeather=res
        let tmp=this.myWeather.main
        this.temp=tmp.temp
        this.feel=tmp.feels_like
        this.humidity=tmp.humidity
        this.pressure=tmp.pressure
        this.summary=this.myWeather.weather[0].main
  
        this.imgUrl='https://openweathermap.org/img/wn/'+this.myWeather.weather[0].icon+'@2x.png'
      }
        )
  }
  ngOnInit(): void {
    this.service.onCity(this.city).subscribe((res) =>{
      console.log('from response', res)
      this.myWeather=res
      let tmp=this.myWeather.main
      this.temp=tmp.temp
      this.feel=tmp.feels_like
      this.humidity=tmp.humidity
      this.pressure=tmp.pressure
      this.summary=this.myWeather.weather[0].main

      this.imgUrl='https://openweathermap.org/img/wn/'+this.myWeather.weather[0].icon+'@2x.png'



    }
      )
     }
    
  }

