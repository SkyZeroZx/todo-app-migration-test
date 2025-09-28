import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos = [
    { text: 'Learn Angular', done: false },
    { text: 'Test migration', done: true },
    { text: 'Edge case: empty', done: false }
  ];
  filter = '';
  get filteredTodos() {
    return this.todos.filter(t => t.text.includes(this.filter));
  }
  markDone(index: number) {
    this.todos[index].done = true;
  }
}