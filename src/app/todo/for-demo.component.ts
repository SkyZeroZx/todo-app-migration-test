import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-for-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>NgFor Demo</h2>
    <ul>
      <li *ngFor="let item of items; index as i; trackBy: trackById">
        {{ i + 1 }} - {{ item.name }} (id: {{ item.id }})
      </li>
    </ul>
  `
})
export class ForDemoComponent {
  items = [
    { id: 1, name: 'Alpha' },
    { id: 2, name: 'Beta' },
    { id: 3, name: 'Gamma' }
  ];
  trackById(index: number, item: any) {
    return item.id;
  }
}
