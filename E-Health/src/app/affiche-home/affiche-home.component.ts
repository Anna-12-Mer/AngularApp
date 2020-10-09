import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-affiche-home',
  templateUrl: './affiche-home.component.html',
  styleUrls: ['./affiche-home.component.scss']
})
export class AfficheHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  consultation(){
    this.router.navigate(["/consultation"]);
  }
}
