import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  public userid:any=""
  constructor(private route:ActivatedRoute){

    this.userid=this.route.snapshot.paramMap.get('id')

  }

  ngOninit(){}
}
