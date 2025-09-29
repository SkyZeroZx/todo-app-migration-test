import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

interface U {
  id: number;
  name: string;
  created: string;
  balance: number;
}

@Component({
  standalone: true,
  selector: 'app-pipe-combos',
  imports: [CommonModule],
  template: `
    <h3>Pipe combinations (nested pipes)</h3>

      <ng-container *ngIf="users$ | async as users">
    <p><strong>Async + Uppercase</strong>: {{ users.length ? (users[0].name | uppercase) : '' }}</p>
    <p><strong>Date + Titlecase</strong>: {{ users.length ? (users[0].created | date:'fullDate' | titlecase) : '' }}</p>

        <h4>Expanded list</h4>
        <ul>
          <li *ngFor="let u of users">
        <div><strong>Name (uppercase, slice):</strong> {{ u.name | uppercase | slice:0:8 }}</div>
        <div><strong>Joined (date -> titlecase):</strong> {{ u.created | date:'mediumDate' | titlecase }}</div>
        <div><strong>Balance (currency):</strong> {{ u.balance | currency:'USD' }}</div>
        <div><strong>Meta (json -> uppercase):</strong> {{ (u | json) | uppercase }}</div>
      </li>
    </ul>

    <h4>Composed expression example</h4>
    <ng-container *ngIf="users$ | async as ulist">
      <p>First user display: {{ ulist.length ? (ulist[0].name | uppercase) : 'n/a' }}</p>
    </ng-container>
  `,
})
export class PipeCombosComponent {
  users$: Observable<U[]>;

  constructor() {
    const sample: U[] = [
      { id: 1, name: 'anna-marie', created: new Date(2022, 4, 2).toISOString(), balance: 1200.5 },
      { id: 2, name: 'bernard', created: new Date(2023, 6, 20).toISOString(), balance: 45.0 },
      { id: 3, name: 'carol', created: new Date().toISOString(), balance: 0 },
    ];
    this.users$ = of(sample).pipe(delay(150));
  }
}
