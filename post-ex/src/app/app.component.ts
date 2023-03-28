import { Component } from '@angular/core';
import { post, postl } from './data-types';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggle=true
  title = 'post-ex';
constructor(private service:PostService){}
  onSignup(data:post){
    this.service.onPost(data)
  }
  onLogin(data:postl){
    this.service.onLogin(data)
  }
showLogin(){
  if(this.toggle==true){
    this.toggle=false
  }else{
    this.toggle=true
  }

}
}
