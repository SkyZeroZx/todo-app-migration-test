import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule as NgCommomModule } from '@angular/common';
import { MyModule as CommonModule } from './common/my-module.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgCommomModule, CommonModule, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('todo-app');
}
