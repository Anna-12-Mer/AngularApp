import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrls: ['./specialite.component.scss']
})
export class SpecialiteComponent implements OnInit {
specialite : any ; 

  constructor() { }



  ngOnInit() {

/*     this.specialiteService.getSpecialite().subscribe(
      specialite =>{
          this.specialite= specialite
          console.log(specialite)
    }) */
  }

}
