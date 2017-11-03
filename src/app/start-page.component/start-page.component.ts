import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'start-page',
  templateUrl: './start-page.component.html',
  styleUrls: [ './start-page.component.css' ],
})
export class StartPageComponent implements OnInit {

  title = 'Pretty pets';

  constructor(
  private route: ActivatedRoute,
  private location: Location
  ) {}

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }
}
