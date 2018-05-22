import { Component, OnInit } from '@angular/core';
import { Http , Response ,HttpClient } from  '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private http:Http,private router: Router) { }
cname:string = "";
  ngOnInit() {
  }
  addCompany(e){
    e.preventDefault();
    var company_name = e.target.elements[0].value;
    var company_url = e.target.elements[1].value
    console.log(company_name);
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

      this.http.post<any>('http://192.168.0.108:3131/company', {
name: company_name,
url: company_url
}, {headers:headers}).subscribe((res: Response) =>{
console.log(res)
 this.router.navigate(['/dashboard']);
  }

}


editCompany(e){
  e.preventDefault();
  var company_name = e.target.elements[0].value;
  var company_url = e.target.elements[1].value

}

}
