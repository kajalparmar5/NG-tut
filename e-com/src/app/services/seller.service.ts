import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { login, signup } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SellerService {
  isLoggedIn = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient, private router: Router) {}
  signup(data: signup) {
    this.http
      .post('http://localhost:3000/seller', data, { observe: 'response' })
      .subscribe((result) => {
        this.isLoggedIn.next(true);
        localStorage.setItem('seller', JSON.stringify(result.body));
        this.router.navigate(['seller-home']);
        console.log('result is :', result);
      });
  }
  userLogin(data:login){

    console.log(data)
    this.http.get(`http://localhost:3000/seller?email=${data.email}&pas=${data.pas}`,{observe: 'response'})
    .subscribe((result:any)=>{
      console.log(result)
      if(result&&result.body&&result.body.length){
                console.log("user log in");
                this.router.navigate(['seller-home']);
      }
      else{
        alert("login failed..try again")
      }
    })

  }
  reloadSeller() {
    if (localStorage.getItem('seller')) {
      this.isLoggedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }
}
