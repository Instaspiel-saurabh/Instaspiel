import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Http , Response ,HttpClient } from  '@angular/http';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name = "thoughtwin";
  first_name:string;
  address:Address;
  hobbies:string[];
auth_token:string =  "";

  constructor(private router:Router , private user:UserService,private http: Http) {
   }

  ngOnInit() {
    this.first_name = "hemant";
    this.hobbies = ['a','b','c'];
    this.address ={
      city: '123 sector',
      state: 'indore'
    };
  }

  onClick(){
    this.name = "bhopal";
    this.hobbies.push('new hobbies');
  }
  addHobby(hobby){
  this.hobbies.unshift(hobby);
    // this.hobbies.push('new hobbies');
  }
  deleteHobby(hobby){
    for(let i=0 ; i<this.hobbies.length; i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i,1);
      }
    }
  }
  loginUser(e){
    e.preventDefault();
    var email = e.target.elements[0].value;
    var password = e.target.elements[1].value;


// console.log(email)
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
this.http.post<any>("http://192.168.0.108:3131/login", {
email: email,
password: password
}, {headers:headers}).subscribe((res: Response) =>{
//  res.json().data.result.role);
// res.json().data.result.id);
// res.json().data.result.token);
console.log(res.json().data);
  localStorage.setItem("authorization", res.json().data.result.token);
  localStorage.setItem('id', res.json().data.result.id);
  localStorage.setItem('role', res.json().data.result.role);

// console.log(JSON.parse(localStorage.getItem('currentUser')).data.result.token) ;

  // localStorage.setItem('Authorization',user.data.result.user_name );




if(res.json().data.result.token != ""){
this.user.setUserLoggedIn();
this.router.navigate(['dashboard']);
}
else{
// localStorage.setItem('currentUser', JSON.stringify({ token: token, username: username , password: password }));
}

});



  }

}


interface Address{
  city:string,
  state:string
}
