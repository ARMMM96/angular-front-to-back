import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  //Properties
  firstName: string;
  lastName: string;
  age: number;
  address: object;

  foo: any;

  hasKids: boolean;
  numberArray: number[];
  stringArray: string[];
  mixedArray: any[];
  myTuple: [string, number, boolean];
  unsable: void;
  u: undefined;
  n: null;

  // Methods
  constructor() {
    this.firstName = 'John';
    this.lastName = 'Doe';
    this.age = 30;
    this.address = {
      street: '50 Main st',
      city: 'Boston',
      state: 'MA',
    };

    this.foo = '1';
    this.hasKids = true;
    this.numberArray = [123, 123];
    this.stringArray = [
      'hello',
      'hello',
      'let me tell you what is like to be a zero zero',
    ];
    this.mixedArray = [123, 'hello'];
    this.myTuple = ['hl', 99, false];
    this.unsable = undefined;
    this.u = undefined;
    this.n = null;
    console.log(this.addNumbers(1, 2));
  }

  showAge() {
    return this.age;
  }

  addNumbers(num1: number, num2: number): number {
    return num1 + num2;
  }
}
