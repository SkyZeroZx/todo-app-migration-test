import { Component, Inject } from '@angular/core';
import { CommonModule,   } from '@angular/common';
import { COMPLEX_CONFIG, MULTI_MARKER } from './tokens';
import { FeatureAComponent } from './feature-a.component';
import { FeatureBComponent } from './feature-b.component';

@Component({
  selector: 'lc-shell',
  standalone: true,
  imports: [CommonModule,  FeatureAComponent, FeatureBComponent],
  template: `
    <div>
      <h2>Legacy Complex Shell ({{config?.name}})</h2>
      <div *ngFor="let m of markers">marker: {{m}}</div>
      <lc-feature-a></lc-feature-a>
      <lc-feature-b></lc-feature-b>
    </div>
  `,
})
export class LegacyShellComponent {
  constructor(@Inject(COMPLEX_CONFIG) public config: any, @Inject(MULTI_MARKER) public markers: string[]) {}
}
