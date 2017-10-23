// Keep the Input import for now, you'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Consultation }  from './consultation';
import { ClientService } from './client.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'client-cabinet',
  templateUrl: './client-cabinet.component.html',
  styleUrls:['./client-cabinet.component.css']
})
export class ClientCabinetComponent implements OnInit {

  consultation: Consultation;

  constructor(
  private route: ActivatedRoute,
  private location: Location,
  private clientService: ClientService,
  ) {}
  
  ngOnInit(): void {
    this.consultation = this.clientService.getLastConsultation(1);
  }

  goBack(): void {
    this.location.back();
  }
}
