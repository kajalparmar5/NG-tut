import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { BhavnagarComponent } from './bhavnagar/bhavnagar.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    BhavnagarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
