import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello';
name="";
public s= false
constructor(){}
public c=["red","blue","green","yellow"]

public n="karishma"
ngOninit(){}

  onclick(value: string){
    document.write("welcome"+" "+value);
  }

  clickme(){
    this.s= true;
  }
}
