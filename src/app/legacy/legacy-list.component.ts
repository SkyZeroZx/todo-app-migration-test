import { Component } from '@angular/core';
 
@Component({
  standalone: false,
  selector: 'app-legacy-list',
  template: `
    <h4>Legacy List (standalone for legacy module import)</h4>
    <ul>
      <li *ngFor="let i of items; index as idx">{{ idx }} - {{ i }}</li>
    </ul>
  `
})
export class LegacyListComponent {
  items = ['alpha', 'beta', 'gamma'];
}
