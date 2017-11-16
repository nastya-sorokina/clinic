import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

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
  id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private consultationService: ConsultationService,
  ) {}

  getConsultations(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => {this.id = params.get('id');
      return this.consultationService.getLastConsultationsByDoctorId(+params.get('id'));})
      .subscribe(res => this.consultations = res);
  }

  ngOnInit(): void {
    this.getConsultations();
  }

  goBack(): void {
    this.location.back();
  }

  edit(id: number): void {
    this.router.navigate(['cabinet', this.id, 'consultation', 'edit', id]);
  }

  add(): void {
    this.router.navigate(['cabinet', this.id, 'consultation', 'new']);
  }
}
