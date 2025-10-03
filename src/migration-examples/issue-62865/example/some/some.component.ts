import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-some',
  template: "inside some component: <app-icon></app-icon>",
  imports: [SharedModule],
})
export class SomeComponent {}
