import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

import { User } from '../model/user';

import 'rxjs/add/operator/map';

import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

  dbUrl = 'http://localhost:3000/user';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  getUserById(id: number): Observable<User> {
    const url = `${this.dbUrl}/${id}`;
    return this.http.get(url).map(res => res.json() as User);
  }

  authorization(login: string, password: string): Observable<Array<number>> {

    let url = `${this.dbUrl}?login=${login}&password=${password}`;
    return this.http.get(url).map(res => {
      let mas: Array<number> = new Array<number>();
      if (res.json().length !== 0) {
        mas.push(res.json()[0].type);
        mas.push(res.json()[0].id);
        return mas;
      }else {
        mas[0] = -1;
        return mas;
      }
    });
  }

    searchClient(term: string): Observable<User[]> {
      return this.http
        .get(`${this.dbUrl}?name_like=${term}`)
        .map(response => response.json() as User[]);
    }

    getUsersByType(type: number): Observable<User[]> {
      let url = `${this.dbUrl}?type=${type}&_sort=name&_order=asc`;
      return this.http.get(url).map(res =>  res.json());
    }

    getUsers(): Observable<User[]> {
      let url = `${this.dbUrl}?_sort=name&_order=asc`;
      return this.http.get(url).map(res =>  res.json());
    }

    addUser(user: User): void {
      const body = {name: user.name, login: user.login, password: user.password, type: user.type,
        address: user.address, phone: user.phone}
      this.http.post(`${this.dbUrl}`, body).subscribe();
    }
}
