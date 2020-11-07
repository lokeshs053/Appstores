import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  firstName:string;
  name:string="username";
  constructor(private _router:Router,private _loginService:LoginService) { }

  ngOnInit() {
   this.firstName= localStorage.getItem('name');
  }


  addNavigate()
  {
    
    this._router.navigate(['/home/add'])
    //alert("click ok")
  }

  searchNavigate()
  {
    this._router.navigate(['/home/search',{data:this.name}]);
  }

  logOut()
  {
    sessionStorage.clear();
    localStorage.clear();
    this._loginService.isLoggedIn=false;
    this._router.navigate(['login'])
  }
}
