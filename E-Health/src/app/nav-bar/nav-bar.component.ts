import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  user: { login: string; password: string };
  conecter: boolean = true; 
  constructor(private router: Router) { 
    this.user = { login: "", password: "" };
  }

  ngOnInit() {
  }
  login() {
    console.log(this.user);
    localStorage.setItem("login", this.user.login);
    this.router.navigate(["/home"]);
    this.conecter= false;
     
  
  }
}
