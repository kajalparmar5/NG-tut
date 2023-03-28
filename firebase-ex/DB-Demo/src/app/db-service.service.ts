import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataType } from './data-type';
import { map, pluck, toArray } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbServiceService {

  detArr = []

  constructor(private http:HttpClient) { }

  loginData(data:DataType){
    //console.log("from service",data);
    return this.http.post('https://fir-ffbe6-default-rtdb.firebaseio.com/post.json',data)
    .subscribe(res=>{
      
      // console.log("from subscribe",res);
    })
    
  }

  onGet(){
    return this.http.get<{[k:string]: DataType}>('https://fir-ffbe6-default-rtdb.firebaseio.com/post.json')
     .pipe(map(res => Object.values(res)[0].email))
    .subscribe(res=>{
          console.log(res);
          
    })
  }

  onDelete(){
    return this.http.delete('https://fir-ffbe6-default-rtdb.firebaseio.com/post.json')
    .subscribe(res=>console.log(res)
    )
  }

}
