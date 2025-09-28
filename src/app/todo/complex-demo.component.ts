import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-complex-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Complex Demo (combined cases)</h2>
    <div *ngIf="users?.length; else noUsers">
      <div *ngFor="let u of users; let i = index">
        <h3>{{ u.name }} ({{ u.role }})</h3>
        <div [ngSwitch]="u.role">
          <p *ngSwitchCase="'admin'">Admin actions available</p>
          <p *ngSwitchCase="'editor'">Editor actions</p>
          <p *ngSwitchDefault>Viewer</p>
        </div>
        <p>Joined: {{ u.joined | date:'mediumDate' }}</p>
      </div>
    </div>
    <ng-template #noUsers><p>No users yet</p></ng-template>
  `
})
export class ComplexDemoComponent {
  users = [
    { name: 'Alice', role: 'admin', joined: new Date(2020,1,4) },
    { name: 'Bob', role: 'editor', joined: new Date(2021,5,14) },
    { name: 'Carol', role: 'viewer', joined: new Date(2022,9,3) }
  ];
}
