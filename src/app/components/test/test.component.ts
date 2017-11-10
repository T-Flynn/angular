import { Component, OnInit } from '@angular/core';
import { User } from '../../classes/user';
import {Employee} from "../../enums/employee.enum"

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  users: User[];
  employee: string;
  emp:number;
  currencyValue: number;
  dateValue: Date;
  decimalValue: number;
  jsObject: Object;
  uppercaseValue:string;
  lowercaseValue: string;
  percentValue: number;
  sliceString:string;
  strValue:string;
  pi:number;
  e:number;
  blog: Object;
  p_pi: number = 0.31415926;
  p_pe: number = 0.08567897182818;
  today: Date = new Date();
  array: number[];

  constructor() {
    this.users = [
      new User('jack','123123@qq.com',22,13111111111),
      new User('j1ack','1233123@qq.com',22,13121111111),
      new User('j13ack','12311123@qq.com',22,13311111111),
      new User('ja34ck','12314423@qq.com',22,13511111111)
    ];
    this.employee = Employee[1];
    this.emp = Employee.Admin;

    this.currencyValue = 49;
    this.dateValue = new Date('02/11/2010');
    this.decimalValue = 42.1618;
    this.jsObject  = { foo: 'bar' };
    this.uppercaseValue = 'FOOBAR';
    this.lowercaseValue = 'foobar';
    this.percentValue = 42;
    this.array = [1, 2, 3];
    this.sliceString = 'qwertyuiopasdfghjkl';
    this.blog = {title: 'I love youe',
      content: 'You see ',
      comment: {
        content: 'I love you too ',
        like: [1, 2, 3, 4, 5]}};
    this.e = 2.71828;
    this.pi = 3.1415926535;
  }
  change(value) {
    this.strValue = value;
  }
  ngOnInit() {
  }

}
