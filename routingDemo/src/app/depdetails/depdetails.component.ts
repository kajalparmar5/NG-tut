import { Component } from '@angular/core';
import { ActivatedRoute , ParamMap, Router   } from '@angular/router';

@Component({
  selector: 'app-depdetails',
  templateUrl: './depdetails.component.html',
  styleUrls: ['./depdetails.component.css']
})
export class DepdetailsComponent {
    public name: any;
    
  constructor(private route:ActivatedRoute ,private router:Router){}

    ngOninit(){
      
       this.route.paramMap.subscribe((param:ParamMap)=>{
        let id=parseInt(param.get('id')!);
        this.name=id;
       }
       )
        
    }

}
