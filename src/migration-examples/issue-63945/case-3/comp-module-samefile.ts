import { Component } from '@angular/core';
import { MixedModule } from './mixed.module';

@Component({
  selector: 'my-comp',
  template: '<other></other>',
  imports: [MixedModule],
})
export class MyComp {}
