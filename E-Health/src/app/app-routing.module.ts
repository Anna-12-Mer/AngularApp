import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';

import { InternationalPhoneModule } from 'ng4-intl-phone';
import { SpecialiteComponent } from './specialite/specialite.component';
import { AfficheHomeComponent } from './affiche-home/affiche-home.component';
import { FooterComponent } from './footer/footer.component';
import { ConsultationComponent } from './consultation/consultation.component';

const routes: Routes = [

  {
    path: 'accueil',
    component: HomeComponent
  },
  {
    path: 'consultation',
    component: ConsultationComponent
  },
  { path: '**', redirectTo:'/accueil' ,pathMatch:'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule], 

  declarations: []
})
export class AppRoutingModule { }
