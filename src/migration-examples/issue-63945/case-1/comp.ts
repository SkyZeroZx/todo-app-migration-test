import {Component} from '@angular/core';

import { OtherComponent } from './other';

@Component({
  selector: 'my-comp',
  template: '<other></other>',
  imports: [OtherComponent]
})
export class MyComp {}
