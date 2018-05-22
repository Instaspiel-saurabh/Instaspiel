import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { JsonpModule } from '@angular/http';
import { HttpModule, Jsonp,Request} from '@angular/http';




import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataService } from './services/data.service';



import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';


const appRoutes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

  { path: 'dashboard',

  component: DashboardComponent },

  { path: 'home', component: HomeComponent },
  { path: 'createuser', component: CompanyComponent },
  { path: 'edit-company', component: EditCompanyComponent }

];



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,

    DashboardComponent,



    HomeComponent,



    CompanyComponent,



    EditCompanyComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    JsonpModule,
    FormsModule,
    HttpModule


  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
