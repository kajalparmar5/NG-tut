import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dep',
  templateUrl: './dep.component.html',
  styleUrls: ['./dep.component.css']
})
export class DepComponent {
  public departments=[
    {"id":1,"name":"angular js"},
    {"id":2,"name":"react js"},
    {"id":3,"name":"javascript"},
    {"id":4,"name":"typescript"}
  ]
  constructor(private router:Router){}

  onselect(departments: { id: any; }){
    this.router.navigate(['/dep', departments.id])

  }
}
