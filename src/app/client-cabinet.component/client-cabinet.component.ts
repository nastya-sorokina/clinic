import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Consultation } from '../model/consultation';
import { ConsultationService } from '../services/consultation.service';

import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'client-cabinet',
  templateUrl: './client-cabinet.component.html',
  styleUrls: ['./client-cabinet.component.css']
})
export class ClientCabinetComponent implements OnInit {

  consultation: Consultation = new Consultation();
  clientId: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private consultationService: ConsultationService,
  ) {}


  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
      this.clientId = params.get('id');
      return this.consultationService.getLastConsultationByClientId(+params.get('id'));
    })
      .subscribe(res => this.consultation = res);
  }

  goBack(): void {
    this.location.back();
  }
}
