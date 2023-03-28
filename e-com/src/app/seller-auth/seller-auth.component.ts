import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { signup } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
  public toggle=false;
  constructor(private seller:SellerService, private router:Router){}

  onSubmit(data:signup){
  this.seller.signup(data)
  }
  onLogin(data:signup){
    this.seller.userLogin(data)
   //console.log("login:",data)
    }
  
  ngOnInit(){
    this.seller.reloadSeller()
  }
  showLogin(){
    if(this.toggle===true){
      this.toggle=false;
    }else{
      this.toggle=true
    }
  }
}
