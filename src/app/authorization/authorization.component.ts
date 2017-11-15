import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router} from '@angular/router';

import 'rxjs/add/operator/switchMap';
import { UserService } from '../services/user.service';

@Component({
  selector: 'authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  login: string;
  password: string;

  constructor(
    private router: Router,
    private location: Location,
    private userService: UserService
  ) {}


  ngOnInit(): void {
  }

  enter(): void {
    let mas: Array<number>;
    this.userService.authorization(this.login, this.password)
      .subscribe(res => {
        mas = res;
        if (mas[0] === -1) {
          alert('Неверный логин или пароль!');
        }else
          if (mas[0] === 2) {
            this.router.navigate(['/client/cabinet', mas[1]]);
          } else {
            this.router.navigate(['/doctor/cabinet', mas[1]]);
          }
      });
  }

  goBack(): void {
    this.location.back();
  }
}

