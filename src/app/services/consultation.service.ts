import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";

import { Consultation } from '../model/consultation';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ConsultationService {

    dbUrl = 'http://localhost:3000';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {}

    getLastConsultationByClientId(ownerId: number): Observable<Consultation> {

      let url = `${this.dbUrl}/consultation?clientId=${ownerId}&_sort=date&_order=desc&_limit=1`;
      return this.http.get(url).map(res => {
                let result = res.json();
                let consult: Consultation = new Consultation();
                consult.id = result[0].id;
                consult.petKind = result[0].petKind;
                consult.date = new Date(result[0].date);
                consult.text = result[0].text;
                consult.clientId = result[0].clientId;
                consult.petId = result[0].petId;
                consult.doctorId = result[0].doctorId;
                url = `${this.dbUrl}/pet/${result[0].petId}`;
                this.http.get(url).map(pet => pet.json()).subscribe(pet => consult.petName = pet.name);
                url = `${this.dbUrl}/user/${result[0].doctorId}`;
                this.http.get(url).map(doctor => doctor.json()).subscribe(doctor => consult.doctorName = doctor.name);
                return consult;
            });
    }

    getConsultationsByPetId(petId: number): Observable<Consultation[]> {
      let url = `${this.dbUrl}/consultation?petId=${petId}&_sort=date&_order=asc`;
      return this.http.get(url).map(res => {
          let result = res.json();
          let consultations = new Array<Consultation>();
          for(let index in result) {
            let consult: Consultation = new Consultation();
            consult.id = result[index].id;
            consult.petKind = result[index].petKind;
            consult.date = new Date(result[index].date);
            consult.text = result[index].text;
            consult.clientId = result[index].clientId;
            consult.petId = result[index].petId;
            consult.doctorId = result[index].doctorId;
            url = `${this.dbUrl}/pet/${result[index].petId}`;
            this.http.get(url).map(pet => pet.json()).subscribe(pet => consult.petName = pet.name);
            url = `${this.dbUrl}/user/${result[index].doctorId}`;
            this.http.get(url).map(doctor => doctor.json()).subscribe(doctor => consult.doctorName = doctor.name);
            consultations.push(consult);
          }
          return consultations;
        });
      }

    getLastConsultationsByDoctorId(doctorId: number): Observable<Consultation[]> {
      let url = `${this.dbUrl}/consultation?doctorId=${doctorId}&_sort=date&_order=desc&_limit=3`;
      return this.http.get(url).map(res => {
        let result = res.json();
        let consultations = new Array<Consultation>();
        for(let index in result) {
          let consult: Consultation = new Consultation();
          consult.id = result[index].id;
          consult.petKind = result[index].petKind;
          consult.date = new Date(result[index].date);
          consult.text = result[index].text;
          consult.clientId = result[index].clientId;
          consult.petId = result[index].petId;
          consult.doctorId = result[index].doctorId;
          url = `${this.dbUrl}/pet/${result[index].petId}`;
          this.http.get(url).map(pet => pet.json()).subscribe(pet => consult.petName = pet.name);
          url = `${this.dbUrl}/user/${result[index].clientId}`;
          this.http.get(url).map(owner => owner.json()).subscribe(owner => consult.ownerName = owner.name);
          consultations.push(consult);
        }
        return consultations;
      });
    }

    getConsultationById(id: number): Observable<Consultation> {
      let url = `${this.dbUrl}/consultation?id=${id}`;
      return this.http.get(url).map(res => {
        let result = res.json();
        let consult: Consultation = new Consultation();
        consult.id = result[0].id;
        consult.petKind = result[0].petKind;
        consult.date = new Date(result[0].date);
        consult.text = result[0].text;
        consult.clientId = result[0].clientId;
        consult.petId = result[0].petId;
        consult.doctorId = result[0].doctorId;
        url = `${this.dbUrl}/pet/${result[0].petId}`;
        this.http.get(url).map(pet => pet.json()).subscribe(pet => consult.petName = pet.name);
        url = `${this.dbUrl}/user/${result[0].clientId}`;
        this.http.get(url).map(owner => owner.json()).subscribe(owner => consult.ownerName = owner.name);
        return consult;
      });
    }

    edit(consult: Consultation, date: string) {
      const url = `${this.dbUrl}/consultation/${consult.id}`;
      console.log(date);
      const body = {clientId: consult.clientId, petKind: consult.petKind, petId: consult.petId, date: date,
                    doctorId: consult.doctorId, text: consult.text};
      return this.http.put(url, body , {headers: this.headers}).subscribe();
    }
  }
