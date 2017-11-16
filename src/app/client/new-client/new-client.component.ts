import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {UserService} from '../../services/user.service';
import {User} from '../../model/user';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {

  type: number;
  name: string;
  address: string;
  phone: string;
  login: string;
  password: string;

  constructor(private location: Location,
              private userService: UserService) { }

  add(): void {
    let user: User = new User();
    user.name = this.name;
    user.type = this.type;
    user.address = this.address;
    user.phone = this.phone;
    user.login = this.login;
    user.password = this.password;
    this.userService.addUser(user);
    alert('Пользователь добавлен!');
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
  }

}
