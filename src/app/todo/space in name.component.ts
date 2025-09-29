import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-space-in-name',
  imports: [CommonModule],
  template: `
    <h3>space in name component</h3>
    <p *ngIf="show; else off">Showing content</p>
    <ng-template #off><p>Hidden content</p></ng-template>
  `,
})
export class SpaceInNameComponent {
  show = false;
}
