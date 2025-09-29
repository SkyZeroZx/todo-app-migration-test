import { Component, Directive } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

interface User {
  id: number;
  name: string;
  created: string; // ISO date string
  balance: number;
  score: number;
  completion: number; // 0..1
  gender: 'male' | 'female' | 'other';
  meta: Record<string, string>;
}

@Directive({
  selector: '[ng2CustomDirective]',
})
export class CustomDirective {}

@Component({
  standalone: true,
  selector: 'app-user-all',
  imports: [CommonModule, CustomDirective],
  template: `
    <h3 ng2CustomDirective>All Users (demo)</h3>

    <p ng2CustomDirective>Plural example: {{ (users | async)?.length | i18nPlural : pluralMap }}</p>
    <div>
      Raw JSON (async + json):
      <pre>{{ users | async | json }}</pre>
    </div>

    <ng-container *ngIf="users | async as list; else loading">
      <ul>
        <li ng2CustomDirective *ngFor="let u of list; let i = index">
          <strong>{{ u.name | titlecase }}</strong> (slice: {{ u.name | slice : 0 : 5 }})
          <div>Joined: {{ u.created | date : 'mediumDate' }}</div>
          <div>Balance: {{ u.balance | currency : 'USD' }}</div>
          <div>
            Score: {{ u.score | number : '1.0-2' }} — Completion:
            {{ u.completion | percent : '1.0-0' }}
          </div>
          <div>Gender: {{ u.gender | i18nSelect : genderMap }}</div>
          <div>
            Meta: <span *ngFor="let kv of u.meta | keyvalue">{{ kv.key }}={{ kv.value }}; </span>
          </div>
        </li>
      </ul>
    </ng-container>

    <ng-template #loading>
      <p>Loading users (async)...</p>
    </ng-template>
  `,
})
export class UserAllComponent {
  users: Observable<User[]>;

  pluralMap = { '=0': 'no users', '=1': 'one user', other: '# users' };
  genderMap = { male: 'He', female: 'She', other: 'They' };

  constructor() {
    const data: User[] = [
      {
        id: 1,
        name: 'alice',
        created: new Date(2023, 1, 5).toISOString(),
        balance: 1234.5,
        score: 87.23,
        completion: 0.87,
        gender: 'female',
        meta: { role: 'admin', team: 'alpha' },
      },
      {
        id: 2,
        name: 'bob',
        created: new Date(2024, 3, 12).toISOString(),
        balance: 98.4,
        score: 42.1,
        completion: 0.4,
        gender: 'male',
        meta: { role: 'dev', team: 'beta' },
      },
      {
        id: 3,
        name: 'charlie',
        created: new Date().toISOString(),
        balance: 0,
        score: 99.9,
        completion: 1,
        gender: 'other',
        meta: { role: 'guest' },
      },
    ];

    // simulate async loading
    this.users = of(data).pipe(delay(200));
  }
}
