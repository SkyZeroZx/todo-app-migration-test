import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ng-container-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>NgContainer Demo</h2>
    <ng-container *ngIf="items.length; else empty">
      <p>There are {{ items.length }} items</p>
    </ng-container>
    <ng-template #empty><p>No items</p></ng-template>
  `
})
export class NgContainerDemoComponent {
  items: any[] = [];
}
