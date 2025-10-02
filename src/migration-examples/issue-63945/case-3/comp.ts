import { Component } from '@angular/core';

import { MixedModule } from './mixed.module';

@Component({
  selector: 'my-comp',
  template: '<used-comp></used-comp>',
  imports: [MixedModule],
})
export class MyComp {}
