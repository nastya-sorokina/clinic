import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import { Location } from '@angular/common';
import {ConsultationService} from '../../services/consultation.service';
import {Consultation} from '../../model/consultation';
import {UserService} from '../../services/user.service';
import {User} from '../../model/user';
import {PetService} from '../../services/pet.service';
import {Pet} from '../../model/pet';

@Component({
  selector: 'app-edit-consultation',
  templateUrl: './edit-consultation.component.html',
  styleUrls: ['./edit-consultation.component.css']
})
export class EditConsultationComponent implements OnInit {

  consultation: Consultation = new Consultation();
  owners: User [];
  pets: Pet [];
  date: string;

  constructor(  private route: ActivatedRoute,
                private consultationService: ConsultationService,
                private userService: UserService,
                private petService: PetService,
                private location: Location) { }

  getConsultation(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.consultationService.getConsultationById(+params.get('id')))
      .subscribe(res => {
        this.consultation = res;
        this.date = this.formatDate(this.consultation.date);
      });
  }

  getOwners(): void {
    this.userService.getUsersByType(2).subscribe(owners => {
      this.owners = owners;
    });
  }

  getPets(): void {
    this.petService.getPets().subscribe(pets => {
      this.pets = pets;
    });
  }

  ngOnInit() {
    this.getConsultation();
    this.getOwners();
    this.getPets();
  }

  edit(): void {
    this.consultationService.edit(this.consultation, this.date);
    alert('Запись отредактирована!');
  }

  goBack(): void {
    this.location.back();
  }

  formatDate(date: Date) {

    let dd = date.getDate();
    let ddst, mmst;

    if (dd < 10) {
      ddst = '0' + dd;
    }

    let mm = date.getMonth() + 1;
    if (mm < 10) {
      mmst = '0' + mm;
    }

    let yy = date.getFullYear();

    return yy + '-' + mmst + '-' + ddst;
}

}
