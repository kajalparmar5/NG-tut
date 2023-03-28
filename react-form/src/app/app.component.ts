import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import {AbstractControl, FormBuilder , Validator, Validators }  from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  constructor(private fb:FormBuilder){}

  registrationform= this.fb.group({
    username:['',[Validators.required,Validators.minLength(2),custom,Validators.maxLength(5)]],
    password:[''],
    confirmp:['']
  })

  
  }
  function custom (control: AbstractControl): {[key: string]: any} | null {
    
    const name:string=control.value
    if(name==='admin'){
           return {custom:true}
     }
    else{
         return null
        }
      }
  

