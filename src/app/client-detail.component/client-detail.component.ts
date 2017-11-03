import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { UserService } from '../services/user.service';
import { User } from '../model/user';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: [ './client-detail.component.css' ]
})
export class ClientDetailComponent implements OnInit {

  client: User;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.userService.getUserById(+params.get('id')))
      .subscribe(client => this.client = client);
  }

  goBack(): void {
    this.location.back();
  }
}

