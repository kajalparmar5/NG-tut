import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api call';
 public user:any;
  constructor(private api:ApiService){}
  ngOnInit(){
    // this.api.api_call().subscribe((result)=>{
    //   console.log("result:",result)
    //   this.user=result;
    // })
  }
}
