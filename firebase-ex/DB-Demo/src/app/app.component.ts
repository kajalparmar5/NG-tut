import { Component } from '@angular/core';
import { DataType } from './data-type';
import { DbServiceService } from './db-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DB-Demo';
  constructor(private service:DbServiceService){}

  onClick(data:DataType){
    //console.log("from ts",data);
    
    this.service.loginData(data)
  }
  fetchData(){
    this.service.onGet()
  }
  clearData(){
    this.service.onDelete()
  }
}
