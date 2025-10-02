import { Component } from '@angular/core';

import { ButtonModule } from './button.module';
import { CardModule } from './card.module';

@Component({
  selector: 'my-comp',
  template: '<my-button></my-button><my-card></my-card>',
  imports: [ButtonModule, CardModule],
})
export class MyComp {}
