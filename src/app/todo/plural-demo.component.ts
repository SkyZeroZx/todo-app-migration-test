import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-plural-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Plural Pipe Demo</h2>
    <input type="number" [(ngModel)]="count">
    <p>{{ count | i18nPlural: map }}</p>
  `
})
export class PluralDemoComponent {
  count = 0;
  map  = {
    '=0': 'no items',
    '=1': 'one item',
    'other': '# items'
  };
}
