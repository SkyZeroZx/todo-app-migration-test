import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-date-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Date Pipe Demo</h2>
    <p>Now: {{ now | date:'fullDate' }} - {{ now | date:'shortTime' }}</p>
    <p>ISO: {{ now | date:'yyyy-MM-ddTHH:mm:ssZ' }}</p>
  `
})
export class DateDemoComponent {
  now = new Date();
}
