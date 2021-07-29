import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  //Properties
  firstName = 'Ahmed';
  lastName = 'doe';
  age = 30;
  address = {
    street: '50 Main st',
    city: 'Boston',
    state: 'MA',
  };

  // Methods
  constructor() {}

  showAge() {
    return this.age;
  }
}
