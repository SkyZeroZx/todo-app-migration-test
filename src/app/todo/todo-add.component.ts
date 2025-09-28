import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {
  todoText = '';
  todos: string[] = [];
  showList = true;
  today = new Date();
  itemCount = 0;
  gender = 'male';
  inviteMap = {
    'male': 'Invite him',
    'female': 'Invite her',
    'other': 'Invite them'
  };
  addTodo() {
    if (this.todoText.trim()) {
      this.todos.push(this.todoText);
      this.todoText = '';
      this.itemCount = this.todos.length;
    }
  }
  toggleList() {
    this.showList = !this.showList;
  }
  switchGender() {
    this.gender = this.gender === 'male' ? 'female' : 'male';
  }
}