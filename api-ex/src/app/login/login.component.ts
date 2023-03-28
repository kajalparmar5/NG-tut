import { HttpClient } from '@angular/common/http';
import { Component,OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../services/api.service';
import {Observable,BehaviorSubject} from 'rxjs'
import { login } from './data-type';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form_val:any
@ViewChild('login')
loginForm: NgForm | undefined;

  constructor(private http:HttpClient,private loginService:ApiService){}
  ngOnInit() {
    
  }
  loginData={
    username:'',
    password:''
  }

  // onLogin(data:any){
  //   console.log(this.loginForm?.form.value);
    
  //   this.form_val=data
  //  console.log("data from form",this.form_val)
  //  console.log(data);
  //   this.loginService.login(data)
  // }

  onLogin(form:NgForm){
    
    console.log(form)
  }
}
