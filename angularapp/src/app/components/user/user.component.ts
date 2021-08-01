import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
// export class UserComponent implements OnInit {
//   //Properties
//   user: User;

//   // Methods
//   constructor() {}

//   ngOnInit(): void {
//     this.user = {
//       firstName: 'John',
//       lastName: 'Doe',
//       age: 30,
//       address: {
//         street: '50 Main st',
//         city: 'Boston',
//         state: 'MA',
//       },
//     };
//   }
// }
export class UserComponent implements OnInit {
  // Properties
  user: User;

  // Methods
  constructor() {
    this.user = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
    };
  }

  ngOnInit() {}
}
