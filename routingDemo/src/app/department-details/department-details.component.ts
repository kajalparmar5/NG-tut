import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,ParamMap,Router} from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit{
    
public departmentid:any;

  constructor(private route:ActivatedRoute ,private router:Router){}

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>
    {
        let id=parseInt(params.get('id')!);
        this.departmentid=id;
    });    
  }

  goPrevious(){
    let bck=this.departmentid-1;
    this.router.navigate(['/dep',bck]);
  }

  goNext(){
    let nxt=this.departmentid+1;
    this.router.navigate(['/dep',nxt]);
  }

}
