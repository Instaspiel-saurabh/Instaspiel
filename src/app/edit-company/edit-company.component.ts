import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Http , Response ,HttpClient } from  '@angular/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit {

  constructor(private http: Http,private router: Router) { }

  ngOnInit() {
  }
  editComapny(e){
    
    e.preventDefault();
    var company_name = e.target.elements[0].value;
    var company_url = e.target.elements[1].value
    console.log(company_name);

  console.log(company_url)


//     var headers = new Headers();
//     headers.append('Content-Type', 'application/json');
//     headers.append('Accept', 'application/json');
//     // console.log(id)
//     this.http.put<any>('http://192.168.0.108:3131/company/'61, {
// name: company_name,
// url: company_url
// }, {headers:headers}).subscribe((res: Response) =>{
// console.log(res)
// this.router.navigate(['/dashboard']);
// }


}
