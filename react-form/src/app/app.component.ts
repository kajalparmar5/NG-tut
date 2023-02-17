import { Component } from '@angular/core';
import {FormControl, FormGroup }  from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registrationform= new FormGroup({
    username:new FormControl(''),
    password:new FormControl(''),
    confirmp:new FormControl('')
  });
}
