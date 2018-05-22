import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DataService {
posts:Post[];
  constructor(private http:Http) {
    // this.getJSON().subscribe(data => {
    //
    //     var len=data.json().length;
    //        console.log(len);
    //        for(let i=1;i<=len;i++){
    //        console.log(data.json()[i]);
    //        this.posts = data.json()[i];
    //        return
    //        }
    //    });
  console.log('service connect')

}
 getData(){
       return this.http.get("http://192.168.0.108:3131/company");
   }

}
interface Post{
  userId:number
}
