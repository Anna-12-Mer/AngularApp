import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
// import { HttpModule } from '@angular/http';
// import { MaterialModule} from './material-module';
import {MatDatepickerModule, MatCalendarHeader} from '@angular/material/datepicker';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';

import { InternationalPhoneModule } from 'ng4-intl-phone';
import { SpecialiteComponent } from './specialite/specialite.component';
import { AfficheHomeComponent } from './affiche-home/affiche-home.component';
import { FooterComponent } from './footer/footer.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { AppRoutingModule } from './/app-routing.module';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MaterialModule } from './material-module';
import { RepMedecinComponent } from './rep-medecin/rep-medecin.component';

import { AlertsModule } from 'angular-alert-module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    SpecialiteComponent,
    AfficheHomeComponent,
    FooterComponent,
    ConsultationComponent,
    RepMedecinComponent
  ],
  imports: [
    FormsModule,
    // MaterialModule,
    BrowserAnimationsModule,
    // MatButtonModule, MatCheckboxModule,
    MatDatepickerModule,
    InternationalPhoneModule ,
    BrowserModule,
    InternationalPhoneModule,
    // HttpModule, AppRoutingModule,
      // Specify your library as an import
      AlertsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
