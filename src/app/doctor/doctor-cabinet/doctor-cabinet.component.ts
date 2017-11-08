import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Consultation } from '../../model/consultation';
import { ConsultationService } from '../../services/consultation.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'doctor-cabinet',
  templateUrl: './doctor-cabinet.component.html',
  styleUrls: ['./doctor-cabinet.component.css']
})
export class DoctorCabinetComponent implements OnInit {

  consultations: Consultation [];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private consultationService: ConsultationService,
  ) {}


  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.consultationService.getLastConsultationsByDoctorId(+params.get('id')))
      .subscribe(res => this.consultations = res);
  }

  goBack(): void {
    this.location.back();
  }
}
