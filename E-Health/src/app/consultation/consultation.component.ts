import { Component, OnInit } from '@angular/core';
import { AlertsService } from 'angular-alert-module';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit {

  constructor(private alerts: AlertsService) { }

  ConsultValide(){
    this.alerts.setMessage('Votre informations est enregistrer avec succées!','success');
  }
  ngOnInit() {
  }


}
