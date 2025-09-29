import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-emptybody',
  imports: [CommonModule],
  template: `
    <!-- purposely empty body to test components with no visible content -->
    <ng-container *ngIf="false"></ng-container>
  `,
})
export class EmptyBodyComponent {}
