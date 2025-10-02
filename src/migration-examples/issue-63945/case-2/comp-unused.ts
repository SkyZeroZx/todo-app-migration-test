import {Component} from '@angular/core';
import { ButtonModule } from './button.module';
import { CardModule } from './card.module';


@Component({
  selector: 'my-comp',
  template: '<div>Content without unused directive</div>',
  imports: [CardModule, ButtonModule],
})
export class MyComp {}
