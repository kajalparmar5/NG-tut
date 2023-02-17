import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipe-demo';
    public display=true
    public n=0
  onsqr(val:any){
      this.n=val
      
    
  }
}
