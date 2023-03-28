import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { login } from '../login/data-type';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  api_call(){
    return this.http.get('https://dummyjson.com/users/1')
  }

  login(data:login){
    return this.http.post('https://dummyjson.com/auth/login',
    data,
    {observe:'response'})
    .subscribe((result:any)=>{
        if(result && result.body && result.length){
          console.log("user logged in")

        }else{
          console.log("invalid credential")

        }

    })

    
  }
}

// https://dummyjson.com/users/1?email=${data.email}&password=${data.password}