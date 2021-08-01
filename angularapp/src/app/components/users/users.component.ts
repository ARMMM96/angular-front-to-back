import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    isActive: false,
    registered: '',
  };
  users: User[] = [];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;
  data: any;

  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.users = this.userService.getUsers();

    this.loaded = true;
  }

  onSubmit() {}
}
