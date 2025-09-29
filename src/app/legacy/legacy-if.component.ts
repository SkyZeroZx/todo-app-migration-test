import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-legacy-if',
  template: `
    <h4>Legacy If (standalone for legacy module import)</h4>
    <p *ngIf="show; else hiddenTpl">Visible content</p>
    <ng-template #hiddenTpl><p>Hidden content</p></ng-template>
    <button (click)="toggle()">Toggle</button>
  `,
})
export class LegacyIfComponent {
  show = true;
  toggle() {
    this.show = !this.show;
  }
}
