import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dep',
  templateUrl: './dep.component.html',
  styleUrls: ['./dep.component.css']
})
export class DepComponent implements OnInit {
   departments=[
    {"id":1,"name":"angular js"},
    {"id":2,"name":"react js"},
    {"id":3,"name":"javascript"},
    {"id":4,"name":"typescript"}
  ]
  constructor(private router:Router){}

  ngOnInit(): void {}

  onselect(department: { id: any; }){
    this.router.navigate(['/dep', department.id])

  }
}
