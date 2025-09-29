import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-hidden-name',
  imports: [CommonModule],
  template: `
    <h3>.hidden-name component</h3>
    <p>Testing a filename that starts with a dot. Shows current date: {{ today | date:'medium' }}</p>
  `,
})
export class HiddenNameComponent {
  today = new Date();
}
