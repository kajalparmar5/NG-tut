import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule ,Form} from '@angular/forms';
import { UserHomeComponent } from './user-home/user-home.component';
//import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    UserHomeComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
