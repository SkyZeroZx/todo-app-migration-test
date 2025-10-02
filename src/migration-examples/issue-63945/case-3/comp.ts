import {Component} from '@angular/core';

import { UsedComponent } from './declarations';

@Component({
  selector: 'my-comp',
  template: '<used-comp></used-comp>',
  imports: [UsedComponent]
})
export class MyComp {}
