import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-special',
  imports: [CommonModule],
  template: `
    <h3>special-!@#-component</h3>
    <p ngSwitch="status">
      <span *ngSwitchCase="'ok'">OK</span>
      <span *ngSwitchCase="'warn'">Warn</span>
      <span *ngSwitchDefault>Unknown</span>
    </p>
  `,
})
export class SpecialCharsComponent {
  status = 'ok';
}
