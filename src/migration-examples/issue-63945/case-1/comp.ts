import {Component} from '@angular/core';
import { OtherModule } from './other.module';

 
@Component({
  selector: 'my-comp',
  template: '<other></other>',
  imports: [OtherModule]
})
export class MyComp {}
