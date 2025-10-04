import { Component } from '@angular/core';
import { CommonModule as MyCustomAwesomeModuleAllName } from '@angular/common';
@Component({
  selector: 'app-my-dummy',
  standalone: true,
  imports: [MyCustomAwesomeModuleAllName],
  template: `
    <div *ngIf="show">
      <h2>{{ title }}</h2>
      <ul>
        <li *ngFor="let item of items">{{ item }}</li>
      </ul>
    </div>
    <p>The current date is: {{ data | date : 'fullDate' }}</p>
  `,
  styles: [],
})
export class MyDummyComponent {
  readonly show = true;
  readonly title = 'My Dummy Component';
  readonly items = ['Item 1', 'Item 2', 'Item 3'];
  readonly data = new Date();
}
