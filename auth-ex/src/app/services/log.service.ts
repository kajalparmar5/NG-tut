import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { login, signup } from '../data-type';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  isLoggedIn = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient, private route:Router) {}


  user_login(data: login) {
    this.http.post('https://dummyjson.com/auth/login', data, {
        headers: { 'Content-Type': 'application/json' },
        observe: 'response',
      })
      .subscribe((res) => 
       {
        if (res.status == 200) {
          this.isLoggedIn.next(true);
          this.route.navigate(['user_home'])
          //alert('login success');
        }  
       },(err) => {
        console.log(err);
        alert(err.error.message ?? "unknown error!");
        this.route.navigate([''])
      }) 
  }
  
  userSignup(data:signup){

    this.http.post('https://dummyjson.com/users/add', data, {
        headers: { 'Content-Type': 'application/json' },
        observe: 'response',
      })
      .subscribe((res) => 
       {
        if (res.status == 200) {
          this.isLoggedIn.next(true);
          this.route.navigate(['user_home'])
          //alert('login success');
        }  
       },(err) => {
        console.log(err);
        alert(err.error.message ?? "unknown error!");
        this.route.navigate([''])
      }) 

  }


}

