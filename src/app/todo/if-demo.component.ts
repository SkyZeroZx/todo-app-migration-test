import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-if-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>NgIf Demo</h2>
    <button (click)="toggle()">Toggle</button>
    <p *ngIf="visible; else noContent">Visible content</p>
    <ng-template #noContent><p>Hidden content (else)</p></ng-template>
  `
})
export class IfDemoComponent {
  visible = true;
  toggle() { this.visible = !this.visible; }
}
