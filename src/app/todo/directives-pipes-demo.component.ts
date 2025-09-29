import { Component } from '@angular/core';
import {
  NgIf,
  NgForOf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  NgClass,
  NgStyle,
  NgTemplateOutlet,
  NgComponentOutlet,
  CommonModule,
} from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-directives-pipes-demo',
  imports: [CommonModule, NgIf, NgForOf, NgSwitch, NgSwitchCase, NgSwitchDefault, NgClass, NgStyle, NgTemplateOutlet, NgComponentOutlet],
  template: `
    <h3>Directives demo</h3>

    <h4>NgIf example</h4>
    <p *ngIf="showIf">NgIf is active</p>
    <button (click)="toggleIf()">Toggle NgIf</button>

    <h4>NgFor example</h4>
    <ul>
      <li *ngFor="let n of nums">Item {{ n }}</li>
    </ul>

    <h4>NgClass / NgStyle</h4>
    <div [ngClass]="{ highlighted: isHighlighted }" [ngStyle]="{ color: color }">Styled box</div>
    <button (click)="toggle()">Toggle highlight</button>

    <h4>NgSwitch</h4>
    <div [ngSwitch]="mode">
      <p *ngSwitchCase="'one'">Mode One</p>
      <p *ngSwitchCase="'two'">Mode Two</p>
      <p *ngSwitchDefault>Default Mode</p>
    </div>
    <button (click)="cycle()">Cycle Mode ({{ mode }})</button>

    <h4>NgTemplateOutlet</h4>
    <ng-template #tpl let-name>
      <p>Template says: Hello {{ name }}</p>
    </ng-template>
    <ng-container [ngTemplateOutlet]="tpl" [ngTemplateOutletContext]="{ $implicit: 'visitor' }"></ng-container>

    <h4>NgComponentOutlet (dynamic component)</h4>
    <ng-container *ngComponentOutlet="dynamicComp"></ng-container>

    <style>
      .highlighted { background: #fffae6; padding: 6px; border-radius: 4px; }
    </style>
  `,
})
export class DirectivesPipesDemoComponent {
  isHighlighted = false;
  color = 'teal';
  mode: 'one' | 'two' | 'other' = 'one';
  dynamicComp = SimpleDynamicComponent;
  showIf = true;
  nums = [1, 2, 3];

  toggle() { this.isHighlighted = !this.isHighlighted; }
  cycle() { this.mode = this.mode === 'one' ? 'two' : this.mode === 'two' ? 'other' : 'one'; }
  toggleIf() { this.showIf = !this.showIf; }
}

// A tiny dynamic component used by NgComponentOutlet
@Component({
  standalone: true,
  selector: 'app-simple-dynamic',
  template: `<p style="color: purple">I am a dynamic component (NgComponentOutlet)</p>`,
})
export class SimpleDynamicComponent {}
