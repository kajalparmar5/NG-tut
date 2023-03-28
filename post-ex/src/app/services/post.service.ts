import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { post, postl } from '../data-types';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor( private http:HttpClient, private route:Router) { }

  onPost(data:post){

    return this.http.post('http://localhost:3000/user',data).subscribe((res)=>{
      console.log(res)
      this.isLoggedIn.next(true);
      this.route.navigate(["home"])
    })
  }

  onLogin(data:postl){
    this.http.get(`http://localhost:3000/user?email=${data.email}&password=${data.password}`,{observe: 'response'})
    .subscribe((result:any)=>{
      console.log(result)
      if(result&&result.body&&result.body.length){
                console.log("user log in");
                this.isLoggedIn.next(true);
                this.route.navigate(["home"])
                //this.router.navigate(['seller-home']);
      }
      else{
        alert("login failed..try again")
      }
    })
  }
}
