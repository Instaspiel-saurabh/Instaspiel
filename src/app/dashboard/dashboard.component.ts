import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Http } from '@angular/http';
import { Http , Response ,HttpClient } from  '@angular/http';
import { Router } from '@angular/router';
@Component({
selector: 'app-dashboard',
templateUrl: './dashboard.component.html',
styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
posts =[];
company_name:string = "";
company_url:string = "";
i:number = 1;
id:number;
constructor(public dataservice:DataService,private http: Http,private router: Router) {
console.log('a');
this.dataservice.getData().subscribe(posts => {
// console.log(this.posts = posts.json()[0]);
this.posts = posts.json().data.result
console.log(posts)
// var len=data.json().length;
//    console.log(len);
//    for(let i=1;i<=len;i++){
//    console.log(data.json()[i]);
//    interface posts = data.json()[i];
//    }
});
}
ngOnInit() {
// return  this.dataservice.getJSON();
}
addCompany(e){
  e.preventDefault();
  var id = e.target.elements[0].value;
  var company_name = e.target.elements[1].value;
  var company_url = e.target.elements[2].value;

console.log(id)
  var headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

    this.http.put<any>('http://192.168.0.108:3131/company/'+id, {
name: company_name,
url: company_url
}, {headers:headers}).subscribe((res: Response) =>{
console.log(res)
this.router.navigate(['/dashboard']);
var modal = document.getElementById('myModal');

// When the user clicks the button, open the modal
modal.style.display = "none";
window.location.reload();
}

}
editcompany(id){
  // this.router.navigate(['/createuser']);
  // Get the modal
  var modal = document.getElementById('myModal');

  // When the user clicks the button, open the modal
  modal.style.display = "block";

  // When the user clicks on <span> (x), close the modal
  // span.onclick = function() {
  //     modal.style.display = "none";
  // }

  // When the user clicks anywhere outside of the modal, close it




  this.http.get('http://192.168.0.108:3131/company/'+id).subscribe((res: Responce) =>{
    console.log(res.json().data.result.name);
    this.company_name = res.json().data.result.name;
    this.company_url = res.json().data.result.url;
    this.id = res.json().data.result.id;
  });

}
closepopup(modal){
  var modal = document.getElementById(modal);
  modal.style.display = "none";
}
logout_user(){
localStorage.clear();
this.router.navigate(['/login']);
}
deleteComapny(id){
// console.log('http://192.168.0.108:3030/company/'+id)
this.http.delete('http://192.168.0.108:3131/company/'+id).subscribe((res: Responce) {
});
window.location.reload();
}
}
