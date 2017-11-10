import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
title:string;
todos:any;
choice:number;
  constructor() {
    this.title = 'TODO works';
    this.todos = [{title:'Vemon Snake',completed:true},
      {title:'Ocelot',completed:true},
      {title:'Miller',completed:true}];
    this.choice = 1;
  }
  ngOnInit() {
  }
  changeStatus(i) {
    if(this.todos[i].completed) {
      this.todos[i].completed=false;
    }
    else {
      this.todos[i].completed=true;
    }
  }
  delete(i) {
    this.todos.splice(i,1);
  }
  addTodo(i) {
    if(i.trim() !== "") {
      this.todos.push({title:i,completed:true})
    }
    else {
      alert("请输入添加内容!")
    }
  }
  nextChoice() {
    this.choice += 1;

    if (this.choice > 3) {
      this.choice = 1;
    }
  }
}
