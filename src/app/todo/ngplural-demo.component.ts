import { Component } from '@angular/core';
import { CommonModule, NgPlural, NgPluralCase } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-ngplural-demo',
  imports: [CommonModule, NgPlural, NgPluralCase],
  template: `
    <h3>NgPlural / NgPluralCase demo</h3>

    <p>Current count: <strong>{{ count }}</strong></p>
    <button (click)="dec()">-</button>
    <button (click)="inc()">+</button>

    <ng-container [ngPlural]="count">
      <ng-template ngPluralCase="=0">There are no items (case =0).</ng-template>
      <ng-template ngPluralCase="=1">There is one item (case =1).</ng-template>
      <ng-template ngPluralCase="other">There are {{ count }} items (other).</ng-template>
    </ng-container>

    <p>Also shown using the plural directive in the same component.</p>
  `,
})
export class NgPluralDemoComponent {
  count = 0;

  inc() { this.count++; }
  dec() { if (this.count > 0) this.count--; }
}
