import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-switch-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>NgSwitch Demo</h2>
    <select [(ngModel)]="mode">
      <option value="read">Read</option>
      <option value="write">Write</option>
      <option value="preview">Preview</option>
    </select>
    <div [ngSwitch]="mode">
      <p *ngSwitchCase="'read'">Mode: Read</p>
      <p *ngSwitchCase="'write'">Mode: Write</p>
      <p *ngSwitchDefault>Mode: Preview or unknown</p>
    </div>
  `
})
export class SwitchDemoComponent {
  mode = 'read';
}
