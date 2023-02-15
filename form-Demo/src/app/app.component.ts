import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-Demo';
  topics=['angular','react','vue'];
  userModel =new User('kajal','krishu@gmail',8976453290,'','morning',true)
}
