import { Component } from '@angular/core';
import { login, signup } from './data-type';
import { LogService } from './services/log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public flag:boolean=true
  title = 'auth-ex';
 public user_data: login | undefined;

  constructor(private log:LogService){}

  onFlag(){
    //this.flag==!this.flag
    if(this.flag==true){
      this.flag=false
    }else{
      this.flag=true;
    }
  }

  onLogin(data:login){
    this.user_data=data
    this.log.user_login(data);
  }

  onSignup(data:signup){
    this.log.userSignup(data)
  }
}
